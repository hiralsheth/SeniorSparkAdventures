
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('header nav');
  const toggle = document.getElementById('nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    });
  }
  // Highlight active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header nav a').forEach(a => {
    const target = a.getAttribute('href');
    if (!target) return;
    if (target === path) {
      a.classList.add('active');
    }
  });
});
