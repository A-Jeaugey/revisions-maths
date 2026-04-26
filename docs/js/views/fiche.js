import { Store, User } from '../store.js';
import { loadFiche, renderMarkdown, extractTOC } from '../content.js';
import { footerHTML } from './home.js';

export async function renderFicheList({ container }) {
  const meta = Store.get('meta');
  const view = document.createElement('div');
  view.className = 'view';
  view.innerHTML = `
    <section class="hero container">
      <div class="hero-top">
        <div class="hero-meta">
          <span class="eyebrow"><span class="dot"></span> Fiches de combat</span>
        </div>
      </div>
      <h1 class="display hero-display">Les fiches.</h1>
      <p class="subtitle">
        Tout le programme. Format compact, exemples chiffrés, pièges balisés, anti-sèche en fin de fiche.
      </p>
    </section>
    <section class="container">
      <div class="chapter-grid" style="margin-top:40px">
        ${meta.chapters.map((ch,i) => `
          <a class="chapter-card" href="#/fiche/${ch.slug}" data-link
             style="--c1:${ch.color};--c2:${ch.color2}">
            <span class="chapter-num">CH.${String(i+1).padStart(2,'0')}</span>
            <div>
              <div class="chapter-icon">${ch.icon}</div>
              <div class="chapter-title">${ch.title}</div>
              <div class="chapter-subtitle">${ch.subtitle}</div>
              <div class="chapter-tags">
                ${ch.tags.slice(0,3).map(t => `<span class="tag">${t}</span>`).join('')}
              </div>
            </div>
            <div class="chapter-meta">
              <span>${ch.frequency} · ${ch.duration} min</span>
              <span class="chapter-arrow">Lire →</span>
            </div>
          </a>
        `).join('')}
      </div>
    </section>
    ${footerHTML(meta)}
  `;
  container.appendChild(view);

  // Hover gradient
  view.querySelectorAll('.chapter-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX-r.left)/r.width*100)+'%');
      card.style.setProperty('--my', ((e.clientY-r.top)/r.height*100)+'%');
    });
  });
}

export async function renderFiche({ container, params }) {
  const meta = Store.get('meta');
  const ch = meta.chapters.find(c => c.slug === params.slug);
  if (!ch) {
    container.innerHTML = `<div class="container"><div class="empty"><h3>Chapitre introuvable</h3><a class="btn-pill" href="#/fiches" data-link>Retour</a></div></div>`;
    return;
  }

  const view = document.createElement('div');
  view.className = 'view';
  view.innerHTML = `
    <div class="fiche-layout">
      <aside class="fiche-toc">
        <div class="toc-title">Sommaire</div>
        <ul class="toc-list" id="tocList"></ul>
      </aside>
      <article>
        <header class="fiche-header">
          <div class="fiche-eyebrow">CHAPITRE · ${ch.frequency.replace(/[^\w%\s]/g,'').trim()}</div>
          <h1 class="fiche-title" style="background:linear-gradient(135deg,${ch.color},${ch.color2});-webkit-background-clip:text;background-clip:text;color:transparent">${ch.title}</h1>
          <p class="subtitle">${ch.subtitle}</p>
          <div class="fiche-summary">
            <span>⏱ ~${ch.duration} min</span>
            <span>${ch.frequency}</span>
            ${ch.tags.map(t => `<span>#${t}</span>`).join('')}
          </div>
        </header>
        <div class="md" id="ficheBody"><p>Chargement…</p></div>

        <div style="margin-top:80px;padding:32px;border:1px solid var(--border);border-radius:20px;background:var(--bg-card)">
          <div class="daily-eyebrow">★ Et après ?</div>
          <h3 style="font-family:var(--font-display);font-weight:800;font-size:32px;margin:8px 0 16px;letter-spacing:-0.02em">Tester sa maîtrise</h3>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            <a class="btn-pill accent" href="#/quiz/${ch.slug}" data-link>Lancer le quiz</a>
            <a class="btn-pill ghost" href="#/reflexes/${ch.slug}" data-link>Cartes réflexes</a>
            <a class="btn-pill ghost" href="#/formulaire/${ch.slug}" data-link>Voir les formules</a>
          </div>
        </div>

        <nav style="display:flex;justify-content:space-between;margin-top:60px;padding-top:32px;border-top:1px solid var(--border);font-family:var(--font-mono);font-size:13px">
          ${prevNextLinks(meta, ch)}
        </nav>
      </article>
      <aside class="fiche-progress-side">
        <div>
          <div class="progress-percent">Lecture · <span id="progPct">0</span>%</div>
          <div class="progress-bar"><div class="progress-bar-fill" id="progFill"></div></div>
        </div>
        <button class="side-action ${User.isComplete(ch.slug) ? 'done' : ''}" id="markDone">
          ${User.isComplete(ch.slug) ? '✓ Chapitre validé' : 'Marquer comme lu'}
        </button>
        <button class="side-action" id="copyLink">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>
          Copier le lien
        </button>
        <button class="side-action" id="printBtn">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          Imprimer
        </button>
      </aside>
    </div>
  `;
  container.appendChild(view);

  // Load and render markdown
  try {
    const md = await loadFiche(ch.file);
    // Strip leading H1 (already rendered as fiche-title)
    const stripped = md.replace(/^#\s+[^\n]+\n+(?:>\s+[^\n]+\n+)?(?:---\n+)?/, '');
    const body = view.querySelector('#ficheBody');
    renderMarkdown(stripped, body);

    // Build TOC
    const toc = extractTOC(body);
    const tocList = view.querySelector('#tocList');
    tocList.innerHTML = toc.map(t => `
      <li><a href="#${t.id}" class="h${t.level}">${escapeHtml(t.text)}</a></li>
    `).join('');

    // Active heading observer
    setupTocActive(tocList, body);

    // Reading progress
    setupProgress(view);
  } catch (err) {
    view.querySelector('#ficheBody').innerHTML = `<p style="color:var(--accent-1)">Erreur : ${err.message}</p>`;
  }

  // Side actions
  view.querySelector('#markDone')?.addEventListener('click', () => {
    User.toggleComplete(ch.slug);
    const btn = view.querySelector('#markDone');
    btn.classList.toggle('done', User.isComplete(ch.slug));
    btn.textContent = User.isComplete(ch.slug) ? '✓ Chapitre validé' : 'Marquer comme lu';
    window.RM.toast(User.isComplete(ch.slug) ? 'Chapitre validé !' : 'Marque retirée', 'success');
  });

  view.querySelector('#copyLink')?.addEventListener('click', () => {
    navigator.clipboard.writeText(location.href);
    window.RM.toast('Lien copié', 'success');
  });

  view.querySelector('#printBtn')?.addEventListener('click', () => window.print());

  // Smooth scroll for anchor links inside TOC
  view.querySelectorAll('.toc-list a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function setupTocActive(tocList, body) {
  const links = tocList.querySelectorAll('a');
  const headings = body.querySelectorAll('h2, h3');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const id = en.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
      }
    });
  }, { rootMargin: '-100px 0px -70% 0px' });

  headings.forEach(h => obs.observe(h));
}

function setupProgress(view) {
  const fill = view.querySelector('#progFill');
  const pct = view.querySelector('#progPct');
  const update = () => {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const p = Math.min(100, Math.max(0, (window.scrollY / docH) * 100));
    if (fill) fill.style.width = p + '%';
    if (pct) pct.textContent = Math.round(p);
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

function prevNextLinks(meta, ch) {
  const idx = meta.chapters.findIndex(c => c.slug === ch.slug);
  const prev = idx > 0 ? meta.chapters[idx - 1] : null;
  const next = idx < meta.chapters.length - 1 ? meta.chapters[idx + 1] : null;
  return `
    <div>${prev ? `← <a href="#/fiche/${prev.slug}" data-link>${prev.title}</a>` : ''}</div>
    <div>${next ? `<a href="#/fiche/${next.slug}" data-link>${next.title}</a> →` : ''}</div>
  `;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}
