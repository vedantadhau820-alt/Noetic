/* =========================================
   VAULT ENGINE (RUNTIME)
   - Seed = truth
   - UserState = persistence
   - Vault = derived view
========================================= */

/* -----------------------------------------
   USER STATE
----------------------------------------- */


let userState = UserState.load();
/* -----------------------------------------
   RUNTIME VAULT BUILDER
----------------------------------------- */

function buildRuntimeVault() {
  if (!Array.isArray(window.SEED_VAULT)) {
    console.error("SEED_VAULT missing or invalid");
    return [];
  }

  return window.SEED_VAULT.map(item => ({
    ...item,
    saved: userState.savedIds.includes(item.id),
    reflections: userState.reflections[item.id] || []
  }));
}

/* -----------------------------------------
   VAULT API
----------------------------------------- */

window.Vault = {
  getAllItems() {
    return buildRuntimeVault();
  },

  getItemsByCategory(category) {
    return buildRuntimeVault().filter(
      item => item.category === category
    );
  },

  getSavedItems() {
    return buildRuntimeVault().filter(item => item.saved);
  },

  toggleSaveItem(id) {
    if (userState.savedIds.includes(id)) {
      userState.savedIds = userState.savedIds.filter(x => x !== id);
    } else {
      userState.savedIds.push(id);
    }
    UserState.save(userState);
  },

  getItemById(id) {
    return buildRuntimeVault().find(item => item.id === id);
  },

  addReflection(itemId, text) {
    if (!userState.reflections[itemId]) {
      userState.reflections[itemId] = [];
    }

    userState.reflections[itemId].push({
      text,
      date: new Date().toISOString().split("T")[0]
    });

    UserState.save(userState);
  }
};
