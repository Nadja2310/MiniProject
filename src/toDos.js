import {URL} from './constants'
let getTodo;
export default getTodo = (userId) => {
   // fetch(`${ URL }/todos?userId=${userId}`)
   fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then((response) => response.json())
    .then((userTodo) => {
        
    const sectTodo = document.querySelector("#todoText");
    sectTodo.innerHTML = "";
    userTodo.forEach((elt)  => {
       sectTodo.innerHTML += `<div><p class="capitalize">${elt.title}</p></div>`;
     });    
    });          
};