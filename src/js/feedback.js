// import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';

import { feedback } from './feedback-list';

// window.addEventListener('load', function () {
//   const swiper = new Swiper('.swiper-container', {
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     grabCursor: true,
//     loop: true,
//     speed: 700,
//     touchEventsTarget: 'wrapper',
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     // slidesPerView: 1,
//     breakpoints: {
//       //     // when window width is >= 320px
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 30,
//       },
//       //     // when window width is >= 480px
//       480: {
//         slidesPerView: 1,
//         spaceBetween: 30,
//       },
//       //     // when window width is >= 640px
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 40,
//       },
//     },
//   });

//   // Підключення обробників подій для кнопок навігації
//   document
//     .querySelector('.swiper-button-next')
//     .addEventListener('click', function () {
//       swiper.slideNext(); // Перехід до наступного слайда
//     });

//   document
//     .querySelector('.swiper-button-prev')
//     .addEventListener('click', function () {
//       swiper.slidePrev(); // Перехід до попереднього слайда
//     });
// });

const container_js = document.querySelector('.js-feedback');

const markup = feedback
  .map(
    ({
      id,
      img,
      name,
      stars,
      description,
    }) => `<div class="feedback-item" data-id=${id}><div class="">
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

// $('.center').slick({
//   // centerMode: true,
//   // centerPadding: '450px', // defines other partial showing slides width
//   slidesToShow: 1,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         // arrows: true,
//         // centerMode: true,
//         // centerPadding: '40px',
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         // arrows: false,
//         // centerMode: true,
//         // centerPadding: '40px',
//         slidesToShow: 1,
//       },
//     },
//   ],
// });
// $('.carousel').slick({
//   dots: true,
//   slidesToShow: 1,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         // arrows: false,
//         // centerMode: true,
//         // centerPadding: '40px',
//         slidesToShow: 3,
//       },
//     },
//     // {
//     //   breakpoint: 480,
//     //   settings: {
//     //     // arrows: false,
//     //     // centerMode: true,
//     //     // centerPadding: '40px',
//     //     slidesToShow: 1,
//     //   },
//     // },
//   ],
// });

$(document).ready(function () {
  $('.carousel').slick({
    // centerMode: true,
    // centerPadding: '450px', // defines other partial showing slides width
    slidesToShow: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // arrows: false,
          // centerMode: true,
          // centerPadding: '20px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          // arrows: false,
          // centerMode: true,
          // centerPadding: '20px',
          slidesToShow: 1,
        },
      },
    ],
  });
});
