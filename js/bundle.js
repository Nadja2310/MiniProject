/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/albums.js":
/*!***********************!*\
  !*** ./src/albums.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _photos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photos */ \"./src/photos.js\");\n\r\n\r\nlet getAlbum;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAlbum = (id) => {\r\n   // fetch(`${ URL }/albums?userId=${id}`)\r\n   fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)\r\n      .then((response) => response.json())\r\n      .then((albums) => {\r\n        renderAlbums(albums);\r\n        addEventAlbums();\r\n      });\r\n  });\r\n  \r\n  const renderAlbums = (albums) => {\r\n    const ulAlbums = document.querySelector(\"#albumsText\");\r\n    ulAlbums.innerHTML = \"\";\r\n    albums.forEach((album) => {\r\n      ulAlbums.innerHTML += `<li><span id=\"album_${album.id}\">${album.title}</span></li>`;\r\n    });\r\n  };\r\n  const addEventAlbums = () => {\r\n    const lis = document.querySelectorAll(\"#albumsText span\");\r\n    for (let li of lis) {\r\n      li.addEventListener(\"click\", (event) => {\r\n        event.preventDefault();\r\n        const [, idAlbum] = event.target.id.split(\"_\");\r\n        (0,_photos__WEBPACK_IMPORTED_MODULE_1__.default)(idAlbum);\r\n      });\r\n    }\r\n  };\n\n//# sourceURL=webpack://05_05_2021_projectTabs_webpack/./src/albums.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ \"./src/users.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\n\r\n\r\nconst main = () => {\r\n    fetch(`${ _constants__WEBPACK_IMPORTED_MODULE_1__.URL }/users`)\r\n    .then((response) => response.json())\r\n    .then((users) => {\r\n        (0,_users__WEBPACK_IMPORTED_MODULE_0__.renderUser)(users);\r\n        (0,_users__WEBPACK_IMPORTED_MODULE_0__.usersListener)();\r\n    });\r\n};\r\nmain();\n\n//# sourceURL=webpack://05_05_2021_projectTabs_webpack/./src/app.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"URL\": () => (/* binding */ URL)\n/* harmony export */ });\nconst URL = \"https://jsonplaceholder.typicode.com\";\r\n\n\n//# sourceURL=webpack://05_05_2021_projectTabs_webpack/./src/constants.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet getInfo;\r\nlet userId\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getInfo = (userId) => {\r\n    console.log(userId);\r\n    //fetch(`${ URL }/users/${userId}`)\r\n    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)\r\n    .then((response) => response.json())\r\n    .then((userInfo) => {\r\n        renderInfo(userInfo);        \r\n    });\r\n});\r\nconst renderInfo = (userInfo) => {\r\nconst sectInfo = document.querySelector(\"#infoText\");\r\ndocument.querySelector(\"#todoText\").innerHTML=\"\";\r\ndocument.querySelector(\"#postsText\").innerHTML=\"\";\r\ndocument.querySelector(\"#albumsText\").innerHTML=\"\";\r\ndocument.querySelector(\"#photos\").innerHTML='';\r\n\r\n    sectInfo.classList.remove(\"hidden\");\r\n    sectInfo.innerHTML = \"\";\r\n    for (const key in userInfo) {\r\n         const element = userInfo[key];\r\n        if (typeof element === 'object') {\r\n            sectInfo.innerHTML += `<div><h3>${key} </h3></div>`; \r\n            for (const key1 in element) {\r\n              sectInfo.innerHTML += `<div><h3>${key1}:${element[key1]} </h3></div>`;   \r\n            }      \r\n        }else { sectInfo.innerHTML += `<div><h3>${key}:${element} </h3></div>`; }\r\n    }           \r\n}\n\n//# sourceURL=webpack://05_05_2021_projectTabs_webpack/./src/info.js?");

/***/ }),

/***/ "./src/photos.js":
/*!***********************!*\
  !*** ./src/photos.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\nlet getPhotos;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPhotos = (id) => {\r\n    //fetch(`${ URL }/photos?albumId=${id}`)\r\n    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)\r\n      .then((response) => response.json())\r\n      .then((photos) => {\r\n        renderPhotos(photos);\r\n      });\r\n  });\r\n  \r\n  const renderPhotos = (photos) => {\r\n    const divPhoto = document.querySelector(\"#photos\");\r\n    divPhoto.innerHTML = \"\";\r\n    photos.forEach((photo) => {\r\n     divPhoto.innerHTML += `<div><img src=${photo.thumbnailUrl}></div>`;\r\n    });\r\n    document.querySelector(\"#photos\").classList.remove(\"hidden\");\r\n\r\n  };\n\n//# sourceURL=webpack://05_05_2021_projectTabs_webpack/./src/photos.js?");

/***/ }),

/***/ "./src/posts.js":
/*!**********************!*\
  !*** ./src/posts.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\nlet getPosts;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPosts= (userId) => {\r\n   // fetch(`${ URL }/posts?userId=${userId}`)\r\n   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)\r\n    .then((response) => response.json())\r\n    .then((userPosts) => {\r\n        \r\n    const sectPosts = document.querySelector(\"#postsText\");\r\n    sectPosts.innerHTML = \"\";\r\n    userPosts.forEach((elt)  => {\r\n        sectPosts.innerHTML += `<div><h3>Title:${elt.title}</h3></div>`;\r\n       sectPosts.innerHTML += `<div><h4>${elt.body}</h4></div>`;\r\n     });    \r\n    });          \r\n});\n\n//# sourceURL=webpack://05_05_2021_projectTabs_webpack/./src/posts.js?");

/***/ }),

/***/ "./src/tabsListener.js":
/*!*****************************!*\
  !*** ./src/tabsListener.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info */ \"./src/info.js\");\n/* harmony import */ var _toDos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDos */ \"./src/toDos.js\");\n/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts */ \"./src/posts.js\");\n/* harmony import */ var _albums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./albums */ \"./src/albums.js\");\n\r\n\r\n\r\n\r\n\r\nlet tabsListener;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabsListener = (id) => { \r\n    const tabLinks = document.querySelectorAll(\".tabs\");\r\n    const tabPanels = document.querySelectorAll(\".tabs-panel\");\r\n    const tabs = document.getElementsByClassName('tab');  \r\n    for (let elt of tabLinks) {\r\n        elt.addEventListener(`click`, event => {\r\n            event.preventDefault();     \r\n            const tabId = event.target.dataset.index; \r\n            for (let i = 0; i <4; i++){\r\n                    tabs[i].classList.remove('active');  \r\n                }\r\n            if (tabId==1){     \r\n                (0,_toDos__WEBPACK_IMPORTED_MODULE_1__.default)(id);\r\n                document.querySelector(\"#todoText\").classList.remove(\"hidden\");\r\n                document.querySelector(\"#infoText\").classList.add(\"hidden\");\r\n                document.querySelector(\"#postsText\").classList.add(\"hidden\");\r\n                document.querySelector(\"#albumsText\").classList.add(\"hidden\");\r\n                event.target.classList.add('active');\r\n            }\r\n             \r\n            if (tabId==0){     \r\n                (0,_info__WEBPACK_IMPORTED_MODULE_0__.default)(id);\r\n                document.querySelector(\"#todoText\").classList.add(\"hidden\");\r\n                document.querySelector(\"#infoText\").classList.remove(\"hidden\");\r\n                document.querySelector(\"#postsText\").classList.add(\"hidden\");\r\n                document.querySelector(\"#albumsText\").classList.add(\"hidden\");\r\n                event.target.classList.add('active');\r\n            }\r\n            if (tabId==2){     \r\n                (0,_posts__WEBPACK_IMPORTED_MODULE_2__.default)(id);\r\n                 document.querySelector(\"#todoText\").classList.add(\"hidden\");\r\n                document.querySelector(\"#infoText\").classList.add(\"hidden\");\r\n                document.querySelector(\"#postsText\").classList.remove(\"hidden\");\r\n                document.querySelector(\"#albumsText\").classList.add(\"hidden\"); \r\n                event.target.classList.add('active');\r\n            }\r\n            if (tabId==3){     \r\n                (0,_albums__WEBPACK_IMPORTED_MODULE_3__.default)(id);\r\n               document.querySelector(\"#todoText\").classList.add(\"hidden\");\r\n                document.querySelector(\"#infoText\").classList.add(\"hidden\");\r\n                document.querySelector(\"#postsText\").classList.add(\"hidden\");\r\n                document.querySelector(\"#albumsText\").classList.remove(\"hidden\"); \r\n                event.target.classList.add('active');\r\n            } \r\n           // document.querySelector(\"#photos\").style.visibility = 'hidden';\r\n           document.querySelector(\"#photos\").classList.remove(\"hidden\");\r\n            document.querySelector(\"#photos\").innerHTML='';\r\n        });\r\n    }\r\n});\n\n//# sourceURL=webpack://05_05_2021_projectTabs_webpack/./src/tabsListener.js?");

/***/ }),

/***/ "./src/toDos.js":
/*!**********************!*\
  !*** ./src/toDos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\r\nlet getTodo;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTodo = (userId) => {\r\n   // fetch(`${ URL }/todos?userId=${userId}`)\r\n   fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)\r\n    .then((response) => response.json())\r\n    .then((userTodo) => {\r\n        \r\n    const sectTodo = document.querySelector(\"#todoText\");\r\n    sectTodo.innerHTML = \"\";\r\n    userTodo.forEach((elt)  => {\r\n       sectTodo.innerHTML += `<div><p class=\"capitalize\">${elt.title}</p></div>`;\r\n     });    \r\n    });          \r\n});\n\n//# sourceURL=webpack://05_05_2021_projectTabs_webpack/./src/toDos.js?");

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderUser\": () => (/* binding */ renderUser),\n/* harmony export */   \"usersListener\": () => (/* binding */ usersListener)\n/* harmony export */ });\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info */ \"./src/info.js\");\n/* harmony import */ var _tabsListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabsListener */ \"./src/tabsListener.js\");\n\r\n\r\nconst renderUser = (users) => {\r\n    const sectUser = document.querySelector(\"#users\");\r\n  users.forEach((user) => {\r\n    sectUser.innerHTML += `<div id=\"user_${user.id}\"><h3>${user.name}</h3></div>`;\r\n  });\r\n};\r\n\r\nconst usersListener = () => {\r\n    const list = document.querySelectorAll(\"#users div\"); \r\n    const tabs = document.getElementsByClassName('tab');  \r\n    for (let elt of list) {\r\n        elt.addEventListener(`click`, event => {\r\n            event.preventDefault();\r\n            const [, id] = event.currentTarget.id.split('_');\r\n            document.querySelector(\"#tabs-container\").classList.remove(\"hidden\");         \r\n            for (let i = 1; i <4; i++){\r\n                    tabs[i].classList.remove('active');  \r\n                }\r\n                tabs[0].classList.add('active');  \r\n            (0,_info__WEBPACK_IMPORTED_MODULE_0__.default)(id);\r\n            (0,_tabsListener__WEBPACK_IMPORTED_MODULE_1__.default)(id);\r\n        })\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://05_05_2021_projectTabs_webpack/./src/users.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;