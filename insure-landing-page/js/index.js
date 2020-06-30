const body = document.body;
const menu = document.querySelector('.js-menu');
const navbar = document.querySelector('.js-navbar');
const handleClick = () => {
  body.classList.toggle('no-overflow');
  menu.classList.toggle('is-active');
  navbar.classList.toggle('is-active');
}

menu.addEventListener('click', handleClick)