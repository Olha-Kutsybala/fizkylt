import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';
import { feedback } from './feedback-list';

const container_js = document.querySelector('.js-feedback');

const markup = feedback
  .map(
    ({
      id,
      img,
      name,
      stars,
      description,
    }) => `<div class="feedback-item swiper-slide" data-id=${id}><div class="feedback-container">
  <img src="${img}" alt="${name}" />
  <div>
    <h2 class="feedback-title">${name}</h2>
    <img src="${stars}" alt="stars">
  </div>
</div>
<p class="feedback-descr">${description}</p>
</div>`
  )
  .join('');

container_js.insertAdjacentHTML('beforeend', markup);

new Swiper('.feed-cont', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Default parameters
  // pagination: false,
  // slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
