  document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle and active-link highlighting
  const nav = document.querySelector('header nav');
  const toggle = document.getElementById('nav-toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    });
  }
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header nav a').forEach(a => {
    const target = a.getAttribute('href');
    if (target === path) a.classList.add('active');
  });

  // Form validation helper
  function bindContactValidation(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener('submit', function(e) {
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const phoneValid = /^[0-9]{10}$/.test(phone);
      if (!email && !phone) {
        alert('Please provide at least an email or a valid phone number.');
        e.preventDefault();
        return false;
      }
      if (phone && !phoneValid) {
        alert('Please enter a valid 10-digit phone number.');
        e.preventDefault();
        return false;
      }
    });
  }

  bindContactValidation('contactForm');
  bindContactValidation('scheduleForm');
  bindContactValidation('intakeForm');
});

