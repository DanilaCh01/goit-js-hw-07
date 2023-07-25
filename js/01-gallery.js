import { galleryItems } from './gallery-items.js';

const ulList = document.querySelector(".gallery");
const markup = galleryItems.map(image => 
    `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`).join("");

ulList.insertAdjacentHTML("beforeend", markup);

ulList.addEventListener('click', openImageClick);

function openImageClick(evt){
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }

    const choosedImg = evt.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${choosedImg}">  
`, {
        onShow: () => {
        document.addEventListener('keydown', onKeydown);
        },
        onClose: () => {
            document.removeEventListener('keydown', onKeydown);
    }
    })

    instance.show()

    function onKeydown(event) {
        if (event.code !== "Escape") {
            return;
        };

        instance.close()
    };
};