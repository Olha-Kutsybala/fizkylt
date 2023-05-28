const gotopBTN = document.querySelector('.go-top');

gotopBTN.addEventListener('click', onToTopBtn);
function onToTopBtn() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // setTimeout(toTopBtn, 0);
  }
}

window.addEventListener('scroll', trackScroll);
function trackScroll() {
  const offset = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (offset > coords) {
    gotopBTN.classList.add('go-top-show');
  } else {
    gotopBTN.classList.remove('go-top-show');
  }
}
