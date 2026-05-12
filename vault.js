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




toggleReadItem(id) {

  if (!id) return false;


  if (
    !Array.isArray(userState.readIds)
  ) {

    userState.readIds = [];

  }


  if (
    userState.readIds.includes(id)
  ) {

    userState.readIds =
      userState.readIds.filter(
        readId => readId !== id
      );

  }

  else {

    userState.readIds.push(id);

  }


  persistUserState();

  refreshUserState();

  return true;

},
/* =========================================

   LOAD USER STATE

========================================= */



let userState =

  typeof UserState !== "undefined"

    ? UserState.load()

    : {

        savedIds: [],

        reflections: {}

      };





/* =========================================

   HELPERS

========================================= */



function getSeedVault() {



  if (!Array.isArray(window.SEED_VAULT)) {



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

      Array.isArray(userState.savedIds) &&

      userState.savedIds.includes(item.id),



   read:

      userState.readIds.includes(item.id),

 

    reflections:

      userState.reflections?.[item.id] || []



  }));



}





/*

   Save current state

*/



function persistUserState() {



  if (

    typeof UserState !== "undefined" &&

    typeof UserState.save === "function"

  ) {



    UserState.save(userState);



  }



}





/*

   Reload state from storage

*/



function refreshUserState() {



  if (

    typeof UserState !== "undefined" &&

    typeof UserState.load === "function"

  ) {



    userState = UserState.load();



  }



}





/* =========================================

   VAULT API

========================================= */



const Vault = {



   /* =====================================

   MARK AS READ

===================================== */



markAsRead(id) {



  if (!id) return false;



  if (!userState.readIds.includes(id)) {



    userState.readIds.push(id);



    persistUserState();



  }



  return true;



},





/* =====================================

   CHECK READ

===================================== */



isRead(id) {



  return userState.readIds.includes(id);



},





/* =====================================

   GET READ ITEMS

===================================== */



getReadItems() {



  return buildRuntimeVault().filter(

    item => userState.readIds.includes(item.id)

  );



},





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

      item => item.category === category

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





    /* -----------------------------------

       REMOVE SAVE

    ----------------------------------- */



    if (userState.savedIds.includes(id)) {



      userState.savedIds =

        userState.savedIds.filter(

          savedId => savedId !== id

        );



    }





    /* -----------------------------------

       ADD SAVE

    ----------------------------------- */



    else {



      userState.savedIds.push(id);



    }





    persistUserState();



    return true;



  },





  /* =====================================

     CHECK SAVED

  ===================================== */



  isSaved(id) {



    return userState.savedIds.includes(id);



  },





  /* =====================================

     ADD REFLECTION

  ===================================== */



  addReflection(itemId, text) {



    if (!itemId) return false;



    if (!text || !text.trim()) {

      return false;

    }





    /* -----------------------------------

       INIT ARRAY

    ----------------------------------- */



    if (!userState.reflections[itemId]) {



      userState.reflections[itemId] = [];



    }





    /* -----------------------------------

       PUSH REFLECTION

    ----------------------------------- */



    userState.reflections[itemId].push({



      text: text.trim(),



      date:

        new Date()

          .toISOString()

          .split("T")[0]



    });





    persistUserState();



    return true;



  },





  /* =====================================

     GET REFLECTIONS

  ===================================== */



  getReflections(itemId) {



    return (

      userState.reflections[itemId] || []

    );



  },





  /* =====================================

     REMOVE REFLECTION

  ===================================== */



  removeReflection(itemId, index) {



    const reflections =

      userState.reflections[itemId];



    if (!Array.isArray(reflections)) {

      return false;

    }



    reflections.splice(index, 1);



    persistUserState();



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

      reflections: {}



    };



    persistUserState();



  }



};





/* =========================================

   GLOBAL EXPORT

========================================= */



window.Vault = Vault;
