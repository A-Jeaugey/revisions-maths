import { Store, User } from '../store.js';
import { loadFiche, renderMarkdown, extractTOC, linkifyCrossRefs } from '../content.js';
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
        <button class="side-action" id="shareLink" title="Partager une version lisible sans JavaScript (idéal pour IA, lecteur d'écran, partage email)">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="13.5" x2="15.4" y2="17.5"/><line x1="15.4" y1="6.5" x2="8.6" y2="10.5"/></svg>
          Lien partageable
        </button>
        <button class="side-action accent-action" id="printBtn">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Télécharger la fiche PDF
        </button>
      </aside>
    </div>

    <!-- Mobile bottom action bar: TOC + mark done + progress + download.
         Everything that would otherwise float over the content lives here,
         so the page never has overlapping elements. -->
    <div class="fiche-bottombar" id="ficheBottombar">
      <button class="bb-btn" id="bbToc" aria-label="Ouvrir le sommaire">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
      </button>
      <button class="bb-btn ${User.isComplete(ch.slug) ? 'done' : ''}" id="bbMarkDone" aria-label="Marquer comme lu">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      </button>
      <div class="progress-mini"><div class="progress-mini-fill" id="bbProgFill"></div></div>
      <button class="bb-btn dl" id="bbDownload" aria-label="Télécharger la fiche">PDF</button>
    </div>
  `;
  container.appendChild(view);
  document.body.classList.add('has-fiche-bar');

  // Load and render markdown
  try {
    const md = await loadFiche(ch.file);
    // Strip leading H1 (already rendered as fiche-title)
    const stripped = md.replace(/^#\s+[^\n]+\n+(?:>\s+[^\n]+\n+)?(?:---\n+)?/, '');
    const body = view.querySelector('#ficheBody');
    renderMarkdown(stripped, body);

    // Build TOC (also assigns ids to h2/h3 — required by linkifyCrossRefs)
    const toc = extractTOC(body);
    const tocList = view.querySelector('#tocList');
    tocList.innerHTML = toc.map(t => `
      <li><a href="#${t.id}" class="h${t.level}">${escapeHtml(t.text)}</a></li>
    `).join('');

    // Convert in-text §I.4 / 'cf. fiche suites' refs into real links
    linkifyCrossRefs(body);

    // Active heading observer
    setupTocActive(tocList, body);

    // Reading progress
    setupProgress(view);
  } catch (err) {
    view.querySelector('#ficheBody').innerHTML = `<p style="color:var(--accent-1)">Erreur : ${err.message}</p>`;
  }

  // Side actions (desktop sidebar + mobile bottom bar share the same handlers)
  const toggleDone = () => {
    User.toggleComplete(ch.slug);
    const isDone = User.isComplete(ch.slug);
    const desk = view.querySelector('#markDone');
    if (desk) {
      desk.classList.toggle('done', isDone);
      desk.textContent = isDone ? '✓ Chapitre validé' : 'Marquer comme lu';
    }
    view.querySelector('#bbMarkDone')?.classList.toggle('done', isDone);
    window.RM.toast(isDone ? 'Chapitre validé !' : 'Marque retirée', 'success');
  };
  view.querySelector('#markDone')?.addEventListener('click', toggleDone);
  view.querySelector('#bbMarkDone')?.addEventListener('click', toggleDone);

  view.querySelector('#copyLink')?.addEventListener('click', () => {
    navigator.clipboard.writeText(location.href);
    window.RM.toast('Lien copié', 'success');
  });

  view.querySelector('#shareLink')?.addEventListener('click', () => {
    const url = `https://arthurjeaugey.com/revisions-maths/raw/${ch.slug}.html`;
    navigator.clipboard.writeText(url);
    window.RM.toast('Lien partageable copié (version lisible sans JS)', 'success');
  });

  view.querySelector('#printBtn')?.addEventListener('click', () => openDownloadChoice(ch));
  view.querySelector('#bbDownload')?.addEventListener('click', () => openDownloadChoice(ch));

  // Mobile bottombar TOC button → bottom-sheet drawer
  view.querySelector('#bbToc')?.addEventListener('click', () => openTocDrawer(view));

  // Clean up the body class when the route changes away
  window.addEventListener('routechange', () => {
    document.body.classList.remove('has-fiche-bar');
  }, { once: true });

  // Smooth scroll for anchor links inside TOC
  view.querySelectorAll('.toc-list a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Smooth scroll for in-page anchor links inside the fiche body too
  // (the markdown can contain links like [§I.3](#s-i-les-fondations-...);
  // without intercepting them they'd replace the SPA hash and break routing).
  view.querySelectorAll('#ficheBody a[href^="#"]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = href.slice(1);
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
  const bbFill = view.querySelector('#bbProgFill');
  const update = () => {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const p = Math.min(100, Math.max(0, (window.scrollY / docH) * 100));
    if (fill) fill.style.width = p + '%';
    if (pct) pct.textContent = Math.round(p);
    if (bbFill) bbFill.style.width = p + '%';
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

// Mobile TOC drawer — clones the desktop sommaire into a bottom sheet.
function openTocDrawer(view) {
  document.querySelectorAll('.toc-drawer').forEach(n => n.remove());

  const tocList = view.querySelector('#tocList');
  if (!tocList) return;

  const drawer = document.createElement('div');
  drawer.className = 'toc-drawer';
  drawer.innerHTML = `
    <div class="toc-drawer-backdrop"></div>
    <div class="toc-drawer-sheet">
      <div class="toc-drawer-handle"></div>
      <div class="toc-drawer-head">
        <h3>Sommaire</h3>
        <button class="toc-drawer-close">Fermer</button>
      </div>
      <ul class="toc-drawer-list">${tocList.innerHTML}</ul>
    </div>
  `;
  document.body.appendChild(drawer);
  requestAnimationFrame(() => drawer.classList.add('open'));

  const close = () => {
    drawer.classList.remove('open');
    setTimeout(() => drawer.remove(), 280);
  };
  drawer.querySelector('.toc-drawer-backdrop').addEventListener('click', close);
  drawer.querySelector('.toc-drawer-close').addEventListener('click', close);
  drawer.querySelectorAll('.toc-drawer-list a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      close();
    });
  });
  document.addEventListener('keydown', function onEsc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onEsc); }
  });
}

// PDFs are pre-built (scripts/build-pdfs.js) into docs/fiches-pdf/:
//   <slug>.pdf        - fiche complète (15-22 pages)
//   <slug>-synth.pdf  - synthèse (2-4 pages)
// Clicking the download side-action opens a small choice modal so the user
// picks which version they want.
function openDownloadChoice(ch) {
  // Remove any existing modal first
  document.querySelectorAll('.dl-choice-modal').forEach(n => n.remove());

  const modal = document.createElement('div');
  modal.className = 'dl-choice-modal';
  modal.innerHTML = `
    <div class="dl-choice-backdrop"></div>
    <div class="dl-choice-card" style="--c1:${ch.color};--c2:${ch.color2}">
      <div class="dl-choice-eyebrow">TÉLÉCHARGER · ${escapeHtml(ch.title).toUpperCase()}</div>
      <h3 class="dl-choice-title">Quelle version ?</h3>
      <p class="dl-choice-sub">Les deux PDFs reprennent la même charte graphique. La synthèse rentre sur 1 ou 2 feuilles recto-verso, la complète détaille tous les exemples.</p>
      <div class="dl-choice-grid">
        <a class="dl-choice-card-btn full"
           href="fiches-pdf/${ch.slug}.pdf"
           download="Fiche-${ch.slug}-bac-maths.pdf"
           target="_blank" rel="noopener">
          <div class="dl-choice-tag">FICHE COMPLÈTE</div>
          <div class="dl-choice-h">Tout le détail</div>
          <div class="dl-choice-meta">~15-22 pages · exemples chiffrés, pièges, anatomie d'exos bac</div>
        </a>
        <a class="dl-choice-card-btn synth"
           href="fiches-pdf/${ch.slug}-synth.pdf"
           download="Fiche-${ch.slug}-bac-maths-synth.pdf"
           target="_blank" rel="noopener">
          <div class="dl-choice-tag">SYNTHÈSE</div>
          <div class="dl-choice-h">Tout l'essentiel</div>
          <div class="dl-choice-meta">~2-4 pages · réflexes, formules, pièges, check-list</div>
        </a>
      </div>
      <button class="dl-choice-close" aria-label="Fermer">Annuler</button>
    </div>
  `;
  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('open'));

  const close = () => {
    modal.classList.remove('open');
    setTimeout(() => modal.remove(), 200);
  };
  modal.querySelector('.dl-choice-backdrop').addEventListener('click', close);
  modal.querySelector('.dl-choice-close').addEventListener('click', close);
  modal.querySelectorAll('.dl-choice-card-btn').forEach(a => a.addEventListener('click', () => setTimeout(close, 100)));
  document.addEventListener('keydown', function onEsc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onEsc); }
  });
}
