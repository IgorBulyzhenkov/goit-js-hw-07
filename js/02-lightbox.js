import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const cardsImage = createImageMarkup(galleryItems);

galleryEl.innerHTML = cardsImage;

function createImageMarkup(img) {
  return img
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

let Lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: ".gallery__image",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  animationSpeed: 250,
  preloading: false,
  docClose: false,
  widthRatio: 1,
  doubleTapZoom:1.5,
 });
