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
      req.onupgradeneeded = e => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains("custom_tags")) db.createObjectStore("custom_tags", { keyPath: "en" });
        if (!db.objectStoreNames.contains("presets")) db.createObjectStore("presets", { keyPath: "id" });
      };
      req.onsuccess = e => { this.db = e.target.result; resolve(this.db); };
      req.onerror = e => reject(e);
    });
  }
  async addCustomTag(categoryIndex, englishTag, slot = "Main", hint = "Custom tag") {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("custom_tags", "readwrite");
      const record = { categoryIndex, en: englishTag.trim(), slot, hint: hint.trim(), custom: true };
      const req = tx.objectStore("custom_tags").put(record);
      req.onsuccess = () => resolve(record);
      req.onerror = () => reject(req.error);
    });
  }
  async getAllCustomTags() {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const req = db.transaction("custom_tags", "readonly").objectStore("custom_tags").getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }
  async savePreset(name, tagsArray, mode = "flux") {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction("presets", "readwrite");
      const preset = {
        id: "preset_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        name: name.trim() || ("Preset " + new Date().toLocaleDateString()),
        mode, tags: tagsArray, updatedAt: Date.now()
      };
      const req = tx.objectStore("presets").put(preset);
      req.onsuccess = () => resolve(preset);
      req.onerror = () => reject(req.error);
    });
  }
  async getPresets() {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const req = db.transaction("presets", "readonly").objectStore("presets").getAll();
      req.onsuccess = () => resolve((req.result || []).sort((a, b) => b.updatedAt - a.updatedAt));
      req.onerror = () => reject(req.error);
    });
  }
}
window.kenzenStorage = new KenzenStorage();
