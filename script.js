const products = [
  {n:1,featured:true,cat:'honey',name:'Multi-Colour, Multi-Nectar Honey',price:'£16',size:'215g',desc:'Pure, natural, unpasteurised Honey with a diverse variety of flowering plants. Rich in natural colour, flavour and full of character.'},
  {n:2,cat:'honey',name:'Hand Cut Honeycomb in Pure Multi-Colour, Multi-Nectar Honey',price:'£16',size:'215g',desc:'Our pure, natural, unpasteurised Multi-Colour, Multi-Nectar Honey. Beautifully presented with 100% real, RAW, hand-cut honeycomb.'},
  {n:3,cat:'honey',name:'Ethiopian Black Seed Infused Honey',price:'£16',size:'215g',desc:'Our pure, natural, unpasteurised Multi-Colour, Multi-Nectar Honey, infused with our special premium Ethiopian Black Seed (Nigella sativa). A distinctive combination of two treasured natural ingredients.'},
  {n:4,cat:'honey',name:'Pure Spanish Acacia Honey',price:'£16',size:'215g',desc:'Delicate, naturally sweet, and unpasteurised Spanish Acacia Honey. A delicious, natural alternative to refined sugar.'},
  {n:5,cat:'honey',name:'Hand Cut Honeycomb in Pure Spanish Acacia Honey',price:'£16',size:'215g',desc:'Our delicate, naturally sweet, and unpasteurised Spanish Acacia Honey. Beautifully presented with hand-cut honeycomb. A delicious, natural alternative to refined sugar with just that little bit extra.'},
  {n:6,cat:'honey',name:'Pure Spanish Lavender Honey',price:'£16',size:'215g',desc:'Floral, fragrant and full of flavour.'},
  {n:7,cat:'honey',name:'Pure Spanish Rosemary Honey',price:'£16',size:'215g',desc:'A delicately sweet gourmet honey with subtle herbal notes.'},
  {n:8,cat:'honey',name:'Pure Spanish Wild Thyme Honey',price:'£16',size:'215g',desc:'Smooth and sweet with subtle herbal, floral, and distinct phenolic note.'},
  {n:9,featured:true,cat:'oil',name:'100% Pure, Unfiltered, Cold Pressed, Extra Virgin Ethiopian Black Seed Oil',price:'£16',size:'100ml',desc:'Premium cold-pressed Ethiopian Black Seed (Nigella Sativa) Oil, naturally unfiltered and made without additives or preservatives. Direct from Ethiopia. Nothing added. Nothing taken away.'},
  {n:10,cat:'',name:'100% Pure, Premium, Whole Ethiopian Black Seeds',price:'£10',size:'100g',offer:'2 for £16 (Mix & Match)',desc:'Carefully selected Whole Black (Nigella Sativa) Seeds of premium quality.'},
  {n:11,cat:'',name:'100% Pure & Natural Honeybee Pollen',price:'£10',size:'100g',offer:'2 for £16 (Mix & Match)',desc:'Collected by local Honeybees. High in fibre. Full of vitamins, minerals and antioxidants. Enjoy a teaspoon per day to introduce the natural power of pollen and propolis into your diet.'},
  {n:12,cat:'honey',name:'100% Real, Raw, Hand-Cut Honeycomb',price:'£10',size:'Approx 185–227g',offer:'2 for £16 (Mix & Match)',desc:'Authentic, unpasteurised, natural honeycomb. Enjoy real Honey in one of its most natural forms.'},
  {n:13,featured:true,cat:'dates',name:'Authentic Ajwa Dates',price:'£10',size:'500g',desc:'Premium Ajwa Dates sourced from Madinah Munawwarah, The Enlightened City. Naturally rich, soft and renowned for their distinctive taste.'}
];

const grid = document.getElementById('grid');
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const list = grid.dataset.featured ? products.filter(p => p.featured) : products;
grid.innerHTML = list.map(p => `
  <article class="card" data-cat="${p.cat}">
    <div class="thumb" role="img" aria-label="${esc(p.name)} image placeholder"><span>Product image</span></div>
    <h3>${esc(p.name)}</h3>
    <p>${esc(p.desc)}</p>
    <div class="meta"><span class="price">${p.price}</span><span class="size">${p.size}</span></div>
    ${p.offer ? `<p class="offer">${esc(p.offer)}</p>` : ''}
    <a class="more" href="mailto:hello@example.com?subject=${encodeURIComponent('Enquiry: ' + p.name)}">Enquire →</a>
  </article>`).join('');

// category filter (products page): oil, honey, dates; click the active one again to show all
const filtersEl = document.getElementById('filters');
if (filtersEl) {
  const buttons = filtersEl.querySelectorAll('button');
  let active = new URLSearchParams(location.search).get('filter');
  if (!['oil', 'honey', 'dates'].includes(active)) active = null;
  const applyFilter = () => {
    buttons.forEach(b => {
      const on = b.dataset.filter === active;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on);
    });
    grid.querySelectorAll('.card').forEach(c => c.classList.toggle('hide', !!active && c.dataset.cat !== active));
    const url = new URL(location.href);
    if (active) url.searchParams.set('filter', active); else url.searchParams.delete('filter');
    try { history.replaceState(null, '', url); } catch (e) { /* e.g. opened from file:// */ }
  };
  buttons.forEach(b => b.addEventListener('click', () => {
    active = active === b.dataset.filter ? null : b.dataset.filter;
    applyFilter();
  }));
  applyFilter();
}

// mobile overlay menu
const burger = document.getElementById('burger');
const overlay = document.getElementById('overlay');
function setMenu(open){
  burger.classList.toggle('open', open);
  overlay.classList.toggle('open', open);
  document.body.classList.toggle('locked', open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  overlay.setAttribute('aria-hidden', !open);
}
burger.addEventListener('click', () => setMenu(!overlay.classList.contains('open')));
overlay.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
window.addEventListener('resize', () => { if (innerWidth > 768) setMenu(false); });

document.getElementById('year').textContent = new Date().getFullYear();

// shrink the navbar logo smoothly from 100% to 50% over the hero section
const hero = document.querySelector('.hero, .page-hero');
let heroEnd = 1, ticking = false;
function measureHero(){ heroEnd = Math.max(1, hero.offsetTop + hero.offsetHeight); }
function updateLogo(){
  const p = Math.min(1, Math.max(0, window.scrollY / heroEnd));
  document.documentElement.style.setProperty('--logo-scale', (1 - 0.5 * p).toFixed(4));
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) { ticking = true; requestAnimationFrame(updateLogo); }
}, { passive: true });
window.addEventListener('resize', () => { measureHero(); updateLogo(); });
window.addEventListener('load', () => { measureHero(); updateLogo(); });
measureHero();
updateLogo();
// three-body hero animation: three equal masses on the figure-eight orbit, viewed in a slowly turning frame
(function () {
  const root = document.querySelector('.hero-anim');
  if (!root) return;
  const bodyEls = [...root.querySelectorAll('.ha-body')];
  const trailEls = [0, 1, 2].map(i => [...root.querySelectorAll('.ha-trail-' + i)]);
  const T = 6.32591398;          // orbital period in simulation units
  const REAL_PERIOD = 9;          // seconds per orbit on screen
  const CX = 300, CY = 200, SCALE = 150, SPIN = 0.16, TRAIL = 90, H = 0.004;
  let p, v, simT, realT, history;

  function reset() {
    p = [[-0.97000436, 0.24308753], [0.97000436, -0.24308753], [0, 0]];
    v = [[0.466203685, 0.43236573], [0.466203685, 0.43236573], [-0.93240737, -0.86473146]];
    simT = 0;
    history = [[], [], []];
  }
  function accel(q) {
    return q.map((qi, i) => {
      let ax = 0, ay = 0;
      q.forEach((qj, j) => {
        if (i === j) return;
        const dx = qj[0] - qi[0], dy = qj[1] - qi[1];
        const inv = 1 / Math.pow(dx * dx + dy * dy, 1.5);
        ax += dx * inv; ay += dy * inv;
      });
      return [ax, ay];
    });
  }
  function rk4(h) {
    const add = (a, b, s) => a.map((x, i) => [x[0] + b[i][0] * s, x[1] + b[i][1] * s]);
    const k1v = accel(p), k1p = v;
    const p2 = add(p, k1p, h / 2), v2 = add(v, k1v, h / 2);
    const k2v = accel(p2), k2p = v2;
    const p3 = add(p, k2p, h / 2), v3 = add(v, k2v, h / 2);
    const k3v = accel(p3), k3p = v3;
    const p4 = add(p, k3p, h), v4 = add(v, k3v, h);
    const k4v = accel(p4), k4p = v4;
    p = p.map((x, i) => [x[0] + h / 6 * (k1p[i][0] + 2 * k2p[i][0] + 2 * k3p[i][0] + k4p[i][0]), x[1] + h / 6 * (k1p[i][1] + 2 * k2p[i][1] + 2 * k3p[i][1] + k4p[i][1])]);
    v = v.map((x, i) => [x[0] + h / 6 * (k1v[i][0] + 2 * k2v[i][0] + 2 * k3v[i][0] + k4v[i][0]), x[1] + h / 6 * (k1v[i][1] + 2 * k2v[i][1] + 2 * k3v[i][1] + k4v[i][1])]);
  }
  function advance(dt) {
    realT += dt;
    let remaining = dt * (T / REAL_PERIOD);
    while (remaining > 1e-9) {
      const h = Math.min(H, remaining);
      rk4(h); simT += h; remaining -= h;
    }
    if (simT >= T) { reset(); }
  }
  function draw() {
    const a = realT * SPIN, ca = Math.cos(a), sa = Math.sin(a);
    p.forEach((q, i) => {
      const x = CX + SCALE * (q[0] * ca - q[1] * sa);
      const y = CY + SCALE * (q[0] * sa + q[1] * ca);
      bodyEls[i].setAttribute('transform', 'translate(' + x.toFixed(2) + ' ' + y.toFixed(2) + ')');
      const hs = history[i];
      hs.push([x, y]);
      if (hs.length > TRAIL) hs.shift();
      const seg = Math.ceil(hs.length / 3);
      trailEls[i].forEach((el, k) => {
        const pts = hs.slice(k * seg, Math.min(hs.length, (k + 1) * seg + 1));
        el.setAttribute('d', pts.length > 1 ? 'M' + pts.map(pt => pt[0].toFixed(1) + ' ' + pt[1].toFixed(1)).join('L') : '');
      });
    });
  }

  reset(); realT = 0;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (let i = 0; i < 70; i++) { advance(1 / 60); draw(); }
    return;
  }
  let last = 0, running = true, raf = 0;
  function frame(now) {
    if (!running) return;
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    advance(dt); draw();
    raf = requestAnimationFrame(frame);
  }
  new IntersectionObserver(entries => {
    const visible = entries[0].isIntersecting;
    if (visible && !running) { running = true; last = 0; raf = requestAnimationFrame(frame); }
    if (!visible) { running = false; cancelAnimationFrame(raf); }
  }).observe(root);
  raf = requestAnimationFrame(frame);
})();
