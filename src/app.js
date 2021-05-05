import {renderUser,usersListener} from './users'
import {URL} from './constants'

const main = () => {
    fetch(`${ URL }/users`)
    .then((response) => response.json())
    .then((users) => {
        renderUser(users);
        usersListener();
    });
};
main();