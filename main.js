// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true
});

// Form submission handling
const contactForm = document.querySelector('#contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Message sent successfully!');
        contactForm.reset();
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            navLinks.classList.remove('active');
        }
    });
});

// Add active class to current page link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinksElements = document.querySelectorAll('.nav-links a');
navLinksElements.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});