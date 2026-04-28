import { Store, User } from '../store.js';

export async function renderHome({ container }) {
  const meta = Store.get('meta');
  const view = document.createElement('div');
  view.className = 'view';

  // Countdown to the Bac de Spé Maths (Métropole J1 — typically mid-June).
  // Update this date in meta.json or here when the official date is known.
  const examDate = new Date(meta.examDate || '2026-06-17');
  const today = new Date();
  const daysLeft = Math.max(0, Math.ceil((examDate - today) / (1000*60*60*24)));
  const examLabel = meta.examLabel || 'Bac Spé Maths';

  const totalChapters = meta.chapters.length;
  const completedCount = meta.chapters.filter(c => User.isComplete(c.slug)).length;
  const totalAnnales = meta.annales.sessions2024.length + meta.annales.sessions2025.length;
  const pomoToday = User.pomoToday();

  view.innerHTML = `
    <section class="hero container">
      <div class="hero-top">
        <div class="hero-meta">
          <span class="eyebrow"><span class="dot"></span> Session 2026 · ${examLabel}</span>
          <span class="eyebrow" title="Jours restants avant l'épreuve de spécialité">J−${daysLeft} avant l'épreuve</span>
        </div>
        <div class="hero-meta">
          <span class="eyebrow">${totalChapters} chapitres</span>
          <span class="eyebrow">${totalAnnales} annales</span>
        </div>
      </div>

      <h1 class="display hero-display">
        Tout le programme.<br>
        <span class="it">Aucune surprise.</span>
      </h1>

      <p class="subtitle">
        Fiches de combat, réflexes, formulaire, quiz auto-générés, catalogue de
        questions-types et annales 2024-2025. Conçu pour réviser <strong>vite</strong>
        et arriver le jour J avec une carte mentale claire de ce qui peut tomber.
      </p>

      <div class="cta-row">
        <a href="#/fiches" class="btn-pill accent" data-link>Commencer →</a>
        <a href="#/quiz" class="btn-pill ghost" data-link>Quiz éclair</a>
        <button class="btn-pill ghost" id="surpriseMe">🎲 Surprise me</button>
      </div>

      <div class="hero-stats">
        <div class="stat">
          <span class="stat-number">${totalChapters}</span>
          <span class="stat-label">Chapitres</span>
        </div>
        <div class="stat">
          <span class="stat-number">${completedCount}<span style="color:var(--text-dim);font-size:0.5em">/${totalChapters}</span></span>
          <span class="stat-label">Validés</span>
        </div>
        <div class="stat">
          <span class="stat-number">${totalAnnales}</span>
          <span class="stat-label">Annales</span>
        </div>
        <div class="stat">
          <span class="stat-number">${pomoToday}</span>
          <span class="stat-label">Pomos aujourd'hui</span>
        </div>
      </div>
    </section>

    <section class="marquee" aria-hidden="true">
      <div class="marquee-track">
        <span>SUITES</span><span>RÉCURRENCE</span><span>POINT FIXE</span><span>BINOMIALE</span>
        <span>BIENAYMÉ-TCHEBYCHEV</span><span>DROITE-PLAN</span><span>GENDARMES</span>
        <span>CONVEXITÉ</span><span>IPP</span><span>ÉQUATION DIFFÉRENTIELLE</span>
        <span>SUITES</span><span>RÉCURRENCE</span><span>POINT FIXE</span><span>BINOMIALE</span>
        <span>BIENAYMÉ-TCHEBYCHEV</span><span>DROITE-PLAN</span><span>GENDARMES</span>
        <span>CONVEXITÉ</span><span>IPP</span><span>ÉQUATION DIFFÉRENTIELLE</span>
      </div>
    </section>

    <section class="container">
      <div class="section-head">
        <div>
          <span class="section-num">01 / Chapitres</span>
          <h2 class="section-title">Les 8 zones à blinder</h2>
        </div>
        <p class="subtitle" style="max-width:38ch">
          Chaque fiche reprend tout le cours, les pièges classiques, des exemples chiffrés
          et un pattern d'exo bac avec les questions qui reviennent.
        </p>
      </div>

      <div class="chapter-grid">
        ${meta.chapters.map((ch, i) => chapterCard(ch, i)).join('')}
      </div>

      <p class="freq-disclaimer">
        Pourcentages calculés sur les <strong>36 sujets tombés depuis la réforme 2024</strong>
        (sessions 2024 + 2025).
        ⚠️ <strong>Tout</strong> peut tomber au bac : <strong>0 impasse à faire</strong>.
        Les % donnent juste l'ordre des priorités si tu manques de temps.
      </p>

      <div class="daily-banner">
        <div>
          <div class="daily-eyebrow">★ Mission du jour</div>
          <h3 class="daily-title">${dailyMissionTitle(meta)}</h3>
          <p class="daily-desc">${dailyMissionDesc(meta)}</p>
        </div>
        <div class="daily-cta">
          <a class="btn-pill" href="${dailyMissionLink(meta)}" data-link>Lancer la mission →</a>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="section-head">
        <div>
          <span class="section-num">02 / Outils</span>
          <h2 class="section-title">Les modes de révision</h2>
        </div>
      </div>

      <div class="quick-actions">
        <a class="qa-card" href="#/reflexes" data-link>
          <div class="qa-icon">⚡</div>
          <div class="qa-title">Cartes Réflexes</div>
          <div class="qa-desc">Tu vois ça → tu déclenches ça. Format flashcard.</div>
        </a>
        <a class="qa-card" href="#/formulaire" data-link>
          <div class="qa-icon">∑</div>
          <div class="qa-title">Formulaire</div>
          <div class="qa-desc">Toutes les formules à savoir, rendues en LaTeX, copiables.</div>
        </a>
        <a class="qa-card" href="#/quiz" data-link>
          <div class="qa-icon">⚡</div>
          <div class="qa-title">Quiz éclair</div>
          <div class="qa-desc">QCM auto-générés par chapitre. Score + explication.</div>
        </a>
        <a class="qa-card" href="#/catalogue" data-link>
          <div class="qa-icon">🎯</div>
          <div class="qa-title">Catalogue</div>
          <div class="qa-desc">Questions-types qui reviennent à chaque bac avec fréquence.</div>
        </a>
        <a class="qa-card" href="#/annales" data-link>
          <div class="qa-icon">📂</div>
          <div class="qa-title">Annales 2024-2025</div>
          <div class="qa-desc">Tous les sujets et corrigés APMEP, classés par session.</div>
        </a>
        <button class="qa-card" data-action="open-pomodoro" style="text-align:left">
          <div class="qa-icon">⏱</div>
          <div class="qa-title">Pomodoro</div>
          <div class="qa-desc">Sessions focus 25/50 minutes avec compteur quotidien.</div>
        </button>
        <button class="qa-card" data-action="open-search" style="text-align:left">
          <div class="qa-icon">🔍</div>
          <div class="qa-title">Recherche</div>
          <div class="qa-desc">Cherche un mot-clé dans toutes les fiches en un seul endroit.</div>
        </button>
        <a class="qa-card" href="#/fiches" data-link>
          <div class="qa-icon">★</div>
          <div class="qa-title">Lecture continue</div>
          <div class="qa-desc">Toutes les fiches enchaînées avec progression et TOC.</div>
        </a>
      </div>
    </section>

    ${footerHTML(meta)}
  `;

  container.appendChild(view);

  // Hover gradient effect on cards
  view.querySelectorAll('.chapter-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width) * 100;
      const my = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty('--mx', mx + '%');
      card.style.setProperty('--my', my + '%');
    });
  });

  // Surprise me
  view.querySelector('#surpriseMe')?.addEventListener('click', () => {
    const ch = meta.chapters[Math.floor(Math.random() * meta.chapters.length)];
    location.hash = '#/fiche/' + ch.slug;
  });

  // Quick action buttons
  view.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const a = btn.dataset.action;
      if (a === 'open-pomodoro') document.getElementById('pomodoroBtn')?.click();
      if (a === 'open-search') document.getElementById('searchBtn')?.click();
    });
  });
}

function chapterCard(ch, i) {
  const num = String(i + 1).padStart(2, '0');
  return `
    <a class="chapter-card" href="#/fiche/${ch.slug}" data-link
       style="--c1:${ch.color};--c2:${ch.color2}">
      <span class="chapter-num">CH.${num}</span>
      <div>
        <div class="chapter-icon">${ch.icon}</div>
        <div class="chapter-title">${ch.title}</div>
        <div class="chapter-subtitle">${ch.subtitle}</div>
        <div class="chapter-tags">
          ${ch.tags.slice(0,3).map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="chapter-meta">
        <span title="Fréquence d'apparition au bac (analyse 36 sujets 2024-2025) · Durée de lecture estimée">${ch.frequency} au bac · ~${ch.duration} min</span>
        <span class="chapter-arrow">Lire <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </div>
    </a>
  `;
}

function dailyMissionTitle(meta) {
  // Pick chapter based on day of year so it's stable per day
  const day = new Date();
  const idx = (day.getDate() + day.getMonth() * 31) % meta.chapters.length;
  const ch = meta.chapters[idx];
  return `Réviser ${ch.title}`;
}

function dailyMissionDesc(meta) {
  const day = new Date();
  const idx = (day.getDate() + day.getMonth() * 31) % meta.chapters.length;
  const ch = meta.chapters[idx];
  return `Lis la fiche, fais les cartes réflexes, puis le quiz. Compte ~${ch.duration + 15} min.`;
}

function dailyMissionLink(meta) {
  const day = new Date();
  const idx = (day.getDate() + day.getMonth() * 31) % meta.chapters.length;
  return '#/fiche/' + meta.chapters[idx].slug;
}

export function footerHTML(meta) {
  return `
    <footer class="footer container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">RÉV<span style="color:var(--accent-1)">.</span><br>maths</div>
        </div>
        <div class="footer-col">
          <h4>Chapitres</h4>
          <ul>
            ${meta.chapters.slice(0,4).map(c => `<li><a href="#/fiche/${c.slug}" data-link>${c.title}</a></li>`).join('')}
          </ul>
        </div>
        <div class="footer-col">
          <h4>Outils</h4>
          <ul>
            <li><a href="#/reflexes" data-link>Réflexes</a></li>
            <li><a href="#/formulaire" data-link>Formulaire</a></li>
            <li><a href="#/quiz" data-link>Quiz</a></li>
            <li><a href="#/catalogue" data-link>Catalogue</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Annales</h4>
          <ul>
            <li><a href="#/annales" data-link>Session 2024</a></li>
            <li><a href="#/annales" data-link>Session 2025</a></li>
            <li><a href="https://www.apmep.fr/Annales-Terminale-Generale" target="_blank" rel="noopener">APMEP →</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>BAC · TERMINALE SPÉ MATHS</span>
        <span>session 2026</span>
      </div>
    </footer>
  `;
}
