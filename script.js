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

  const subject = encodeURIComponent("Regarding ...");
  const body = encodeURIComponent(`Message: ${message}`);
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

// Resume button
//https://drive.google.com/file/d/1rxmOrXk105sU5mDIXAZpaaLMBBcDgKah/view?usp=sharing
const resumeLink = document.getElementById('resume-link');
resumeLink.addEventListener('click', () => {
  const fileId = '1rxmOrXk105sU5mDIXAZpaaLMBBcDgKah'; // Replace with your actual file ID from the sharing link
  const resumeUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
  window.open(resumeUrl);
});

// Leetcode stats
fetch('https://leetcode.com/api/user_info/user5624o')
  .then(response => response.json())
  .then(data => {
    // Handle the response and update your website with the stats
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });
