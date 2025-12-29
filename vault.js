const VAULT_STORAGE_KEY = "vaultData";

const PERSISTENT_KEYS = [
  "noetic_streak",
  "noetic_saved_items",
  "noetic_reflections",
  "noetic_seed_version"
];

let vaultData = [];

/* ---------- SAFE RESET ---------- */
function softResetAppData() {
  const keep = new Set(PERSISTENT_KEYS);

  Object.keys(localStorage).forEach(key => {
    if (!keep.has(key)) {
      localStorage.removeItem(key);
    }
  });
}

/* ---------- VERSION CHECK ---------- */
function checkSeedVersion() {
  const storedVersion = localStorage.getItem("noetic_seed_version");

  // first ever run → do nothing
  if (!storedVersion) {
    localStorage.setItem("noetic_seed_version", window.SEED_VERSION);
    return;
  }

  // seed updated → reset cache
  if (storedVersion !== window.SEED_VERSION) {
    softResetAppData();
    localStorage.setItem("noetic_seed_version", window.SEED_VERSION);
  }
}

/* ---------- INIT VAULT ---------- */
function initVault() {
  checkSeedVersion();

  const stored = localStorage.getItem(VAULT_STORAGE_KEY);
  if (stored) {
    try {
      vaultData = JSON.parse(stored);
      return;
    } catch (e) {
      console.warn("Vault parse failed, reseeding");
    }
  }

  if (!Array.isArray(window.SEED_VAULT)) {
    console.error("SEED_VAULT missing");
    vaultData = [];
    return;
  }

  vaultData = [...window.SEED_VAULT];
  saveVault();
}

/* ---------- PERSIST ---------- */
function saveVault() {
  localStorage.setItem(VAULT_STORAGE_KEY, JSON.stringify(vaultData));
}

/* ---------- VAULT API ---------- */
window.Vault = {
  getAllItems() {
    return [...vaultData];
  },

  getItemsByCategory(category) {
    return vaultData.filter(i => i.category === category);
  },

  getSavedItems() {
    return vaultData.filter(i => i.saved);
  },

  toggleSaveItem(id) {
    vaultData = vaultData.map(i =>
      i.id === id ? { ...i, saved: !i.saved } : i
    );
    saveVault();
  },

  addReflection(id, text) {
    vaultData = vaultData.map(i =>
      i.id === id
        ? {
            ...i,
            reflections: [...(i.reflections || []), { text }]
          }
        : i
    );
    saveVault();
  }
};

/* ---------- BOOT ---------- */
initVault();
  const stored = localStorage.getItem(VAULT_STORAGE_KEY);



  if (stored) {

    try {

      vaultData = JSON.parse(stored);

      return;

    } catch (err) {

      console.error("Failed to parse vault data", err);

    }

  }



  vaultData = [...window.SEED_VAULT];

  saveVault();

}





/* -----------------------------------------

   PERSISTENCE

----------------------------------------- */



function saveVault() {

  localStorage.setItem(

    VAULT_STORAGE_KEY,

    JSON.stringify(vaultData)

  );

}





/* -----------------------------------------

   VAULT API

----------------------------------------- */



const Vault = {

  /* Returns a safe copy of all items */

  getAllItems() {

    return [...vaultData];

  },



  /* Filters items by category */

  getItemsByCategory(category) {

    return vaultData.filter(

      item => item.category === category

    );

  },



  /* Returns all saved items */

  getSavedItems() {

    return vaultData.filter(item => item.saved);

  },



  /* Toggles saved state for an item */

  toggleSaveItem(id) {

    vaultData = vaultData.map(item =>

      item.id === id

        ? { ...item, saved: !item.saved }

        : item

    );



    saveVault();

  },



  /* Finds item by ID */

  getItemById(id) {

    return vaultData.find(item => item.id === id);

  },



  /* Adds a reflection to an item (non-mutating) */

  addReflection(itemId, text) {

    vaultData = vaultData.map(item => {

      if (item.id !== itemId) return item;



      const reflections = [

        ...(item.reflections || []),

        {

          id: Date.now().toString(),

          text,

          date: new Date().toISOString().split("T")[0]

        }

      ];



      return { ...item, reflections };

    });



    saveVault();

  }

};





/* -----------------------------------------

   BOOTSTRAP

----------------------------------------- */



initVault();

window.Vault = Vault;

