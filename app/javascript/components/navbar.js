// app/javascript/components/navbar.js
const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-lewagon');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-white');
      } else {
        navbar.classList.remove('navbar-white');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
