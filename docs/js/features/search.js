import { loadAllFiches, loadCatalogue } from '../content.js';

let _index = null; // {chapter, title, paragraphs:[{id, text}]}[]

export function initSearch(meta) {
  const modal = document.getElementById('searchModal');
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');

  const open = () => {
    modal.classList.add('open');
    setTimeout(() => input?.focus(), 50);
    if (!_index) buildIndex(meta);
  };
  const close = () => modal.classList.remove('open');

  document.getElementById('searchBtn')?.addEventListener('click', open);
  document.querySelectorAll('[data-close-modal]').forEach(b => {
    b.addEventListener('click', () => {
      document.getElementById(b.dataset.closeModal)?.classList.remove('open');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); open(); }
    if (e.key === '/' && !modal.classList.contains('open') && !['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)) {
      e.preventDefault(); open();
    }
  });

  input?.addEventListener('input', () => {
    const q = input.value.trim();
    if (!q) {
      results.innerHTML = `<div class="search-hint">Tape un mot-clé : « récurrence », « point fixe », « binomiale », « IPP »…</div>`;
      return;
    }
    if (!_index) {
      results.innerHTML = `<div class="search-hint">Indexation en cours…</div>`;
      return;
    }
    const matches = search(q);
    if (matches.length === 0) {
      results.innerHTML = `<div class="search-hint">Aucun résultat pour « ${escapeHtml(q)} ».</div>`;
      return;
    }
    results.innerHTML = matches.slice(0, 30).map(m => `
      <a class="search-result" href="#/fiche/${m.chapter}" data-link data-close-modal-on-click>
        <span class="search-result-chapter">${m.chapterTitle}</span>
        <span class="search-result-snippet">${highlight(m.snippet, q)}</span>
      </a>
    `).join('');
    results.querySelectorAll('a.search-result').forEach(a => {
      a.addEventListener('click', () => close());
    });
  });

  // Close on backdrop
  modal.querySelector('.modal-backdrop')?.addEventListener('click', close);
}

async function buildIndex(meta) {
  try {
    const fiches = await loadAllFiches(meta);
    _index = fiches.map(f => {
      const ch = meta.chapters.find(c => c.slug === f.slug);
      const paragraphs = f.md
        .split(/\n\n+/)
        .map(p => p.replace(/\n/g, ' ').trim())
        .filter(p => p.length > 30 && !p.startsWith('|') && !p.startsWith('```'));
      return {
        chapter: f.slug,
        chapterTitle: ch?.title || f.slug,
        paragraphs,
      };
    });
  } catch (err) {
    console.warn('Index build failed', err);
  }
}

function search(q) {
  const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  const qn = norm(q);
  const tokens = qn.split(/\s+/).filter(Boolean);
  const out = [];
  for (const fiche of _index) {
    for (const para of fiche.paragraphs) {
      const pn = norm(para);
      if (tokens.every(t => pn.includes(t))) {
        out.push({
          chapter: fiche.chapter,
          chapterTitle: fiche.chapterTitle,
          snippet: extractSnippet(para, q, 180),
          score: pn.indexOf(qn),
        });
        if (out.length > 60) break;
      }
    }
  }
  out.sort((a,b) => a.score - b.score);
  return out;
}

function extractSnippet(text, q, len) {
  const cleaned = cleanMarkdown(text);
  const idx = cleaned.toLowerCase().indexOf(q.toLowerCase());
  if (idx < 0) return cleaned.slice(0, len) + (cleaned.length > len ? '…' : '');
  const start = Math.max(0, idx - 60);
  const end = Math.min(cleaned.length, idx + len - 60);
  return (start > 0 ? '…' : '') + cleaned.slice(start, end) + (end < cleaned.length ? '…' : '');
}

// Strip markdown markers and common LaTeX commands so search snippets read
// like prose. We don't try to render bold/italic in the dropdown — readability
// matters more than fidelity for a 180-char preview.
function cleanMarkdown(s) {
  let t = String(s);
  // Drop heading markers (### Title -> Title)
  t = t.replace(/^#{1,6}\s+/gm, '');
  // Bold/italic markers (greedy enough for short spans)
  t = t.replace(/\*\*([^*]+)\*\*/g, '$1');
  t = t.replace(/__([^_]+)__/g, '$1');
  t = t.replace(/(^|[\s(])\*([^\s*][^*]*)\*/g, '$1$2');
  t = t.replace(/(^|[\s(])_([^\s_][^_]*)_/g, '$1$2');
  // Inline code (`...`)
  t = t.replace(/`([^`]+)`/g, '$1');
  // Math: drop $...$ and $$...$$ delimiters, then translate common commands.
  t = t.replace(/\$\$([^$]+)\$\$/g, '$1');
  t = t.replace(/\$([^$]+)\$/g, '$1');
  t = t
    .replace(/\\leq/g, '≤').replace(/\\geq/g, '≥')
    .replace(/\\neq/g, '≠').replace(/\\approx/g, '≈')
    .replace(/\\to/g, '→').replace(/\\Rightarrow/g, '⇒')
    .replace(/\\Leftrightarrow/g, '⇔').replace(/\\iff/g, '⇔')
    .replace(/\\infty/g, '∞').replace(/\\pm/g, '±')
    .replace(/\\times/g, '×').replace(/\\cdot/g, '·')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2')
    .replace(/\\sum/g, 'Σ').replace(/\\int/g, '∫')
    .replace(/\\ln/g, 'ln').replace(/\\log/g, 'log')
    .replace(/\\sin/g, 'sin').replace(/\\cos/g, 'cos').replace(/\\tan/g, 'tan')
    .replace(/\\mathbb\{N\}/g, 'ℕ').replace(/\\mathbb\{R\}/g, 'ℝ')
    .replace(/\\mathbb\{Z\}/g, 'ℤ').replace(/\\mathbb\{Q\}/g, 'ℚ')
    .replace(/\\vec\{([^}]+)\}/g, '$1⃗')
    // Subscripts/superscripts: u_{n+1} -> u(n+1), x^2 -> x²
    .replace(/\^2/g, '²').replace(/\^3/g, '³').replace(/\^n/g, 'ⁿ')
    .replace(/_\{([^}]+)\}/g, '_$1')
    .replace(/\^\{([^}]+)\}/g, '^$1')
    // Drop any remaining backslash commands
    .replace(/\\[a-zA-Z]+/g, '')
    // Tidy braces and stray markdown leftovers
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ');
  return t.trim();
}

function highlight(text, q) {
  const escaped = escapeHtml(text);
  const re = new RegExp('(' + escapeRegex(q) + ')', 'gi');
  return escaped.replace(re, '<mark>$1</mark>');
}

function escapeRegex(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[c]));
}
