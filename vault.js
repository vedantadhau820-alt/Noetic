/* =========================================

   VAULT MANAGER

   Single Source of Truth for Knowledge Items

========================================= */



const VAULT_STORAGE_KEY = "vaultData";



let vaultData = [];





/* -----------------------------------------

   INITIALIZATION

----------------------------------------- */



/*

  Initializes vault state on app load.

  - Loads from localStorage if valid

  - Otherwise seeds from SEED_VAULT

*/

function initVault() {

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


