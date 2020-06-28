const slider = document.querySelector('.js-slider');
const prevBtn = document.querySelector('.js-btn-prev');
const nextBtn = document.querySelector('.js-btn-next');
const slides = Array.from(document.querySelectorAll('.js-slide'));
const wrap = document.querySelector('.btn-wrap');
const imgs = Array.from(document.querySelectorAll('.js-img'));
let index = 0;

//because if we set top 0 it will set relative to body, it will stick to top of the view port,
//we need to take in account the margin around img (30px)
//so we take the height of the wrap element substract the margin around the img => 10px
// const MARGIN_DIFF = 30;
// const DIFF_HEIGHT = wrap.offsetHeight - MARGIN_DIFF;

// wrap.style.top = `${imgs[0].clientHeight + DIFF_HEIGHT}px`

// window.addEventListener('resize', function() {
//   wrap.style.top = `${imgs[0].clientHeight + DIFF_HEIGHT}px`
// })

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