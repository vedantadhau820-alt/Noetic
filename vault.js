/* =========================================
   VAULT ENGINE
   - Seed = truth
   - UserState = persistence
   - Vault = derived runtime view
========================================= */


/* -----------------------------------------
   LOAD USER STATE
----------------------------------------- */

let userState = UserState.load();


/* -----------------------------------------
   BUILD RUNTIME VAULT
----------------------------------------- */

function buildRuntimeVault() {

  if (!Array.isArray(window.SEED_VAULT)) {
    console.error("SEED_VAULT missing or invalid");
    return [];
  }

  return window.SEED_VAULT.map(item => ({
    ...item,

    saved: userState.savedIds.includes(item.id),

    reflections:
      userState.reflections[item.id] || []
  }));
}


/* -----------------------------------------
   VAULT API
----------------------------------------- */

const Vault = {

  /* Get every knowledge item */
  getAllItems() {
    return buildRuntimeVault();
  },


  /* Get items by category */
  getItemsByCategory(category) {

    return buildRuntimeVault().filter(
      item => item.category === category
    );
  },


  /* Get saved items only */
  getSavedItems() {

    return buildRuntimeVault().filter(
      item => item.saved
    );
  },


  /* Get single item */
  getItemById(id) {

    return buildRuntimeVault().find(
      item => item.id === id
    );
  },


  /* Toggle save state */
  toggleSaveItem(id) {

    if (userState.savedIds.includes(id)) {

      userState.savedIds =
        userState.savedIds.filter(
          savedId => savedId !== id
        );

    } else {

      userState.savedIds.push(id);
    }

    UserState.save(userState);
  },


  /* Add reflection */
  addReflection(itemId, text) {

    if (!userState.reflections[itemId]) {
      userState.reflections[itemId] = [];
    }

    userState.reflections[itemId].push({
      text,
      date: new Date()
        .toISOString()
        .split("T")[0]
    });

    UserState.save(userState);
  },


  /* Reload runtime state */
  refresh() {
    userState = UserState.load();
  }

};


/* -----------------------------------------
   GLOBAL EXPORT
----------------------------------------- */

window.Vault = Vault;
