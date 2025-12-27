/* =========================================
   STREAK ENGINE
   Tracks daily engagement streaks
========================================= */

const STREAK_KEY = "noetic_streak";


/* -----------------------------------------
   DATE UTILITIES
----------------------------------------- */

/* Returns YYYY-MM-DD */
function getTodayDateString() {
  return new Date().toISOString().split("T")[0];
}

/* Returns yesterday in YYYY-MM-DD */
function getYesterdayDateString() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}


/* -----------------------------------------
   STORAGE ACCESS
----------------------------------------- */

/*
  Returns normalized streak data shape.
  Guarantees safe defaults.
*/
function getStreakData() {
  const raw = JSON.parse(localStorage.getItem(STREAK_KEY)) || {};

  return {
    currentStreak: raw.currentStreak || 0,
    longestStreak: raw.longestStreak || 0,
    lastActiveDate: raw.lastActiveDate || null,
    activeDays: raw.activeDays || {}
  };
}

function saveStreakData(data) {
  localStorage.setItem(STREAK_KEY, JSON.stringify(data));
}


/* -----------------------------------------
   STREAK UPDATE LOGIC
----------------------------------------- */

/*
  Rules:
  - Only one count per day
  - If yesterday was active → streak continues
  - Otherwise → streak resets to 1
*/
function updateStreak() {
  const today = getTodayDateString();
  const yesterday = getYesterdayDateString();
  const data = getStreakData();

  /* Already counted today */
  if (data.lastActiveDate === today) {
    return data;
  }

  /* Continue or reset streak */
  if (data.lastActiveDate === yesterday) {
    data.currentStreak += 1;
  } else {
    data.currentStreak = 1;
  }

  data.lastActiveDate = today;
  data.longestStreak = Math.max(
    data.longestStreak,
    data.currentStreak
  );

  /* Track active calendar days */
  data.activeDays[today] = true;

  saveStreakData(data);
  return data;
}


/* -----------------------------------------
   UI RENDER
----------------------------------------- */

function renderStreakUI() {
  const el = document.getElementById("streak-count");
  if (!el) return;

  const { currentStreak } = getStreakData();

  el.textContent =
    currentStreak <= 1
      ? "Thinking started today"
      : `You’ve been showing up for ${currentStreak} days`;
}