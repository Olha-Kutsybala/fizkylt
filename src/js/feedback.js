import { feedback } from './feedback-list';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { options } from './pagination';

const container_pagination = document.getElementById('pagination');

const pagination = new Pagination(container_pagination, options);

pagination.on('beforeMove', event => {
  const currentPage = event.page;
  console.log(currentPage);
  //   const { hits, totalHits } = await imageApiService.fetchImages(currentPage);
  //   renderGalleryMarkup(hits);

  //   if (currentPage === 10) {
  //     return false;
  // return true;
  //   }
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
    }) => `<li class="feedback-item" data-id=${id}><div class="feedback-container">
  <img src="${img}" alt="${name}" />
  <div>
    <h2 class="feedback-title">${name}</h2>
    <img src="${stars}" alt="stars">
  </div>
</div>
<p class="feedback-descr">${description}</p>
</li>`
  )
  .join('');

container_js.insertAdjacentHTML('beforeend', markup);
