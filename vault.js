/* =========================================
   VAULT ENGINE (RUNTIME)
   - Seed = truth
   - UserState = persistence
   - Vault = derived view
========================================= */

/* -----------------------------------------
   USER STATE
----------------------------------------- */

const USER_STATE_KEY = "BUDDHIKOSH_USER_STATE";

const defaultUserState = {
  savedIds: [],
  reflections: {}, // { itemId: [{ text, date }] }
  streak: null
};

function loadUserState() {
  const raw = localStorage.getItem(USER_STATE_KEY);
  if (!raw) return structuredClone(defaultUserState);

  try {
    return { ...defaultUserState, ...JSON.parse(raw) };
  } catch {
    return structuredClone(defaultUserState);
  }
}

function saveUserState(state) {
  localStorage.setItem(USER_STATE_KEY, JSON.stringify(state));
}

let userState = loadUserState();

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
  /* All items */
  getAllItems() {
    return buildRuntimeVault();
  },

  /* Filter by category */
  getItemsByCategory(category) {
    return buildRuntimeVault().filter(
      item => item.category === category
    );
  },

  /* Saved items */
  getSavedItems() {
    return buildRuntimeVault().filter(item => item.saved);
  },

  /* Toggle save */
  toggleSaveItem(id) {
    if (userState.savedIds.includes(id)) {
      userState.savedIds = userState.savedIds.filter(x => x !== id);
    } else {
      userState.savedIds.push(id);
    }
    saveUserState(userState);
  },

  /* Get single item */
  getItemById(id) {
    return buildRuntimeVault().find(item => item.id === id);
  },

  /* Add reflection */
  addReflection(itemId, text) {
    if (!userState.reflections[itemId]) {
      userState.reflections[itemId] = [];
    }

    userState.reflections[itemId].push({
      text,
      date: new Date().toISOString().split("T")[0]
    });

    saveUserState(userState);
  }
};
