// mobile menu: toggles the nav list; closes on Escape, outside tap, link tap or when the viewport widens
const bar = document.querySelector('.top');
const burger = bar && bar.querySelector('.burger');
const menu = bar && bar.querySelector('nav');
if (burger && menu) {
  const set = open => {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
  };
  burger.addEventListener('click', () => set(!menu.classList.contains('open')));
  menu.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
  document.addEventListener('pointerdown', e => { if (!bar.contains(e.target)) set(false); });
  matchMedia('(min-width: 60.01rem)').addEventListener('change', e => { if (e.matches) set(false); });
}
