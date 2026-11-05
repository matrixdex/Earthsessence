const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

// mobile menu: a full-screen overlay that grows out of the menu button and closes back into it; focus stays inside while open
const burger = document.querySelector('.burger');
const overlay = document.getElementById('overlay');
if (burger && overlay) {
  const links = [...overlay.querySelectorAll('a')];
  links.forEach((a, i) => a.style.setProperty('--i', i));
  const behind = [...document.querySelectorAll('.wrap > :not(nav):not(.overlay)')];
  overlay.inert = true;
  const set = open => {
    if (open) {
      const r = burger.getBoundingClientRect();
      overlay.style.setProperty('--ox', (r.left + r.width / 2) + 'px');
      overlay.style.setProperty('--oy', (r.top + r.height / 2) + 'px');
    }
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    overlay.classList.toggle('open', open);
    overlay.setAttribute('aria-hidden', !open);
    overlay.inert = !open;
    behind.forEach(el => { el.inert = open; });
    document.body.classList.toggle('locked', open);
    if (open) links[0].focus({ preventScroll: true });
  };
  burger.addEventListener('click', () => set(!overlay.classList.contains('open')));
  links.forEach(a => a.addEventListener('click', () => set(false)));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) { set(false); burger.focus(); }
  });
  matchMedia('(min-width: 60.01rem)').addEventListener('change', e => { if (e.matches && overlay.classList.contains('open')) set(false); });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// product filter: Black Seed, Dates, Honey; click the active one again to show all; keeps ?filter= in the URL
const filters = document.getElementById('filters');
const grid = document.getElementById('grid');
if (filters && grid) {
  const buttons = [...filters.querySelectorAll('button')];
  const cards = [...grid.querySelectorAll('.p')];
  let active = new URLSearchParams(location.search).get('filter');
  if (!['blackseed', 'dates', 'honey'].includes(active)) active = null;
  const apply = animate => {
    buttons.forEach(b => b.setAttribute('aria-pressed', b.dataset.filter === active));
    cards.forEach(c => {
      const show = !active || c.dataset.cat === active;
      c.hidden = !show;
      c.classList.remove('pop');
      if (show && animate && !reduceMotion.matches) { void c.offsetWidth; c.classList.add('pop'); }
    });
    const url = new URL(location.href);
    if (active) url.searchParams.set('filter', active); else url.searchParams.delete('filter');
    try { history.replaceState(null, '', url); } catch (e) { /* e.g. opened from file:// */ }
  };
  buttons.forEach(b => b.addEventListener('click', () => { active = active === b.dataset.filter ? null : b.dataset.filter; apply(true); }));
  apply(false);
}

// hero slideshow: crossfades every 5.5s; pauses on hover, off screen and hidden tab; still (first slide) for reduced motion
const show = document.querySelector('.show');
if (show) {
  const slides = [...show.querySelectorAll('.slide')];
  let i = 0, timer = null, inView = true, held = false;
  const go = n => { i = (n + slides.length) % slides.length; slides.forEach((s, k) => s.classList.toggle('is-active', k === i)); };
  const stop = () => { clearInterval(timer); timer = null; };
  const play = () => { stop(); if (reduceMotion.matches || held || !inView || document.hidden) return; timer = setInterval(() => go(i + 1), 5500); };
  show.addEventListener('mouseenter', () => { held = true; play(); });
  show.addEventListener('mouseleave', () => { held = false; play(); });
  document.addEventListener('visibilitychange', play);
  reduceMotion.addEventListener('change', play);
  new IntersectionObserver(e => { inView = e[0].isIntersecting; play(); }).observe(show);
  play();
}

// sun, moon and Earth animation: pause while it is off screen
const anim = document.querySelector('.hero-anim');
if (anim) new IntersectionObserver(e => anim.classList.toggle('ts-paused', !e[0].isIntersecting)).observe(anim);
