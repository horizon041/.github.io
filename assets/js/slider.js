const slider = document.querySelector('.slider');
if(slider){
  let scrollAmount = 0;
  setInterval(() => {
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    } else {
      scrollAmount += slider.clientWidth * 0.8;
    }
    slider.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, 4000);
}
