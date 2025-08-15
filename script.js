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

// New: Dynamic waller text on hover
function initWallerHover() {
  const wallerText = document.getElementById('waller-text');
  const defaultText = wallerText.innerHTML;
  const links = document.querySelectorAll('.waller-title-link');

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      if (link.classList.contains('work')) {
        wallerText.innerHTML = '<h2>Work</h2><p>Explore my projects, designs, and creative experiments in web development.</p>';
      } else if (link.classList.contains('about')) {
        wallerText.innerHTML = '<h2>About</h2><p>Learn more about my journey, skills, and passion for crafting digital experiences.</p>';
      } else if (link.classList.contains('contact')) {
        wallerText.innerHTML = '<h2>Contact</h2><p>Get in touch for collaborations, questions, or freelance opportunities.</p>';
      }
      wallerText.style.opacity = 1;
    });

    link.addEventListener('mouseleave', () => {
      wallerText.innerHTML = defaultText;
      wallerText.style.opacity = 0; // Or keep it visible if preferred
    });
  });
}

// Updated initScrollShow to include home link click handling
function initScrollShow() {
  const navHome = document.getElementById('home-link');
  if (navHome) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > window.innerHeight - 100) {
        navHome.style.display = 'block';
      } else {
        navHome.style.display = 'none';
      }
    });

    navHome.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Handle back hash for no loader and scroll to waller
function handleBackHash() {
  if (location.hash === '#back') {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.display = 'none';
    }
    const waller = document.getElementById('waller');
    if (waller) {
      waller.scrollIntoView({ behavior: 'smooth' });
    }
    // Clear hash to avoid issues
    history.replaceState(null, null, ' ');
  }
}

// Init on DOM load
window.addEventListener('DOMContentLoaded', () => {
  createStarField();
  createShootingStars();
  initCursorCircle();
  initScrollShow();
  initWallerHover();
  initConfettiOnFinal();
  observer.observe(document.getElementById('code'));
  handleBackHash();
});