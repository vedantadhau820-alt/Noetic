/* =========================================
   DAILY KNOWLEDGE ENGINE
   - Picks a fixed set of knowledge per day
   - Ensures same content for the entire day
========================================= */

const DAILY_KEY = "BUDDHIKOSH_DAILY";


/* =========================================
   DAILY CATEGORY POOL
========================================= */

const DAILY_CATEGORIES = [

  "METAPHYSICS",
  "EPISTEMOLOGY",
  "MIND",
  "ETHICS",
  "LOGIC",
  "EASTERN_PHILOSOPHY",
  "EXISTENTIALISM",

];


/* =========================================
   DATE HELPERS
========================================= */

/*
   Returns YYYY-MM-DD
*/
function getTodayKey() {

  const now = new Date();

  const year = now.getFullYear();

  const month =
    String(now.getMonth() + 1).padStart(2, "0");

  const day =
    String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;

}


/* =========================================
   RANDOM UTILITIES
========================================= */

/*
   Safe shuffle
*/
function shuffleArray(arr = []) {

  return [...arr]
    .map(item => ({
      item,
      sort: Math.random()
    }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);

}


/*
   Picks one random item
*/
function pickRandom(items = []) {

  if (!Array.isArray(items)) return null;

  if (items.length === 0) return null;

  return items[
    Math.floor(Math.random() * items.length)
  ];

}


/* =========================================
   STORAGE HELPERS
========================================= */

function loadStoredDaily() {

  try {

    const stored =
      localStorage.getItem(DAILY_KEY);

    if (!stored) return null;

    return JSON.parse(stored);

  } catch (error) {

    console.error(
      "Failed to load daily knowledge:",
      error
    );

    return null;

  }

}


function saveDailyKnowledge(items) {

  try {

    localStorage.setItem(
      DAILY_KEY,
      JSON.stringify({
        date: getTodayKey(),
        items
      })
    );

  } catch (error) {

    console.error(
      "Failed to save daily knowledge:",
      error
    );

  }

}


/* =========================================
   DAILY GENERATION LOGIC
========================================= */

function generateDailyKnowledge() {

  const todayKey = getTodayKey();

  const stored = loadStoredDaily();


  /* -------------------------------------
     RETURN CACHED DAILY KNOWLEDGE
  ------------------------------------- */

  if (
    stored &&
    stored.date === todayKey &&
    Array.isArray(stored.items)
  ) {

    return stored.items;

  }


  /* -------------------------------------
     VAULT SAFETY CHECK
  ------------------------------------- */

  if (
    typeof Vault === "undefined" ||
    typeof Vault.getItemsByCategory !== "function"
  ) {

    console.error(
      "Vault system unavailable"
    );

    return [];

  }


  /* -------------------------------------
     FIND VALID CATEGORIES
  ------------------------------------- */

  const validCategories =
    DAILY_CATEGORIES.filter(category => {

      const items =
        Vault.getItemsByCategory(category);

      return (
        Array.isArray(items) &&
        items.length > 0
      );

    });


  /* -------------------------------------
     NO CONTENT SAFETY
  ------------------------------------- */

  if (validCategories.length === 0) {

    console.warn(
      "No valid daily categories found"
    );

    return [];

  }


  /* -------------------------------------
     PICK RANDOM CATEGORIES
  ------------------------------------- */

  const selectedCategories =
    shuffleArray(validCategories)
      .slice(0, 5);


  /* -------------------------------------
     PICK RANDOM ITEMS
  ------------------------------------- */

  const dailyItems =
    selectedCategories
      .map(category => {

        const items =
          Vault.getItemsByCategory(category);

        return pickRandom(items);

      })
      .filter(Boolean);


  /* -------------------------------------
     SAVE DAILY STATE
  ------------------------------------- */

  saveDailyKnowledge(dailyItems);


  return dailyItems;

}


/* =========================================
   PUBLIC API
========================================= */

window.DailyEngine = {

  getDailyKnowledge: generateDailyKnowledge

};
