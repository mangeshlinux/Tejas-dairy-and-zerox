/* ============================================================
   db.js — IndexedDB wrapper for Tejesh Dairy & Zerox
   ============================================================
   Uses IndexedDB to store large operator-uploaded slides data
   (base64 images/videos) which exceed localStorage's 5MB limit.
   ============================================================ */

const DB_NAME = 'tejesh_db';
const DB_VERSION = 1;
const STORE_NAME = 'slides';

/** Open (or upgrade) the IndexedDB database */
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
}

/**
 * Save slides array to IndexedDB.
 * Stored as a single record with id='main'.
 * @param {Array} slides
 */
export async function saveSlides(slides) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put({ id: 'main', data: slides });
      tx.oncomplete = () => resolve();
      tx.onerror = (e) => reject(e.target.error);
    });
  } catch (err) {
    console.error('[db] Failed to save slides:', err);
  }
}

/**
 * Load slides array from IndexedDB.
 * Returns null if nothing is stored yet.
 * @returns {Promise<Array|null>}
 */
export async function loadSlides() {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.get('main');
      request.onsuccess = (e) => resolve(e.target.result?.data ?? null);
      request.onerror = (e) => reject(e.target.error);
    });
  } catch (err) {
    console.error('[db] Failed to load slides:', err);
    return null;
  }
}

/**
 * Clear all slides from IndexedDB.
 */
export async function clearSlides() {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.delete('main');
      tx.oncomplete = () => resolve();
      tx.onerror = (e) => reject(e.target.error);
    });
  } catch (err) {
    console.error('[db] Failed to clear slides:', err);
  }
}
