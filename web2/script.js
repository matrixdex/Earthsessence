const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

// mobile menu: toggles the nav list; closes on Escape, outside tap, link tap or when the viewport widens
const nav = document.querySelector('nav');
const burger = nav && nav.querySelector('.burger');
const menu = nav && nav.querySelector('ul');
if (burger && menu) {
  const set = open => {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
  };
  burger.addEventListener('click', () => set(!menu.classList.contains('open')));
  menu.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
  document.addEventListener('pointerdown', e => { if (!nav.contains(e.target)) set(false); });
  matchMedia('(min-width: 60.01rem)').addEventListener('change', e => { if (e.matches) set(false); });
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
