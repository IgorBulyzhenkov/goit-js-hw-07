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
 <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
    })
    .join("");
}

function onClickImage(e) {
  e.preventDefault();
  const filter = e.target;
  const url = filter.dataset.source;
  const alt = filter.alt;
  if (filter.nodeName !== "IMG") {
    return;
  }
  modalWindow(url, alt);
}


let instance = "";

function modalWindow(url, alt) {
  instance = basicLightbox.create(
    `
    <img src="${url}" alt="${alt}" width="800" height="600">
`
  );

  instance.show();
  window.addEventListener("keydown", onClickKeyEsc);
}

function onClickKeyEsc(event) {
  console.log(event);
  if (event.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", onClickKeyEsc);
  }
}

galleryEl.addEventListener("click", onClickImage);
