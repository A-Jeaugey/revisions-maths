import { User } from '../store.js';

let totalSec = 25 * 60;
let remaining = totalSec;
let interval = null;
let mode = 'FOCUS';

export function initPomodoro() {
  const panel = document.getElementById('pomodoroPanel');
  const openBtn = document.getElementById('pomodoroBtn');
  const display = document.getElementById('pomoTime');
  const modeEl = document.getElementById('pomoMode');
  const startBtn = document.getElementById('pomoStart');
  const resetBtn = document.getElementById('pomoReset');
  const countEl = document.getElementById('pomoCount');

  openBtn?.addEventListener('click', () => panel.classList.toggle('open'));
  document.querySelectorAll('[data-close-panel]').forEach(b => {
    b.addEventListener('click', () => {
      const id = b.dataset.closePanel;
      document.getElementById(id)?.classList.remove('open');
    });
  });

  function refreshDisplay() {
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    if (display) display.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    if (modeEl) modeEl.textContent = mode;
    if (countEl) countEl.textContent = User.pomoToday();
  }

  function start() {
    if (interval) {
      clearInterval(interval);
      interval = null;
      startBtn.textContent = 'Reprendre';
      return;
    }
    startBtn.textContent = 'Pause';
    interval = setInterval(() => {
      remaining--;
      if (remaining <= 0) {
        clearInterval(interval);
        interval = null;
        if (mode === 'FOCUS') {
          User.recordPomo();
          window.RM.toast('Pomodoro terminé ! Pause bien méritée.', 'success');
          mode = 'PAUSE';
          totalSec = 5 * 60;
        } else {
          window.RM.toast('Pause terminée. Au boulot.', 'info');
          mode = 'FOCUS';
          totalSec = 25 * 60;
        }
        remaining = totalSec;
        startBtn.textContent = 'Démarrer';
        try {
          new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU').play().catch(()=>{});
        } catch {}
      }
      refreshDisplay();
    }, 1000);
  }

  function reset() {
    clearInterval(interval);
    interval = null;
    remaining = totalSec;
    startBtn.textContent = 'Démarrer';
    refreshDisplay();
  }

  startBtn?.addEventListener('click', start);
  resetBtn?.addEventListener('click', reset);

  document.querySelectorAll('[data-pomo]').forEach(b => {
    b.addEventListener('click', () => {
      const min = parseInt(b.dataset.pomo);
      mode = min === 5 ? 'PAUSE' : 'FOCUS';
      totalSec = min * 60;
      remaining = totalSec;
      reset();
    });
  });

  refreshDisplay();
}
