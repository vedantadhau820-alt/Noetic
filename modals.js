/* =========================================
   KNOWLEDGE MODAL CONTROLLER
   Handles:
   - Open / close modal
   - Render selected knowledge
   - Save / unsave knowledge
========================================= */

let currentItemId = null;

const modal = document.getElementById("knowledge-modal");
const modalCategory = modal.querySelector(".modal-category");
const modalTitle = modal.querySelector(".modal-title");
const modalExplanation = modal.querySelector(".modal-explanation");
const saveButton = modal.querySelector(".save-button");
const closeButton = modal.querySelector(".modal-close");


/* =========================================
   MODAL OPEN / CLOSE
========================================= */

function openModal(item) {
  currentItemId = item.id;

  modalCategory.textContent = item.category;
  modalTitle.textContent = item.title;
  modalExplanation.textContent = item.explanation;

  saveButton.textContent = item.saved ? "Saved" : "Save";

  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  currentItemId = null;
}


/* =========================================
   EVENT LISTENERS
========================================= */

/* Close via X button */
closeButton.addEventListener("click", closeModal);

/* Close by clicking backdrop */
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

/* Save / Unsave knowledge */
saveButton.addEventListener("click", () => {
  if (!currentItemId) return;

  Vault.toggleSaveItem(currentItemId);

  const updatedItem = Vault.getItemById(currentItemId);
  saveButton.textContent = updatedItem.saved ? "Saved" : "Save";
});
