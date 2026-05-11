/* =========================================
   STORAGE ENGINE
   Handles persistence of Vault data
========================================= */

const VAULT_KEY = "BUDDHIKOSH_VAULT";


/* =========================================
   LOAD
========================================= */

/*
   Loads vault data from localStorage

   Returns:
   - Array on success
   - null on failure
*/

function loadVault() {

  try {

    const stored =
      localStorage.getItem(VAULT_KEY);

    if (!stored) return null;

    const parsed = JSON.parse(stored);

    if (!Array.isArray(parsed)) {

      console.warn(
        "Vault data is not an array"
      );

      return null;

    }

    return parsed;

  } catch (error) {

    console.error(
      "Failed to load vault data:",
      error
    );

    return null;

  }

}


/* =========================================
   SAVE
========================================= */

/*
   Saves vault safely
*/

function saveVault(vault = []) {

  try {

    if (!Array.isArray(vault)) {

      console.error(
        "Attempted to save invalid vault data"
      );

      return false;

    }

    localStorage.setItem(
      VAULT_KEY,
      JSON.stringify(vault)
    );

    return true;

  } catch (error) {

    console.error(
      "Failed to save vault:",
      error
    );

    return false;

  }

}


/* =========================================
   CLEAR
========================================= */

/*
   Removes vault from storage
*/

function clearVault() {

  try {

    localStorage.removeItem(VAULT_KEY);

    return true;

  } catch (error) {

    console.error(
      "Failed to clear vault:",
      error
    );

    return false;

  }

}


/* =========================================
   INITIALIZATION
========================================= */

/*
   Initializes vault on first run

   Rules:
   - Uses stored vault if valid
   - Otherwise seeds from seedData
*/

function initializeVault(seedData = []) {

  const currentVersion =
    localStorage.getItem(VAULT_VERSION_KEY);

  /* -------------------------------------
     VERSION MATCH → USE STORED
  ------------------------------------- */

  if (currentVersion === SEED_VERSION) {

    const existingVault = loadVault();

    if (
      Array.isArray(existingVault) &&
      existingVault.length > 0
    ) {

      return existingVault;

    }

  }


  /* -------------------------------------
     NEW VERSION → RESET VAULT
  ------------------------------------- */

  console.log(
    "New seed version detected. Updating vault..."
  );

  saveVault(seedData);

  localStorage.setItem(
    VAULT_VERSION_KEY,
    SEED_VERSION
  );

  return seedData;

}


/* =========================================
   VALIDATION HELPERS
========================================= */

/*
   Checks if vault exists
*/

function vaultExists() {

  return localStorage.getItem(VAULT_KEY) !== null;

}


/*
   Returns vault size
*/

function getVaultSize() {

  const vault = loadVault();

  return Array.isArray(vault)
    ? vault.length
    : 0;

}


/* =========================================
   PUBLIC API
========================================= */

window.StorageEngine = {

  loadVault,
  saveVault,
  clearVault,
  initializeVault,
  vaultExists,
  getVaultSize

};
