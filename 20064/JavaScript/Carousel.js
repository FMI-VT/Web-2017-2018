function nextSlide() {
  var slide = document.getElementsByClassName('slide-active')[0];
  var sibling = slide.nextElementSibling;

  if (sibling.nodeName.toLowerCase() != 'div') {
    sibling = document.getElementsByClassName('slide-hidden')[0];
  }

  slide.classList.remove('slide-active');
  slide.classList.add('slide-hidden');

  sibling.classList.add('slide-active');
  sibling.classList.remove('slide-hidden');
}

function prevSlide() {
  var slide = document.getElementsByClassName('slide-active')[0];
  var sibling = slide.previousElementSibling;

  if (sibling.nodeName.toLowerCase() != 'div') {
    sibling = document.getElementsByClassName('slide-hidden')[1];
  }

  slide.classList.remove('slide-active');
  slide.classList.add('slide-hidden');

  sibling.classList.add('slide-active');
  sibling.classList.remove('slide-hidden');
}

var next = document.getElementById('next');
next.addEventListener('click', nextSlide);

var prev = document.getElementById('prev');
prev.addEventListener('click', prevSlide);


function timeClick() {
  next.click();
}
var newTimer = setInterval(timeClick, 4000);