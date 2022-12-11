import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryStrHtml = galleryItems
  .map(({ preview, original, description }) => {
    return `
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
    
      alt="${description}"
    />
  </a>
`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryStrHtml);
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
