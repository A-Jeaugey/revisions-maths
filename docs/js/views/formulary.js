import { Store } from '../store.js';
import { loadFormulary, mdInline } from '../content.js';
import { footerHTML } from './home.js';

export async function renderFormulary({ container, params }) {
  const meta = Store.get('meta');
  const data = await loadFormulary();
  const filterCh = params.chapter;

  const view = document.createElement('div');
  view.className = 'view';
  view.innerHTML = `
    <section class="container formulary">
      <div class="hero-meta" style="margin-bottom:24px">
        <span class="eyebrow"><span class="dot"></span> Formulaire</span>
      </div>
      <h1 class="display" style="font-size:clamp(48px,10vw,160px);margin-bottom:24px">Formulaire.</h1>
      <p class="subtitle">
        Toutes les formules par chapitre. Clique sur le bouton <em>copy</em> pour récupérer le LaTeX.
      </p>

      <div class="reflex-tabs" id="formTabs" style="margin-top:32px">
        <button class="reflex-tab ${!filterCh ? 'active' : ''}" data-ch="">Tout</button>
        ${data.sections.map(s => {
          const ch = meta.chapters.find(c => c.slug === s.chapter);
          return `<button class="reflex-tab ${filterCh === s.chapter ? 'active' : ''}" data-ch="${s.chapter}">${ch?.title || s.title}</button>`;
        }).join('')}
      </div>

      <div id="formularyBody"></div>
    </section>
    ${footerHTML(meta)}
  `;
  container.appendChild(view);

  function renderSections(filter) {
    const body = view.querySelector('#formularyBody');
    const sections = filter ? data.sections.filter(s => s.chapter === filter) : data.sections;
    body.innerHTML = sections.map(s => `
      <section class="formulary-section">
        <h2>${s.title}</h2>
        <div class="formulary-grid">
          ${s.items.map(it => `
            <div class="formula-card">
              <button class="formula-copy" data-tex="${escapeAttr(it.formula)}" title="Copier le LaTeX">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              </button>
              <div class="formula-name">${mdInline(it.name)}</div>
              <div class="formula-body">$$${it.formula}$$</div>
            </div>
          `).join('')}
        </div>
      </section>
    `).join('');

    if (window.renderKatex) window.renderKatex(body);

    body.querySelectorAll('.formula-copy').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(btn.dataset.tex);
        window.RM.toast('LaTeX copié', 'success');
      });
    });
  }

  view.querySelectorAll('#formTabs .reflex-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      view.querySelectorAll('#formTabs .reflex-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderSections(tab.dataset.ch || null);
    });
  });

  renderSections(filterCh || null);
}

function escapeAttr(s) {
  return String(s).replace(/"/g, '&quot;').replace(/&/g, '&amp;');
}
