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
  
  
  // New Batches
 
  
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