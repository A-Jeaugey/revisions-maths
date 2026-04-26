#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Build a beautifully styled PDF for each fiche.
 *
 * Reads docs/data/meta.json to get chapter info, reads each markdown file
 * from docs/content/, renders it via marked + KaTeX (loaded from CDN inside
 * a Puppeteer page), wraps it in a dark-themed HTML template that matches
 * the site, then exports to docs/fiches-pdf/<slug>.pdf.
 *
 * Usage:
 *   node scripts/build-pdfs.js              # all chapters
 *   node scripts/build-pdfs.js suites       # one chapter
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { marked } = require('marked');
const katex = require('katex');

const ROOT = path.resolve(__dirname, '..');
const CONTENT = path.join(ROOT, 'docs', 'content');
const OUT = path.join(ROOT, 'docs', 'fiches-pdf');
const META = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs', 'data', 'meta.json'), 'utf8'));

// Read KaTeX CSS and rewrite font URLs to absolute file:// paths so
// Chromium loads them off disk instead of trying to hit the CDN.
const KATEX_FONTS_DIR = path.join(ROOT, 'node_modules', 'katex', 'dist', 'fonts');
const KATEX_CSS_RAW = fs.readFileSync(path.join(ROOT, 'node_modules', 'katex', 'dist', 'katex.min.css'), 'utf8');
const KATEX_CSS_REWRITTEN = KATEX_CSS_RAW.replace(/url\(fonts\/([^)]+)\)/g, (_, file) => {
  return `url(file://${path.join(KATEX_FONTS_DIR, file)})`;
});

marked.setOptions({ gfm: true, breaks: false, headerIds: false, mangle: false });

// Server-side render LaTeX in markdown source so we don't depend on the
// network during the puppeteer render. We protect math spans before marked
// touches them, then swap in the rendered HTML afterwards.
function renderMathInMarkdown(md) {
  const blocks = [];
  // $$...$$ — display math
  md = md.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => {
    const html = katex.renderToString(tex.trim(), { displayMode: true, throwOnError: false, strict: 'ignore', trust: true });
    blocks.push(html);
    return `@@MATHBLOCK${blocks.length - 1}@@`;
  });
  // $...$ — inline math (single $ on each side, not crossing line)
  md = md.replace(/\$((?:[^$\n\\]|\\.)+)\$/g, (_, tex) => {
    const html = katex.renderToString(tex.trim(), { displayMode: false, throwOnError: false, strict: 'ignore', trust: true });
    blocks.push(html);
    return `@@MATHBLOCK${blocks.length - 1}@@`;
  });
  return { md, blocks };
}

function injectMath(html, blocks) {
  return html.replace(/@@MATHBLOCK(\d+)@@/g, (_, i) => blocks[+i] || '');
}

// Walk inline <code>...</code> spans (NOT inside <pre>) and turn `^x` / `_x`
// patterns into <sup>/<sub>. Mirrors the same post-process used by the
// website so PDFs and screen render identically.
function prettifyInlineCodes(html) {
  // Strip <pre>...</pre> blocks, transform inline <code>, then put <pre>s back.
  const preBlocks = [];
  html = html.replace(/<pre[\s\S]*?<\/pre>/g, m => {
    preBlocks.push(m);
    return `@@PREBLOCK${preBlocks.length - 1}@@`;
  });
  html = html.replace(/<code>([^<]*)<\/code>/g, (full, inner) => {
    if (!/[\^_]/.test(inner)) return full;
    const out = inner
      .replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>')
      .replace(/\^([A-Za-z0-9+\-]+)/g, '<sup>$1</sup>')
      .replace(/_\{([^}]+)\}/g, '<sub>$1</sub>')
      .replace(/_([A-Za-z0-9+\-]+)/g, '<sub>$1</sub>');
    return `<code>${out}</code>`;
  });
  html = html.replace(/@@PREBLOCK(\d+)@@/g, (_, i) => preBlocks[+i]);
  return html;
}

// Strip the leading H1 + blockquote subtitle so we don't duplicate them
// (they're already in the cover page).
function stripHead(md) {
  return md.replace(/^#\s+[^\n]+\n+(?:>\s+[^\n]+\n+)?(?:---\n+)?/, '');
}

function renderTemplate(ch, html) {
  const num = String(META.chapters.findIndex(c => c.slug === ch.slug) + 1).padStart(2, '0');
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>${ch.title} — Fiche</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,800;9..144,900&display=swap" rel="stylesheet">
<style>${KATEX_CSS_REWRITTEN}</style>
<style>
  :root {
    --c1: ${ch.color};
    --c2: ${ch.color2};
    --bg: #08080d;
    --bg-soft: #0e0e16;
    --bg-card: rgba(255,255,255,0.025);
    --text: #f5f5f7;
    --text-muted: #b0b0bc;
    --text-dim: #6a6a78;
    --border: rgba(255,255,255,0.08);
    --border-strong: rgba(255,255,255,0.18);
    --accent-1: #ff3366;
    --accent-2: #00d9ff;
    --accent-3: #c8ff00;
    --accent-warn: #ffaa00;
  }

  @page {
    size: A4;
    margin: 18mm 16mm 22mm 16mm;
    background: var(--bg);
    @bottom-right {
      content: counter(page) " / " counter(pages);
      font-family: 'JetBrains Mono', monospace;
      font-size: 8pt;
      color: #6a6a78;
    }
    @bottom-left {
      content: "${ch.title.replace(/"/g, '\\"')} · Bac Spé Maths";
      font-family: 'JetBrains Mono', monospace;
      font-size: 8pt;
      color: #6a6a78;
    }
  }
  @page :first {
    margin: 0;
    @bottom-right { content: ""; }
    @bottom-left { content: ""; }
  }

  * { box-sizing: border-box; }

  html, body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', system-ui, sans-serif;
    font-size: 10.5pt;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* =================== COVER =================== */
  .cover {
    position: relative;
    width: 210mm;
    height: 297mm;
    padding: 28mm 22mm;
    overflow: hidden;
    page-break-after: always;
    background:
      radial-gradient(80% 60% at 0% 0%, color-mix(in srgb, var(--c1) 35%, transparent), transparent 60%),
      radial-gradient(80% 60% at 100% 100%, color-mix(in srgb, var(--c2) 35%, transparent), transparent 60%),
      var(--bg);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .cover::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
  }
  .cover-top, .cover-mid, .cover-bot { position: relative; }

  .cover-eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9pt;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.55);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cover-eyebrow .num {
    color: var(--c1);
    font-weight: 600;
  }

  .cover-icon {
    font-family: 'Fraunces', serif;
    font-size: 110pt;
    line-height: 1;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 8mm;
  }

  .cover-title {
    font-family: 'Fraunces', Georgia, serif;
    font-weight: 600;
    font-size: 56pt;
    line-height: 0.95;
    letter-spacing: -0.025em;
    margin: 0 0 6mm;
    color: var(--text);
  }
  .cover-title .gradient {
    background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-style: italic;
  }

  .cover-subtitle {
    font-size: 14pt;
    color: var(--text-muted);
    max-width: 140mm;
    margin: 0 0 10mm;
  }

  .cover-tags {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 14mm;
  }
  .cover-tag {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8pt;
    padding: 2.5mm 4mm;
    border: 1px solid var(--border-strong);
    border-radius: 99px;
    color: var(--text-muted);
    letter-spacing: 0.04em;
  }

  .cover-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8mm;
    padding-top: 6mm;
    border-top: 1px solid var(--border-strong);
  }
  .cover-stat-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 7.5pt;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-dim);
    margin-bottom: 2mm;
  }
  .cover-stat-value {
    font-family: 'Fraunces', serif;
    font-size: 22pt;
    font-weight: 600;
    color: var(--text);
  }
  .cover-stat-value.accent {
    background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .cover-footer {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8pt;
    color: var(--text-dim);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
  }

  /* =================== BODY =================== */
  .doc-body {
    padding: 0;
    color: var(--text);
  }

  .doc-body h2 {
    font-family: 'Fraunces', Georgia, serif;
    font-weight: 600;
    font-size: 24pt;
    line-height: 1.1;
    letter-spacing: -0.015em;
    margin: 14mm 0 4mm;
    color: var(--text);
    page-break-after: avoid;
    break-after: avoid;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 3mm;
    border-bottom: 1px solid var(--border-strong);
  }

  .doc-body h3 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 13pt;
    margin: 8mm 0 2.5mm;
    color: var(--text);
    page-break-after: avoid;
  }

  .doc-body h4 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 11pt;
    margin: 5mm 0 1.5mm;
    color: var(--text-muted);
    page-break-after: avoid;
  }

  .doc-body p {
    margin: 0 0 3mm;
    color: var(--text-muted);
    orphans: 3;
    widows: 3;
  }

  .doc-body strong { color: var(--text); font-weight: 600; }
  .doc-body em { color: var(--text); font-style: italic; }

  .doc-body ul, .doc-body ol {
    margin: 2mm 0 4mm 6mm;
    padding: 0;
    color: var(--text-muted);
  }
  .doc-body li { margin-bottom: 1.2mm; }
  .doc-body li::marker { color: var(--c1); }

  /* Tables — glassy dark style */
  .doc-body table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin: 4mm 0;
    font-size: 9.5pt;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 4px;
    overflow: hidden;
    page-break-inside: avoid;
  }
  .doc-body th {
    padding: 3mm 3.5mm;
    background: linear-gradient(135deg, color-mix(in srgb, var(--c1) 20%, transparent), color-mix(in srgb, var(--c2) 20%, transparent));
    color: var(--text);
    font-family: 'JetBrains Mono', monospace;
    font-size: 8pt;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: left;
    border-bottom: 1px solid var(--border-strong);
  }
  .doc-body td {
    padding: 3mm 3.5mm;
    border-bottom: 1px solid var(--border);
    color: var(--text-muted);
    vertical-align: top;
  }
  .doc-body tr:last-child td { border-bottom: 0; }
  .doc-body td strong { color: var(--text); }

  /* Blockquote — used as warnings/tips/notes */
  .doc-body blockquote {
    margin: 4mm 0;
    padding: 4mm 5mm;
    border-left: 3px solid;
    border-image: linear-gradient(180deg, var(--c1), var(--c2)) 1;
    background: var(--bg-card);
    border-radius: 0 4px 4px 0;
    color: var(--text);
    page-break-inside: avoid;
  }
  .doc-body blockquote p {
    margin: 0 0 2mm;
    color: var(--text);
  }
  .doc-body blockquote p:last-child { margin-bottom: 0; }
  .doc-body blockquote strong { color: var(--accent-3); }

  /* Inline code */
  .doc-body code {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9pt;
    background: rgba(255,51,102,0.12);
    padding: 0.5mm 1.8mm;
    border-radius: 3px;
    color: var(--accent-1);
    border: 1px solid rgba(255,51,102,0.2);
  }
  .doc-body code sup, .doc-body code sub {
    font-size: 0.75em;
    line-height: 0;
    position: relative;
  }
  .doc-body code sup { top: -0.5em; }
  .doc-body code sub { bottom: -0.3em; }

  /* Code blocks */
  .doc-body pre {
    background: #04040a;
    border: 1px solid var(--border);
    padding: 4mm 5mm;
    border-radius: 4px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 8.5pt;
    line-height: 1.55;
    overflow: visible;
    white-space: pre-wrap;
    margin: 4mm 0;
    page-break-inside: avoid;
    color: #e8e8ee;
  }
  .doc-body pre code {
    background: transparent;
    color: inherit;
    padding: 0;
    border: 0;
    font-size: inherit;
  }

  /* Horizontal rule between major sections */
  .doc-body hr {
    border: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border-strong) 30%, var(--border-strong) 70%, transparent);
    margin: 10mm 0;
  }

  /* Links */
  .doc-body a {
    color: var(--accent-2);
    text-decoration: none;
    border-bottom: 0.5pt dotted var(--accent-2);
  }

  /* KaTeX */
  .doc-body .katex {
    font-size: 1.05em;
    color: var(--text);
  }
  .doc-body .katex-display {
    margin: 4mm 0;
    page-break-inside: avoid;
  }
  /* KaTeX boxed (\\boxed{...}) — give it a subtle glow */
  .doc-body .katex .boxed {
    border-color: var(--c1) !important;
  }

  /* Avoid breaking blocks in awkward places */
  .doc-body table,
  .doc-body pre,
  .doc-body blockquote,
  .doc-body .katex-display {
    break-inside: avoid;
  }

  /* Section anchor — hide them in PDF */
  .doc-body h2 a,
  .doc-body h3 a,
  .doc-body h4 a { display: none; }

  /* Wrapper around the body to add page margins (the cover handles its own) */
  .doc-wrap {
    padding: 0 0;
  }

  /* First H2 after the cover should not have a huge top margin */
  .doc-body > h2:first-child { margin-top: 0; }
</style>
</head>
<body>

<section class="cover">
  <div class="cover-top">
    <div class="cover-eyebrow">
      <span><span class="num">CH.${num}</span> · FICHE DE COMBAT</span>
      <span>BAC SPÉ MATHS · TERMINALE</span>
    </div>
  </div>

  <div class="cover-mid">
    <div class="cover-icon">${ch.icon || '∫'}</div>
    <h1 class="cover-title">${ch.title}<span class="gradient">.</span></h1>
    <p class="cover-subtitle">${ch.subtitle}</p>
    <div class="cover-tags">
      ${(ch.tags || []).map(t => `<span class="cover-tag">#${t}</span>`).join('')}
    </div>
  </div>

  <div class="cover-bot">
    <div class="cover-stats">
      <div>
        <div class="cover-stat-label">Fréquence au bac</div>
        <div class="cover-stat-value accent">${stripEmoji(ch.frequency)}</div>
      </div>
      <div>
        <div class="cover-stat-label">Lecture</div>
        <div class="cover-stat-value">~${ch.duration} min</div>
      </div>
      <div>
        <div class="cover-stat-label">Session</div>
        <div class="cover-stat-value">2026</div>
      </div>
    </div>
    <div class="cover-footer" style="margin-top:8mm">
      <span>arthurjeaugey.com / revisions-maths</span>
      <span>${new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
    </div>
  </div>
</section>

<main class="doc-wrap">
  <div class="doc-body">
    ${html}
  </div>
</main>

</body>
</html>`;
}

function stripEmoji(s) {
  return String(s || '').replace(/[\u{1F300}-\u{1FAFF}]|[\u{2600}-\u{27BF}]/gu, '').trim();
}

async function buildOne(browser, ch) {
  const mdPath = path.join(CONTENT, ch.file);
  if (!fs.existsSync(mdPath)) {
    console.warn(`! Missing markdown for ${ch.slug}: ${mdPath}`);
    return;
  }
  const md = fs.readFileSync(mdPath, 'utf8');
  // 1) Pre-render math server-side so we don't need the browser to do it.
  const { md: protectedMd, blocks } = renderMathInMarkdown(stripHead(md));
  // 2) Run marked on the math-free markdown.
  let html = marked.parse(protectedMd);
  // 3) Splice the rendered math HTML back in.
  html = injectMath(html, blocks);
  // 4) Pretty-print exponents/subscripts in inline <code> spans.
  html = prettifyInlineCodes(html);

  const fullHtml = renderTemplate(ch, html);

  const page = await browser.newPage();
  await page.setContent(fullHtml, { waitUntil: 'load' });
  // Wait for web fonts (Inter / Fraunces / JetBrains Mono / KaTeX fonts).
  await page.evaluate(() => document.fonts ? document.fonts.ready : Promise.resolve());
  await new Promise(r => setTimeout(r, 150));

  const outPath = path.join(OUT, `${ch.slug}.pdf`);
  await page.pdf({
    path: outPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
  });
  await page.close();
  const size = fs.statSync(outPath).size;
  console.log(`✓ ${ch.slug.padEnd(40)} ${(size/1024).toFixed(0)} KB`);
}

(async () => {
  const filter = process.argv[2];
  const chapters = filter
    ? META.chapters.filter(c => c.slug === filter)
    : META.chapters;

  if (chapters.length === 0) {
    console.error(`No chapter matching "${filter}"`);
    process.exit(1);
  }

  fs.mkdirSync(OUT, { recursive: true });

  console.log(`Building ${chapters.length} fiche PDF(s) into ${path.relative(ROOT, OUT)}/`);
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    for (const ch of chapters) {
      await buildOne(browser, ch);
    }
  } finally {
    await browser.close();
  }
  console.log('Done.');
})().catch(err => {
  console.error(err);
  process.exit(1);
});
