/* =========================================
   STORAGE ENGINE
   Handles persistence of Vault data
========================================= */

const VAULT_KEY =
  "BUDDHIKOSH_VAULT";

const VAULT_VERSION_KEY =
  "BUDDHIKOSH_VAULT_VERSION";


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

    if (!stored) {
      return null;
    }

    const parsed =
      JSON.parse(stored);

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

    localStorage.removeItem(
      VAULT_VERSION_KEY
    );

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
   Initializes vault on startup

   Rules:
   - Uses stored vault if version matches
   - Otherwise refreshes from seed
*/

function initializeVault(seedData = []) {

  try {

    /* -----------------------------------
       VALIDATE SEED DATA
    ----------------------------------- */

    if (!Array.isArray(seedData)) {

      console.error(
        "Seed data must be an array"
      );

      return [];

    }


    /* -----------------------------------
       CHECK REQUIRED VERSION
    ----------------------------------- */

    if (
      typeof SEED_VERSION ===
      "undefined"
    ) {

      console.error(
        "SEED_VERSION is missing"
      );

      return seedData;

    }


    const currentVersion =
      localStorage.getItem(
        VAULT_VERSION_KEY
      );


    /* -----------------------------------
       SAME VERSION → USE STORED
    ----------------------------------- */

    if (
      currentVersion ===
      SEED_VERSION
    ) {

      const existingVault =
        loadVault();

      if (
        Array.isArray(existingVault) &&
        existingVault.length > 0
      ) {

        return existingVault;

      }

    }


    /* -----------------------------------
       NEW VERSION DETECTED
    ----------------------------------- */

    console.log(
      "Updating vault to version:",
      SEED_VERSION
    );


    saveVault(seedData);

    localStorage.setItem(
      VAULT_VERSION_KEY,
      SEED_VERSION
    );


    return seedData;

  } catch (error) {

    console.error(
      "Failed to initialize vault:",
      error
    );

    return [];

  }

}


/* =========================================
   VALIDATION HELPERS
========================================= */

/*
   Checks if vault exists
*/

function vaultExists() {

  return (
    localStorage.getItem(VAULT_KEY)
    !== null
  );

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
   FORCE REFRESH
========================================= */

/*
   Completely refreshes vault from seed
*/

function refreshVault(seedData = []) {

  clearVault();

  return initializeVault(seedData);

}


/* =========================================
   PUBLIC API
========================================= */

window.StorageEngine = {

  loadVault,

  saveVault,

  clearVault,

  initializeVault,

  refreshVault,

  vaultExists,

  getVaultSize

};
