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

  { key: "PHILOSOPHY", label: "Philosophy" },
  { key: "METAPHYSICS", label: "Metaphysics" },
  { key: "EPISTEMOLOGY", label: "Epistemology" },
  { key: "ONTOLOGY", label: "Ontology" },
  { key: "CONSCIOUSNESS", label: "Consciousness" },
  { key: "IDENTITY_SELF", label: "Identity & Self" },
  { key: "MEANING_PURPOSE", label: "Meaning & Purpose" },
  { key: "PSYCHOLOGY", label: "Psychology" },
  { key: "NEUROSCIENCE", label: "Neuroscience" },
  { key: "COGNITIVE_SCIENCE", label: "Cognitive Science" },
  { key: "EMOTIONS_INNER_LIFE", label: "Emotions & Inner Life" },
  { key: "PERSONALITY_TEMPERAMENT", label: "Personality & Temperament" },
  { key: "SUBCONSCIOUS_MIND", label: "Subconscious Mind" },
  { key: "MENTAL_MODELS", label: "Mental Models" },
  { key: "LOGIC_REASONING", label: "Logic & Reasoning" },
  { key: "CRITICAL_THINKING", label: "Critical Thinking" },
  { key: "COGNITIVE_BIASES", label: "Cognitive Biases" },
  { key: "PARADOXES", label: "Paradoxes" },
  { key: "THOUGHT_EXPERIMENTS", label: "Thought Experiments" },
  { key: "LAWS_PRINCIPLES", label: "Laws & Principles" },
  { key: "SYSTEMS_THINKING", label: "Systems Thinking" },
  { key: "CAUSE_EFFECT", label: "Cause & Effect" },
  { key: "CHAOS_COMPLEXITY", label: "Chaos & Complexity" },
  { key: "TIME_IMPERMANENCE", label: "Time & Impermanence" },
  { key: "SCIENTIFIC_THEORIES", label: "Scientific Theories" },
  { key: "PHILOSOPHY_OF_SCIENCE", label: "Philosophy of Science" },
  { key: "MATHEMATICS_OF_REALITY", label: "Mathematics of Reality" },
  { key: "PHYSICS_CONCEPTS", label: "Physics Concepts" },
  { key: "UNSOLVED_MYSTERIES", label: "Unsolved Mysteries" },
  { key: "COSMIC_QUESTIONS", label: "Cosmic Questions" },
  { key: "PARANORMAL_ANOMALIES", label: "Paranormal & Anomalies (Neutral)" },
  { key: "CONSPIRACY_THEORIES", label: "Conspiracy Theories (Analytical)" },
  { key: "SIMULATION_REALITY", label: "Simulation & Reality Hypotheses" },
  { key: "SYMBOLISM_ARCHETYPES", label: "Symbolism & Archetypes" },
  { key: "MYTHOLOGY_STORIES", label: "Mythology & Stories" },
  { key: "LANGUAGE_MEANING", label: "Language & Meaning" },
  { key: "CREATIVITY_IMAGINATION", label: "Creativity & Imagination" },
  { key: "WISDOM_TRADITIONS", label: "Wisdom Traditions (Non-Dogmatic)" },
  { key: "ETHICS_COMPASSION", label: "Ethics & Compassion" },
  { key: "SELF_UNDERSTANDING", label: "Self-Understanding & Acceptance" }
  

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

document.addEventListener("DOMContentLoaded", () => {
  const bell = document.getElementById("bell-icon");

  if (!bell) {
    console.warn("Bell icon not found");
    return;
  }

  bell.addEventListener("click", () => {
    Object.keys(localStorage).forEach(key => {
      if (!key.startsWith("BUDDHIKOSH_USER")) {
        localStorage.removeItem(key);
      }
    });

    alert("Knowledge updated.");
    location.reload();
  });
});

