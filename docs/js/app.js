// =========================================================
// RÉV.maths — Main app entry
// =========================================================
import { initRouter, navigate } from './router.js';
import { renderHome } from './views/home.js';
import { renderFiche, renderFicheList } from './views/fiche.js';
import { renderReflexes } from './views/reflexes.js';
import { renderFormulary } from './views/formulary.js';
import { renderQuiz } from './views/quiz.js';
import { renderCatalogue } from './views/catalogue.js';
import { renderAnnales } from './views/annales.js';
import { renderNotFound } from './views/notfound.js';
import { initTheme } from './features/theme.js';
import { initCursor } from './features/cursor.js';
import { initPomodoro } from './features/pomodoro.js';
import { initSearch } from './features/search.js';
import { Store } from './store.js';
import { loadMeta, loadFiche } from './content.js';

const app = document.getElementById('app');

const routes = {
  '/': renderHome,
  '/fiches': renderFicheList,
  '/fiche/:slug': renderFiche,
  '/reflexes': renderReflexes,
  '/reflexes/:chapter': renderReflexes,
  '/formulaire': renderFormulary,
  '/formulaire/:chapter': renderFormulary,
  '/quiz': renderQuiz,
  '/quiz/:chapter': renderQuiz,
  '/catalogue': renderCatalogue,
  '/annales': renderAnnales,
};

async function bootstrap() {
  try {
    // Wait for KaTeX to be available (loaded via defer)
    await waitForKatex();

    // Load metadata (chapters, annales)
    const meta = await loadMeta();
    Store.set('meta', meta);

    // Init features
    initTheme();
    initCursor();
    initPomodoro();
    initSearch(meta);

    // Init router and render
    initRouter(routes, app, renderNotFound);

    // Configure marked
    if (window.marked) {
      marked.setOptions({
        breaks: false,
        gfm: true,
        headerIds: true,
        mangle: false,
      });
    }

    // Set active nav link based on route
    window.addEventListener('hashchange', updateActiveNav);
    window.addEventListener('routechange', updateActiveNav);
    updateActiveNav();

    // Mobile menu toggle
    document.getElementById('menuBtn')?.addEventListener('click', () => {
      document.querySelector('.nav-links')?.classList.toggle('open');
    });

  } catch (err) {
    console.error('Bootstrap failed', err);
    app.innerHTML = `<div class="empty"><h3>Erreur de chargement</h3><p>${err.message}</p></div>`;
  }
}

function waitForKatex() {
  return new Promise(resolve => {
    if (window.katex && window.renderMathInElement) return resolve();
    const i = setInterval(() => {
      if (window.katex && window.renderMathInElement) {
        clearInterval(i);
        resolve();
      }
    }, 50);
    // Don't block forever
    setTimeout(() => { clearInterval(i); resolve(); }, 4000);
  });
}

function updateActiveNav() {
  const hash = location.hash.slice(1) || '/';
  const links = document.querySelectorAll('.nav-links a, .footer-col a');
  links.forEach(a => {
    const href = a.getAttribute('href')?.replace('#','') || '';
    a.classList.toggle('active',
      href === hash ||
      (href === '/fiches' && (hash.startsWith('/fiche/') || hash === '/fiches')) ||
      (href === '/' && hash === '/')
    );
  });
}

// Helpers exposed globally for inline handlers (rare but useful)
window.RM = {
  navigate,
  toast: (msg, type = 'info') => {
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.textContent = msg;
    document.getElementById('toasts').appendChild(t);
    setTimeout(() => t.remove(), 3000);
  },
  getMeta: () => Store.get('meta'),
  loadFiche,
};

// Render KaTeX inside a container
window.renderKatex = (container) => {
  if (!window.renderMathInElement) return;
  try {
    renderMathInElement(container, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\[', right: '\\]', display: true },
        { left: '\\(', right: '\\)', display: false },
      ],
      throwOnError: false,
      trust: true,
      strict: 'ignore',
    });
  } catch (e) { console.warn('KaTeX render failed', e); }
};

bootstrap();
