(() => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  function closeMenu() {
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Mở menu');
    nav.removeAttribute('data-open');
  }
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
    nav.toggleAttribute('data-open', open);
  });
  nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.hasAttribute('data-open')) { closeMenu(); menu.focus(); }
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.header')) closeMenu();
  });
  const nodes = [...document.querySelectorAll('[data-system]')];
  const detail = document.querySelector('#system-detail');
  const data = window.SevenMSalesOS;
  if (!data) return;
  function select(key) {
    const item = data[key];
    if (!item) return;
    nodes.forEach(node => node.setAttribute('aria-pressed', String(node.dataset.system === key)));
    detail.querySelector('.detail-code').textContent = item.code;
    detail.querySelector('h2').textContent = item.title;
    detail.querySelector('.detail-copy').textContent = item.text || item.short;
  }
  nodes.forEach(node => node.setAttribute('aria-controls', 'system-detail'));
  nodes.forEach(node => node.addEventListener('click', () => {
    select(node.dataset.system);
    detail.scrollIntoView({ block: 'nearest', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }));
  select('hub');
})();
