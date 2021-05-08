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

/***/ "./src/about-tab.js":
/*!**************************!*\
  !*** ./src/about-tab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst aboutTab = () => {\n  const title = 'About'\n  const body = 'about body'\n\n  return {\n    title,\n    body\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutTab);\n\n//# sourceURL=webpack://restaurant-page/./src/about-tab.js?");

/***/ }),

/***/ "./src/contact-tab.js":
/*!****************************!*\
  !*** ./src/contact-tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactTab = () => {\n  const title = 'Contact'\n  const body = 'contact body'\n\n  return {\n    title,\n    body\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactTab);\n\n//# sourceURL=webpack://restaurant-page/./src/contact-tab.js?");

/***/ }),

/***/ "./src/home-tab.js":
/*!*************************!*\
  !*** ./src/home-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeTab = () => {\n  const title = 'Home'\n  const body = 'home body'\n\n  return {\n    title,\n    body\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeTab);\n\n//# sourceURL=webpack://restaurant-page/./src/home-tab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-load */ \"./src/initial-load.js\");\n/* harmony import */ var _home_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-tab */ \"./src/home-tab.js\");\n/* harmony import */ var _menu_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-tab */ \"./src/menu-tab.js\");\n/* harmony import */ var _about_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-tab */ \"./src/about-tab.js\");\n/* harmony import */ var _contact_tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-tab */ \"./src/contact-tab.js\");\n\n\n\n\n\n\n(0,_initial_load__WEBPACK_IMPORTED_MODULE_0__.default)()\n\nconst pages = [(0,_home_tab__WEBPACK_IMPORTED_MODULE_1__.default)(), (0,_menu_tab__WEBPACK_IMPORTED_MODULE_2__.default)(), (0,_about_tab__WEBPACK_IMPORTED_MODULE_3__.default)(), (0,_contact_tab__WEBPACK_IMPORTED_MODULE_4__.default)()]\n\nconst tablets = document.querySelectorAll('.tabs')\ntablets.forEach(tab => {\n  tab.addEventListener('click', (e) => {\n    tabSwitch(e.target.textContent.toLowerCase())\n  })\n})\n\nfunction tabSwitch(tabTitle){\n  const tabContent = document.querySelector('.tab-content')\n  const title = document.createElement('h1')\n  const body = document.createElement('div')\n  pages.forEach(page => {\n    if(page.title.toLowerCase() === tabTitle){\n      tabContent.innerHTML = ''\n      title.textContent = page.title\n      body.textContent = page.body\n      tabContent.append(title, body)\n    }\n  })\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initial-load.js":
/*!*****************************!*\
  !*** ./src/initial-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\n\nconst initialLoad = () => {\n  const content = document.querySelector('#content')\n  const title = document.createElement('div')\n  const image = document.createElement('img')\n\n  //title\n  title.classList.add('title')\n  title.textContent = 'Restaurant Title'\n\n  //img\n  const imgContainer = document.createElement('div')\n  imgContainer.classList.add('img-container')\n  image.setAttribute('src', '/restaurant.webp')\n  imgContainer.appendChild(image)\n\n  //container\n  content.appendChild(title)\n  content.appendChild(imgContainer)\n  content.appendChild((0,_tabs__WEBPACK_IMPORTED_MODULE_0__.default)())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n//# sourceURL=webpack://restaurant-page/./src/initial-load.js?");

/***/ }),

/***/ "./src/menu-tab.js":
/*!*************************!*\
  !*** ./src/menu-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuTab = () => {\n  const title = 'Menu'\n  const body = 'menu body'\n\n  return {\n    title,\n    body\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuTab);\n\n//# sourceURL=webpack://restaurant-page/./src/menu-tab.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-tab */ \"./src/home-tab.js\");\n\n\nconst tabs = () => {\n  const container = document.createElement('div')\n  const tabs = document.createElement('ul')\n  const tabContent = document.createElement('div')\n  const home = document.createElement('li')\n  const menu = document.createElement('li')\n  const about = document.createElement('li')\n  const contact = document.createElement('li')\n\n  home.textContent = 'Home'\n  home.className = 'home'\n  menu.textContent = 'Menu'\n  menu.className = 'menu'\n  about.textContent = 'About'\n  about.className = 'about'\n  contact.textContent = 'Contact'\n  contact.className = 'contact'\n\n  //tab content\n  tabContent.className = 'tab-content'\n  const title = document.createElement('h1')\n  const body = document.createElement('p')\n  title.textContent = (0,_home_tab__WEBPACK_IMPORTED_MODULE_0__.default)().title\n  body.textContent = (0,_home_tab__WEBPACK_IMPORTED_MODULE_0__.default)().body\n  tabContent.append(title, body)\n\n\n  tabs.append(home, menu, about, contact)\n\n  tabs.childNodes.forEach(tab => {\n    tab.style.cursor = 'pointer'\n    tab.classList.add('tabs')\n  })\n  \n  container.append(tabs, tabContent)\n\n  return container\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://restaurant-page/./src/tabs.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;