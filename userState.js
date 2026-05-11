/* =========================================
   USER STATE ENGINE
========================================= */

const USER_STATE_KEY =
  "BUDDHIKOSH_USER_STATE";


/* =========================================
   DEFAULT STATE
========================================= */

const defaultUserState = {

  savedIds: [],
  reflections: {},
  streak: null

};


/* =========================================
   SAFE CLONE
========================================= */

/*
   Prevents mutation of default object
*/

function createFreshState() {

  return {

    savedIds: [],

    reflections: {},

    streak: null

  };

}


/* =========================================
   VALIDATION
========================================= */

function normalizeUserState(data = {}) {

  return {

    savedIds:
      Array.isArray(data.savedIds)
        ? data.savedIds
        : [],

    reflections:
      typeof data.reflections === "object" &&
      data.reflections !== null
        ? data.reflections
        : {},

    streak:
      data.streak || null

  };

}


/* =========================================
   LOAD
========================================= */

function loadUserState() {

  try {

    const raw =
      localStorage.getItem(USER_STATE_KEY);

    if (!raw) {

      return createFreshState();

    }

    const parsed =
      JSON.parse(raw);

    return normalizeUserState(parsed);

  } catch (error) {

    console.error(
      "Failed to load user state:",
      error
    );

    return createFreshState();

  }

}


/* =========================================
   SAVE
========================================= */

function saveUserState(state) {

  try {

    const normalized =
      normalizeUserState(state);

    localStorage.setItem(
      USER_STATE_KEY,
      JSON.stringify(normalized)
    );

    return true;

  } catch (error) {

    console.error(
      "Failed to save user state:",
      error
    );

    return false;

  }

}


/* =========================================
   RESET
========================================= */

function resetUserState() {

  const fresh =
    createFreshState();

  saveUserState(fresh);

  return fresh;

}


/* =========================================
   HELPERS
========================================= */

function getSavedIds() {

  return loadUserState().savedIds;

}


function isSaved(id) {

  return getSavedIds().includes(id);

}


/* =========================================
   PUBLIC API
========================================= */

window.UserState = {

  load: loadUserState,

  save: saveUserState,

  reset: resetUserState,

  getSavedIds,

  isSaved,

  defaultState:
    createFreshState()

};
