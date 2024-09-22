document.querySelectorAll('.menu li a').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(item.getAttribute('href'));
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  
  // Courses
  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
  
    // Trigger animation when the cards are visible on the screen
    function revealCards() {
      cards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (cardPosition < screenPosition) {
          card.style.setProperty('--delay', `${index * 0.2}s`);
          card.classList.add('animated');
        }
      });
    }
  
    // Run the revealCards function when the page is scrolled
    window.addEventListener('scroll', revealCards);
  
    // Toggle card content when clicked
    cards.forEach(card => {
      card.addEventListener('click', function () {
        const content = this.querySelector('.card-content');
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });
  });
  
  // New Batches
  document.addEventListener("DOMContentLoaded", function () {
    const batchCards = document.querySelectorAll('.batch-card');
  
    function revealCards(cards) {
      cards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (cardPosition < screenPosition) {
          card.style.setProperty('--delay', `${index * 0.2}s`);
          card.classList.add('animated');
        }
      });
    }
  
    function toggleCardContent(cards) {
      cards.forEach(card => {
        card.addEventListener('click', function () {
          const content = this.querySelector('.batch-content');
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
      });
    }
  
    // Reveal cards on scroll
    window.addEventListener('scroll', () => {
      revealCards(batchCards);
    });
  
    // Toggle card content on click
    toggleCardContent(batchCards);
  
    // Initial reveal of cards on page load
    revealCards(batchCards);
  });
  
  // Job Openings
  document.addEventListener("DOMContentLoaded", function () {
    const jobCards = document.querySelectorAll('.job-card');
  
    function revealCards(cards) {
      const windowHeight = window.innerHeight;
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight * 0.8) {
          card.classList.add('animated');
        }
      });
    }
  
    function toggleCardContent(cards) {
      cards.forEach(card => {
        card.addEventListener('click', function () {
          const content = this.querySelector('.job-content');
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
      });
    }
  
    // Reveal cards on scroll
    window.addEventListener('scroll', () => {
      revealCards(jobCards);
    });
  
    // Toggle card content on click
    toggleCardContent(jobCards);
  
    // Initial reveal of cards on page load
    revealCards(jobCards);
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");
    const sections = document.querySelectorAll("section");
  
    function removeActiveClass() {
      menuItems.forEach(item => item.classList.remove("active"));
    }
  
    function highlightMenu() {
      let currentSection = "";
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
  
        if (scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });
  
      menuItems.forEach(item => {
        if (item.getAttribute("href").substring(1) === currentSection) {
          removeActiveClass();
          item.classList.add("active");
        }
      });
    }
  
    window.addEventListener("scroll", highlightMenu);
  });