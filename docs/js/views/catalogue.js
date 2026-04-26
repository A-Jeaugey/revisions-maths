import { Store } from '../store.js';
import { loadCatalogue, renderMarkdown } from '../content.js';
import { footerHTML } from './home.js';

export async function renderCatalogue({ container }) {
  const meta = Store.get('meta');
  const view = document.createElement('div');
  view.className = 'view';
  view.innerHTML = `
    <section class="container catalogue-layout">
      <div class="hero-meta" style="margin-bottom:24px">
        <span class="eyebrow"><span class="dot"></span> Catalogue · 36 sujets analysés</span>
      </div>
      <h1 class="display" style="font-size:clamp(48px,9vw,140px);margin-bottom:24px">Patterns.</h1>
      <p class="subtitle" style="margin-bottom:48px">
        Toutes les questions-types qui reviennent au bac depuis la réforme 2024,
        avec leur fréquence d'apparition. Identifie le pattern dès la lecture de l'énoncé.
      </p>

      <div class="quick-actions" style="margin-top:0;margin-bottom:60px">
        <div class="qa-card" style="cursor:default">
          <div class="qa-icon">🟥</div>
          <div class="qa-title">90-100%</div>
          <div class="qa-desc">Quasi systématique</div>
        </div>
        <div class="qa-card" style="cursor:default">
          <div class="qa-icon">🟧</div>
          <div class="qa-title">70-89%</div>
          <div class="qa-desc">Très probable</div>
        </div>
        <div class="qa-card" style="cursor:default">
          <div class="qa-icon">🟨</div>
          <div class="qa-title">40-69%</div>
          <div class="qa-desc">Fréquent</div>
        </div>
        <div class="qa-card" style="cursor:default">
          <div class="qa-icon">🟩</div>
          <div class="qa-title">20-39%</div>
          <div class="qa-desc">Occasionnel</div>
        </div>
      </div>

      <div class="md" id="catBody"><p>Chargement du catalogue…</p></div>
    </section>
    ${footerHTML(meta)}
  `;
  container.appendChild(view);

  try {
    const md = await loadCatalogue();
    const body = view.querySelector('#catBody');
    renderMarkdown(md, body);
  } catch (err) {
    view.querySelector('#catBody').innerHTML = `<p style="color:var(--accent-1)">Erreur : ${err.message}</p>`;
  }
}
