import puppeteer from 'puppeteer';
const b = await puppeteer.launch({args:['--no-sandbox','--ignore-certificate-errors'],ignoreHTTPSErrors:true,headless:'new'});
const p = await b.newPage();
await p.setViewport({width:360,height:780,deviceScaleFactor:2,isMobile:true});
await p.goto('http://localhost:8765/#/', {waitUntil:'networkidle0'});
await p.waitForFunction(()=>!!window.marked && document.querySelector('.view'),{timeout:15000});
await new Promise(r=>setTimeout(r,1000));
const info = await p.evaluate(()=>{
  const h = document.querySelector('.hero-display');
  const cs = getComputedStyle(h);
  const r = h.getBoundingClientRect();
  // Inspect the BR
  const br = h.querySelector('br');
  const brCs = br ? getComputedStyle(br) : null;
  // line count
  const lh = parseFloat(cs.lineHeight);
  const lines = Math.round(r.height / lh);
  return {
    fontSize: cs.fontSize,
    fontFamily: cs.fontFamily.split(',')[0],
    width: r.width,
    height: r.height,
    lineHeight: cs.lineHeight,
    estimatedLines: lines,
    brDisplay: brCs?.display,
    text: h.textContent.replace(/\s+/g,' ').trim(),
    html: h.innerHTML.slice(0,200),
  };
});
console.log(JSON.stringify(info, null, 2));
await b.close();
