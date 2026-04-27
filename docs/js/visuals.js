// =========================================================
// Visual blocks renderer — converts custom code blocks into
// interactive visuals (Mermaid, sign tables, function plots).
//
// Three custom languages are supported in fenced code blocks:
//   ```mermaid     → flowcharts via Mermaid (lazy-loaded)
//   ```signe       → signe / variation tables (custom SVG)
//   ```plot        → interactive function plots via function-plot
//
// All loaders are lazy: libraries are only fetched when the page
// actually contains a corresponding block.
// =========================================================

let _mermaidPromise = null;
let _functionPlotPromise = null;

// ---------------------------------------------------------------------------
// Public entry — call this on a container right after marked has rendered.
// ---------------------------------------------------------------------------
export function renderVisuals(container) {
  if (!container) return;
  renderMermaid(container);
  renderSigneTables(container);
  renderPlots(container);
}

// ---------------------------------------------------------------------------
// MERMAID
// ---------------------------------------------------------------------------
function renderMermaid(container) {
  const blocks = container.querySelectorAll('pre code.language-mermaid');
  if (!blocks.length) return;
  loadMermaid().then(mermaid => {
    blocks.forEach((code, i) => {
      const pre = code.closest('pre');
      if (!pre || pre.dataset.rendered === '1') return;
      const src = code.textContent;
      const id = `mmd-${Date.now()}-${i}-${Math.random().toString(36).slice(2,7)}`;
      const wrap = document.createElement('div');
      wrap.className = 'visual-block visual-mermaid';
      pre.replaceWith(wrap);
      try {
        mermaid.render(id, src).then(({ svg }) => {
          wrap.innerHTML = svg;
          wrap.dataset.rendered = '1';
        }).catch(err => {
          wrap.innerHTML = `<pre class="visual-error">Erreur Mermaid : ${escapeHTML(err.message)}\n\n${escapeHTML(src)}</pre>`;
        });
      } catch (err) {
        wrap.innerHTML = `<pre class="visual-error">Erreur Mermaid : ${escapeHTML(err.message)}</pre>`;
      }
    });
  }).catch(err => {
    console.warn('Failed to load Mermaid', err);
  });
}

function loadMermaid() {
  if (_mermaidPromise) return _mermaidPromise;
  _mermaidPromise = import('https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.esm.min.mjs')
    .then(mod => {
      const mermaid = mod.default;
      const isLight = document.documentElement.dataset.theme === 'light';
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        fontFamily: "'Inter', system-ui, sans-serif",
        themeVariables: {
          background: 'transparent',
          primaryColor: isLight ? '#fff' : '#1a1a24',
          primaryTextColor: isLight ? '#0a0a0f' : '#f5f5f7',
          primaryBorderColor: '#ff3366',
          lineColor: isLight ? '#6b7280' : '#a1a1aa',
          secondaryColor: isLight ? '#faf8f3' : '#111118',
          tertiaryColor: isLight ? '#f3f4f6' : '#0a0a0f',
          mainBkg: isLight ? '#fff' : '#1a1a24',
          textColor: isLight ? '#0a0a0f' : '#f5f5f7',
          nodeTextColor: isLight ? '#0a0a0f' : '#f5f5f7',
          edgeLabelBackground: isLight ? '#fff' : '#0a0a0f',
          clusterBkg: isLight ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)',
          clusterBorder: isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)',
        },
        flowchart: {
          curve: 'basis',
          padding: 16,
          nodeSpacing: 50,
          rankSpacing: 60,
          htmlLabels: true,
          useMaxWidth: true,
        },
      });
      return mermaid;
    });
  return _mermaidPromise;
}

// ---------------------------------------------------------------------------
// SIGNE / VARIATION TABLES
//
// Markdown source format (free-form, leading whitespace ignored):
//
//   ```signe
//   x:    -∞ | -2 | 0 | +∞
//   f'(x): + | 0  | - | 0  | +
//   f(x):  ↗ | 1  | ↘ | -3 | ↗
//   ```
//
// First line  : variable + boundary values (n+1 cells).
// Other lines : either signs (2n+1 cells, alternating between/at boundaries)
//               or variations (2n+1 cells with arrows ↗ ↘ → and extrema).
// Each cell can be wrapped in $...$ to render math.
// Use `||` instead of `|` between two cells to draw a forbidden-value bar.
// ---------------------------------------------------------------------------

function renderSigneTables(container) {
  const blocks = container.querySelectorAll('pre code.language-signe');
  blocks.forEach(code => {
    const pre = code.closest('pre');
    if (!pre || pre.dataset.rendered === '1') return;
    const src = code.textContent;
    const wrap = document.createElement('div');
    wrap.className = 'visual-block visual-signe';
    try {
      wrap.appendChild(buildSigneTable(src));
      pre.replaceWith(wrap);
      wrap.dataset.rendered = '1';
      if (window.renderKatex) window.renderKatex(wrap);
    } catch (err) {
      wrap.innerHTML = `<pre class="visual-error">Erreur tableau de signes : ${escapeHTML(err.message)}</pre>`;
      pre.replaceWith(wrap);
    }
  });
}

function parseSigneLine(raw) {
  // Split by `||` first (forbidden bars), keep that info per-cell.
  // Then by `|`. Track which separators were doubled.
  const cells = [];
  let buf = '';
  let bars = []; // bars[i] = '||' or '|' for the separator BEFORE cell i+1
  for (let i = 0; i < raw.length; i++) {
    const c = raw[i];
    if (c === '|') {
      const isDouble = raw[i+1] === '|';
      cells.push(buf.trim());
      buf = '';
      bars.push(isDouble ? '||' : '|');
      if (isDouble) i++;
    } else {
      buf += c;
    }
  }
  cells.push(buf.trim());
  return { cells, bars };
}

function buildSigneTable(src) {
  const lines = src.split('\n').map(l => l.trim()).filter(Boolean);
  if (!lines.length) throw new Error('Bloc vide');

  const rows = lines.map(line => {
    const idx = line.indexOf(':');
    if (idx < 0) throw new Error(`Ligne sans ":" — ${line}`);
    const label = line.slice(0, idx).trim();
    const rest = line.slice(idx + 1);
    const parsed = parseSigneLine(rest);
    return { label, cells: parsed.cells, bars: parsed.bars };
  });

  const headerRow = rows[0];
  const n = headerRow.cells.length; // n boundary values, e.g. -∞, a, b, +∞
  const innerRows = rows.slice(1);
  if (n < 2) throw new Error('Au moins 2 bornes requises sur la première ligne');

  // Convention math : la ligne d'en-tête donne n bornes ; chaque ligne interne
  // donne (n-1) signes/flèches dans les zones « entre bornes » et (n-2) valeurs
  // « sur les bornes internes » — soit 2n-3 cellules au total, alternant
  // signe / valeur / signe / valeur … / signe.
  const expected = 2 * n - 3;

  // Grille CSS : 1 col label + (2n-1) cols pour les bornes ET les zones « entre ».
  // Index col 0 = au niveau de la borne 0 (étroite),
  // index col 1 = entre borne 0 et 1 (large), etc.
  const innerCols = 2 * n - 1;
  const tplCols = ['auto'];
  for (let i = 0; i < innerCols; i++) {
    tplCols.push(i % 2 === 0 ? 'auto' : 'minmax(60px, 1fr)');
  }

  const table = document.createElement('div');
  table.className = 'signe-table';
  table.style.gridTemplateColumns = tplCols.join(' ');

  // Header: label + boundaries at even cols, empty at odd "between" cols.
  table.appendChild(makeCell('signe-label signe-header-label', headerRow.label));
  for (let i = 0; i < innerCols; i++) {
    if (i % 2 === 0) {
      table.appendChild(makeCell('signe-boundary', headerRow.cells[i / 2]));
    } else {
      table.appendChild(makeCell('signe-between-empty', ''));
    }
  }

  innerRows.forEach(row => {
    if (row.cells.length !== expected) {
      throw new Error(
        `Ligne « ${row.label} » : ${row.cells.length} cellules (attendu ${expected} pour ${n} bornes)`
      );
    }
    table.appendChild(makeCell('signe-label', row.label));
    const isVariation = row.cells.some(c => /[↗↘→]/.test(c));

    // Empty cell at the leftmost boundary col (info shown in header).
    table.appendChild(makeCell('signe-edge-empty', ''));

    row.cells.forEach((cellText, ci) => {
      // Even data idx (0, 2, ...) = sign in a "between" zone.
      // Odd data idx (1, 3, ...) = value at an internal boundary.
      const atBoundary = ci % 2 === 1;
      const beforeBar = ci > 0 ? row.bars[ci - 1] : null;
      const isForbidden = beforeBar === '||';
      let className;
      if (isVariation) {
        className = atBoundary ? 'signe-var-value' : 'signe-var-arrow';
      } else {
        className = atBoundary ? 'signe-zero' : 'signe-sign';
      }
      if (isForbidden) className += ' signe-forbidden';
      const node = makeCell(className, cellText);
      if (!isVariation && !atBoundary) {
        const t = cellText.replace(/\s/g, '');
        if (t === '+') node.classList.add('is-plus');
        else if (t === '-' || t === '−') node.classList.add('is-minus');
      }
      table.appendChild(node);
    });

    // Empty cell at the rightmost boundary col.
    table.appendChild(makeCell('signe-edge-empty', ''));
  });

  return table;
}

function makeCell(className, text) {
  const el = document.createElement('div');
  el.className = `signe-cell ${className}`;
  // Allow $...$ math inside cells — KaTeX picks it up afterwards.
  el.textContent = text;
  return el;
}

// ---------------------------------------------------------------------------
// FUNCTION PLOTS
//
// Markdown source format (JSON):
//
//   ```plot
//   {
//     "fn": "x^2 - 2*x + 1",
//     "xDomain": [-2, 4],
//     "yDomain": [-1, 5],
//     "title": "Une parabole",
//     "points": [[1, 0]],
//     "fns": [{ "fn": "exp(x)", "color": "#00d9ff" }]
//   }
//   ```
//
// Single fn or array of fns. Domain optional (auto). Points optional.
// ---------------------------------------------------------------------------

function renderPlots(container) {
  const blocks = container.querySelectorAll('pre code.language-plot');
  if (!blocks.length) return;
  loadFunctionPlot().then(functionPlot => {
    blocks.forEach((code, i) => {
      const pre = code.closest('pre');
      if (!pre || pre.dataset.rendered === '1') return;
      const src = code.textContent;
      let cfg;
      try {
        cfg = JSON.parse(src);
      } catch (err) {
        const wrap = document.createElement('div');
        wrap.className = 'visual-block visual-plot';
        wrap.innerHTML = `<pre class="visual-error">JSON invalide dans le bloc plot : ${escapeHTML(err.message)}</pre>`;
        pre.replaceWith(wrap);
        return;
      }
      const wrap = document.createElement('div');
      wrap.className = 'visual-block visual-plot';
      if (cfg.title) {
        const cap = document.createElement('div');
        cap.className = 'plot-caption';
        cap.textContent = cfg.title;
        wrap.appendChild(cap);
      }
      const target = document.createElement('div');
      target.className = 'plot-target';
      wrap.appendChild(target);
      pre.replaceWith(wrap);

      const fns = buildFnsList(cfg);
      const annotations = (cfg.annotations || []).map(a => ({
        x: a.x, y: a.y, text: a.text,
      }));
      const points = (cfg.points || []).map(p => ({
        points: [p],
        fnType: 'points',
        graphType: 'scatter',
        color: '#c8ff00',
      }));

      const isLight = document.documentElement.dataset.theme === 'light';
      try {
        functionPlot({
          target,
          width: target.clientWidth || 600,
          height: cfg.height || 320,
          xAxis: { domain: cfg.xDomain || [-5, 5], label: cfg.xLabel || 'x' },
          yAxis: { domain: cfg.yDomain, label: cfg.yLabel || 'y' },
          grid: cfg.grid !== false,
          tip: { renderer: (x, y) => `(${(+x).toFixed(2)}, ${(+y).toFixed(2)})` },
          data: [...fns, ...points],
          annotations,
        });
        wrap.dataset.rendered = '1';
      } catch (err) {
        wrap.innerHTML = `<pre class="visual-error">Erreur plot : ${escapeHTML(err.message)}</pre>`;
      }
    });
  }).catch(err => {
    console.warn('Failed to load function-plot', err);
  });
}

function buildFnsList(cfg) {
  const palette = ['#ff3366', '#00d9ff', '#c8ff00', '#ff8a00', '#ff00ff'];
  if (Array.isArray(cfg.fns)) {
    return cfg.fns.map((f, i) => ({
      fn: f.fn,
      color: f.color || palette[i % palette.length],
      ...(f.derivative ? { derivative: f.derivative } : {}),
      ...(f.closed ? { closed: true, range: f.range } : {}),
      ...(f.range ? { range: f.range } : {}),
      ...(f.graphType ? { graphType: f.graphType } : {}),
    }));
  }
  if (cfg.fn) {
    return [{
      fn: cfg.fn,
      color: cfg.color || palette[0],
      ...(cfg.derivative ? { derivative: cfg.derivative } : {}),
      ...(cfg.range ? { range: cfg.range } : {}),
    }];
  }
  return [];
}

function loadFunctionPlot() {
  if (_functionPlotPromise) return _functionPlotPromise;
  _functionPlotPromise = loadScript('https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js')
    .then(() => loadScript('https://cdn.jsdelivr.net/npm/function-plot@1.25.1/dist/function-plot.js'))
    .then(() => window.functionPlot);
  return _functionPlotPromise;
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === '1') return resolve();
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', reject);
      return;
    }
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = () => { s.dataset.loaded = '1'; resolve(); };
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

// ---------------------------------------------------------------------------
function escapeHTML(s) {
  return String(s).replace(/[&<>"]/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'
  }[c]));
}
