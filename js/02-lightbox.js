import { galleryItems } from './gallery-items.js';

const ulList = document.querySelector(".gallery");
const markup = galleryItems.map(image =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
   </a>
</li>`).join("");

ulList.insertAdjacentHTML("beforeend", markup);

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });