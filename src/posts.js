import {URL} from './constants'
let getPosts;
export default getPosts= (userId) => {
   // fetch(`${ URL }/posts?userId=${userId}`)
   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => response.json())
    .then((userPosts) => {
        
    const sectPosts = document.querySelector("#postsText");
    sectPosts.innerHTML = "";
    userPosts.forEach((elt)  => {
        sectPosts.innerHTML += `<div><h3>Title:${elt.title}</h3></div>`;
       sectPosts.innerHTML += `<div><h4>${elt.body}</h4></div>`;
     });    
    });          
};