/**
 * KENZEN IndexedDB Storage Engine (English Only)
 * Handles custom user tags, saved prompt presets, and undo/redo history.
 */
class KenzenStorage {
  constructor() {
    this.dbName = "KenzenPerchanceDB";
    this.version = 1;
    this.db = null;
  }

  async open() {
    if (this.db) return this.db;
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(this.dbName, this.version);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains("custom_tags")) {
          db.createObjectStore("custom_tags", { keyPath: "en" });
        }
        if (!db.objectStoreNames.contains("presets")) {
          db.createObjectStore("presets", { keyPath: "id" });
        }
      };
      req.onsuccess = (e) => {
        this.db = e.target.result;
        resolve(this.db);
      };
      req.onerror = (e) => reject(e);
    });
  }

  async addCustomTag(categoryIndex, englishTag, slot = "Main", hint = "Custom tag") {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("custom_tags", "readwrite");
      const store = tx.objectStore("custom_tags");
      const record = {
        categoryIndex: categoryIndex,
        en: englishTag.trim(),
        slot: slot,
        hint: hint.trim(),
        custom: true
      };
      const req = store.put(record);
      req.onsuccess = () => resolve(record);
      req.onerror = () => reject(req.error);
    });
  }

  async getAllCustomTags() {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("custom_tags", "readonly");
      const store = tx.objectStore("custom_tags");
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  async deleteCustomTag(englishTag) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("custom_tags", "readwrite");
      const store = tx.objectStore("custom_tags");
      const req = store.delete(englishTag);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  async savePreset(name, tagsArray, mode = "flux") {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("presets", "readwrite");
      const store = tx.objectStore("presets");
      const preset = {
        id: "preset_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name: name.trim() || ("Preset " + new Date().toLocaleDateString()),
        mode: mode,
        tags: tagsArray,
        updatedAt: Date.now()
      };
      const req = store.put(preset);
      req.onsuccess = () => resolve(preset);
      req.onerror = () => reject(req.error);
    });
  }

  async getPresets() {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("presets", "readonly");
      const store = tx.objectStore("presets");
      const req = store.getAll();
      req.onsuccess = () => {
        const sorted = (req.result || []).sort((a, b) => b.updatedAt - a.updatedAt);
        resolve(sorted);
      };
      req.onerror = () => reject(req.error);
    });
  }

  async deletePreset(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("presets", "readwrite");
      const store = tx.objectStore("presets");
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }
}
window.kenzenStorage = new KenzenStorage();
