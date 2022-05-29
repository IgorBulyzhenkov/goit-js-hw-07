import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const cardsImage = createImageMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', cardsImage);

// console.log(galleryEl, cardsImage);

function createImageMarkup(img) {
    return img.map(({ preview, original, description }) => {
        return `
 <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;}).join('');
}

galleryEl.addEventListener('click', onClickImage);

function onClickImage(e) {
    if (e.target !== "IMG") {
        return;
    }
    console.log(e.target);
}

