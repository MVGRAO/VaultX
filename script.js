// ─── NAV SCROLL ───
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

// ─── HAMBURGER ───
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ─── SCROLL REVEAL ───
const reveals = document.querySelectorAll('.section-tag, .section-title, .section-sub, .about-text, .about-mission, .service-card, .why-card, .contact-item, .contact-form, .contact-desc');
reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 0);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Stagger children
document.querySelectorAll('.services-grid, .why-grid').forEach(grid => {
  grid.querySelectorAll('.service-card, .why-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });
});

reveals.forEach(el => observer.observe(el));

// ─── CONTACT FORM ───
const form = document.getElementById('contact-form');
const successMsg = document.getElementById('form-success');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type=submit]');
  btn.disabled = true;
  btn.querySelector('.btn-text').textContent = 'Sending...';
  setTimeout(() => {
    form.reset();
    btn.disabled = false;
    btn.querySelector('.btn-text').textContent = 'Send Message';
    successMsg.classList.add('show');
    setTimeout(() => successMsg.classList.remove('show'), 5000);
  }, 1200);
});

// ─── SMOOTH NAV LINKS ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
