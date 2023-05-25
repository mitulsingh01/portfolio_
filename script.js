// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Toggle mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent("Regarding ");
  const body = encodeURIComponent(message);
  const mailtoLink = `mailto:mitul.singh00.ms@gmail.com?subject=${subject}&body=${body}`;
  
  window.location.href = mailtoLink;

  contactForm.reset();
});

// ... 

// Open GitHub link in new tab
const githubLinks = document.querySelectorAll('.github-link');

githubLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
