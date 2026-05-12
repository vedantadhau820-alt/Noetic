/* =========================================
   KNOWLEDGE MODAL CONTROLLER
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

const readButton =
  modal?.querySelector(".read-button");

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

  if (!item || !modal) return;

  currentItemId =
    item.id || null;


  /* -------------------------------------
     CATEGORY
  ------------------------------------- */

  if (modalCategory) {

    modalCategory.textContent =
      item.category || "Unknown";

  }


  /* -------------------------------------
     TITLE
  ------------------------------------- */

  if (modalTitle) {

    modalTitle.textContent =
      item.title || "Untitled";

  }


  /* -------------------------------------
     EXPLANATION
  ------------------------------------- */

  if (modalExplanation) {

    modalExplanation.textContent =
      item.explanation || "";

  }


  /* -------------------------------------
     SAVE BUTTON
  ------------------------------------- */

  if (saveButton) {

    const isSaved =
      Boolean(item.saved);

    saveButton.textContent =
      isSaved
        ? "Saved"
        : "Save";

    saveButton.classList.toggle(
      "saved",
      isSaved
    );

  }


  /* -------------------------------------
     READ BUTTON
  ------------------------------------- */

  if (readButton) {

    const isRead =
      Boolean(item.read);

    readButton.textContent =
      isRead
        ? "Read"
        : "Mark Read";

    readButton.classList.toggle(
      "read",
      isRead
    );

  }


  /* -------------------------------------
     SHOW MODAL
  ------------------------------------- */

  modal.classList.remove(
    "hidden"
  );

  document.body.style.overflow =
    "hidden";

}


/* =========================================
   MODAL CLOSE
========================================= */

function closeModal() {

  if (!modal) return;

  modal.classList.add(
    "hidden"
  );

  document.body.style.overflow = "";

  currentItemId = null;

}


/* =========================================
   SAVE TOGGLE
========================================= */

function handleSaveToggle() {

  if (!currentItemId) return;


  if (
    typeof Vault === "undefined" ||
    typeof Vault.toggleSaveItem !==
      "function"
  ) {

    console.error(
      "Vault system unavailable"
    );

    return;

  }


  /* -------------------------------------
     TOGGLE SAVE
  ------------------------------------- */

  Vault.toggleSaveItem(
    currentItemId
  );


  /* -------------------------------------
     UPDATED ITEM
  ------------------------------------- */

  const updatedItem =
    Vault.getItemById?.(
      currentItemId
    );

  if (
    !updatedItem ||
    !saveButton
  ) {

    return;

  }


  /* -------------------------------------
     UPDATE BUTTON
  ------------------------------------- */

  const isSaved =
    Boolean(updatedItem.saved);

  saveButton.textContent =
    isSaved
      ? "Saved"
      : "Save";

  saveButton.classList.toggle(
    "saved",
    isSaved
  );

}


/* =========================================
   READ TOGGLE
========================================= */

function handleReadToggle() {

  if (!currentItemId) return;


  if (
    typeof Vault === "undefined" ||
    typeof Vault.toggleReadItem !==
      "function"
  ) {

    console.error(
      "Read system unavailable"
    );

    return;

  }


  /* -------------------------------------
     TOGGLE READ
  ------------------------------------- */

  Vault.toggleReadItem(
    currentItemId
  );


  /* -------------------------------------
     GET UPDATED ITEM
  ------------------------------------- */

  const updatedItem =
    Vault.getItemById(
      currentItemId
    );

  if (
    !updatedItem ||
    !readButton
  ) {

    return;

  }


  /* -------------------------------------
     UPDATE BUTTON
  ------------------------------------- */

  const isRead =
    Boolean(updatedItem.read);

  readButton.textContent =
    isRead
      ? "Read"
      : "Mark Read";

  readButton.classList.toggle(
    "read",
    isRead
  );


  /* -------------------------------------
     REFRESH UI
  ------------------------------------- */

  renderDailyCards?.();

  renderDiscoverCards?.();

  renderSavedCards?.();

}


/* =========================================
   EVENT LISTENERS
========================================= */


/* CLOSE BUTTON */

if (closeButton) {

  closeButton.addEventListener(
    "click",
    closeModal
  );

}


/* BACKDROP CLOSE */

if (modal) {

  modal.addEventListener(
    "click",
    e => {

      if (e.target === modal) {

        closeModal();

      }

    }
  );

}


/* SAVE BUTTON */

if (saveButton) {

  saveButton.addEventListener(
    "click",
    handleSaveToggle
  );

}


/* READ BUTTON */

if (readButton) {

  readButton.addEventListener(
    "click",
    handleReadToggle
  );

}


/* ESC KEY */

document.addEventListener(
  "keydown",
  e => {

    if (
      e.key === "Escape" &&
      modal &&
      !modal.classList.contains(
        "hidden"
      )
    ) {

      closeModal();

    }

  }
);


/* =========================================
   GLOBAL ACCESS
========================================= */

window.openModal =
  openModal;

window.closeModal =
  closeModal;
