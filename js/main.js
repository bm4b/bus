// Simple mobile navigation toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const list = nav.querySelector('ul');
    list.classList.toggle('open');
  });
}

// Basic contact form submission (placeholder)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! We will reach out soon.');
    contactForm.reset();
  });
}
