import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const imagesEl = galleryItems
  .map(({ preview, original, description }) =>
      `<li>
      <a class="gallery__item" href="${original}">
          <img class="gallery__image" 
          src="${preview}" 
          alt="${description}" />
        </a>
        </li>`
  ).join('');

galleryEl.insertAdjacentHTML('afterbegin', imagesEl);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});