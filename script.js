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

  // Stats section SCRIPT

  document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".count");
    let speed = 200; // Adjust speed

    counters.forEach(counter => {
        let updateCount = () => {
            let target = +counter.getAttribute("data-target");
            let count = +counter.innerText;

            let increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 50);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
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