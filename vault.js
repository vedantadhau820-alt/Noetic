/* ===========================
   Vault Manager (SINGLE SOURCE OF TRUTH)
=========================== */

let vaultData = [];

// INIT ON APP LOAD
function initVault() {
  const stored = localStorage.getItem("vaultData");

  if (stored) {
    vaultData = JSON.parse(stored);
  } else {
    vaultData = [...window.SEED_VAULT];
    saveVault();
  }
}

function saveVault() {
  localStorage.setItem("vaultData", JSON.stringify(vaultData));
}

const Vault = {
  getAllItems() {
    return vaultData;
  },

  getItemsByCategory(cat) {
    return vaultData.filter(item => item.category === cat);
  },

  getSavedItems() {
    return vaultData.filter(item => item.saved);
  },

  toggleSaveItem(id) {
    vaultData = vaultData.map(item =>
      item.id === id ? { ...item, saved: !item.saved } : item
    );
    saveVault();
  },

  getItemById(id) {
    return vaultData.find(item => item.id === id);
  },

  addReflection(itemId, text) {
    vaultData = vaultData.map(item => {
      if (item.id === itemId) {
        const reflections = item.reflections || [];
        reflections.push({
          id: Date.now().toString(),
          text,
          date: new Date().toISOString().split("T")[0]
        });
        return { ...item, reflections };
      }
      return item;
    });
    saveVault();
  }
};

initVault();
window.Vault = Vault;