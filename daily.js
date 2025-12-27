/* =========================================
   DAILY KNOWLEDGE ENGINE
   - Picks a fixed set of knowledge per day
   - Ensures same content for the entire day
========================================= */

const DAILY_KEY = "BUDDHIKOSH_DAILY";

const DAILY_CATEGORIES = [
  "METAPHYSICS",
  "EPISTEMOLOGY",
  "MIND",
  "ETHICS",
  "LOGIC",
  "EASTERN_PHILOSOPHY",
  "EXISTENTIALISM",
];

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}


/* -----------------------------------------
   DATE HELPERS
----------------------------------------- */

/* Returns YYYY-MM-DD (local date) */
function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}


/* -----------------------------------------
   RANDOM UTILITIES
----------------------------------------- */

/* Picks a random item from a non-empty array */
function pickRandom(items) {
  if (!items || !items.length) return null;
  return items[Math.floor(Math.random() * items.length)];
}


/* -----------------------------------------
   DAILY GENERATION LOGIC
----------------------------------------- */
function generateDailyKnowledge() {
  const todayKey = getTodayKey();
  const stored = localStorage.getItem(DAILY_KEY);

  /* Return cached daily knowledge if still valid */
  if (stored) {
    const parsed = JSON.parse(stored);
    if (parsed.date === todayKey) {
      return parsed.items;
    }
  }

  /* 1️⃣ Find categories that actually have items */
  const validCategories = DAILY_CATEGORIES.filter(cat => {
    const items = Vault.getItemsByCategory(cat);
    return items && items.length > 0;
  });

  /* Safety check */
  if (validCategories.length === 0) return [];

  /* 2️⃣ Pick random 5 categories */
  const selectedCategories = shuffleArray(validCategories).slice(0, 5);

  /* 3️⃣ Pick one random item from each category */
  const dailyItems = selectedCategories
    .map(cat => pickRandom(Vault.getItemsByCategory(cat)))
    .filter(Boolean);

  /* 4️⃣ Persist for the rest of the day */
  localStorage.setItem(
    DAILY_KEY,
    JSON.stringify({
      date: todayKey,
      items: dailyItems
    })
  );

  return dailyItems;
}

function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

/* -----------------------------------------
   PUBLIC API
----------------------------------------- */

window.DailyEngine = {
  getDailyKnowledge: generateDailyKnowledge
};

