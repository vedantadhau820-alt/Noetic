const USER_STATE_KEY = "BUDDHIKOSH_USER_STATE";

const defaultUserState = {
  savedIds: [],
  reflections: {}, // { itemId: [{ text, date }] }
  streak: null
};

function loadUserState() {
  const raw = localStorage.getItem(USER_STATE_KEY);
  if (!raw) return structuredClone(defaultUserState);

  try {
    return { ...defaultUserState, ...JSON.parse(raw) };
  } catch {
    return structuredClone(defaultUserState);
  }
}

function saveUserState(state) {
  localStorage.setItem(USER_STATE_KEY, JSON.stringify(state));
}

window.UserState = {
  load: loadUserState,
  save: saveUserState
};
