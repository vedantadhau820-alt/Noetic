/* =========================================
   STREAK ENGINE
   Tracks daily engagement streaks
========================================= */

const STREAK_KEY = "BUDDHIKOSH_STREAK";


/* =========================================
   DATE UTILITIES
========================================= */

/*
   Returns YYYY-MM-DD
*/

function getTodayDateString() {

  const now = new Date();

  const year = now.getFullYear();

  const month =
    String(now.getMonth() + 1).padStart(2, "0");

  const day =
    String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;

}


/*
   Returns yesterday date string
*/

function getYesterdayDateString() {

  const yesterday = new Date();

  yesterday.setDate(
    yesterday.getDate() - 1
  );

  const year = yesterday.getFullYear();

  const month =
    String(yesterday.getMonth() + 1)
      .padStart(2, "0");

  const day =
    String(yesterday.getDate())
      .padStart(2, "0");

  return `${year}-${month}-${day}`;

}


/* =========================================
   STORAGE ACCESS
========================================= */

/*
   Returns normalized streak object
*/

function getStreakData() {

  try {

    const raw =
      localStorage.getItem(STREAK_KEY);

    const parsed =
      raw ? JSON.parse(raw) : {};

    return {

      currentStreak:
        Number(parsed.currentStreak) || 0,

      longestStreak:
        Number(parsed.longestStreak) || 0,

      lastActiveDate:
        parsed.lastActiveDate || null,

      activeDays:
        typeof parsed.activeDays === "object" &&
        parsed.activeDays !== null
          ? parsed.activeDays
          : {}

    };

  } catch (error) {

    console.error(
      "Failed to load streak data:",
      error
    );

    return {

      currentStreak: 0,
      longestStreak: 0,
      lastActiveDate: null,
      activeDays: {}

    };

  }

}


/*
   Saves streak safely
*/

function saveStreakData(data) {

  try {

    localStorage.setItem(
      STREAK_KEY,
      JSON.stringify(data)
    );

    return true;

  } catch (error) {

    console.error(
      "Failed to save streak data:",
      error
    );

    return false;

  }

}


/* =========================================
   STREAK UPDATE LOGIC
========================================= */

/*
   Rules:
   - Only one count per day
   - Yesterday active → continue streak
   - Otherwise → reset to 1
*/

function updateStreak() {

  const today =
    getTodayDateString();

  const yesterday =
    getYesterdayDateString();

  const data =
    getStreakData();


  /* -------------------------------------
     ALREADY COUNTED TODAY
  ------------------------------------- */

  if (data.lastActiveDate === today) {
    return data;
  }


  /* -------------------------------------
     CONTINUE OR RESET
  ------------------------------------- */

  if (data.lastActiveDate === yesterday) {

    data.currentStreak += 1;

  } else {

    data.currentStreak = 1;

  }


  /* -------------------------------------
     UPDATE META
  ------------------------------------- */

  data.lastActiveDate = today;

  data.longestStreak = Math.max(
    data.longestStreak,
    data.currentStreak
  );


  /* -------------------------------------
     TRACK ACTIVE DAYS
  ------------------------------------- */

  data.activeDays[today] = true;


  /* -------------------------------------
     SAVE
  ------------------------------------- */

  saveStreakData(data);

  return data;

}


/* =========================================
   RESET STREAK
========================================= */

function resetStreak() {

  const freshData = {

    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: null,
    activeDays: {}

  };

  saveStreakData(freshData);

  return freshData;

}


/* =========================================
   UI RENDER
========================================= */

function renderStreakUI() {

  const el =
    document.getElementById("streak-count");

  if (!el) return;

  const { currentStreak } =
    getStreakData();


  /* -------------------------------------
     RENDER MESSAGE
  ------------------------------------- */

  if (currentStreak <= 0) {

    el.textContent =
      "Begin your thinking journey";

    return;

  }

  if (currentStreak === 1) {

    el.textContent =
      "Thinking started today";

    return;

  }

  el.textContent =
    `You’ve been showing up for ${currentStreak} days`;

}


/* =========================================
   PUBLIC API
========================================= */

window.StreakEngine = {

  getStreakData,
  saveStreakData,
  updateStreak,
  renderStreakUI,
  resetStreak

};


/* =========================================
   GLOBAL ACCESS
========================================= */

window.updateStreak = updateStreak;
window.renderStreakUI = renderStreakUI;
