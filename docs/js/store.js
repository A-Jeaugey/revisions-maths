// Tiny pub/sub store with localStorage persistence for user data
const _state = {};
const _listeners = new Map();

export const Store = {
  get(key) { return _state[key]; },
  set(key, val) {
    _state[key] = val;
    (_listeners.get(key) || []).forEach(fn => fn(val));
  },
  on(key, fn) {
    if (!_listeners.has(key)) _listeners.set(key, []);
    _listeners.get(key).push(fn);
    return () => {
      const arr = _listeners.get(key) || [];
      const idx = arr.indexOf(fn);
      if (idx >= 0) arr.splice(idx, 1);
    };
  },
};

const LS_KEY = 'rm_user_v1';

const defaultUser = {
  completedChapters: {},   // slug -> bool
  pomoSessions: {},        // YYYY-MM-DD -> count
  quizScores: [],          // [{date, chapter, score, total}]
  studyTimeSec: 0,
  lastVisit: null,
  favorites: {},           // slug -> bool
  reflexProgress: {},      // chapter -> {seen: number}
};

export const User = {
  data: { ...defaultUser },
  load() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) this.data = { ...defaultUser, ...JSON.parse(raw) };
    } catch {}
    return this.data;
  },
  save() {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(this.data));
    } catch {}
  },
  toggleComplete(slug) {
    this.data.completedChapters[slug] = !this.data.completedChapters[slug];
    this.save();
  },
  isComplete(slug) {
    return !!this.data.completedChapters[slug];
  },
  recordQuiz(chapter, score, total) {
    this.data.quizScores.push({
      date: new Date().toISOString(),
      chapter, score, total,
    });
    if (this.data.quizScores.length > 50) {
      this.data.quizScores = this.data.quizScores.slice(-50);
    }
    this.save();
  },
  recordPomo() {
    const day = new Date().toISOString().slice(0,10);
    this.data.pomoSessions[day] = (this.data.pomoSessions[day] || 0) + 1;
    this.save();
  },
  pomoToday() {
    const day = new Date().toISOString().slice(0,10);
    return this.data.pomoSessions[day] || 0;
  },
  toggleFav(slug) {
    this.data.favorites[slug] = !this.data.favorites[slug];
    this.save();
  },
  isFav(slug) { return !!this.data.favorites[slug]; },
};

User.load();
