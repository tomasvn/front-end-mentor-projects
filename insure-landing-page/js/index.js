const body = document.body;
const menu = document.querySelector('.js-menu');
const navbar = document.querySelector('.js-navbar');
const icons = document.querySelectorAll(".icon");

const handleClick = () => {
  body.classList.toggle('no-overflow');
  menu.classList.toggle('is-active');
  navbar.classList.toggle('is-active');

  icons.forEach(ico => ico.classList.toggle("is-hidden"));
}

menu.addEventListener('click', handleClick);