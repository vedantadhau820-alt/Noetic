/* =========================================
   VAULT ENGINE
   - Seed = truth
   - UserState = persistence
   - Vault = derived runtime view
========================================= */


/* =========================================
   SAFETY CHECKS
========================================= */

if (typeof UserState === "undefined") {

  console.error(
    "UserState engine missing"
  );

}


/* =========================================
   LOAD USER STATE
========================================= */

let userState =

  typeof UserState !== "undefined"

    ? UserState.load()

    : {

        savedIds: [],

        readIds: [],

        reflections: {}

      };


/* =========================================
   HELPERS
========================================= */

function getSeedVault() {

  if (
    !Array.isArray(window.SEED_VAULT)
  ) {

    console.error(
      "SEED_VAULT missing or invalid"
    );

    return [];

  }

  return window.SEED_VAULT;

}


/*
   Returns fresh runtime vault
*/

function buildRuntimeVault() {

  const seedVault =
    getSeedVault();

  return seedVault.map(item => ({

    ...item,


    /* -----------------------------------
       USER STATE
    ----------------------------------- */

    saved:

      Array.isArray(
        userState.savedIds
      ) &&

      userState.savedIds.includes(
        item.id
      ),


    read:

      Array.isArray(
        userState.readIds
      ) &&

      userState.readIds.includes(
        item.id
      ),


    reflections:

      userState.reflections?.[
        item.id
      ] || []

  }));

}


/*
   Save current state
*/

function persistUserState() {

  if (

    typeof UserState !==
      "undefined" &&

    typeof UserState.save ===
      "function"

  ) {

    UserState.save(userState);

  }

}


/*
   Reload state from storage
*/

function refreshUserState() {

  if (

    typeof UserState !==
      "undefined" &&

    typeof UserState.load ===
      "function"

  ) {

    userState =
      UserState.load();

  }

}


/* =========================================
   VAULT API
========================================= */

const Vault = {


  /* =====================================
     GET ALL ITEMS
  ===================================== */

  getAllItems() {

    return buildRuntimeVault();

  },


  /* =====================================
     GET BY CATEGORY
  ===================================== */

  getItemsByCategory(category) {

    if (!category) return [];

    return buildRuntimeVault().filter(

      item =>
        item.category === category

    );

  },


  /* =====================================
     GET SAVED ITEMS
  ===================================== */

  getSavedItems() {

    return buildRuntimeVault().filter(

      item => item.saved

    );

  },


  /* =====================================
     GET READ ITEMS
  ===================================== */

  getReadItems() {

    return buildRuntimeVault().filter(

      item => item.read

    );

  },


  /* =====================================
     GET ITEM BY ID
  ===================================== */

  getItemById(id) {

    if (!id) return null;

    return (

      buildRuntimeVault().find(

        item => item.id === id

      ) || null

    );

  },


  /* =====================================
     TOGGLE SAVE
  ===================================== */

  toggleSaveItem(id) {

    if (!id) return false;


    if (
      userState.savedIds.includes(id)
    ) {

      userState.savedIds =

        userState.savedIds.filter(

          savedId =>
            savedId !== id

        );

    }

    else {

      userState.savedIds.push(id);

    }


    persistUserState();

    refreshUserState();

    return true;

  },


  /* =====================================
     TOGGLE READ
  ===================================== */

  toggleReadItem(id) {

    if (!id) return false;


    if (
      !Array.isArray(
        userState.readIds
      )
    ) {

      userState.readIds = [];

    }


    if (
      userState.readIds.includes(id)
    ) {

      userState.readIds =

        userState.readIds.filter(

          readId =>
            readId !== id

        );

    }

    else {

      userState.readIds.push(id);

    }


    persistUserState();

    refreshUserState();

    return true;

  },


  /* =====================================
     CHECK SAVED
  ===================================== */

  isSaved(id) {

    return (
      Array.isArray(
        userState.savedIds
      ) &&

      userState.savedIds.includes(id)
    );

  },


  /* =====================================
     CHECK READ
  ===================================== */

  isRead(id) {

    return (
      Array.isArray(
        userState.readIds
      ) &&

      userState.readIds.includes(id)
    );

  },


  /* =====================================
     ADD REFLECTION
  ===================================== */

  addReflection(itemId, text) {

    if (!itemId) return false;

    if (
      !text ||
      !text.trim()
    ) {

      return false;

    }


    if (
      !userState.reflections[itemId]
    ) {

      userState.reflections[
        itemId
      ] = [];

    }


    userState.reflections[
      itemId
    ].push({

      text: text.trim(),

      date:

        new Date()
          .toISOString()
          .split("T")[0]

    });


    persistUserState();

    refreshUserState();

    return true;

  },


  /* =====================================
     GET REFLECTIONS
  ===================================== */

  getReflections(itemId) {

    return (

      userState.reflections[
        itemId
      ] || []

    );

  },


  /* =====================================
     REMOVE REFLECTION
  ===================================== */

  removeReflection(
    itemId,
    index
  ) {

    const reflections =

      userState.reflections[
        itemId
      ];


    if (
      !Array.isArray(reflections)
    ) {

      return false;

    }


    reflections.splice(index, 1);

    persistUserState();

    refreshUserState();

    return true;

  },


  /* =====================================
     REFRESH STATE
  ===================================== */

  refresh() {

    refreshUserState();

  },


  /* =====================================
     RESET USER DATA
  ===================================== */

  resetUserData() {

    userState = {

      savedIds: [],

      readIds: [],

      reflections: {}

    };


    persistUserState();

    refreshUserState();

  }

};


/* =========================================
   GLOBAL EXPORT
========================================= */

window.Vault = Vault;
