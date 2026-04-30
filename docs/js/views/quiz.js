import { Store, User } from '../store.js';
import { loadQuizQuestions, mdInline } from '../content.js';

export async function renderQuiz({ container, params }) {
  const meta = Store.get('meta');
  const data = await loadQuizQuestions();
  const initialChapter = params.chapter || null;

  const view = document.createElement('div');
  view.className = 'view';
  view.innerHTML = `<div class="quiz-shell" id="quizShell"></div>`;
  container.appendChild(view);

  const shell = view.querySelector('#quizShell');

  let state = {
    chapter: initialChapter, // null = all
    questions: [],
    currentIdx: 0,
    score: 0,
    answers: [], // {qIdx, answer, correct}
    phase: 'setup', // setup | playing | done
  };

  function startSetup() {
    state.phase = 'setup';
    shell.innerHTML = `
      <div class="quiz-setup">
        <span class="eyebrow"><span class="dot"></span> Quiz éclair</span>
        <h1 class="quiz-setup-title">Choisis ton terrain.</h1>
        <p class="subtitle">QCM auto-générés. Score + explication à chaque question.</p>
        <div class="quiz-options" id="chapterOpts">
          <button data-ch="" class="${!state.chapter ? 'selected' : ''}">Tous les chapitres</button>
          ${meta.chapters.map(c => {
            const count = data.questions.filter(q => q.chapter === c.slug).length;
            return `<button data-ch="${c.slug}" class="${state.chapter === c.slug ? 'selected' : ''}">${c.title} <span class="text-mono text-muted" style="font-size:11px">· ${count}</span></button>`;
          }).join('')}
        </div>

        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:8px">
          <button class="btn-pill accent" id="startBtn">Lancer le quiz →</button>
          <button class="btn-pill ghost" id="randomBtn">🎲 Mix aléatoire (10 Q)</button>
        </div>
      </div>
    `;
    shell.querySelectorAll('#chapterOpts button').forEach(b => {
      b.addEventListener('click', () => {
        shell.querySelectorAll('#chapterOpts button').forEach(x => x.classList.remove('selected'));
        b.classList.add('selected');
        state.chapter = b.dataset.ch || null;
      });
    });
    shell.querySelector('#startBtn').addEventListener('click', () => start(false));
    shell.querySelector('#randomBtn').addEventListener('click', () => start(true));
  }

  function start(random) {
    let pool = data.questions;
    if (state.chapter) pool = pool.filter(q => q.chapter === state.chapter);
    if (random) {
      pool = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
    } else {
      pool = [...pool].sort(() => Math.random() - 0.5);
    }
    state.questions = pool;
    state.currentIdx = 0;
    state.score = 0;
    state.answers = [];
    state.phase = 'playing';
    renderQ();
  }

  function renderQ() {
    const q = state.questions[state.currentIdx];
    if (!q) return done();
    const total = state.questions.length;
    const ch = meta.chapters.find(c => c.slug === q.chapter);
    shell.innerHTML = `
      <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${(state.currentIdx/total)*100}%"></div></div>
      <div class="quiz-meta">
        <span>${ch?.title || q.chapter}</span>
        <span>Question ${state.currentIdx + 1} / ${total}</span>
      </div>
      <div class="quiz-q">${mdInline(q.q)}</div>
      <div class="quiz-choices" id="choices">
        ${q.choices.map((c, i) => `
          <button class="quiz-choice" data-i="${i}">
            <span class="key">${String.fromCharCode(65 + i)}</span>
            <span>${mdInline(c)}</span>
          </button>
        `).join('')}
      </div>
      <div id="afterArea"></div>
    `;
    if (window.renderKatex) window.renderKatex(shell);

    shell.querySelectorAll('#choices .quiz-choice').forEach(btn => {
      btn.addEventListener('click', () => answer(parseInt(btn.dataset.i)));
    });
  }

  function answer(idx) {
    const q = state.questions[state.currentIdx];
    const correct = idx === q.answer;
    state.answers.push({ qIdx: state.currentIdx, answer: idx, correct });
    if (correct) state.score++;

    shell.querySelectorAll('#choices .quiz-choice').forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      if (i === idx && !correct) btn.classList.add('wrong');
    });

    const after = shell.querySelector('#afterArea');
    after.innerHTML = `
      <div class="quiz-explain"><strong>${correct ? '✓ Bonne réponse' : '✕ Mauvaise réponse'}</strong> — ${mdInline(q.explain)}</div>
      <div class="quiz-controls">
        <button class="btn-pill" id="nextQ">${state.currentIdx === state.questions.length - 1 ? 'Voir le score' : 'Question suivante'} →</button>
      </div>
    `;
    if (window.renderKatex) window.renderKatex(after);
    after.querySelector('#nextQ').addEventListener('click', () => {
      state.currentIdx++;
      if (state.currentIdx >= state.questions.length) done();
      else renderQ();
    });
  }

  function done() {
    state.phase = 'done';
    User.recordQuiz(state.chapter || 'all', state.score, state.questions.length);
    const pct = Math.round((state.score / state.questions.length) * 100);
    const message = pct === 100 ? 'Sans-faute. Continue.'
      : pct >= 80 ? 'Très solide.'
      : pct >= 60 ? 'Bonne base, à consolider.'
      : pct >= 40 ? 'Il faut revoir la fiche.'
      : 'Retour à la fiche s\'impose.';
    shell.innerHTML = `
      <div class="quiz-result">
        <div class="score">${state.score}<span style="color:var(--text-dim);font-size:0.5em">/${state.questions.length}</span></div>
        <h2>${pct}% — ${message}</h2>
        <p class="text-muted" style="margin:16px auto 32px;max-width:48ch">Tu peux rejouer pour t'entraîner sur d'autres questions, ou retourner à la fiche.</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center">
          <button class="btn-pill accent" id="replay">Rejouer</button>
          <a class="btn-pill ghost" href="#/quiz" data-link>Choisir un autre chapitre</a>
          ${state.chapter ? `<a class="btn-pill ghost" href="#/fiche/${state.chapter}" data-link>Revoir la fiche</a>` : ''}
        </div>
        <div style="margin-top:48px;padding:24px;border:1px solid var(--border);border-radius:14px;background:var(--bg-card);text-align:left">
          <h4 style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;color:var(--text-dim);margin-bottom:16px">RÉCAPITULATIF</h4>
          ${state.answers.map((a,i) => {
            const q = state.questions[i];
            return `<div style="padding:12px 0;border-bottom:1px solid var(--border);display:flex;gap:12px;align-items:flex-start">
              <span style="color:${a.correct ? 'var(--accent-3)' : 'var(--accent-1)'};font-weight:bold">${a.correct ? '✓' : '✕'}</span>
              <div>
                <div>${mdInline(q.q)}</div>
                ${!a.correct ? `<div style="margin-top:6px;font-size:13px;color:var(--accent-3)">→ ${mdInline(q.choices[q.answer])}</div>` : ''}
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>
    `;
    if (window.renderKatex) window.renderKatex(shell);
    shell.querySelector('#replay').addEventListener('click', () => start(state.questions.length === 10));
  }

  startSetup();
}
