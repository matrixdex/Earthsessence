const products = [
  {n:1,cat:'honey',name:'Multi-Colour, Multi-Nectar Honey',price:'£16',size:'215g',desc:'Pure, natural, unpasteurised Honey with a diverse variety of flowering plants. Rich in natural colour, flavour and full of character.'},
  {n:2,cat:'honeycomb',name:'Hand Cut Honeycomb in Pure Multi-Colour, Multi-Nectar Honey',price:'£16',size:'215g',desc:'Our pure, natural, unpasteurised Multi-Colour, Multi-Nectar Honey. Beautifully presented with 100% real, RAW, hand-cut honeycomb.'},
  {n:3,cat:'honey blackseed',name:'Ethiopian Black Seed Infused Honey',price:'£16',size:'215g',desc:'Our pure, natural, unpasteurised Multi-Colour, Multi-Nectar Honey, infused with our special premium Ethiopian Black Seed (Nigella sativa). A distinctive combination of two treasured natural ingredients.'},
  {n:4,cat:'honey',name:'Pure Spanish Acacia Honey',price:'£16',size:'215g',desc:'Delicate, naturally sweet, and unpasteurised Spanish Acacia Honey. A delicious, natural alternative to refined sugar.'},
  {n:5,cat:'honeycomb',name:'Hand Cut Honeycomb in Pure Spanish Acacia Honey',price:'£16',size:'215g',desc:'Our delicate, naturally sweet, and unpasteurised Spanish Acacia Honey. Beautifully presented with hand-cut honeycomb. A delicious, natural alternative to refined sugar with just that little bit extra.'},
  {n:6,cat:'honey',name:'Pure Spanish Lavender Honey',price:'£16',size:'215g',desc:'Floral, fragrant and full of flavour.'},
  {n:7,cat:'honey',name:'Pure Spanish Rosemary Honey',price:'£16',size:'215g',desc:'A delicately sweet gourmet honey with subtle herbal notes.'},
  {n:8,cat:'honey',name:'Pure Spanish Wild Thyme Honey',price:'£16',size:'215g',desc:'Smooth and sweet with subtle herbal, floral, and distinct phenolic note.'},
  {n:9,cat:'blackseed',name:'100% Pure, Unfiltered, Cold Pressed, Extra Virgin Ethiopian Black Seed Oil',price:'£16',size:'100ml',desc:'Premium cold-pressed Ethiopian Black Seed (Nigella Sativa) Oil, naturally unfiltered and made without additives or preservatives. Direct from Ethiopia. Nothing added. Nothing taken away.'},
  {n:10,cat:'blackseed',name:'100% Pure, Premium, Whole Ethiopian Black Seeds',price:'£10',size:'100g',offer:'2 for £16 (Mix & Match)',desc:'Carefully selected Whole Black (Nigella Sativa) Seeds of premium quality.'},
  {n:11,cat:'pollen',name:'100% Pure & Natural Honeybee Pollen',price:'£10',size:'100g',offer:'2 for £16 (Mix & Match)',desc:'Collected by local Honeybees. High in fibre. Full of vitamins, minerals and antioxidants. Enjoy a teaspoon per day to introduce the natural power of pollen and propolis into your diet.'},
  {n:12,cat:'honeycomb',name:'100% Real, Raw, Hand-Cut Honeycomb',price:'£10',size:'Approx 185–227g',offer:'2 for £16 (Mix & Match)',desc:'Authentic, unpasteurised, natural honeycomb. Enjoy real Honey in one of its most natural forms.'},
  {n:13,cat:'dates',name:'Authentic Ajwa Dates',price:'£10',size:'500g',desc:'Premium Ajwa Dates sourced from Madinah Munawwarah, The Enlightened City. Naturally rich, soft and renowned for their distinctive taste.'}
];

const grid = document.getElementById('grid');
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
grid.innerHTML = products.map(p => `
  <article class="card" data-cat="${p.cat}">
    <span class="num">${String(p.n).padStart(2,'0')}</span>
    <h3>${esc(p.name)}</h3>
    <p>${esc(p.desc)}</p>
    <div class="meta"><span class="price">${p.price}</span><span class="size">${p.size}</span></div>
    ${p.offer ? `<p class="offer">${esc(p.offer)}</p>` : ''}
    <a class="more" href="mailto:hello@example.com?subject=${encodeURIComponent('Enquiry: ' + p.name)}">Enquire →</a>
  </article>`).join('');

function applyFilter(f){
  document.querySelectorAll('#filters button').forEach(b => b.classList.toggle('active', b.dataset.filter === f));
  grid.querySelectorAll('.card').forEach(c => c.classList.toggle('hide', f !== 'all' && !c.dataset.cat.split(' ').includes(f)));
}
document.getElementById('filters').addEventListener('click', e => {
  const b = e.target.closest('button'); if (b) applyFilter(b.dataset.filter);
});
document.querySelectorAll('[data-go]').forEach(a => a.addEventListener('click', () => applyFilter(a.dataset.go)));

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
