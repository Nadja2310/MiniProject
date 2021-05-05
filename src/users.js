import getInfo from './info'
import tabsListener from './tabsListener'
const renderUser = (users) => {
    const sectUser = document.querySelector("#users");
  users.forEach((user) => {
    sectUser.innerHTML += `<div id="user_${user.id}"><h3>${user.name}</h3></div>`;
  });
};

const usersListener = () => {
    const list = document.querySelectorAll("#users div"); 
    const tabs = document.getElementsByClassName('tab');  
    for (let elt of list) {
        elt.addEventListener(`click`, event => {
            event.preventDefault();
            const [, id] = event.currentTarget.id.split('_');
            document.querySelector("#tabs-container").classList.remove("hidden");         
            for (let i = 1; i <4; i++){
                    tabs[i].classList.remove('active');  
                }
                tabs[0].classList.add('active');  
            getInfo(id);
            tabsListener(id);
        })
    }
};

export {renderUser,usersListener};