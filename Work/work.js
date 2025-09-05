window.addEventListener('DOMContentLoaded', () => {

  // --- Utility Functions ---
  function createStarField(containerId = 'star-field') {
    const starField = document.getElementById(containerId);
    if (!starField) return;
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

  function initCursorCircle() {
    if (window.matchMedia('(pointer: coarse)').matches) return; // Skip on touch devices
    const cursorCircle = document.createElement('div');
    cursorCircle.className = 'cursor-circle';
    document.body.appendChild(cursorCircle);
    document.addEventListener('mousemove', e => {
        cursorCircle.style.left = `${e.clientX}px`;
        cursorCircle.style.top = `${e.clientY}px`;
    });
    document.querySelectorAll('a, button, .project-list li').forEach(el => {
        el.addEventListener('mouseenter', () => cursorCircle.classList.add('enlarge'));
        el.addEventListener('mouseleave', () => cursorCircle.classList.remove('enlarge'));
    });
  }

  // --- Initializations ---
  createStarField('star-field');
  initCursorCircle();

  // --- Project Data ---
  const projects = {
    'portfolio-site': {
      title: 'Portfolio Site',
      categories: ['HTML', 'CSS', 'JS'],
      year: 2025,
      awards: 'Personal Project',
      desc: 'A space-themed portfolio showcasing my projects with smooth animations and interactive elements. Designed to reflect the vastness of space and the limitless opportunities in web development. Fully responsive across devices, ensuring recruiters and clients can explore projects easily and intuitively.',
      media: ['/images/loadingScreen.png', '/images/HomePage.png', '/images/digitalText.png', '/images/lastPage.png'],
      cover: '/images/My portfolio cover.jpg',
      url: '#' // Updated from '#'
    },
    'client-website-a': {
      title: 'Mubs Amneties',
      categories: ['HTML', 'CSS', 'JS'],
      year: 2025,
      awards: 'In collaboration with @JeremiahKazadi',
      desc: 'Built a scalable e-commerce frontend with modern frameworks to deliver a seamless shopping experience. Optimized for responsiveness and intuitive navigation, enabling customers to browse and purchase with ease. Collaborated with developer @JeremiahKazadi to ensure smooth integration and deployment, making the platform future-proof for growth.',
      media: ['/images/mubsHome.png', '/images/mubsScrollDown.png', '/images/mubsFooter.png', '/images/mubsAboutPage.png', '/images/mubsScrollAbout.png', '/images/mubsBottomAbout.png', '/images/mubsProduct.png'],
      cover: '/images/mubsHome.png',
      url: 'https://www.mubs.info/'
    },
    'romantic-project': {
      title: 'Logistel DRC',
      categories: ['React', 'CSS', 'JSON', 'JS'],
      year: 2025,
      awards: 'In collaboration with @Yekhutiel',
      desc: 'Developed a collaborative web platform for Logistel DRC, a logistics company in the DRC. Focused on a clean and professional design that showcases services, builds trust, and simplifies navigation. Integrated e-commerce features to support appliance sales online. Worked alongside @Yekhutiel to deliver a solution that supports the company’s digital transformation and client outreach.',
      media: ['/images/logistel1.png', '/images/logistel3.png', '/images/logistel4.png', '/images/logistel5.png', '/images/logistel6.png', '/images/logistelSign1.png', '/images/logistelSign2.png'],
      cover: '/images/logistel1.png',
      url: '#'
    },
    'church-website': {
      title: 'Church website',
      categories: ['HTML', 'CSS', 'JS'],
      year: 2025,
      awards: 'In collaboration with Terre Sacree',
      desc: 'Created a community-focused website for Terre Sacree Eglise, designed to engage visitors with sermons, upcoming events, and ministry updates. The site provides a welcoming user experience with a responsive design for easy access on mobile devices. Built with simplicity in mind to empower the church’s leadership team to connect more effectively with their congregation.',
      media: ['/images/terreHome.png', '/images/terreHscroll1.png', '/images/terreHscroll2.png', '/images/terreHscroll3.png', '/images/terreHscroll4.png', '/images/terreAbout1.png', '/images/terreAbout2.png', '/images/terreAbout3.png', '/images/terreSched1.png', '/images/terreSched2.png', '/images/terreSched3.png', '/images/terreWatch1.png', '/images/terreWatch2.png', '/images/terreWatch3.png', '/images/terreVisit4.png', '/images/terreVisit1.png', '/images/terreVisit2.png', '/images/terreVisit3.png'],
      cover: '/images/terreHome.png',
      url: '#'
    },
    'water-status-project': {
      title: 'UnisonCo',
      categories: ['HTML', 'CSS', 'JS'],
      year: 2023,
      awards: 'In collaboration with @JeremiahKazadi',
      desc: 'Developed a modern shoe e-commerce platform with an emphasis on speed, usability, and attractive product showcases. The site offers smooth navigation and a streamlined checkout process to enhance customer satisfaction. Built in collaboration with @Yekhutiel and @JeremiahKazadi, ensuring both technical robustness and strong visual branding.',
      media: ['/images/Unison1.png', '/images/Unison2.png', '/images/Unison3.png', '/images/Unison4.png', '/images/Unison5.png', '/images/Unison6.png', '/images/Unison7.png', '/images/Unison8.png'],
      cover: '/images/unisonCover.png',
      url: 'https://unisonco.store/'
    },
    'gatsby-ecommerce': {
      title: 'NMG Zembeta',
      categories: ['React', 'CSS', 'JSON', 'JS'],
      year: 2025,
      awards: 'In collaboration with @Yekhutiel and @JeremiahKazadi',
      desc: 'Designed and developed an e-commerce platform for NMG Zembeta, an appliance company seeking a modern and trustworthy online presence. The site highlights product collections, company values, and customer support channels in a clean, responsive interface. Built using React and Firebase for performance and scalability. Collaborated with @Yekhutiel and @JeremiahKazadi to deliver a polished product aligned with client expectations.',
      media: ['/images/nmgHome1.png', '/images/nmgHome2.png', '/images/nmgHome3.png', '/images/nmgAbout1.png', '/images/nmgAbout2.png', '/images/nmgAbout3.png', '/images/nmgProduct1.png', '/images/nmgProduct2.png', '/images/nmgContact.png'],
      cover: '/images/nmgHome1.png',
      url: 'https://www.nmgzembeta.com/'
    }
  };
  
  // --- DOM Element References ---
  const projectIds = Object.keys(projects);
  const projectList = document.getElementById('project-list');
  const listItems = document.querySelectorAll('.project-list li');
  const previewArea = document.getElementById('preview-area');
  const workHero = document.querySelector('.work-hero');
  const workContainer = document.querySelector('.work-container');
  const detailSection = document.getElementById('project-detail');
  const detailContentWrapper = document.getElementById('detail-content-wrapper');
  const detailCoverImage = document.getElementById('detail-cover-image');
  const nextBtn = document.getElementById('next-btn');
  const backBtn = document.getElementById('back-btn');
  
  // --- State Variables ---
  let isMouseOverList = false;

  // --- Functions ---
  
  function populateProjectDetails(projectId) {
    const project = projects[projectId];
    if (!project) return;

    document.getElementById('detail-title').textContent = project.title;
    document.getElementById('detail-categories').textContent = project.categories.join(', ');
    document.getElementById('detail-year').textContent = project.year;
    document.getElementById('detail-awards').textContent = project.awards;
    document.getElementById('detail-desc').textContent = project.desc;

    // MODIFICATION: Handle the site link
    const detailLink = document.getElementById('detail-link');
    const linkContainer = document.querySelector('.description-container'); // Target the correct container
    if (project.url && project.url !== '#') {
        detailLink.href = project.url;
        detailLink.style.display = 'block'; // Show the link
        linkContainer.style.display = 'grid'; // Ensure container is visible
    } else {
        detailLink.style.display = 'none'; // Hide the link
        linkContainer.style.display = 'grid'; // Keep container visible for description
    }

    if (project.cover) {
        detailCoverImage.innerHTML = `<img src="${project.cover}" alt="Project cover image">`;
        detailCoverImage.style.display = 'block';
    } else {
        detailCoverImage.style.display = 'none';
    }

    const gallery = document.getElementById('detail-gallery');
    gallery.innerHTML = ''; // Clear previous content
    project.media.forEach(mediaUrl => {
        gallery.innerHTML += `<img src="${mediaUrl}" alt="${project.title} gallery image">`;
    });

    const currentIndex = projectIds.indexOf(projectId);
    const nextIndex = (currentIndex + 1) % projectIds.length;
    const nextProjectId = projectIds[nextIndex];
    nextBtn.textContent = `Next Project: ${projects[nextProjectId].title} →`;
    nextBtn.dataset.project = nextProjectId;
  }

  function transitionToDetails(projectId) {
    workHero.style.transform = 'translateY(-100%)';
    workContainer.style.transform = 'translateY(-100%)';
    
    workContainer.addEventListener('transitionend', () => {
        workHero.style.display = 'none';
        workContainer.style.display = 'none';
        populateProjectDetails(projectId);
        detailSection.style.display = 'block';
        setTimeout(() => detailSection.classList.add('active'), 10);
    }, { once: true });

    window.scrollTo(0, 0);
  }

  function transitionToList() {
      workHero.style.display = 'flex';
      workContainer.style.display = 'flex';

      detailSection.classList.remove('active');
      workHero.style.transform = 'translateY(0)';
      workContainer.style.transform = 'translateY(0)';
      
      detailSection.addEventListener('transitionend', (e) => {
          if (e.propertyName === 'transform') {
              detailSection.style.display = 'none';
          }
      }, { once: true });
  }

  // --- Event Listeners ---
  listItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const projectId = item.dataset.project;
        const project = projects[projectId];
        if (!project || !project.media[0]) return;

        const oldImg = previewArea.querySelector('.preview-img.active');
        if (oldImg) oldImg.classList.remove('active');

        const newImg = document.createElement('img');
        newImg.src = project.media[0];
        newImg.alt = project.title;
        newImg.className = 'preview-img';
        previewArea.appendChild(newImg);
        setTimeout(() => newImg.classList.add('active'), 10);
    });

    item.addEventListener('click', (e) => {
        transitionToDetails(e.currentTarget.dataset.project);
    });
  });

  projectList.addEventListener('mouseenter', () => { isMouseOverList = true; });
  projectList.addEventListener('mouseleave', () => {
      isMouseOverList = false;
      setTimeout(() => {
          if (!isMouseOverList) {
              const activeImg = previewArea.querySelector('.preview-img.active');
              if (activeImg) activeImg.classList.remove('active');
              setTimeout(() => {
                  previewArea.innerHTML = '';
              }, 1200);
          }
      }, 100);
  });

  backBtn.addEventListener('click', transitionToList);

  nextBtn.addEventListener('click', (e) => {
      const nextProjectId = e.currentTarget.dataset.project;
      
      detailContentWrapper.className = '';
      void detailContentWrapper.offsetWidth; 
      detailContentWrapper.classList.add('slide-out-up');

      detailContentWrapper.addEventListener('animationend', () => {
          populateProjectDetails(nextProjectId);
          window.scrollTo(0, 0);
          
          detailContentWrapper.className = '';
          void detailContentWrapper.offsetWidth;
          detailContentWrapper.classList.add('slide-in-down');
      }, { once: true });
  });

});