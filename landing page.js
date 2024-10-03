// Selectors
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('main section');
const learnMoreButton = document.querySelector('#hero button');
const contactForm = document.querySelector('#contact form');

// Add event listeners
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = link.getAttribute('href').replace('#', '');
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

learnMoreButton.addEventListener('click', () => {
  const featuresSection = document.getElementById('features');
  featuresSection.scrollIntoView({ behavior: 'smooth' });
});

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('Name');
  const email = formData.get('Email');
  const message = formData.get('Message');
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  // You can add your own logic to send the form data to a server or API
});