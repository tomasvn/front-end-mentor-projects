const slider = document.querySelector('.js-slider');
const prevBtn = document.querySelector('.js-btn-prev');
const nextBtn = document.querySelector('.js-btn-next');
const slides = Array.from(document.querySelectorAll('.js-slide'));
let index = 0;

nextBtn.addEventListener('click', () => {
  if (index === slides.length - 1) index = -1;
  
  index++;
  slider.style.transform = `translateX(-${index * 100}%)`;
})

prevBtn.addEventListener('click', function() {
  if (index < 1) index = slides.length

  index--;
  slider.style.transform = `translateX(-${index * 100}%)`;
})