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
      media: ['https://placehold.co/1200x800/292b3c/fff?text=Gallery+Image+1', 'https://placehold.co/1200x900/4a4e69/fff?text=Gallery+Image+2', 'https://placehold.co/1200x700/6b705c/fff?text=Gallery+Image+3'],
      cover: 'https://placehold.co/1200x600/1e293b/a855f7?text=Portfolio+Cover'
    },
    'client-website-a': {
      title: 'Client Website A',
      categories: ['UI/UX', 'React'],
      year: 2023,
      awards: 'None',
      desc: 'Scalable frontend for e-commerce. Built with modern frameworks to ensure responsiveness and user-friendly navigation.',
      media: ['https://placehold.co/1200x800/1e3b2b/fff?text=Gallery+Image+A', 'https://placehold.co/1200x900/4e694a/fff?text=Gallery+Image+B', 'https://placehold.co/1200x700/705c6b/fff?text=Gallery+Image+C'],
      cover: 'https://placehold.co/1200x600/4a4e69/fff?text=Client+Website+Cover'
    },
    'romantic-project': {
      title: 'Romantic project',
      categories: ['HTML', 'CSS', 'JS'],
      year: 2024,
      awards: 'None',
      desc: 'Simple birthday website. A heartfelt project with custom animations and personal touches to celebrate special occasions.',
      media: ['https://placehold.co/1200x800/8d2b96/fff?text=Romantic+Site+Shot', 'https://placehold.co/1200x900/a35fbc/fff?text=Love+Project+2', 'https://placehold.co/1200x700/b06fca/fff?text=Main+Layout'],
      cover: 'https://placehold.co/1200x600/8d2b96/fff?text=Romantic+Project+Cover'
    },
    'church-website': {
      title: 'Church website',
      categories: ['HTML', 'CSS', 'JS'],
      year: 2024,
      awards: 'None',
      desc: 'Website Developed for the church of Terre Sacre. Features event calendars, donation integrations, and a serene design to foster community engagement.',
      media: ['https://placehold.co/1200x800/3d517e/fff?text=Church+Homepage', 'https://placehold.co/1200x900/4e628a/fff?text=Events+Page', 'https://placehold.co/1200x700/5d739b/fff?text=Donation+Form'],
      cover: 'https://placehold.co/1200x600/3d517e/fff?text=Church+Website+Cover'
    },
    'water-status-project': {
      title: 'Water status project',
      categories: ['HTML', 'CSS', 'JS', 'PY'],
      year: 2024,
      awards: 'None',
      desc: 'Project to receive alerts on water outages. Combines frontend interfaces with backend scripting for real-time notifications.',
      media: ['https://placehold.co/1200x800/1e88e5/fff?text=Water+Status+Dashboard', 'https://placehold.co/1200x900/29b6f6/fff?text=Alert+Interface', 'https://placehold.co/1200x700/4fc3f7/fff?text=Python+Integration'],
      cover: 'https://placehold.co/1200x600/1e88e5/fff?text=Water+Status+Cover'
    },
    'gatsby-ecommerce': {
      title: 'Gatsby ecommerce',
      categories: ['CSS', 'JSON', 'JS'],
      year: 2024,
      awards: 'None',
      desc: 'Ecommerce project. Static site generation with Gatsby for fast performance, integrated with JSON data for product management.',
      media: ['https://placehold.co/1200x800/4CAF50/fff?text=Gatsby+Storefront', 'https://placehold.co/1200x900/81C784/fff?text=Product+Page', 'https://placehold.co/1200x700/A5D6A7/fff?text=Checkout+Flow'],
      cover: 'https://placehold.co/1200x600/4CAF50/fff?text=Ecommerce+Cover'
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