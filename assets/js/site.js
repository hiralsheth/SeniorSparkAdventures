  // Contact form: require at least one of email or phone
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const email = contactForm.email.value.trim();
      const phone = contactForm.phone.value.trim();
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
  // Schedule form: require at least one of email or phone
  const scheduleForm = document.getElementById('scheduleForm');
  if (scheduleForm) {
    scheduleForm.addEventListener('submit', function(e) {
      const email = scheduleForm.email.value.trim();
      const phone = scheduleForm.phone.value.trim();
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
  // Intake form: require at least one of email or phone
  const intakeForm = document.getElementById('intakeForm');
  if (intakeForm) {
    intakeForm.addEventListener('submit', function(e) {
      const email = intakeForm.email.value.trim();
      const phone = intakeForm.phone.value.trim();
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
});
