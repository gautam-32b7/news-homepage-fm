const nav_button = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

nav_button.addEventListener('click', function () {
  header.classList.toggle('nav-links-active');
});
