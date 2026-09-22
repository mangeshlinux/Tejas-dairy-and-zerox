/* ================================================================
   cloudStorage.js - Firebase Storage + Firestore sync
   ================================================================
   Images and videos are uploaded directly to Firebase Storage at
   FULL ORIGINAL QUALITY — no compression, no size limits.
   Only the public download URL is stored in the Firestore document
   (tiny string, well within the 1 MB doc limit).

   Flow:
     Upload  → base64 → Storage blob → download URL → Firestore doc
     Display → Firestore doc → download URL → <img src={url} />
     Delete  → Firestore doc deleted → Storage file deleted

   Real-time listeners (onSnapshot) push URL changes to every
   connected device the moment anything is saved.
   ================================================================ */

import { db, storage } from "./firebase";
import {
  collection,
  doc,
  setDoc,
  onSnapshot,
  writeBatch,
  getDocs,
} from "firebase/firestore";
import {
  ref,
  uploadString,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const SLIDES_COL = "slides";
const STORAGE_FOLDER = "banners";

/* ================================================================
   STORAGE HELPERS
   ================================================================ */

/**
 * Converts a base64 dataURL to a Blob for upload.
 */
function dataURLtoBlob(dataUrl) {
  const [header, data] = dataUrl.split(",");
  const mime = header.match(/:(.*?);/)[1];
  const binary = atob(data);
  const arr = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) arr[i] = binary.charCodeAt(i);
  return new Blob([arr], { type: mime });
}

/**
 * Uploads a base64 dataURL to Firebase Storage at full original quality.
 * Returns the public HTTPS download URL.
 * If the value is already an https:// URL (already uploaded), returns it as-is.
 * @param {string} dataUrl - base64 data URL or existing https URL
 * @param {string} slideId - used to build the Storage path
 * @param {string} suffix  - 'desktop' or 'mobile'
 * @returns {Promise<string>} download URL
 */
async function uploadToStorage(dataUrl, slideId, suffix) {
  /* Already a remote URL — nothing to upload */
  if (!dataUrl || dataUrl.startsWith("https://") || dataUrl.startsWith("http://")) {
    return dataUrl || "";
  }
  /* Not a base64 string — skip */
  if (!dataUrl.startsWith("data:")) return "";

  const path = `${STORAGE_FOLDER}/${slideId}_${suffix}`;
  const storageRef = ref(storage, path);

  /* uploadString with 'data_url' format handles the base64 directly */
  await uploadString(storageRef, dataUrl, "data_url");
  const url = await getDownloadURL(storageRef);
  console.log(`[cloudStorage] uploaded ${suffix} → ${path} (${Math.round(dataUrl.length / 1024)} KB base64)`);
  return url;
}

/**
 * Attempts to delete a Storage file by path. Silently ignores errors
 * (file may already be deleted or never have been uploaded).
 * @param {string} slideId
 * @param {string} suffix - 'desktop' or 'mobile'
 */
async function deleteFromStorage(slideId, suffix) {
  try {
    const path = `${STORAGE_FOLDER}/${slideId}_${suffix}`;
    await deleteObject(ref(storage, path));
    console.log(`[cloudStorage] deleted Storage file: ${path}`);
  } catch (_) {
    /* ignore — file may not exist */
  }
}

/* ================================================================
   SLIDE NORMALIZER
   ================================================================ */

/**
 * Normalizes a raw Firestore slide doc to the shape the app expects.
 */
function normalizeSlide(data) {
  return {
    ...data,
    media: data.media || data.image || "",
    image: data.media || data.image || "",
    mediaMobile: data.mediaMobile || "",
    mediaType: data.mediaType || "image",
    mediaMobileType: data.mediaMobileType || "image",
    active: data.active !== false,
  };
}

/* ================================================================
   SLIDES
   ================================================================ */

/**
 * Saves all slides to Firestore + Firebase Storage.
 *
 * For each slide:
 *   - If media is a new base64 → upload to Storage → store URL in Firestore
 *   - If media is already an https URL → keep as-is (already uploaded)
 *   - Storage files for deleted slides are cleaned up automatically
 *
 * @param {Array} slides
 * @returns {Array} normalized slides with Storage URLs
 */
export async function saveCloudSlides(slides) {
  /* Upload any new base64 images/videos to Storage */
  const processed = await Promise.all(
    slides.map(async (slide, i) => {
      const id = slide.id || ("slide_" + Date.now() + "_" + i);

      /* Upload desktop media if it's a new base64 blob */
      const media = await uploadToStorage(
        slide.media || slide.image || "",
        id,
        "desktop"
      );

      /* Upload mobile media if it's a new base64 blob */
      const mediaMobile = await uploadToStorage(
        slide.mediaMobile || "",
        id,
        "mobile"
      );

      return {
        id,
        title: slide.title || "",
        badge: slide.badge || "",
        badgeStyle: slide.badgeStyle || "gold",
        active: slide.active !== false,
        media,               /* https:// Storage URL */
        image: media,        /* legacy alias */
        mediaType: slide.mediaType || "image",
        mediaMobile,         /* https:// Storage URL or '' */
        mediaMobileType: slide.mediaMobileType || "image",
        order: i,
      };
    })
  );

  const batch = writeBatch(db);
  const colRef = collection(db, SLIDES_COL);

  /* Find and delete Firestore docs (+ Storage files) for removed slides */
  const existing = await getDocs(colRef);
  const newIds = new Set(processed.map((s) => s.id));
  const deletePromises = [];

  existing.forEach((d) => {
    if (!newIds.has(d.id)) {
      batch.delete(d.ref);
      /* Also clean up Storage files */
      deletePromises.push(deleteFromStorage(d.id, "desktop"));
      deletePromises.push(deleteFromStorage(d.id, "mobile"));
    }
  });

  /* Upsert all current slides */
  processed.forEach((slide) => {
    batch.set(doc(colRef, slide.id), slide);
  });

  await Promise.all([batch.commit(), ...deletePromises]);
  return processed.map(normalizeSlide);
}

/**
 * Real-time listener for slides.
 * Fires immediately with current data, then again on every change
 * from any connected device.
 * @param {Function} callback - receives sorted, normalized slides array
 * @returns {Function} unsubscribe function
 */
export function subscribeToSlides(callback) {
  return onSnapshot(
    collection(db, SLIDES_COL),
    (snapshot) => {
      const slides = snapshot.docs
        .map((d) => normalizeSlide(d.data()))
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      callback(slides);
    },
    (err) => console.error("[cloud] slides listener error:", err)
  );
}

/* ================================================================
   SETTINGS  (theme + sparkle density)
   ================================================================ */

/**
 * Saves theme and sparkle density to Firestore.
 */
export async function saveCloudSettings(theme, sparkleDensity) {
  try {
    await setDoc(doc(db, "config", "settings"), { theme, sparkleDensity });
  } catch (err) {
    console.error("[cloud] saveCloudSettings error:", err);
  }
}

/**
 * Real-time listener for settings.
 * @param {Function} callback - receives { theme, sparkleDensity }
 * @returns {Function} unsubscribe function
 */
export function subscribeToSettings(callback) {
  return onSnapshot(
    doc(db, "config", "settings"),
    (snap) => { if (snap.exists()) callback(snap.data()); },
    (err) => console.error("[cloud] settings listener error:", err)
  );
}