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
    }) => `<div class="feedback-item" data-id=${id}><div class="">
  <div class="feedback-container">
    <h2 class="feedback-title">${name}</h2>
    <img width=66px height=10 src="${stars}" alt="stars">
  </div>
</div>
<p class="feedback-descr">${description}</p>
</div>`
  )
  .join('');

container_js.insertAdjacentHTML('beforeend', markup);

$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: 3,
      //   },
      // },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
