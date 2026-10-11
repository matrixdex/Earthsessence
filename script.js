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
// hero animation: the Earth orbits the sun, the moon orbits the Earth; seen at a low angle to the orbital plane
(function () {
  const root = document.querySelector('.hero-anim');
  if (!root) return;
  const bodyEls = [...root.querySelectorAll('.ha-body')];           // 0 sun, 1 moon, 2 earth
  const shades = bodyEls.map(el => el.querySelector('.ha-shade'));
  const trailEls = [0, 1, 2].map(i => [...root.querySelectorAll('.ha-trail-' + i)]);
  const back = root.querySelector('.ha-back'), front = root.querySelector('.ha-front');
  const orbitPath = root.querySelector('.ha-orbit'), moonOrbit = root.querySelector('.ha-moonorbit');
  root.querySelector('.ha-bodies').remove();

  const CX = 300, CY = 200, R_EARTH = 190, R_MOON = 42;
  const EL = 24 * Math.PI / 180, SIN = Math.sin(EL), COS = Math.cos(EL);   // viewing elevation above the orbital plane
  const P_EARTH = 28, P_MOON = P_EARTH / 13.37;                            // seconds per orbit, real month-to-year ratio
  const INCL = 5.1 * Math.PI / 180;                                       // the moon's orbit is tilted 5.1 degrees to the Earth's
  const TRAIL = [0, 50, 170];
  let realT = 0, history = [[], [], []];

  moonOrbit.setAttribute('rx', R_MOON);
  moonOrbit.setAttribute('ry', (R_MOON * SIN).toFixed(2));
  orbitPath.setAttribute('d', 'M' + (CX + R_EARTH) + ' ' + CY + 'A' + R_EARTH + ' ' + (R_EARTH * SIN).toFixed(2) + ' 0 1 1 ' + (CX - R_EARTH) + ' ' + CY + 'A' + R_EARTH + ' ' + (R_EARTH * SIN).toFixed(2) + ' 0 1 1 ' + (CX + R_EARTH) + ' ' + CY);
  bodyEls[0].setAttribute('transform', 'translate(' + CX + ' ' + CY + ')');

  // position of a point (plane x, plane y, height z) on screen, plus its depth (larger = nearer the viewer)
  const project = (x, y, z) => ({ x: CX + x, y: CY + y * SIN - z * COS, d: y * COS + z * SIN });

  function draw() {
    const te = 0.6 + realT / P_EARTH * 2 * Math.PI, tm = realT / P_MOON * 2 * Math.PI;
    const ex = R_EARTH * Math.cos(te), ey = R_EARTH * Math.sin(te);
    const earth = project(ex, ey, 0);
    const moon = project(ex + R_MOON * Math.cos(tm), ey + R_MOON * Math.sin(tm), R_MOON * Math.sin(INCL) * Math.sin(tm));
    const pos = [{ x: CX, y: CY, d: -1e4 }, moon, earth];            // the sun sits at the centre, behind everything
    moonOrbit.setAttribute('cx', earth.x.toFixed(2));
    moonOrbit.setAttribute('cy', earth.y.toFixed(2));

    pos.forEach((s, i) => {
      if (i === 0) return;
      const k = 1 + s.d * 0.0011;
      bodyEls[i].setAttribute('transform', 'translate(' + s.x.toFixed(2) + ' ' + s.y.toFixed(2) + ') scale(' + k.toFixed(3) + ')');
      const dx = CX - s.x, dy = CY - s.y, len = Math.hypot(dx, dy) || 1;   // light the moon and Earth from the sun
      const off = i === 1 ? 7.4 : 10.6;
      shades[i].setAttribute('cx', (-dx / len * off).toFixed(2));
      shades[i].setAttribute('cy', (-dy / len * off).toFixed(2));
      const hs = history[i];
      hs.push([s.x, s.y]);
      if (hs.length > TRAIL[i]) hs.shift();
      const seg = Math.ceil(hs.length / 3);
      trailEls[i].forEach((el, n) => {
        const pts = hs.slice(n * seg, Math.min(hs.length, (n + 1) * seg + 1));
        el.setAttribute('d', pts.length > 1 ? 'M' + pts.map(pt => pt[0].toFixed(1) + ' ' + pt[1].toFixed(1)).join('L') : '');
      });
    });

    // stacking: sun at the back; bodies nearer the viewer than the centre go in front of the plant
    const order = [0, 1, 2].sort((a, b) => pos[a].d - pos[b].d);
    order.forEach(i => (pos[i].d > 0 ? front : back).appendChild(bodyEls[i]));
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (let i = 0; i < 70; i++) { realT += 1 / 12; draw(); }
    return;
  }
  let last = 0, running = true, raf = 0;
  function frame(now) {
    if (!running) return;
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    realT += dt; draw();
    raf = requestAnimationFrame(frame);
  }
  new IntersectionObserver(entries => {
    const visible = entries[0].isIntersecting;
    if (visible && !running) { running = true; last = 0; raf = requestAnimationFrame(frame); }
    if (!visible) { running = false; cancelAnimationFrame(raf); }
  }).observe(root);
  raf = requestAnimationFrame(frame);
})();
