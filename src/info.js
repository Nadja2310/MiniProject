let getInfo;
let userId
export default getInfo = (userId) => {
    console.log(userId);
    //fetch(`${ URL }/users/${userId}`)
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((userInfo) => {
        renderInfo(userInfo);        
    });
}
const renderInfo = (userInfo) => {
const sectInfo = document.querySelector("#infoText");
document.querySelector("#todoText").innerHTML="";
document.querySelector("#postsText").innerHTML="";
document.querySelector("#albumsText").innerHTML="";
document.querySelector("#photos").innerHTML='';

    sectInfo.classList.remove("hidden");
    sectInfo.innerHTML = "";
    for (const key in userInfo) {
         const element = userInfo[key];
        if (typeof element === 'object') {
            sectInfo.innerHTML += `<div><h3>${key} </h3></div>`; 
            for (const key1 in element) {
              sectInfo.innerHTML += `<div><h3>${key1}:${element[key1]} </h3></div>`;   
            }      
        }else { sectInfo.innerHTML += `<div><h3>${key}:${element} </h3></div>`; }
    }           
}