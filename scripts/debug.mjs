import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--ignore-certificate-errors', '--allow-insecure-localhost'],
  ignoreHTTPSErrors: true,
  headless: 'new',
});
const page = await browser.newPage();
page.on('console', m => console.log('[console]', m.type(), m.text()));
page.on('pageerror', e => console.log('[pageerror]', e.message));
page.on('requestfailed', r => console.log('[requestfailed]', r.url(), r.failure()?.errorText));
await page.setViewport({ width: 360, height: 780, deviceScaleFactor: 2, isMobile: true });
await page.goto('http://localhost:8765/#/fiche/suites', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 4000));
const info = await page.evaluate(() => ({
  hasMarked: typeof window.marked,
  hasParse: typeof window.marked?.parse,
  ficheBodyHtml: document.getElementById('ficheBody')?.innerHTML?.slice(0, 200),
  loaderPresent: !!document.querySelector('.loader'),
}));
console.log(JSON.stringify(info, null, 2));
await browser.close();
