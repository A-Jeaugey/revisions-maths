const KEY = 'rm_theme';

export function initTheme() {
  const saved = localStorage.getItem(KEY) || 'dark';
  apply(saved);
  document.getElementById('themeBtn')?.addEventListener('click', () => {
    const next = (document.documentElement.dataset.theme === 'dark') ? 'light' : 'dark';
    apply(next);
    localStorage.setItem(KEY, next);
  });
}

function apply(theme) {
  document.documentElement.dataset.theme = theme;
}
