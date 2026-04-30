// Build raw / pre-rendered HTML + markdown copies of every fiche, synthèse and
// data file under docs/raw/, plus llms.txt / sitemap.xml / robots.txt at the
// docs/ root. Goal: any LLM, crawler or noscript visitor can read the full
// content of the site by fetching plain HTTP URLs, without executing JS.
//
// Source of truth stays docs/content/*.md and docs/data/*.json. Everything in
// docs/raw/ is generated and safe to delete.

import { readFile, writeFile, mkdir, copyFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT      = path.resolve(__dirname, '..');
const DOCS      = path.join(ROOT, 'docs');
const CONTENT   = path.join(DOCS, 'content');
const DATA      = path.join(DOCS, 'data');
const RAW       = path.join(DOCS, 'raw');
const RAW_SYNTH = path.join(RAW, 'synth');

const SITE_BASE = 'https://arthurjeaugey.com/revisions-maths';
const SITE_NAME = 'RÉV.maths';
const SITE_DESC = 'Révisions Bac Spé Maths Terminale — fiches complètes, synthèses, réflexes, formulaire, quiz et annales 2024-2025.';

const KATEX_VERSION = '0.16.9';
const KATEX_CSS  = `https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/katex.min.css`;
const KATEX_JS   = `https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/katex.min.js`;
const KATEX_AUTO = `https://cdn.jsdelivr.net/npm/katex@${KATEX_VERSION}/dist/contrib/auto-render.min.js`;

marked.setOptions({ gfm: true, breaks: false });

// --- helpers ---------------------------------------------------------------

const log = (...a) => console.log('[build-raw]', ...a);

let totalBytes = 0;
async function writeOut(file, content) {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, content);
  totalBytes += Buffer.byteLength(content);
}

function escHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Pull a short plaintext description from a markdown source: first non-heading,
// non-blockquote, non-table paragraph, stripped of math/markdown markers.
function deriveDescription(md, fallback) {
  const lines = md.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i].trim();
    if (!l) continue;
    if (l.startsWith('#') || l.startsWith('>') || l.startsWith('|') || l.startsWith('---')) continue;
    if (l.startsWith('![') || l.startsWith('```')) continue;
    let out = l
      .replace(/\$\$[\s\S]*?\$\$/g, '')
      .replace(/\$[^$\n]+\$/g, '')
      .replace(/[*_`]/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\s+/g, ' ')
      .trim();
    if (out.length > 30) {
      if (out.length > 200) out = out.slice(0, 197) + '…';
      return out;
    }
  }
  return fallback;
}

// Same protect/restore math idea as docs/js/content.js — keep $...$ and $$...$$
// intact through marked so emphasis (*, _) inside math doesn't get parsed as
// markdown formatting. KaTeX (loaded in the page) renders the survivors.
function renderMd(md) {
  const blocks = [];
  let s = md.replace(/\$\$([\s\S]+?)\$\$/g, (full) => {
    blocks.push(full);
    return `@@RM_MATH_${blocks.length - 1}@@`;
  });
  s = s.replace(/\$((?:[^$\n\\]|\\.)+)\$/g, (full) => {
    blocks.push(full);
    return `@@RM_MATH_${blocks.length - 1}@@`;
  });
  let html = marked.parse(s);
  html = html.replace(/@@RM_MATH_(\d+)@@/g, (_, i) => blocks[+i] || '');
  return html;
}

const PAGE_CSS = `
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, sans-serif;
    line-height: 1.65;
    color: #1a1a1f;
    background: #fafafa;
    padding: 24px 16px 80px;
  }
  .wrap { max-width: 760px; margin: 0 auto; }
  .banner {
    background: #eef3ff; border: 1px solid #c8d6ff; color: #1f3a8a;
    padding: 12px 16px; border-radius: 10px; font-size: 14px;
    margin-bottom: 28px;
  }
  .banner a { color: #1d4ed8; font-weight: 600; }
  h1, h2, h3, h4 { line-height: 1.25; margin: 1.6em 0 0.6em; font-weight: 700; }
  h1 { font-size: 2rem; margin-top: 0; border-bottom: 1px solid #e2e2e6; padding-bottom: 12px; }
  h2 { font-size: 1.5rem; }
  h3 { font-size: 1.2rem; }
  p, ul, ol, blockquote, table { margin: 0.8em 0; }
  ul, ol { padding-left: 1.5em; }
  code { background: #f0f0f3; padding: 1px 5px; border-radius: 4px; font-size: 0.92em;
         font-family: "JetBrains Mono", "Fira Code", ui-monospace, monospace; }
  pre { background: #1a1a1f; color: #f5f5f5; padding: 14px 16px; border-radius: 8px;
        overflow-x: auto; font-size: 0.9em; }
  pre code { background: transparent; color: inherit; padding: 0; }
  blockquote { border-left: 4px solid #c8d6ff; padding: 4px 16px; color: #555; background: #f5f7ff; }
  table { border-collapse: collapse; width: 100%; font-size: 0.95em; display: block; overflow-x: auto; }
  th, td { border: 1px solid #d8d8de; padding: 8px 12px; text-align: left; vertical-align: top; }
  th { background: #f0f0f3; }
  hr { border: none; border-top: 1px solid #d8d8de; margin: 2em 0; }
  a { color: #1d4ed8; }
  footer.foot { margin-top: 60px; padding-top: 24px; border-top: 1px solid #d8d8de;
                font-size: 13px; color: #555; }
  @media (prefers-color-scheme: dark) {
    body { background: #15151a; color: #eaeaea; }
    h1 { border-color: #2a2a32; }
    code { background: #25252c; }
    blockquote { background: #1d1f29; color: #bbb; border-color: #3b4f99; }
    th { background: #25252c; } td, th { border-color: #2a2a32; }
    .banner { background: #1d1f29; color: #b8caff; border-color: #2a3a6a; }
    footer.foot, hr { border-color: #2a2a32; }
  }
`;

function htmlShell({ title, description, canonical, body, jsonLd, banner }) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escHtml(title)}</title>
<meta name="description" content="${escHtml(description)}">
<link rel="canonical" href="${escHtml(canonical)}">
<meta property="og:type" content="article">
<meta property="og:title" content="${escHtml(title)}">
<meta property="og:description" content="${escHtml(description)}">
<meta property="og:url" content="${escHtml(canonical)}">
<meta property="og:site_name" content="${SITE_NAME}">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${escHtml(title)}">
<meta name="twitter:description" content="${escHtml(description)}">
<link rel="stylesheet" href="${KATEX_CSS}" crossorigin="anonymous">
<style>${PAGE_CSS}</style>
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>` : ''}
<script data-goatcounter="https://parabellum.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
</head>
<body>
<div class="wrap">
${banner || ''}
${body}
<footer class="foot">
  Source : <a href="${escHtml(canonical)}">${escHtml(canonical)}</a> ·
  Version interactive du site : <a href="${SITE_BASE}/">${SITE_BASE}/</a>
</footer>
</div>
<script defer src="${KATEX_JS}" crossorigin="anonymous"></script>
<script defer src="${KATEX_AUTO}" crossorigin="anonymous"></script>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    if (window.renderMathInElement) {
      renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$",  right: "$",  display: false }
        ],
        throwOnError: false
      });
    }
  });
</script>
</body>
</html>
`;
}

function bannerFor(spaUrl) {
  return `<div class="banner">📘 Version brute (lisible sans JavaScript, optimisée IA &amp; partage). Pour la fiche interactive, voir : <a href="${escHtml(spaUrl)}">${escHtml(spaUrl)}</a>.</div>`;
}

// --- main ------------------------------------------------------------------

async function main() {
  await mkdir(RAW, { recursive: true });
  await mkdir(RAW_SYNTH, { recursive: true });

  const meta = JSON.parse(await readFile(path.join(DATA, 'meta.json'), 'utf8'));

  // 1) Per-chapter: fiche + synthèse, both .md and .html
  for (const ch of meta.chapters) {
    await emitMarkdownAsset({
      sourceMd: path.join(CONTENT, ch.file),
      outMd:    path.join(RAW, `${ch.slug}.md`),
      outHtml:  path.join(RAW, `${ch.slug}.html`),
      title:    `${ch.title} — Fiche complète · ${SITE_NAME}`,
      description: `Fiche de révision Bac Spé Maths : ${ch.title}. ${ch.subtitle}.`,
      spaUrl:   `${SITE_BASE}/#/fiche/${ch.slug}`,
      canonical:`${SITE_BASE}/raw/${ch.slug}.html`,
      schemaKind: 'Article',
    });

    if (ch.synthFile) {
      await emitMarkdownAsset({
        sourceMd: path.join(CONTENT, ch.synthFile),
        outMd:    path.join(RAW_SYNTH, `${ch.slug}.md`),
        outHtml:  path.join(RAW_SYNTH, `${ch.slug}.html`),
        title:    `${ch.title} — Synthèse · ${SITE_NAME}`,
        description: `Synthèse compacte (réflexes, formules, pièges) : ${ch.title}.`,
        spaUrl:   `${SITE_BASE}/#/fiche/${ch.slug}`,
        canonical:`${SITE_BASE}/raw/synth/${ch.slug}.html`,
        schemaKind: 'Article',
      });
    }
  }

  // 2) Catalogue
  await emitMarkdownAsset({
    sourceMd: path.join(CONTENT, 'catalogue_questions_bac_maths.md'),
    outMd:    path.join(RAW, 'catalogue.md'),
    outHtml:  path.join(RAW, 'catalogue.html'),
    title:    `Catalogue des questions-types Bac · ${SITE_NAME}`,
    description: `Catalogue annoté des questions-types récurrentes en Bac Spé Maths Terminale, classées par chapitre.`,
    spaUrl:   `${SITE_BASE}/#/catalogue`,
    canonical:`${SITE_BASE}/raw/catalogue.html`,
    schemaKind: 'CollectionPage',
  });

  // 3) JSON data files (raw copies)
  for (const file of ['meta.json', 'reflexes.json', 'formulary.json', 'quiz.json']) {
    const src = path.join(DATA, file);
    if (existsSync(src)) {
      await copyFile(src, path.join(RAW, file));
      const sz = (await stat(src)).size;
      totalBytes += sz;
      log(`copied data/${file} (${sz} B)`);
    }
  }

  // 4) raw/index.html — discovery page
  await emitRawIndex(meta);

  // 5) llms.txt, sitemap.xml, robots.txt
  await emitLlmsTxt(meta);
  await emitSitemap(meta);
  await emitRobots();

  log(`done — ~${(totalBytes / 1024).toFixed(1)} KB written`);
}

async function emitMarkdownAsset({ sourceMd, outMd, outHtml, title, description, spaUrl, canonical, schemaKind }) {
  const md = await readFile(sourceMd, 'utf8');
  const stMtime = (await stat(sourceMd)).mtime.toISOString();

  await writeOut(outMd, md);

  // Prefer the explicit description (clean, hand-written from meta) over the
  // auto-derived first paragraph: the latter often loses meaning once $...$
  // math is stripped out.
  const desc = description;
  const renderedBody = renderMd(md);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': schemaKind || 'Article',
    headline: title,
    description: desc,
    inLanguage: 'fr',
    dateModified: stMtime,
    url: canonical,
    mainEntityOfPage: canonical,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: `${SITE_BASE}/` },
    author: { '@type': 'Person', name: 'Arthur Jeaugey' },
  };

  const html = htmlShell({
    title,
    description: desc,
    canonical,
    body: `<article>${renderedBody}</article>`,
    jsonLd,
    banner: bannerFor(spaUrl),
  });

  await writeOut(outHtml, html);
  log(`wrote ${path.relative(DOCS, outHtml)}  (${(html.length/1024).toFixed(1)} KB)`);
}

async function emitRawIndex(meta) {
  const ficheRows = meta.chapters.map((ch, i) => `
    <tr>
      <td><strong>CH.${String(i+1).padStart(2,'0')}</strong></td>
      <td><a href="${ch.slug}.html">${escHtml(ch.title)}</a><br><small>${escHtml(ch.subtitle)}</small></td>
      <td><a href="${ch.slug}.md">.md</a> · <a href="${ch.slug}.html">.html</a></td>
      <td>${ch.synthFile ? `<a href="synth/${ch.slug}.md">.md</a> · <a href="synth/${ch.slug}.html">.html</a>` : '—'}</td>
    </tr>`).join('');

  const body = `
    <h1>${SITE_NAME} — version brute</h1>
    <p>${escHtml(SITE_DESC)}</p>
    <p>Ces pages sont des copies pré-rendues, lisibles sans JavaScript. Idéal pour
       les LLM, crawlers et lecteurs d'écran. La version interactive complète se
       trouve sur <a href="${SITE_BASE}/">${SITE_BASE}/</a>.</p>

    <h2>Fiches par chapitre</h2>
    <table>
      <thead><tr><th>#</th><th>Chapitre</th><th>Fiche complète</th><th>Synthèse</th></tr></thead>
      <tbody>${ficheRows}</tbody>
    </table>

    <h2>Catalogue de questions-types</h2>
    <ul>
      <li><a href="catalogue.html">catalogue.html</a> — version rendue</li>
      <li><a href="catalogue.md">catalogue.md</a> — markdown brut</li>
    </ul>

    <h2>Données structurées</h2>
    <ul>
      <li><a href="meta.json">meta.json</a> — métadonnées des chapitres et annales</li>
      <li><a href="reflexes.json">reflexes.json</a> — cartes réflexes (déclencheurs/réponses)</li>
      <li><a href="formulary.json">formulary.json</a> — formulaire complet par chapitre</li>
      <li><a href="quiz.json">quiz.json</a> — questions du quiz par chapitre</li>
    </ul>

    <h2>Pour les LLM</h2>
    <p>Voir <a href="${SITE_BASE}/llms.txt">/llms.txt</a> pour l'index machine-lisible.</p>
  `;

  const html = htmlShell({
    title: `${SITE_NAME} — index brut`,
    description: SITE_DESC,
    canonical: `${SITE_BASE}/raw/`,
    body,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${SITE_NAME} — index brut`,
      description: SITE_DESC,
      url: `${SITE_BASE}/raw/`,
      inLanguage: 'fr',
    },
  });

  await writeOut(path.join(RAW, 'index.html'), html);
  log('wrote raw/index.html');
}

async function emitLlmsTxt(meta) {
  const lines = [];
  lines.push(`# ${SITE_NAME} — Révisions Bac Spé Maths Terminale`);
  lines.push('');
  lines.push(`> ${SITE_DESC}`);
  lines.push('');
  lines.push(`Site interactif : ${SITE_BASE}/`);
  lines.push(`Index des ressources brutes : ${SITE_BASE}/raw/`);
  lines.push('');

  lines.push('## Fiches complètes');
  lines.push('');
  for (const ch of meta.chapters) {
    lines.push(`- [${ch.title} — ${ch.subtitle}](${SITE_BASE}/raw/${ch.slug}.md)`);
  }
  lines.push('');

  lines.push('## Synthèses');
  lines.push('');
  for (const ch of meta.chapters) {
    if (ch.synthFile) {
      lines.push(`- [${ch.title} — synthèse](${SITE_BASE}/raw/synth/${ch.slug}.md)`);
    }
  }
  lines.push('');

  lines.push('## Catalogue');
  lines.push('');
  lines.push(`- [Catalogue des questions-types Bac](${SITE_BASE}/raw/catalogue.md)`);
  lines.push('');

  lines.push('## Données');
  lines.push('');
  lines.push(`- [meta.json — métadonnées chapitres et annales](${SITE_BASE}/raw/meta.json)`);
  lines.push(`- [reflexes.json — cartes réflexes](${SITE_BASE}/raw/reflexes.json)`);
  lines.push(`- [formulary.json — formulaire complet](${SITE_BASE}/raw/formulary.json)`);
  lines.push(`- [quiz.json — banque de quiz](${SITE_BASE}/raw/quiz.json)`);
  lines.push('');

  await writeOut(path.join(DOCS, 'llms.txt'), lines.join('\n'));
  log('wrote llms.txt');
}

async function emitSitemap(meta) {
  const urls = [];
  const today = new Date().toISOString().slice(0, 10);

  urls.push({ loc: `${SITE_BASE}/`, lastmod: today });
  urls.push({ loc: `${SITE_BASE}/raw/`, lastmod: today });
  urls.push({ loc: `${SITE_BASE}/raw/catalogue.html`,
              lastmod: (await stat(path.join(CONTENT, 'catalogue_questions_bac_maths.md'))).mtime.toISOString().slice(0, 10) });

  for (const ch of meta.chapters) {
    const ficheMtime = (await stat(path.join(CONTENT, ch.file))).mtime.toISOString().slice(0, 10);
    urls.push({ loc: `${SITE_BASE}/raw/${ch.slug}.html`, lastmod: ficheMtime });
    if (ch.synthFile) {
      const synthMtime = (await stat(path.join(CONTENT, ch.synthFile))).mtime.toISOString().slice(0, 10);
      urls.push({ loc: `${SITE_BASE}/raw/synth/${ch.slug}.html`, lastmod: synthMtime });
    }
  }

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n') +
    `\n</urlset>\n`;

  await writeOut(path.join(DOCS, 'sitemap.xml'), xml);
  log(`wrote sitemap.xml (${urls.length} URLs)`);
}

async function emitRobots() {
  const txt =
`User-agent: *
Allow: /

Sitemap: ${SITE_BASE}/sitemap.xml

# Index machine-lisible (llmstxt.org)
# ${SITE_BASE}/llms.txt
`;
  await writeOut(path.join(DOCS, 'robots.txt'), txt);
  log('wrote robots.txt');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
