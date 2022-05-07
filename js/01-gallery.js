import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const createGallery = galleryItems.map((item) => {
    const galleryImg = `<div class="gallery__item">
    <a href='${item.original}' class='gallery__link'>
    <img src ='${item.preview}' alt ='${item.description}' class="gallery__image" data-sourse ='${item.original}'>
    </a>
    </div>`
    return galleryImg
})

gallery.insertAdjacentHTML('beforeend', createGallery.join(''));


const selectImg = (e) => {
    e.preventDefault();


    if (!e.target.classList.contains('gallery__image')) {
        return
    }
    
    const instance = basicLightbox.create(`<img src="${e.target.dataset.sourse}" width="800" height="600">`)
    instance.show()

}



gallery.addEventListener('click', selectImg);


console.log(galleryItems);
