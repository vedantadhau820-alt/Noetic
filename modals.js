/* ===========================
   Knowledge Modal
=========================== */
let currentItemId = null;

const modal = document.getElementById("knowledge-modal");

/* ===========================
   Knowledge Modal
=========================== */

/* ---------- Reflection Renderer ---------- */
function renderReflections(item) {
  const list = document.getElementById("reflection-list");
  if (!list) return;

  list.innerHTML = "";

  if (!item.reflections || item.reflections.length === 0) {
    list.textContent = "No reflections yet.";
    return;
  }

  item.reflections.forEach(r => {
    const div = document.createElement("div");
    div.textContent = `• ${r.text}`;
    list.appendChild(div);
  });
}

/* ---------- Modal Logic ---------- */

function openModal(item) {
  currentItemId = item.id;

  modal.querySelector(".modal-category").textContent = item.category;
  modal.querySelector(".modal-title").textContent = item.title;
  modal.querySelector(".modal-explanation").textContent = item.explanation;

  modal.querySelector(".modal-when").textContent = item.whenToUse;
  modal.querySelector(".modal-warning").textContent = item.warning;

  const saveBtn = modal.querySelector(".save-button");
  saveBtn.textContent = item.saved ? "Saved" : "Save";

  document.getElementById("reflection-input").value = "";
  renderReflections(item);

  modal.classList.remove("hidden");
}



function closeModal() {
  modal.classList.add("hidden");
}

modal.querySelector(".modal-close").addEventListener("click", closeModal);

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

modal.querySelector(".save-button").addEventListener("click", () => {
  if (!currentItemId) return;

  Vault.toggleSaveItem(currentItemId);

  const updatedItem = Vault.getItemById(currentItemId);
  modal.querySelector(".save-button").textContent =
    updatedItem.saved ? "Saved" : "Save";
});

document
  .getElementById("save-reflection-btn")
  .addEventListener("click", () => {
    const input = document.getElementById("reflection-input");
    const text = input.value.trim();

    if (!text || !currentItemId) return;

    Vault.addReflection(currentItemId, text);

    const updatedItem = Vault.getItemById(currentItemId);
    renderReflections(updatedItem);

    input.value = "";
  });

//   saveBtn.addEventListener("click", () => {
//   if (!currentItemId) return;

//   Vault.toggleSaveItem(currentItemId);

//   // 🔁 refresh UI if Saved tab is active
//   const savedSection = document.getElementById("saved-section");
//   if (!savedSection.classList.contains("hidden")) {
//     renderSavedCards();
//   }

//   // also refresh Discover cards so saved state reflects
//   renderDiscoverCards();
// });


