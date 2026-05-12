/* =========================================
   KNOWLEDGE MODAL CONTROLLER
   Handles:
   - Open / close modal
   - Render selected knowledge
   - Save / unsave knowledge
========================================= */


/* =========================================
   STATE
========================================= */

let currentItemId = null;


/* =========================================
   ELEMENT REFERENCES
========================================= */

const modal =
  document.getElementById("knowledge-modal");

const modalCategory =
  modal?.querySelector(".modal-category");

const modalTitle =
  modal?.querySelector(".modal-title");

const modalExplanation =
  modal?.querySelector(".modal-explanation");

const saveButton =
  modal?.querySelector(".save-button");

const closeButton =
  modal?.querySelector(".modal-close");


/* =========================================
   SAFETY CHECK
========================================= */

if (!modal) {
  console.error(
    "Knowledge modal not found in HTML"
  );
}


/* =========================================
   MODAL OPEN
========================================= */

function openModal(item) {

  Vault.markAsRead(item.id);

  if (!item || !modal) return;

  currentItemId = item.id || null;


  /* -------------------------------------
     RENDER CONTENT
  ------------------------------------- */

  if (modalCategory) {
    modalCategory.textContent =
      item.category || "Unknown";
  }

  if (modalTitle) {
    modalTitle.textContent =
      item.title || "Untitled";
  }

  if (modalExplanation) {
    modalExplanation.textContent =
      item.explanation || "";
  }


  /* -------------------------------------
     SAVE BUTTON STATE
  ------------------------------------- */

  if (saveButton) {

    const isSaved =
      Boolean(item.saved);

    saveButton.textContent =
      isSaved ? "Saved" : "Save";

    saveButton.classList.toggle(
      "saved",
      isSaved
    );

  }


  /* -------------------------------------
     SHOW MODAL
  ------------------------------------- */

  modal.classList.remove("hidden");

  document.body.style.overflow = "hidden";

}


/* =========================================
   MODAL CLOSE
========================================= */

function closeModal() {

  if (!modal) return;

  modal.classList.add("hidden");

  document.body.style.overflow = "";

  currentItemId = null;

}


/* =========================================
   SAVE / UNSAVE
========================================= */

function handleSaveToggle() {

  if (!currentItemId) return;

  if (
    typeof Vault === "undefined" ||
    typeof Vault.toggleSaveItem !== "function"
  ) {

    console.error(
      "Vault system unavailable"
    );

    return;

  }


  /* -------------------------------------
     TOGGLE SAVE
  ------------------------------------- */

  Vault.toggleSaveItem(currentItemId);


  /* -------------------------------------
     GET UPDATED ITEM
  ------------------------------------- */

  const updatedItem =
    Vault.getItemById?.(currentItemId);

  if (!updatedItem || !saveButton) return;


  /* -------------------------------------
     UPDATE BUTTON UI
  ------------------------------------- */

  const isSaved =
    Boolean(updatedItem.saved);

  saveButton.textContent =
    isSaved ? "Saved" : "Save";

  saveButton.classList.toggle(
    "saved",
    isSaved
  );

}


/* =========================================
   EVENT LISTENERS
========================================= */

/* Close via X button */

if (closeButton) {

  closeButton.addEventListener(
    "click",
    closeModal
  );

}


/* Close by clicking backdrop */

if (modal) {

  modal.addEventListener("click", e => {

    if (e.target === modal) {
      closeModal();
    }

  });

}


/* Save / Unsave */

if (saveButton) {

  saveButton.addEventListener(
    "click",
    handleSaveToggle
  );

}


/* =========================================
   ESC KEY SUPPORT
========================================= */

document.addEventListener("keydown", e => {

  if (
    e.key === "Escape" &&
    modal &&
    !modal.classList.contains("hidden")
  ) {

    closeModal();

  }

});


/* =========================================
   GLOBAL ACCESS
========================================= */

window.openModal = openModal;
window.closeModal = closeModal;
