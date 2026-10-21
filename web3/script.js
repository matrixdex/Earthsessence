const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

// mobile menu: a full-screen overlay that grows out of the menu button and closes back into it; focus stays inside while open
const burger = document.querySelector('.burger');
const overlay = document.getElementById('overlay');
if (burger && overlay) {
  const links = [...overlay.querySelectorAll('a')];
  links.forEach((a, i) => a.style.setProperty('--i', i));
  const behind = [document.querySelector('main'), document.querySelector('.foot')].filter(Boolean);
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
  const cards = [...grid.querySelectorAll('.pc')];
  let active = new URLSearchParams(location.search).get('filter');
  if (!['blackseed', 'dates', 'honey'].includes(active)) active = null;
  const apply = animate => {
    buttons.forEach(b => b.setAttribute('aria-pressed', b.dataset.filter === active));
    cards.forEach(c => {
      const show = !active || c.dataset.cat === active;
      c.hidden = !show;
      c.classList.remove('pop');
      if (show) c.classList.add('in-view');
      if (show && animate && !reduceMotion.matches) { void c.offsetWidth; c.classList.add('pop'); }
    });
    const url = new URL(location.href);
    if (active) url.searchParams.set('filter', active); else url.searchParams.delete('filter');
    try { history.replaceState(null, '', url); } catch (e) { /* e.g. opened from file:// */ }
  };
  buttons.forEach(b => b.addEventListener('click', () => { active = active === b.dataset.filter ? null : b.dataset.filter; apply(true); }));
  apply(false);
}

// animations that only run while visible: the marquee band and the sun, moon and Earth
const watch = (el, onChange) => el && new IntersectionObserver(e => onChange(e[0].isIntersecting)).observe(el);
const track = document.querySelector('.band .track');
if (track) {
  // repeat the Origins group until one half of the track is wider than the screen, so the loop never shows empty space
  const first = track.querySelector('.seg');
  const fit = () => {
    track.querySelectorAll('.seg:not(:first-child)').forEach(s => s.remove());
    const w = first.getBoundingClientRect().width;
    if (!w) return;
    const k = Math.max(1, Math.ceil(innerWidth / w) + 1);
    for (let i = 1; i < 2 * k; i++) track.appendChild(first.cloneNode(true));
    track.style.animationDuration = Math.round((w * k) / 60) + 's'; // about 60px per second at any width
  };
  fit();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  let rz; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(fit, 150); });
  watch(track, on => track.classList.toggle('paused', !on));
}
const anim = document.querySelector('.hero-anim');
watch(anim, on => anim.classList.toggle('ts-paused', !on));
const badge = document.querySelector('.badge');
watch(badge, on => { badge.style.animationPlayState = on ? 'running' : 'paused'; });

// scroll reveals: one-shot, lightly staggered; content stays visible if this script never runs
const items = [...document.querySelectorAll('.reveal')].filter(el => !el.classList.contains('in-view'));
if (items.length) {
  if (reduceMotion.matches || !('IntersectionObserver' in window)) items.forEach(el => el.classList.add('in-view'));
  else {
    const io = new IntersectionObserver(entries => {
      entries.filter(e => e.isIntersecting).forEach((e, i) => {
        e.target.style.setProperty('--rd', Math.min(i, 5) * 0.06 + 's');
        e.target.classList.add('in-view');
        io.unobserve(e.target);
        // once revealed, hand the element back to its own hover transitions (reveal timing would delay them)
        const el = e.target;
        setTimeout(() => el.classList.remove('reveal', 'in-view'), 1600);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    items.forEach(el => io.observe(el));
  }
}
