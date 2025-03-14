document.addEventListener('DOMContentLoaded', function() {

  // --- Navigation ---
  const nav = document.querySelector('.sticky-nav');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      // Added scrollY condition
      nav.classList.add('hidden');
    } else {
      nav.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
  });

  // --- Smooth Scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - nav.offsetHeight,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Scroll Animations ---
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });

  // --- Mobile Menu ---
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});




// ALREADY PRESENTED SCRIPT IN INDEX 





const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
          entry.target.classList.add('visible');
          if(entry.target.classList.contains('service-card')) {
              entry.target.style.transitionDelay = entry.target.dataset.delay || '0s';
          }
      }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
  el.dataset.delay = `${index * 0.1}s`;
  observer.observe(el);
});

// Smooth Element Transitions
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mouseover', () => {
      card.querySelector('.card-icon').style.transform = 'rotate(10deg) scale(1.1)';
  });
  
  card.addEventListener('mouseout', () => {
      card.querySelector('.card-icon').style.transform = 'rotate(0) scale(1)';
  });
});

// Parallax Effect
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelectorAll('.service-card').forEach(card => {
      card.style.transform = `translateY(${scrolled * -0.1}px)`;
  });
});