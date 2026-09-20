/* ================================================================
   cloudStorage.js - Firestore-only sync (no Firebase Storage needed)
   ================================================================
   Images are compressed client-side with Canvas before being
   stored as base64 strings directly in Firestore documents.
   Each slide is its own Firestore document to stay well under
   the 1 MB per-document limit (free Spark plan compatible).
   Real-time listeners (onSnapshot) push changes to every connected
   device the moment anything is saved.
   ================================================================ */

import { db } from "./firebase";
import {
  collection,
  doc,
  setDoc,
  onSnapshot,
  writeBatch,
  getDocs,
} from "firebase/firestore";

const SLIDES_COL = "slides";

/* ---- image compression ---- */

/**
 * Compresses a base64 image using Canvas API.
 * - Resizes to max 1280px wide
 * - Re-encodes as JPEG at 72% quality
 * - Skips videos (cannot compress in browser)
 * - Skips already-remote URLs (https://)
 */
async function compressMedia(dataUrl, mediaType) {
  if (!dataUrl || !dataUrl.startsWith("data:") || mediaType === "video") {
    return dataUrl || "";
  }
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const MAX_W = 1280;
      const ratio = img.width > MAX_W ? MAX_W / img.width : 1;
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * ratio);
      canvas.height = Math.round(img.height * ratio);
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.72));
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

/* ---- helpers ---- */

function isBase64(str) {
  return typeof str === "string" && str.startsWith("data:");
}

/**
 * Normalizes a raw Firestore slide doc to the shape the rest of the
 * app expects (media, image, mediaMobile fields populated).
 */
function normalizeSlide(data) {
  return {
    ...data,
    media: data.media || data.image || "",
    image: data.media || data.image || "",
    mediaMobile: data.mediaMobile || "",
    mediaType: data.mediaType || "image",
    mediaMobileType: data.mediaMobileType || "image",
    desktopWidth: data.desktopWidth || "",
    desktopHeight: data.desktopHeight || "",
    mobileWidth: data.mobileWidth || "",
    mobileHeight: data.mobileHeight || "",
    active: data.active !== false,
  };
}

/* ================================================================
   SLIDES
   ================================================================ */

/**
 * Saves all slides to Firestore.
 * - Compresses new base64 images before storing
 * - Each slide is stored as its own document (avoids 1 MB limit)
 * - Removes Firestore documents for slides that were deleted
 * @param {Array} slides
 * @returns {Array} normalized slides ready for app use
 */
export async function saveCloudSlides(slides) {
  /* Compress any new base64 images */
  const processed = await Promise.all(
    slides.map(async (slide, i) => {
      const id = slide.id || ("slide_" + Date.now() + "_" + i);

      const media = isBase64(slide.media || slide.image || "")
        ? await compressMedia(slide.media || slide.image || "", slide.mediaType)
        : (slide.media || slide.image || "");

      const mediaMobile = isBase64(slide.mediaMobile || "")
        ? await compressMedia(slide.mediaMobile, slide.mediaMobileType)
        : (slide.mediaMobile || "");

      return {
        id,
        title: slide.title || "",
        badge: slide.badge || "",
        badgeStyle: slide.badgeStyle || "gold",
        active: slide.active !== false,
        media,
        image: media,
        mediaType: slide.mediaType || "image",
        desktopWidth: slide.desktopWidth || "",
        desktopHeight: slide.desktopHeight || "",
        mediaMobile,
        mediaMobileType: slide.mediaMobileType || "image",
        mobileWidth: slide.mobileWidth || "",
        mobileHeight: slide.mobileHeight || "",
        order: i,
      };
    })
  );

  const batch = writeBatch(db);
  const colRef = collection(db, SLIDES_COL);

  /* Delete Firestore docs for slides that were removed */
  const existing = await getDocs(colRef);
  const newIds = new Set(processed.map((s) => s.id));
  existing.forEach((d) => {
    if (!newIds.has(d.id)) batch.delete(d.ref);
  });

  /* Upsert all current slides */
  processed.forEach((slide) => {
    batch.set(doc(colRef, slide.id), slide);
  });

  await batch.commit();
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
 * All devices will receive the update via subscribeToSettings.
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
 * Fires immediately with current data, then again on every change.
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