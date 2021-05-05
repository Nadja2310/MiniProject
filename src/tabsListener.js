import getInfo from './info';
import getTodo from './toDos';
import getPosts from './posts';
import getAlbum from './albums';

let tabsListener;
export default tabsListener = (id) => { 
    const tabLinks = document.querySelectorAll(".tabs");
    const tabPanels = document.querySelectorAll(".tabs-panel");
    const tabs = document.getElementsByClassName('tab');  
    for (let elt of tabLinks) {
        elt.addEventListener(`click`, event => {
            event.preventDefault();     
            const tabId = event.target.dataset.index; 
            for (let i = 0; i <4; i++){
                    tabs[i].classList.remove('active');  
                }
            if (tabId==1){     
                getTodo(id);
                document.querySelector("#todoText").classList.remove("hidden");
                document.querySelector("#infoText").classList.add("hidden");
                document.querySelector("#postsText").classList.add("hidden");
                document.querySelector("#albumsText").classList.add("hidden");
                event.target.classList.add('active');
            }
             
            if (tabId==0){     
                getInfo(id);
                document.querySelector("#todoText").classList.add("hidden");
                document.querySelector("#infoText").classList.remove("hidden");
                document.querySelector("#postsText").classList.add("hidden");
                document.querySelector("#albumsText").classList.add("hidden");
                event.target.classList.add('active');
            }
            if (tabId==2){     
                getPosts(id);
                 document.querySelector("#todoText").classList.add("hidden");
                document.querySelector("#infoText").classList.add("hidden");
                document.querySelector("#postsText").classList.remove("hidden");
                document.querySelector("#albumsText").classList.add("hidden"); 
                event.target.classList.add('active');
            }
            if (tabId==3){     
                getAlbum(id);
               document.querySelector("#todoText").classList.add("hidden");
                document.querySelector("#infoText").classList.add("hidden");
                document.querySelector("#postsText").classList.add("hidden");
                document.querySelector("#albumsText").classList.remove("hidden"); 
                event.target.classList.add('active');
            } 
           // document.querySelector("#photos").style.visibility = 'hidden';
           document.querySelector("#photos").classList.remove("hidden");
            document.querySelector("#photos").innerHTML='';
        });
    }
};