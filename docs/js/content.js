// Content loading utilities (markdown fiches, JSON data)
const _cache = new Map();

export async function loadMeta() {
  return loadJSON('data/meta.json');
}

export async function loadReflexes() {
  return loadJSON('data/reflexes.json');
}

export async function loadFormulary() {
  return loadJSON('data/formulary.json');
}

export async function loadQuizQuestions() {
  return loadJSON('data/quiz.json');
}

async function loadJSON(path) {
  if (_cache.has(path)) return _cache.get(path);
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Could not load ${path}`);
  const data = await res.json();
  _cache.set(path, data);
  return data;
}

export async function loadFiche(filename) {
  const path = `content/${filename}`;
  if (_cache.has(path)) return _cache.get(path);
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Fiche introuvable : ${filename}`);
  const md = await res.text();
  _cache.set(path, md);
  return md;
}

export async function loadAllFiches(meta) {
  const all = await Promise.all(
    meta.chapters.map(async ch => ({
      slug: ch.slug,
      title: ch.title,
      md: await loadFiche(ch.file),
    }))
  );
  return all;
}

export async function loadCatalogue() {
  const path = 'content/catalogue_questions_bac_maths.md';
  if (_cache.has(path)) return _cache.get(path);
  const res = await fetch(path);
  if (!res.ok) throw new Error('Catalogue introuvable');
  const md = await res.text();
  _cache.set(path, md);
  return md;
}

// Convert math-y inline code spans (`U_{n+1}`, `q^n`, `(-1)^n`, `2^(n+1)`) into
// nicely rendered super/subscripts. We handle `^x`, `^{x}` and `^(x)` (and the
// `_` equivalents); everything else inside the code stays as-is.
function prettifyInlineMath(text) {
  return String(text)
    .replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>')
    .replace(/\^\(([^)]+)\)/g, '<sup>$1</sup>')
    .replace(/\^([A-Za-z0-9+\-]+)/g, '<sup>$1</sup>')
    .replace(/_\{([^}]+)\}/g, '<sub>$1</sub>')
    .replace(/_\(([^)]+)\)/g, '<sub>$1</sub>')
    .replace(/_([A-Za-z0-9+\-]+)/g, '<sub>$1</sub>');
}

// Render markdown to HTML with KaTeX rendered after
export function renderMarkdown(md, container) {
  if (!window.marked) {
    container.textContent = md;
    return;
  }
  const html = marked.parse(md);
  container.innerHTML = html;

  // Post-process inline <code> elements: turn `^n` / `_{n+1}` into proper
  // <sup>/<sub>. We don't touch <code> inside <pre> (real code blocks).
  container.querySelectorAll('code').forEach(el => {
    if (el.closest('pre')) return;
    const before = el.textContent;
    if (!/[\^_]/.test(before)) return;
    el.innerHTML = prettifyInlineMath(before);
  });

  // Render LaTeX
  if (window.renderKatex) window.renderKatex(container);
}

// Inline-render a short string: HTML-escape and parse as inline markdown
// (bold, italic, code). KaTeX will handle the $...$ pieces afterwards because
// the browser decodes &lt; back to '<' inside text nodes when KaTeX scans them.
// Used for quiz questions, reflex cards, formula names — anywhere we inject
// user content into innerHTML.
export function mdInline(s) {
  if (s == null) return '';
  // Escape HTML first so user content like '$f(a)<k$' isn't parsed as broken
  // tags by the browser. Then run inline markdown so **bold** still works.
  // KaTeX reads from text nodes (which decode &lt; back to '<'), so the math
  // round-trips intact.
  const escaped = escapeHTML(String(s));
  if (window.marked && typeof marked.parseInline === 'function') {
    return marked.parseInline(escaped);
  }
  return escaped;
}

export function escapeHTML(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// ---------------------------------------------------------------------------
// linkifyCrossRefs(container, meta)
// Walks the rendered fiche body and turns inline cross-references into real
// anchor links. Two patterns are recognised:
//   - In-fiche section refs: '§I.3', '§IV.2', '§V', '§I.1-2'
//     -> linked to the H2 section starting with the same roman numeral.
//   - Inter-fiche refs: 'cf. fiche suites', 'cf. fiche intégration', etc.
//     -> linked to the corresponding fiche route '#/fiche/<slug>'.
// Run AFTER extractTOC so H2/H3 already have their ids.
// ---------------------------------------------------------------------------

const CHAPTER_KEY_TO_SLUG = {
  'suites': 'suites',
  'géométrie': 'geometrie-espace',
  'geometrie': 'geometrie-espace',
  'probas': 'probas-binomiale',
  'binomiale': 'probas-binomiale',
  'exp': 'exp-ln',
  'ln': 'exp-ln',
  'exp/ln': 'exp-ln',
  'exponentielle': 'exp-ln',
  'logarithme': 'exp-ln',
  'limites': 'limites-continuite',
  'composée': 'limites-continuite',
  'composee': 'limites-continuite',
  'continuité': 'limites-continuite',
  'convexité': 'limites-continuite',
  'primitives': 'primitives-edo',
  'edo': 'primitives-edo',
  'différentielles': 'primitives-edo',
  'intégration': 'integration',
  'integration': 'integration',
};

export function linkifyCrossRefs(container) {
  // 1) Build a "I" -> first-h2-with-that-roman-id map
  const romanToId = {};
  container.querySelectorAll('h2, h3').forEach(h => {
    const m = h.textContent.trim().match(/^([IVX]+)\./);
    if (m && !romanToId[m[1]] && h.id) romanToId[m[1]] = h.id;
  });

  // 2) Walk text nodes, replace § refs and cf-fiche refs.
  // We don't touch text inside existing <a>, <code>, <pre>, or headings.
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode(n) {
      if (!n.textContent || !n.textContent.match(/§|fiche/i)) return NodeFilter.FILTER_REJECT;
      const p = n.parentElement;
      if (!p) return NodeFilter.FILTER_REJECT;
      if (p.closest('a, code, pre, h1, h2, h3, h4, h5, h6')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const targets = [];
  while (walker.nextNode()) targets.push(walker.currentNode);

  for (const node of targets) {
    let html = escapeHTML(node.textContent);
    let changed = false;

    // §X / §X.Y / §X.Y-Z
    html = html.replace(/§([IVX]+)(\.\d+(?:-\d+)?)?/g, (m, roman, sub) => {
      const id = romanToId[roman];
      if (!id) return m;
      changed = true;
      return `<a href="#${id}" class="xref">§${roman}${sub || ''}</a>`;
    });

    // 'cf. fiche XYZ' / 'voir fiche XYZ' (best-effort, single keyword)
    html = html.replace(/\b(cf\.|voir)\s+fiche\s+([\wÀ-ÿ\/-]+)/gi, (m, prefix, name) => {
      const slug = CHAPTER_KEY_TO_SLUG[name.toLowerCase()];
      if (!slug) return m;
      changed = true;
      return `${prefix} <a href="#/fiche/${slug}" class="xref">fiche ${name}</a>`;
    });

    if (!changed) continue;
    const wrap = document.createElement('span');
    wrap.innerHTML = html;
    while (wrap.firstChild) node.parentNode.insertBefore(wrap.firstChild, node);
    node.parentNode.removeChild(node);
  }
}

// Slugify a heading text for IDs.
// Always prefix with "s-" so the id never starts with a digit (CSS query
// selectors reject `#1-foo` style ids — they must be escaped, which is brittle).
export function slugify(s) {
  const base = String(s)
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return 's-' + (base || 'section');
}

// Extract headings for TOC
export function extractTOC(container) {
  const hs = container.querySelectorAll('h2, h3');
  const toc = [];
  const seen = new Map();
  hs.forEach(h => {
    const text = h.textContent.trim();
    let id = slugify(text);
    const count = (seen.get(id) || 0) + 1;
    seen.set(id, count);
    if (count > 1) id = id + '-' + count;
    h.id = id;
    toc.push({
      level: h.tagName === 'H2' ? 2 : 3,
      text, id,
    });
  });
  return toc;
}
