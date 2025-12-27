/* =========================================
   DAILY KNOWLEDGE ENGINE
   - Picks a fixed set of knowledge per day
   - Ensures same content for the entire day
========================================= */

const DAILY_KEY = "BUDDHIKOSH_DAILY";


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

  /* Fetch category pools */
  const laws = Vault.getItemsByCategory("LAW");
  const models = Vault.getItemsByCategory("MODEL");
  const psychology = Vault.getItemsByCategory("PSYCHOLOGY");
  const philosophy = Vault.getItemsByCategory("PHILOSOPHY");
  const concepts = Vault.getItemsByCategory("CONCEPT");

  /*
    Daily mix logic:
    1. One law (core rule)
    2. One thinking model (fallback to psychology)
    3. One worldview idea (fallback to concepts)
  */
  const dailyItems = [
    pickRandom(laws),
    pickRandom(models.length ? models : psychology),
    pickRandom(philosophy.length ? philosophy : concepts)
  ].filter(Boolean); // Remove nulls safely

  /* Persist for the rest of the day */
  localStorage.setItem(
    DAILY_KEY,
    JSON.stringify({
      date: todayKey,
      items: dailyItems
    })
  );

  return dailyItems;
}


/* -----------------------------------------
   PUBLIC API
----------------------------------------- */

window.DailyEngine = {
  getDailyKnowledge: generateDailyKnowledge
};
