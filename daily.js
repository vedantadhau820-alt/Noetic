/* ===========================
   Daily Knowledge Engine
=========================== */

const DAILY_KEY = "BUDDHIKOSH_DAILY";

function getTodayKey() {
  const today = new Date();
  return today.toISOString().split("T")[0]; // YYYY-MM-DD
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateDailyKnowledge() {
  const todayKey = getTodayKey();
  const stored = localStorage.getItem(DAILY_KEY);

  if (stored) {
    const parsed = JSON.parse(stored);
    if (parsed.date === todayKey) {
      return parsed.items;
    }
  }

  const laws = Vault.getItemsByCategory("LAW");
  const models = Vault.getItemsByCategory("MODEL");
  const psychology = Vault.getItemsByCategory("PSYCHOLOGY");
  const philosophy = Vault.getItemsByCategory("PHILOSOPHY");
  const concepts = Vault.getItemsByCategory("CONCEPT");

  const dailyItems = [
    pickRandom(laws),
    pickRandom(models.length ? models : psychology),
    pickRandom(philosophy.length ? philosophy : concepts)
  ];

  localStorage.setItem(
    DAILY_KEY,
    JSON.stringify({
      date: todayKey,
      items: dailyItems
    })
  );

  return dailyItems;
}

window.DailyEngine = {
  getDailyKnowledge: generateDailyKnowledge
};
