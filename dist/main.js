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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('17 may 2022')\r\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\n//# sourceURL=webpack://js-diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n    const calc = document.getElementById('calc')\r\n    const balcony = document.getElementById('calc-type')\r\n    const glass = document.getElementById('calc-type-material')\r\n    const square = document.getElementById('calc-input')\r\n    const reuslt = document.getElementById('calc-total')\r\n\r\n    const countCalc = () => {\r\n        const balconyValue = +balcony.options[balcony.selectedIndex].value\r\n        let glassValue = +glass.options[glass.selectedIndex].value\r\n        const squareValue = square.value\r\n\r\n        let reusltValue = 0\r\n\r\n\r\n        if(glass.value == \"--\") {\r\n            glassValue = 1\r\n        }\r\n\r\n\r\n        if (balcony.value && square.value) {\r\n            reusltValue = Math.round(balconyValue * glassValue * squareValue)\r\n        } else {\r\n            reusltValue = 0\r\n        }\r\n\r\n        reuslt.value = reusltValue\r\n    }\r\n    if (calc == null) {\r\n        console.log('Калькулятор на другой странице, дружище');\r\n    } else {\r\n    calc.addEventListener('input', (e) => {\r\n        if (e.target === balcony || e.target === square || \r\n            e.target === glass) {\r\n            countCalc()\r\n        } else {\r\n            reusltValue = 0\r\n        }\r\n    })\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://js-diplom/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const headerModal = document.querySelector('.header-modal')\r\n    const serviceModal = document.querySelector('.services-modal')\r\n    const overlay = document.querySelector('.overlay')\r\n\r\n    const close = document.querySelectorAll('[title=\"Close\"]')\r\n    const fancy = document.querySelectorAll('.fancyboxModal')\r\n\r\n    fancy.forEach(btn => {\r\n        btn.addEventListener('click', (e) => {\r\n            if (btn.hash === '#callback') {\r\n                headerModal.style.display = 'block'\r\n                overlay.style.display = 'block'\r\n            } else if (btn.hash === '#application') {\r\n                serviceModal.style.display = 'block'\r\n                overlay.style.display = 'block'\r\n            }\r\n        })\r\n    })\r\n    close.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            headerModal.style.display = ''\r\n            overlay.style.display = ''\r\n            serviceModal.style.display = ''\r\n        })\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://js-diplom/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const scrollUp = document.querySelector('.smooth-scroll__img')\r\n\r\n    scrollUp.style.cursor = 'pointer'\r\n\r\n    window.addEventListener('scroll', () => {\r\n        if (window.scrollY > 650) {\r\n            scrollUp.style.transition = \".5s\"\r\n            scrollUp.style.opacity = \"1\"\r\n        } else {\r\n            scrollUp.style.transition = \".5s\"\r\n            scrollUp.style.opacity = \"0\" \r\n        }\r\n    })\r\n    \r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.smooth-scroll__img')) {\r\n            e.preventDefault()\r\n            const anchor = document.getElementById('header')\r\n            anchor.scrollIntoView({block: \"start\", behavior: \"smooth\"});\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://js-diplom/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (discount) => {\r\n    const timerDaysBoxs = document.querySelectorAll('.count_1')\r\n    const timerHoursBoxs = document.querySelectorAll('.count_2')\r\n    const timerMinutesBoxs = document.querySelectorAll('.count_3')\r\n    const timerSecondsBoxs = document.querySelectorAll('.count_4')\r\n\r\n    const timerDaysBoxF = timerDaysBoxs[0]\r\n    const timerHoursBoxF = timerHoursBoxs[0]\r\n    const timerMinutesBoxF = timerMinutesBoxs[0]\r\n    const timerSecondsBoxF = timerSecondsBoxs[0]\r\n    \r\n    const timerDays = timerDaysBoxF.lastElementChild\r\n    const timerHours = timerHoursBoxF.lastElementChild\r\n    const timerMinutes = timerMinutesBoxF.lastElementChild\r\n    const timerSeconds = timerSecondsBoxF.lastElementChild\r\n\r\n    let intervalID\r\n\r\n    const getTimeRemaining = (discount) => {\r\n        let dateStop = new Date(discount).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n        let hours = Math.floor(timeRemaining / 60 / 60) % 24\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return { timeRemaining, days, hours, minutes, seconds }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining(discount)\r\n\r\n        timerDays.textContent = getTime.days\r\n        timerHours.textContent = getTime.hours\r\n        timerMinutes.textContent = getTime.minutes\r\n        timerSeconds.textContent = getTime.seconds\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            intervalID = setInterval(() => {\r\n                            updateClock()\r\n                        }, 1000);\r\n        } else if (getTime.timeRemaining <= 0) {\r\n            timerDays.textContent = '00'\r\n            timerHours.textContent = '00'\r\n            timerMinutes.textContent = '00'\r\n            timerSeconds.textContent = '00'\r\n            clearInterval(intervalID)\r\n        }\r\n        const zeroToNumber = () => {\r\n            if (getTime.days < 10 && getTime.days >= 0) {\r\n                timerDays.textContent = '0' + getTime.days\r\n            } \r\n            if (getTime.hours < 10 && getTime.days >= 0) {\r\n                timerHours.textContent = '0' + getTime.hours\r\n            }\r\n            if (getTime.minutes < 10 && getTime.days >= 0) {\r\n                timerMinutes.textContent = '0' + getTime.minutes\r\n            }\r\n            if (getTime.seconds < 10 && getTime.days >= 0) {\r\n                timerSeconds.textContent = '0' + getTime.seconds\r\n            }\r\n        }\r\n        const timeEqualify = () => {\r\n            timerDaysBoxs[1].lastElementChild.textContent = timerDays.textContent\r\n            timerHoursBoxs[1].lastElementChild.textContent = timerHours.textContent\r\n            timerMinutesBoxs[1].lastElementChild.textContent = timerMinutes.textContent\r\n            timerSecondsBoxs[1].lastElementChild.textContent = timerSeconds.textContent\r\n        }\r\n        zeroToNumber()\r\n        timeEqualify()\r\n    }\r\n    updateClock()\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://js-diplom/./src/modules/timer.js?");

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