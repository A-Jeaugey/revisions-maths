import { Store } from '../store.js';
import { footerHTML } from './home.js';

export async function renderAnnales({ container }) {
  const meta = Store.get('meta');
  const view = document.createElement('div');
  view.className = 'view';

  const make = (sessions, year) => sessions.map(s => `
    <div class="annale-card">
      <div class="annale-code">${s.code}${s.date ? ' · ' + s.date : ''}</div>
      <div class="annale-name">${s.name}</div>
      <div class="annale-date">${year}</div>
      <div class="annale-files">
        ${s.files.map(f => {
          const isCorrige = /corrig/i.test(f);
          const yearFolder = year;
          const folder = isCorrige ? 'corriges' : 'sujets';
          return `<a class="annale-file-link" href="annales/${yearFolder}/${folder}/${f}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <span>${isCorrige ? '📝 Corrigé' : '📄 Sujet'}</span>
          </a>`;
        }).join('')}
      </div>
    </div>
  `).join('');

  view.innerHTML = `
    <section class="container annales-layout">
      <div class="hero-meta" style="margin-bottom:24px">
        <span class="eyebrow"><span class="dot"></span> Annales APMEP</span>
      </div>
      <h1 class="display" style="font-size:clamp(48px,9vw,140px);margin-bottom:24px">Annales.</h1>
      <p class="subtitle" style="margin-bottom:48px">
        Tous les sujets et corrigés de spé maths, sessions 2024 et 2025
        classés par centre et date.
        ${meta.annales.sessions2024.length + meta.annales.sessions2025.length} sessions au total.
      </p>

      <div class="year-section">
        <div class="year-head">
          <h2>2024</h2>
          <span class="year-meta">${meta.annales.sessions2024.length} sessions · sujet 0 inclus</span>
        </div>
        <div class="annales-grid">
          ${make(meta.annales.sessions2024, 2024)}
        </div>
      </div>

      <div class="year-section">
        <div class="year-head">
          <h2>2025</h2>
          <span class="year-meta">${meta.annales.sessions2025.length} sessions · session courante</span>
        </div>
        <div class="annales-grid">
          ${make(meta.annales.sessions2025, 2025)}
        </div>
      </div>

      <div class="empty">
        <h3>Session 2026</h3>
        <p>Aucun sujet disponible à ce jour. La première session (Amérique du Nord) tombera mi-mai 2026.</p>
      </div>
    </section>
    ${footerHTML(meta)}
  `;
  container.appendChild(view);
}
