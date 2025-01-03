document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');
    const overlay = document.querySelector('.overlay');
    const links = document.querySelectorAll('.navbar a');
  
    if (hamburgerMenu) {
      hamburgerMenu.addEventListener('click', () => {
        navbar.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
      });
    }
  
    links.forEach((link) => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
      });
    });
  });
  