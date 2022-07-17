const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const galleryImages = document.querySelector('#gallery');
// ulGallery.classList.add("list");
// galleryImg.style.listStyleType = "None";
// galleryImg.style.display = "flex";
// galleryImg.style.flexWrap = "wrap";
// const galleryImg = ({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`;
// const galeryMarkupRef = images
//   .map((image) =>`<li><img src="${image.url}" alt="${image.alt}"width = "400" height = "250"/></li>`)
//   .join("");
// const galleryListRef = document.querySelector(".gallery");
// galleryListRef.insertAdjacentHTML("afterbegin", galeryMarkupRef);

const galleryImg = document.querySelector(".gallery");

galleryImg.insertAdjacentHTML(
  "beforeend",
  images
    .map(
      (image) =>
        `<li class="item"><img src="${image.url}" alt= "${image.alt}" width="400" height="250"></li>`
    )
    .join("")
);

galleryImg.style.listStyleType = "None";
