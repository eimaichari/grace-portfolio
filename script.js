// Create Star Field
function createStarField(containerId = 'star-field') {
  const starField = document.getElementById(containerId);
  const numStars = window.innerWidth > 768 ? 100 : 50;

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starField.appendChild(star);
  }
}

// Create Shooting Stars
function createShootingStars() {
  const starField = document.getElementById('star-field');
  setInterval(() => {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * (window.innerHeight / 4); // Start from top
    shootingStar.style.left = `${startX}px`;
    shootingStar.style.top = `${startY}px`;
    starField.appendChild(shootingStar);

    // Animate
    setTimeout(() => {
      shootingStar.style.transform = `translate(${200 + Math.random() * 300}px, ${200 + Math.random() * 300}px)`;
      shootingStar.style.opacity = 1;
    }, 10);

    setTimeout(() => shootingStar.remove(), 1000);
  }, 3000); // Every 3 seconds
}

// Typed.js animation for code section
function initTyped() {
  new Typed('.code-output', {
    strings: [
      '<span class="code-comment">/**</span>\n' +
      '<span class="code-comment"> * Welcome to my digital space.</span>\n' +
      '<span class="code-comment"> * This portfolio is designed to showcase my journey.</span>\n' +
      '<span class="code-comment"> *</span>\n' +
      '<span class="code-comment"> * @author Grace Kuti</span>\n' +
      '<span class="code-comment"> * @version 1.0.0</span>\n' +
      '<span class="code-comment"> */</span>\n' +
      '<span class="code-keyword">const</span> <span class="code-variable">portfolio</span> = {\n' +
      '<span class="code-property">  name:</span> <span class="code-string">"Grace Kuti"</span>,\n' +
      '<span class="code-property">  role:</span> <span class="code-string">"Web Designer & Developer & Freelancer"</span>,\n' +
      '<span class="code-property">  skills:</span> <span class="code-array">[ "HTML", "CSS", "JavaScript", "UI/UX" ]</span>,\n' +
      '<span class="code-property">  projects:</span> <span class="code-array">[ "Portfolio Site", "Client Website A" ]</span>,\n' +
      '};\n' +
      'console.log(portfolio.name + " is currently crafting beautiful websites.");'
    ],
    typeSpeed: 30,
    backSpeed: 15,
    cursorChar: '_',
    smartBackspace: true,
    loop: false
  });
}

// Cursor Circle
function initCursorCircle() {
  const cursorCircle = document.createElement('div');
  cursorCircle.className = 'cursor-circle';
  document.body.appendChild(cursorCircle);

  document.addEventListener('mousemove', e => {
    cursorCircle.style.left = `${e.clientX}px`;
    cursorCircle.style.top = `${e.clientY}px`;
  });

  // Enlarge on hover links
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => cursorCircle.classList.add('enlarge'));
    link.addEventListener('mouseleave', () => cursorCircle.classList.remove('enlarge'));
  });
}

// Show Home link after scrolling past hero (only on home)
function initScrollShow() {
  const navHome = document.querySelector('.nav-home');
  if (navHome) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight - 100) {
        navHome.style.display = 'block';
      } else {
        navHome.style.display = 'none';
      }
    });
  }
}

// Trigger confetti when final timeline item is visible (if you add timeline later)
function initConfettiOnFinal() {
  // Placeholder - add if needed
}

// Intersection Observer for code section
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      initTyped();
      observer.unobserve(entry.target); // Run once
    }
  });
}, { threshold: 0.4 });

// Init on DOM load
window.addEventListener('DOMContentLoaded', () => {
  createStarField();
  createShootingStars();
  initCursorCircle();
  initScrollShow();
  initConfettiOnFinal();
  observer.observe(document.getElementById('code'));
});