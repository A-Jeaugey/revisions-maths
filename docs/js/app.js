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

    // Keep document title and Open Graph tags in sync with the current route,
    // so link previews (Slack, Messenger, iMessage, Twitter, etc.) show the
    // chapter actually being viewed instead of the generic site title.
    window.addEventListener('hashchange', updateMetaForRoute);
    window.addEventListener('routechange', updateMetaForRoute);
    updateMetaForRoute();

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.querySelector('.nav-links');
    const closeMenu = () => {
      navLinks?.classList.remove('open');
      menuBtn?.classList.remove('open');
      menuBtn?.setAttribute('aria-expanded', 'false');
    };
    menuBtn?.addEventListener('click', () => {
      const isOpen = navLinks?.classList.toggle('open');
      menuBtn.classList.toggle('open', !!isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navLinks?.classList.contains('open')) closeMenu();
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

const DEFAULT_TITLE = 'RÉV · Bac Maths Spé';
const DEFAULT_DESC  = 'Révisions Bac Maths spé Terminale — fiches, réflexes, formulaire, quiz, annales 2024-2025.';
const SITE_BASE     = 'https://arthurjeaugey.com/revisions-maths';

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

function updateMetaForRoute() {
  const hash = location.hash.slice(1) || '/';
  const meta = Store.get('meta');
  let title = DEFAULT_TITLE;
  let desc  = DEFAULT_DESC;
  const url = `${SITE_BASE}/#${hash}`;

  const ficheMatch = hash.match(/^\/fiche\/([^/]+)$/);
  if (ficheMatch && meta) {
    const ch = meta.chapters.find(c => c.slug === ficheMatch[1]);
    if (ch) {
      title = `${ch.title} — Fiche · RÉV.maths`;
      desc  = `${ch.title} · ${ch.subtitle}. Fiche de révision Bac Spé Maths Terminale.`;
    }
  } else if (hash === '/fiches') {
    title = 'Fiches — RÉV.maths';
    desc  = 'Toutes les fiches de révision Bac Spé Maths : 8 chapitres complets, exemples chiffrés, anti-sèche.';
  } else if (hash.startsWith('/reflexes')) {
    title = 'Réflexes — RÉV.maths';
    desc  = 'Cartes réflexes : déclencheurs et réponses pour le Bac Spé Maths.';
  } else if (hash.startsWith('/formulaire')) {
    title = 'Formulaire — RÉV.maths';
    desc  = 'Toutes les formules du programme de Bac Spé Maths Terminale.';
  } else if (hash.startsWith('/quiz')) {
    title = 'Quiz — RÉV.maths';
    desc  = 'Test rapide chronométré sur le programme de Bac Spé Maths.';
  } else if (hash === '/catalogue') {
    title = 'Catalogue des questions-types — RÉV.maths';
    desc  = 'Catalogue annoté des questions-types récurrentes en Bac Spé Maths.';
  } else if (hash === '/annales') {
    title = 'Annales 2024-2025 — RÉV.maths';
    desc  = 'Sujets et corrigés du Bac Spé Maths Terminale, sessions 2024 et 2025.';
  }

  document.title = title;
  setMeta('meta[name="description"]', 'content', desc);
  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[property="og:description"]', 'content', desc);
  setMeta('meta[property="og:url"]', 'content', url);
  setMeta('meta[name="twitter:title"]', 'content', title);
  setMeta('meta[name="twitter:description"]', 'content', desc);
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
