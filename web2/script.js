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
