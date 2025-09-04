// Define createStarField locally for work.html
function createStarField(containerId = 'star-field') {
  const starField = document.getElementById(containerId);
  if (!starField) {
    console.warn('Star field container not found.');
    return;
  }
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

// Cursor Circle
function initCursorCircle() {
  const cursorCircle = document.createElement('div');
  cursorCircle.className = 'cursor-circle';
  document.body.appendChild(cursorCircle);

  document.addEventListener('mousemove', e => {
    cursorCircle.style.left = `${e.clientX}px`;
    cursorCircle.style.top = `${e.clientY}px`;
  });

  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => cursorCircle.classList.add('enlarge'));
    link.addEventListener('mouseleave', () => cursorCircle.classList.remove('enlarge'));
  });
}

window.addEventListener('DOMContentLoaded', () => {
  // Initialize star field
  createStarField('star-field');
  // Initialize cursor circle
  initCursorCircle();

  const projects = {
    'portfolio-site': {
      title: 'Portfolio Site',
      categories: ['HTML', 'CSS', 'JS'],
      year: 2023,
      awards: 'None',
      desc: 'A personal portfolio with space theme. This project showcases my skills in creating immersive, themed websites with dynamic elements like star fields.',
      media: ['/images/loadingScreen.png', '/images/HomePage.png', '/images/digitalText.png', '/images/lastPage.png'],
      cover: '/images/My portfolio cover.jpg'
    },
    'client-website-a': {
      title: 'Mubs Amneties',
      categories: ['UI/UX', 'React'],
      year: 2023,
      awards: 'None',
      desc: 'Scalable frontend for e-commerce. Built with modern frameworks to ensure responsiveness and user-friendly navigation.',
      media: ['/images/mubsHome.png', '/images/mubsScrollDown.png', '/images/mubsFooter.png', '/images/mubsAboutPage.png', '/images/mubsScrollAbout.png', '/images/mubsBottomAbout.png', '/images/mubsProduct.png'],
      cover: '/images/mubsHome.png'
    },
    'romantic-project': {
      title: 'Logistel DRC',
      categories: ['HTML', 'CSS', 'JS'],
      year: 2024,
      awards: 'None',
      desc: 'Simple birthday website. A heartfelt project with custom animations and personal touches to celebrate special occasions.',
      media: ['/images/logistel1.png', '/images/logistel3.png', '/images/logistel4.png', '/images/logistel5.png', '/images/logistel6.png', '/images/logistelSign1.png', '/images/logistelSign2.png'],
      cover: '/images/logistel1.png'
    },
    'church-website': {
      title: 'Church website',
      categories: ['HTML', 'CSS', 'JS'],
      year: 2024,
      awards: 'None',
      desc: 'Website Developed for the church of Terre Sacre. Features event calendars, donation integrations, and a serene design to foster community engagement.',
      media: ['/images/terreHome.png', '/images/terreHscroll1.png', '/images/terreHscroll2.png', '/images/terreHscroll3.png', '/images/terreHscroll4.png', '/images/terreAbout1.png', '/images/terreAbout2.png', '/images/terreAbout3.png', '/images/terreSched1.png', '/images/terreSched2.png', '/images/terreSched3.png', '/images/terreWatch1.png', '/images/terreWatch2.png', '/images/terreWatch3.png', '/images/terreVisit4.png', '/images/terreVisit1.png', '/images/terreVisit2.png', '/images/terreVisit3.png'],
      cover: '/images/terreHome.png'
    },
    'water-status-project': {
      title: 'UnisonCo',
      categories: ['HTML', 'CSS', 'JS', 'PY'],
      year: 2024,
      awards: 'None',
      desc: 'Project to receive alerts on water outages. Combines frontend interfaces with backend scripting for real-time notifications.',
      media: ['/images/Unison1.png', '/images/Unison2.png', '/images/Unison3.png', '/images/Unison4.png', '/images/Unison5.png', '/images/Unison6.png', '/images/Unison7.png', '/images/Unison8.png'],
      cover: '/images/unisonCover.png'
    },
    'gatsby-ecommerce': {
      title: 'NMG Zembeta',
      categories: ['CSS', 'JSON', 'JS'],
      year: 2024,
      awards: 'None',
      desc: 'Ecommerce project. Static site generation with Gatsby for fast performance, integrated with JSON data for product management.',
      media: ['/images/nmgHome1.png', '/images/nmgHome2.png', '/images/nmgHome3.png', '/images/nmgAbout1.png', '/images/nmgAbout2.png', '/images/nmgAbout3.png', '/images/nmgProduct1.png', '/images/nmgProduct2.png', '/images/nmgContact.png'],
      cover: '/images/nmgHome1.png'
    }
  };

  const projectIds = Object.keys(projects);
  const listItems = document.querySelectorAll('.project-list li');
  const previewArea = document.getElementById('preview-area');
  const detailSection = document.getElementById('project-detail');
  const workContainer = document.querySelector('.work-container');
  const workHero = document.querySelector('.work-hero');
  const detailCoverImage = document.getElementById('detail-cover-image');
  const nextBtn = document.getElementById('next-btn');
  const backBtn = document.getElementById('back-btn');

  function showProjectDetails(projectId) {
    const project = projects[projectId];
    if (project) {
      document.getElementById('detail-title').textContent = project.title;
      document.getElementById('detail-categories').textContent = project.categories.join(', ');
      document.getElementById('detail-year').textContent = project.year;
      document.getElementById('detail-awards').textContent = project.awards;
      document.getElementById('detail-desc').textContent = project.desc;

      if (project.cover) {
        detailCoverImage.innerHTML = `<img src="${project.cover}" alt="Project cover image">`;
        detailCoverImage.style.display = 'block';
      } else {
        detailCoverImage.innerHTML = '';
        detailCoverImage.style.display = 'none';
      }

      const gallery = document.getElementById('detail-gallery');
      if (gallery) {
        gallery.innerHTML = '';
        project.media.forEach(mediaUrl => {
          if (mediaUrl.endsWith('.mp4') || mediaUrl.endsWith('.webm')) {
            gallery.innerHTML += `<video src="${mediaUrl}" controls autoplay loop muted></video>`;
          } else {
            gallery.innerHTML += `<img src="${mediaUrl}" alt="${project.title}">`;
          }
        });
      }

      // Update the "next" button with the next project's name
      const currentIndex = projectIds.indexOf(projectId);
      const nextIndex = (currentIndex + 1) % projectIds.length;
      const nextProjectId = projectIds[nextIndex];
      const nextProject = projects[nextProjectId];
      nextBtn.textContent = `Next Project: ${nextProject.title} →`;
      nextBtn.dataset.project = nextProjectId;

      workHero.style.display = 'none';
      workContainer.style.display = 'none';
      detailSection.style.display = 'block';
      window.scrollTo(0, 0);
    }
  }

  if (!listItems.length || !previewArea || !detailSection || !workContainer || !workHero || !detailCoverImage) {
    console.error('Missing DOM elements. Check HTML structure:', {
      listItems: listItems.length,
      previewArea: !!previewArea,
      detailSection: !!detailSection,
      workContainer: !!workContainer,
      workHero: !!workHero,
      detailCoverImage: !!detailCoverImage
    });
    return;
  }

  listItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      const projectId = item.dataset.project;
      const project = projects[projectId];
      if (project && project.media[0]) {
        previewArea.innerHTML = `<img src="${project.media[0]}" alt="${project.title}" class="preview-img">`;
        setTimeout(() => {
          const img = previewArea.querySelector('.preview-img');
          if (img) img.classList.add('zoom-in');
        }, 10);
      }
    });

    item.addEventListener('mouseout', () => {
      previewArea.innerHTML = '';
    });

    item.addEventListener('click', () => {
      const projectId = item.dataset.project;
      showProjectDetails(projectId);
    });
  });

  backBtn.addEventListener('click', () => {
    workHero.style.display = 'flex';
    workContainer.style.display = 'flex';
    detailSection.style.display = 'none';
  });

  nextBtn.addEventListener('click', (e) => {
    const nextProjectId = e.currentTarget.dataset.project;
    showProjectDetails(nextProjectId);
  });
});