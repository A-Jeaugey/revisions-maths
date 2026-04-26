import { Store } from '../store.js';
import { loadReflexes } from '../content.js';
import { footerHTML } from './home.js';

// Render markdown inline (bold, italic, code) without wrapping in <p>.
// Falls back to raw text if marked isn't loaded.
function mdInline(s) {
  if (window.marked && typeof marked.parseInline === 'function') {
    return marked.parseInline(String(s));
  }
  return String(s);
}

export async function renderReflexes({ container, params }) {
  const meta = Store.get('meta');
  const data = await loadReflexes();

  const initialChapter = params.chapter || data.decks[0].chapter;
  const view = document.createElement('div');
  view.className = 'view';

  view.innerHTML = `
    <section class="container reflex-hero">
      <div class="hero-meta" style="margin-bottom:24px">
        <span class="eyebrow"><span class="dot"></span> Cartes Réflexes</span>
      </div>
      <h1 class="display" style="font-size:clamp(48px,9vw,140px)">Tu vois ça?<br><span class="it">Tu déclenches ça.</span></h1>
      <p class="subtitle" style="margin-top:24px">
        Le format flashcard pour câbler les automatismes. Clique sur la carte pour la retourner,
        ou utilise les flèches du clavier (← → / espace).
      </p>

      <div class="reflex-tabs" id="reflexTabs">
        ${data.decks.map(d => {
          const ch = meta.chapters.find(c => c.slug === d.chapter);
          return `<button class="reflex-tab ${d.chapter === initialChapter ? 'active' : ''}" data-chapter="${d.chapter}">${ch?.title || d.chapter}</button>`;
        }).join('')}
      </div>

      <div class="reflex-modes">
        <button class="mode-btn active" data-mode="flash">⚡ Flashcards</button>
        <button class="mode-btn" data-mode="list">📋 Liste</button>
      </div>

      <div id="reflexBody"></div>
    </section>
    ${footerHTML(meta)}
  `;
  container.appendChild(view);

  let currentDeck = data.decks.find(d => d.chapter === initialChapter);
  let currentMode = 'flash';
  let currentIdx = 0;

  const body = view.querySelector('#reflexBody');

  function render() {
    if (currentMode === 'flash') renderFlash();
    else renderList();
  }

  function renderFlash() {
    body.innerHTML = `
      <div class="flashcards-stage">
        <div class="flashcard" id="flashcard">
          <div class="flashcard-face flashcard-front">
            <span class="flash-label">Tu vois ça…</span>
            <div class="flash-trigger" id="trigText"></div>
            <span class="text-muted text-mono" style="font-size:11px;letter-spacing:0.1em">CLIQUE POUR RÉVÉLER</span>
          </div>
          <div class="flashcard-face flashcard-back">
            <span class="flash-label">Tu déclenches…</span>
            <div class="flash-action" id="actText"></div>
          </div>
        </div>
      </div>
      <div class="flash-controls">
        <button class="flash-btn" id="prevBtn" aria-label="Précédent">←</button>
        <div class="flash-progress"><span id="flashIdx">1</span> / ${currentDeck.cards.length}</div>
        <button class="flash-btn" id="nextBtn" aria-label="Suivant">→</button>
      </div>
    `;
    showCard(0);

    const card = body.querySelector('#flashcard');
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    body.querySelector('#prevBtn').addEventListener('click', () => showCard(currentIdx - 1));
    body.querySelector('#nextBtn').addEventListener('click', () => showCard(currentIdx + 1));
  }

  function showCard(idx) {
    if (idx < 0) idx = currentDeck.cards.length - 1;
    if (idx >= currentDeck.cards.length) idx = 0;
    currentIdx = idx;
    const c = currentDeck.cards[idx];
    const card = body.querySelector('#flashcard');
    card.classList.remove('flipped');
    body.querySelector('#trigText').innerHTML = mdInline(c.trigger);
    body.querySelector('#actText').innerHTML = mdInline(c.action);
    body.querySelector('#flashIdx').textContent = idx + 1;
    if (window.renderKatex) {
      window.renderKatex(body.querySelector('#trigText'));
      window.renderKatex(body.querySelector('#actText'));
    }
  }

  function renderList() {
    body.innerHTML = `
      <div class="reflex-list">
        ${currentDeck.cards.map(c => `
          <div class="reflex-item">
            <div class="reflex-trigger">${mdInline(c.trigger)}</div>
            <div class="reflex-action">${mdInline(c.action)}</div>
          </div>
        `).join('')}
      </div>
    `;
    if (window.renderKatex) window.renderKatex(body);
  }

  // Tabs
  view.querySelectorAll('#reflexTabs .reflex-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      view.querySelectorAll('#reflexTabs .reflex-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentDeck = data.decks.find(d => d.chapter === tab.dataset.chapter);
      currentIdx = 0;
      render();
    });
  });

  // Mode toggle
  view.querySelectorAll('.mode-btn').forEach(b => {
    b.addEventListener('click', () => {
      view.querySelectorAll('.mode-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      currentMode = b.dataset.mode;
      render();
    });
  });

  // Keyboard nav
  const keyHandler = (e) => {
    if (currentMode !== 'flash') return;
    if (e.key === 'ArrowLeft') showCard(currentIdx - 1);
    if (e.key === 'ArrowRight') showCard(currentIdx + 1);
    if (e.key === ' ') { e.preventDefault(); body.querySelector('#flashcard')?.classList.toggle('flipped'); }
  };
  document.addEventListener('keydown', keyHandler);
  // Cleanup on next route change
  window.addEventListener('routechange', () => document.removeEventListener('keydown', keyHandler), { once: true });

  render();
}
