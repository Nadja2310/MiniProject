import {URL} from './constants'
let getPhotos;
export default getPhotos = (id) => {
    //fetch(`${ URL }/photos?albumId=${id}`)
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((response) => response.json())
      .then((photos) => {
        renderPhotos(photos);
      });
  };
  
  const renderPhotos = (photos) => {
    const divPhoto = document.querySelector("#photos");
    divPhoto.innerHTML = "";
    photos.forEach((photo) => {
     divPhoto.innerHTML += `<div><img src=${photo.thumbnailUrl}></div>`;
    });
    document.querySelector("#photos").classList.remove("hidden");

  };