import Swiper from 'swiper';
import { feedback } from './feedback-list';

window.addEventListener('load', function () {
  const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    slidesPerView: 1,
    breakpoints: {
      //     // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      //     // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      //     // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });

  // Підключення обробників подій для кнопок навігації
  document
    .querySelector('.swiper-button-next')
    .addEventListener('click', function () {
      swiper.slideNext(); // Перехід до наступного слайда
    });

  document
    .querySelector('.swiper-button-prev')
    .addEventListener('click', function () {
      swiper.slidePrev(); // Перехід до попереднього слайда
    });
});

const container_js = document.querySelector('.js-feedback');

const markup = feedback
  .map(
    ({
      id,
      img,
      name,
      stars,
      description,
    }) => `<div class="feedback-item swiper-slide" data-id=${id}><div class="">
  <div class="feedback-container">
    <h2 class="feedback-title">${name}</h2>
    <img src="${stars}" alt="stars">
  </div>
</div>
<p class="feedback-descr">${description}</p>
</div>`
  )
  .join('');

container_js.insertAdjacentHTML('beforeend', markup);
