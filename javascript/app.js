document.addEventListener('DOMContentLoaded', () => {

  const slideShow =  document.querySelectorAll('.slide');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  let counter = 0;


  slideShow[0].style.display='inline-flex';


  function moveNext() {
    if (counter === slideShow.length-1) {
      counter = 0;
    } else counter++;

    for(let i=0; i<slideShow.length;i++) {
      if (i === counter) {
        slideShow[i].style.display='flex';
      } else  slideShow[i].style.display='none';
    }
    document.querySelector('.slideshow').scrollIntoView();
  }
  next.addEventListener('click', moveNext);

  function movePrev() {
    if (counter === 0) {
      counter = slideShow.length-1;
    } else counter--;

    for(let i=0; i<slideShow.length;i++) {
      if (i === counter) {
        slideShow[i].style.display='inline-flex';
      } else  slideShow[i].style.display='none';
    }
    document.querySelector('.slideshow').scrollIntoView();
  }
  prev.addEventListener('click', movePrev);

});
