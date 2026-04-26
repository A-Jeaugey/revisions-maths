// Mobile preview screenshotter.
// Renders a few key routes at common phone widths and saves PNGs to /tmp.
// Also dumps anything wider than the viewport (the #1 cause of "text cut off
// on the right" / "content glued to the edges").

import puppeteer from 'puppeteer';
import fs from 'fs';

const HOST = process.env.HOST || 'http://localhost:8765';
const OUT = '/tmp/snap';
fs.mkdirSync(OUT, { recursive: true });

const ROUTES = [
  ['home',   '/#/'],
  ['fiches', '/#/fiches'],
  ['fiche',  '/#/fiche/suites'],
  ['reflexes', '/#/reflexes'],
  ['quiz',   '/#/quiz'],
];

const VIEWPORTS = [
  { name: '360',  width: 360, height: 780 },
  { name: '390',  width: 390, height: 844 },
];

const browser = await puppeteer.launch({
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--ignore-certificate-errors',
    '--allow-insecure-localhost',
  ],
  ignoreHTTPSErrors: true,
  headless: 'new',
});

for (const vp of VIEWPORTS) {
  for (const [label, route] of ROUTES) {
    const page = await browser.newPage();
    await page.setViewport({
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true,
    });
    await page.goto(HOST + route, { waitUntil: 'networkidle0', timeout: 30000 });
    // SPA: wait for marked, the loader to disappear, the .view to mount,
    // AND for the fiche body markdown to no longer say "Chargement…".
    try {
      await page.waitForFunction(
        () => !!window.marked && !document.querySelector('.loader') && !!document.querySelector('.view'),
        { timeout: 20000 }
      );
      await page.waitForFunction(
        () => {
          const fb = document.getElementById('ficheBody');
          if (!fb) return true; // not a fiche page
          return !/Chargement/.test(fb.textContent || '');
        },
        { timeout: 15000 }
      );
    } catch (e) {
      console.warn(`  ⚠ ${route} did not finish rendering in time`);
    }
    // Let KaTeX / fade-in animations settle
    await new Promise(r => setTimeout(r, 1500));

    // Snap the page in viewport-sized chunks by scrolling, so each PNG
    // stays sharp instead of being downscaled into illegibility.
    const totalH = await page.evaluate(() => document.documentElement.scrollHeight);
    const chunks = Math.min(6, Math.ceil(totalH / vp.height));
    let file = '';
    for (let i = 0; i < chunks; i++) {
      await page.evaluate((y) => window.scrollTo(0, y), i * vp.height);
      await new Promise(r => setTimeout(r, 150));
      const f = `${OUT}/${vp.name}-${label}-${i}.png`;
      await page.screenshot({ path: f, fullPage: false });
      file = f;
    }
    await page.evaluate(() => window.scrollTo(0, 0));

    // Detect any element wider than the viewport — these are the culprits.
    const overflow = await page.evaluate((vw) => {
      const out = [];
      const all = document.body.querySelectorAll('*');
      for (const el of all) {
        const r = el.getBoundingClientRect();
        if (r.right > vw + 0.5 || r.left < -0.5) {
          out.push({
            tag: el.tagName.toLowerCase(),
            cls: el.className && typeof el.className === 'string' ? el.className.slice(0, 60) : '',
            id: el.id || '',
            left: Math.round(r.left),
            right: Math.round(r.right),
            width: Math.round(r.width),
          });
          if (out.length > 8) break;
        }
      }
      return {
        docWidth: document.documentElement.scrollWidth,
        bodyWidth: document.body.scrollWidth,
        overflow: out,
      };
    }, vp.width);

    console.log(`[${vp.name}px ${label}] doc=${overflow.docWidth} body=${overflow.bodyWidth} ${overflow.overflow.length ? '⚠ overflow:' : 'OK'}`);
    for (const o of overflow.overflow) {
      console.log(`   <${o.tag}${o.cls ? ' .' + o.cls.split(' ').join('.') : ''}${o.id ? ' #' + o.id : ''}> w=${o.width} L=${o.left} R=${o.right}`);
    }
    console.log(`   → ${file}`);

    await page.close();
  }
}

await browser.close();
