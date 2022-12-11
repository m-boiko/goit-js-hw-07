import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryStrHtml = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryStrHtml);

galleryEl.addEventListener("click", (ev) => {
  ev.preventDefault();
  const instance = basicLightbox.create(`
    <img width="1400" height="900" src="${ev.target.dataset.source}">
`);
  instance.show(() => window.addEventListener("keydown", handleEsc));

  function handleEsc(e) {
    if (e.key === "Escape") {
      instance.close(() => window.removeEventListener("keydown", handleEsc));
    }
  }
});
