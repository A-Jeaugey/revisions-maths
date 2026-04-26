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

// Render markdown to HTML with KaTeX rendered after
export function renderMarkdown(md, container) {
  if (!window.marked) {
    container.textContent = md;
    return;
  }
  const html = marked.parse(md);
  container.innerHTML = html;
  // Render LaTeX
  if (window.renderKatex) window.renderKatex(container);
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
