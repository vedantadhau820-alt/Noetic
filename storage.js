/* =========================================
   STORAGE ENGINE
   Handles persistence of Vault data
========================================= */

const VAULT_KEY = "BUDDHIKOSH_VAULT";


/* -----------------------------------------
   LOAD
----------------------------------------- */

/*
  Loads vault data from localStorage.
  Returns:
  - Parsed array on success
  - null if missing or corrupted
*/
function loadVault() {
  const stored = localStorage.getItem(VAULT_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored);
  } catch (err) {
    console.error("Failed to parse vault data", err);
    return null;
  }
}


/* -----------------------------------------
   SAVE
----------------------------------------- */

/* Persists vault data to localStorage */
function saveVault(vault) {
  localStorage.setItem(VAULT_KEY, JSON.stringify(vault));
}


/* -----------------------------------------
   INITIALIZATION
----------------------------------------- */

/*
  Initializes vault on first run.
  - Uses existing stored data if valid
  - Otherwise seeds with provided data
*/
function initializeVault(seedData) {
  const existingVault = loadVault();

  if (Array.isArray(existingVault)) {
    return existingVault;
  }

  saveVault(seedData);
  return seedData;
}


/* -----------------------------------------
   PUBLIC API
----------------------------------------- */

window.StorageEngine = {
  loadVault,
  saveVault,
  initializeVault
};
