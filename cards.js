/* =========================================

   CARD RENDERER & NAVIGATION CONTROLLER

========================================= */



/* -----------------------------------------

   SECTION REFERENCES

----------------------------------------- */



const todaySection = document.querySelector(".today-section");

const discoverSection = document.getElementById("discover-section");

const savedSection = document.getElementById("saved-section");

const vaultSection = document.getElementById("vault-section");

const searchSection = document.getElementById("search-section");



const searchInput = document.getElementById("search-input");

const vaultBackBtn = document.getElementById("vault-back-btn");



let lastActiveSection = todaySection;





/* =========================================

   SECTION VISIBILITY HANDLER

========================================= */



function showOnly(section) {

  if (section !== searchSection) {

    lastActiveSection = section;

  }



  [

    todaySection,

    discoverSection,

    savedSection,

    vaultSection,

    searchSection

  ].forEach(sec => sec.classList.add("hidden"));



  section.classList.remove("hidden");

}





/* =========================================

   KNOWLEDGE CARD FACTORY

========================================= */



function createKnowledgeCard(item) {

  const article = document.createElement("article");

  article.className = "knowledge-card";



  const header = document.createElement("div");

  header.className = "card-header";



  const category = document.createElement("span");

  category.className = `card-category ${item.category.toLowerCase()}`;

  category.textContent = item.category;



  const title = document.createElement("h3");

  title.className = "card-title";

  title.textContent = item.title;



  const essence = document.createElement("p");

  essence.className = "card-essence";

  essence.textContent = item.essence;



  header.appendChild(category);

  article.append(header, title, essence);



  article.addEventListener("click", () => openModal(item));



  return article;

}





/* =========================================

   DAILY / DISCOVER / SAVED RENDERERS

========================================= */



function renderDailyCards() {

  const container = document.getElementById("daily-cards");

  if (!container) return;



  container.innerHTML = "";



  DailyEngine.getDailyKnowledge().forEach(item =>

    container.appendChild(createKnowledgeCard(item))

  );



  updateStreak();

  renderStreakUI();

}



document.addEventListener("DOMContentLoaded", renderDailyCards);





function renderDiscoverCards() {

  const container = document.getElementById("discover-cards");

  if (!container) return;



  container.innerHTML = "";



  shuffleArray(Vault.getAllItems()).forEach(item =>

    container.appendChild(createKnowledgeCard(item))

  );

}





function renderSavedCards() {

  const container = document.getElementById("saved-cards");

  if (!container) return;



  const savedItems = Vault.getSavedItems();

  container.innerHTML = "";



  if (savedItems.length === 0) {

    container.innerHTML =

      "<p style='color: var(--text-muted)'>No saved knowledge yet.</p>";

    return;

  }



  savedItems.forEach(item =>

    container.appendChild(createKnowledgeCard(item))

  );

}





/* =========================================

   NAVIGATION HANDLING

========================================= */



document.querySelectorAll(".nav-item").forEach((btn, index) => {

  btn.addEventListener("click", () => {

    document.querySelectorAll(".nav-item")

      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");



    if (searchInput) searchInput.value = "";



    if (index === 0) showOnly(todaySection);

    if (index === 1) {

      showOnly(discoverSection);

      renderDiscoverCards();

    }

    if (index === 2) {

      showOnly(savedSection);

      renderSavedCards();

    }

    if (index === 3) {

      showOnly(vaultSection);

      showVaultCategories();

      renderVaultCategories();

    }

  });

});





/* =========================================

   VAULT LOGIC

========================================= */



function renderVaultCategories() {

  const container = document.getElementById("vault-categories");

  if (!container) return;



  container.innerHTML = "";



  const categories = [

    

  { key: "METAPHYSICS", label: "Metaphysics" },

  { key: "EPISTEMOLOGY", label: "Epistemology" },

  { key: "MIND", label: "Mind" },

  { key: "ETHICS", label: "Ethics" },

  { key: "LOGIC", label: "Logic" },

  { key: "EASTERN_PHILOSOPHY", label: "Eastern Philosophy" },

  { key: "EXISTENTIALISM", label: "Existentialism" },

  { key: "PSYCHOLOGY", label: "Psychology" },

  { key: "NEUROSCIENCE", label: "Neuroscience" },

  { key: "INTELLIGENCE", label: "Intelligence" },



  { key: "MENTAL_MODELS", label: "Mental Models" },

  { key: "COGNITIVE_BIAS", label: "Cognitive Bias" },

  { key: "LAWS_AND_PRINCIPLES", label: "Laws And Principles" },



  { key: "THEORIES", label: "Theories" },

  { key: "PARADOXES", label: "Paradoxes" },

  { key: "THOUGHT_EXPERIMENTS", label: "Thought Experiments" },



  { key: "POWER", label: "Power" },

  { key: "SYMBOLISM", label: "Symbolism" },

  { key: "SPIRITUAL", label: "Spiritual" },



  { key: "UNSOLVED_MYSTRIES", label: "Unsolved Mysteries" },

  

  ];



  categories.forEach(cat => {

    const div = document.createElement("div");

    div.className = "vault-category";

    div.textContent = cat.label;



    div.addEventListener("click", () =>

      renderVaultItems(cat.key)

    );



    container.appendChild(div);

  });

}





function renderVaultItems(category) {

  const itemsContainer = document.getElementById("vault-items");

  const categoriesContainer = document.getElementById("vault-categories");



  itemsContainer.innerHTML = "";

  categoriesContainer.classList.add("hidden");

  itemsContainer.classList.remove("hidden");

  vaultBackBtn.classList.remove("hidden");



  Vault.getItemsByCategory(category).forEach(item =>

    itemsContainer.appendChild(createKnowledgeCard(item))

  );

}





function showVaultCategories() {

  document.getElementById("vault-items").classList.add("hidden");

  document.getElementById("vault-categories").classList.remove("hidden");

  vaultBackBtn.classList.add("hidden");

}



vaultBackBtn.addEventListener("click", showVaultCategories);





/* =========================================

   SEARCH SYSTEM

========================================= */



function renderSearchResults(query) {

  if (!query) {

    showOnly(lastActiveSection);

    return;

  }



  showOnly(searchSection);



  const container = document.getElementById("search-results");

  container.innerHTML = "";



  const lower = query.toLowerCase();

  const results = Vault.getAllItems().filter(item =>

    item.title.toLowerCase().includes(lower) ||

    item.essence.toLowerCase().includes(lower) ||

    item.tags.some(tag => tag.toLowerCase().includes(lower))

  );



  if (!results.length) {

    container.innerHTML =

      "<p style='color: var(--text-muted)'>No results found.</p>";

    return;

  }



  results.forEach(item =>

    container.appendChild(createKnowledgeCard(item))

  );

}



if (searchSection) searchSection.classList.add("hidden");

if (searchInput) {

  searchInput.value = "";

  searchInput.addEventListener("input", e =>

    renderSearchResults(e.target.value.trim())

  );

}





/* =========================================

   UTILITIES

========================================= */



function shuffleArray(arr) {

  return [...arr]

    .map(item => ({ item, sort: Math.random() }))

    .sort((a, b) => a.sort - b.sort)

    .map(({ item }) => item);

}

document.getElementByClassName("icon-button")?.addEventListener("click", () => {
  Object.keys(localStorage).forEach(key => {
    if (!key.startsWith("BUDDHIKOSH_USER")) {
      localStorage.removeItem(key);
       alert("Data Updated.")
    }
  });

  location.reload();
});




