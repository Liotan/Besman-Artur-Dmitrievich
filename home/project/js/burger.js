var burger = document.querySelector('.burger');
var menu = document.querySelector('.header-nav');
var menuLinks = document.querySelectorAll('.nav-link');
var body = document.body;

burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger-active');
  menu.classList.toggle('header-nav-active');
  body.classList.toggle('stop-scroll');
});

menuLinks.forEach(el => {
  el.addEventListener('click', (e) => {
    burger.classList.remove('burger-active');
    menu.classList.remove('header-nav-active');
    body.classList.remove('stop-scroll');
  });
});
