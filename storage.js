/* ===========================
   Storage Keys
=========================== */


const VAULT_KEY = "BUDDHIKOSH_VAULT";

function loadVault() {
  const stored = localStorage.getItem(VAULT_KEY);

  if (!stored) {
    return null;
  }

  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to parse vault data", e);
    return null;
  }
}

function saveVault(vault) {
  localStorage.setItem(VAULT_KEY, JSON.stringify(vault));
}

function initializeVault(seedData) {
  const existingVault = loadVault();

  if (existingVault && Array.isArray(existingVault)) {
    return existingVault;
  }

  saveVault(seedData);
  return seedData;
}

window.StorageEngine = {
  loadVault,
  saveVault,
  initializeVault
};