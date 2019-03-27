const slide = document.querySelectorAll('.slide');
// previous/next buttons
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
// pause/play button
const pause = document.querySelector('#pause');
// autoplay on
let auto = true;

// slideshow speed
const time = 6000;

let slideInterval;


const prevSlide = () => {
  // get active slide
  const active = document.querySelector('.active');
  // get past class
  const past = document.querySelector('.past');
  // remove past class
  past.classList.remove('past');
  // from active slide remove active class and add past class
  active.classList.remove('active');
  active.classList.add('past');
  // check for active next element sibling
  if(active.nextElementSibling) {
  // add active class to next element sibling
    active.nextElementSibling.classList.add('active');
  } else {
  // if last image add active class to first image
    slide[0].classList.add('active');
  }
}

const nextSlide = () => {
  // get active slide
  const active = document.querySelector('.active');
  // get past slide
  const past = document.querySelector('.past');
  // remove active class
  active.classList.remove('active');
  // from past slide remove past class and add active class
  past.classList.remove('past');
  past.classList.add('active');
  // check for past previous element sibling
  if(past.previousElementSibling) {
  // add past class to previous element sibling
    past.previousElementSibling.classList.add('past');
  } else {
  // if first slide add past class to last slide
    slide[slide.length - 1].classList.add('past');
  }
}

// autoplay
if(auto) {
  slideInterval = setInterval(prevSlide, time);
}

// next slide, change direction
next.addEventListener('click', e => {
  nextSlide();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, time);
  }
})

// previous slide, change direction
prev.addEventListener('click', e => {
  prevSlide();
  if(auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(prevSlide, time);
  }
})

// play/pause slideshow
pause.addEventListener('click', e => {
  auto = !auto;
  if(auto) {
    slideInterval = setInterval(prevSlide, time);
    pause.classList.remove('fa-play');
    pause.classList.add('fa-pause');
  } else {
    clearInterval(slideInterval);
    pause.classList.remove('fa-pause');
    pause.classList.add('fa-play');
  }
})
