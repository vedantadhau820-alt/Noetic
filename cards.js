/* ===========================
   Card Renderer
=========================== */



const todaySection = document.querySelector(".today-section");
const discoverSection = document.getElementById("discover-section");
const savedSection = document.getElementById("saved-section");
const vaultSection = document.getElementById("vault-section");
const searchSection = document.getElementById("search-section");

const searchInput = document.getElementById("search-input");

let vaultRendered = false;
let lastActiveSection = todaySection;



function showOnly(section) {
    if (section !== searchSection) {
    lastActiveSection = section;
  }

    todaySection.classList.add("hidden");
    discoverSection.classList.add("hidden");
    savedSection.classList.add("hidden");
    vaultSection.classList.add("hidden");
    searchSection.classList.add("hidden");

    section.classList.remove("hidden");
}


function createKnowledgeCard(item) {
    const article = document.createElement("article");
    article.className = "knowledge-card";

    const header = document.createElement("div");
    header.className = "card-header";

    const category = document.createElement("span");
    category.className = `card-category ${item.category.toLowerCase()}`;
    category.textContent = item.category;

    header.appendChild(category);

    const title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = item.title;

    const essence = document.createElement("p");
    essence.className = "card-essence";
    essence.textContent = item.essence;

    article.appendChild(header);
    article.appendChild(title);
    article.appendChild(essence);

    article.addEventListener("click", () => {
        openModal(item);
    });

    return article;
}

function renderDailyCards() {
    const container = document.getElementById("daily-cards");
    if (!container) return;

    container.innerHTML = "";

    const dailyItems = DailyEngine.getDailyKnowledge();

    dailyItems.forEach(item => {
        const card = createKnowledgeCard(item);
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderDailyCards);

function renderSavedCards() {
    const container = document.getElementById("saved-cards");
    if (!container) return;

    container.innerHTML = "";

    const savedItems = Vault.getSavedItems();

    if (savedItems.length === 0) {
        container.innerHTML = "<p style='color: var(--text-muted)'>No saved knowledge yet.</p>";
        return;
    }

    savedItems.forEach(item => {
        const card = createKnowledgeCard(item);
        container.appendChild(card);
    });
}

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        navItems.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        if (searchInput) searchInput.value = "";

        // TODAY
        if (index === 0) {
            showOnly(todaySection);

        }

        // DISCOVER
        if (index === 1) {
            showOnly(discoverSection);
            renderDiscoverCards();
        }

        // SAVED
        if (index === 2) {
            showOnly(savedSection);
            renderSavedCards();
        }

        // VAULT (ONLY PLACE WHERE VAULT CAN APPEAR)
        // VAULT
        if (index === 3) {
            showOnly(vaultSection);
            document.getElementById("vault-items").classList.add("hidden");
            document.getElementById("vault-categories").classList.remove("hidden");
            renderVaultCategories();
            showVaultCategories();
        }

    });
});

function renderDiscoverCards() {
    const container = document.getElementById("discover-cards");
    if (!container) return;

    container.innerHTML = "";

    const items = Vault.getAllItems();

    items.forEach(item => {
        const card = createKnowledgeCard(item);
        container.appendChild(card);
    });
}

const vaultBackBtn = document.getElementById("vault-back-btn");

vaultBackBtn.addEventListener("click", showVaultCategories);



function renderVaultCategories() {
    const container = document.getElementById("vault-categories");
    if (!container) return;


    container.innerHTML = "";

    const categories = [
        { key: "LAW", label: "Laws & Principles" },
        { key: "MODEL", label: "Mental Models" },
        { key: "PSYCHOLOGY", label: "Psychology" },
        { key: "PHILOSOPHY", label: "Philosophy" },
        { key: "NEUROSCIENCE", label: "Neuroscience" },
        { key: "PARADOX", label: "Paradox" },
        { key: "THEORY", label: "Theory" },
       { key: "MYSTERY", label: "Mystery" },
       { key: "THOUGHT_EXPERIMENT", label: "Thought" },
       { key: "POWER", label: "Power" },
       { key: "SPIRITUAL", label: "Spiritual" },
       { key: "COGNITIVE_BIAS", label: "Cognitive Bias" },
    ];

    categories.forEach(cat => {
        const div = document.createElement("div");
        div.className = "vault-category";
        div.textContent = cat.label;

        div.addEventListener("click", () => {
            renderVaultItems(cat.key);
        });

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

    const items = Vault.getItemsByCategory(category);

    items.forEach(item => {
        const card = createKnowledgeCard(item);
        itemsContainer.appendChild(card);
    });
}

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

    if (results.length === 0) {
        container.innerHTML =
            "<p style='color: var(--text-muted)'>No results found.</p>";
        return;
    }

    results.forEach(item => {
        container.appendChild(createKnowledgeCard(item));
    });
}



if (searchInput) searchInput.value = "";
if (searchSection) searchSection.classList.add("hidden");


searchInput.addEventListener("input", e => {
    const query = e.target.value.trim();
    renderSearchResults(query);
});

// document.addEventListener("DOMContentLoaded", () => {
//   renderVaultCategories();
// });
function showVaultCategories() {
    const categoriesContainer = document.getElementById("vault-categories");
    const itemsContainer = document.getElementById("vault-items");
    vaultBackBtn.classList.add("hidden");

    itemsContainer.classList.add("hidden");
    categoriesContainer.classList.remove("hidden");
}



