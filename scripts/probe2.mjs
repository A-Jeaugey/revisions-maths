import puppeteer from 'puppeteer';
const b = await puppeteer.launch({args:['--no-sandbox','--ignore-certificate-errors'],ignoreHTTPSErrors:true,headless:'new'});
const p = await b.newPage();
await p.setViewport({width:390,height:780,deviceScaleFactor:2,isMobile:true});
await p.goto('http://localhost:8765/#/', {waitUntil:'networkidle0'});
await p.waitForFunction(()=>!!window.marked && document.querySelector('.view'),{timeout:15000});
await new Promise(r=>setTimeout(r,1000));
const info = await p.evaluate(()=>{
  const sel = (s) => {
    const el = document.querySelector(s);
    if (!el) return null;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return { sel:s, padding:cs.padding, paddingLeft:cs.paddingLeft, paddingRight:cs.paddingRight, width:r.width, left:r.left, right:r.right };
  };
  return [
    sel('.hero'),
    sel('.footer'),
    sel('.footer-grid'),
    sel('.footer-brand'),
    sel('.footer-bottom'),
    sel('section.container'),
  ];
});
console.log(JSON.stringify(info, null, 2));
await b.close();
