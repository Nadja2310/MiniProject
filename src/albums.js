import {URL} from './constants'
import getPhotos from './photos';
let getAlbum;
export default getAlbum = (id) => {
   // fetch(`${ URL }/albums?userId=${id}`)
   fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      .then((response) => response.json())
      .then((albums) => {
        renderAlbums(albums);
        addEventAlbums();
      });
  };
  
  const renderAlbums = (albums) => {
    const ulAlbums = document.querySelector("#albumsText");
    ulAlbums.innerHTML = "";
    albums.forEach((album) => {
      ulAlbums.innerHTML += `<li><span id="album_${album.id}">${album.title}</span></li>`;
    });
  };
  const addEventAlbums = () => {
    const lis = document.querySelectorAll("#albumsText span");
    for (let li of lis) {
      li.addEventListener("click", (event) => {
        event.preventDefault();
        const [, idAlbum] = event.target.id.split("_");
        getPhotos(idAlbum);
      });
    }
  };