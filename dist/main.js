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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_modalPhoto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modalPhoto */ \"./src/modules/modalPhoto.js\");\n/* harmony import */ var _modules_modalServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modalServices */ \"./src/modules/modalServices.js\");\n/* harmony import */ var _modules_sendingForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendingForm */ \"./src/modules/sendingForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// import validateForm from './modules/validateForm'\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('25 may 2022')\r\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_modalPhoto__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_modalServices__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_sendingForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n// validateForm()\r\n\r\nconst forms = document.querySelectorAll('form')\r\nforms.forEach((form, index) => {\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault()\r\n        form.id = `form${index}`\r\n        \r\n        ;(0,_modules_sendingForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n            formId: `form${index}`,\r\n            someElem: [\r\n                {\r\n                    type: 'block',\r\n                    id: 'calc-total'\r\n                }\r\n            ] \r\n        })\r\n    })\r\n})\n\n//# sourceURL=webpack://js-diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n    const calc = document.getElementById('calc')\r\n    const balcony = document.getElementById('calc-type')\r\n    const glass = document.getElementById('calc-type-material')\r\n    const square = document.getElementById('calc-input')\r\n    const reuslt = document.getElementById('calc-total')\r\n\r\n    const countCalc = () => {\r\n        const balconyValue = +balcony.options[balcony.selectedIndex].value\r\n        let glassValue = +glass.options[glass.selectedIndex].value\r\n        const squareValue = square.value\r\n\r\n        let reusltValue = 0\r\n\r\n        if(glass.value == \"--\") {\r\n            glassValue = 1\r\n        }\r\n\r\n        if (balcony.value && square.value) {\r\n            reusltValue = Math.round(balconyValue * glassValue * squareValue)\r\n        } else {\r\n            reusltValue = 0\r\n        }\r\n\r\n        reuslt.value = reusltValue\r\n    }\r\n    if (calc == null) {\r\n        console.log('?????????????????????? ???? ???????????? ????????????????, ??????????????');\r\n    } else {\r\n    calc.addEventListener('input', (e) => {\r\n        if (e.target === balcony || e.target === square || \r\n            e.target === glass) {\r\n            countCalc()\r\n        } else {\r\n            reusltValue = 0\r\n        }\r\n    })\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://js-diplom/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const overlay = document.querySelector('.overlay')\r\n\r\n    const headerModalContent = document.querySelector('.header-modal')\r\n    const servicesModal = document.querySelector('.services-modal')\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.header-modal') && e.target.closest('.overlay')) {\r\n            overlay.style.display = \"\"\r\n            headerModalContent.style.display = \"\"\r\n        } else if (e.target.closest('.header-modal__close')) {\r\n            overlay.style.display = \"\"\r\n            headerModalContent.style.display = \"\"\r\n        } else if (e.target.closest('.button > .fancyboxModal')) {\r\n            overlay.style.display = \"block\"\r\n            headerModalContent.style.display = \"block\"\r\n        }\r\n\r\n        if (e.target.closest('.utp-button > .fancyboxModal')) {\r\n            overlay.style.display = \"block\"\r\n            servicesModal.style.display = \"block\"\r\n        }\r\n        \r\n        if (e.target.closest('.service-button > .fancyboxModal')) {\r\n            overlay.style.display = \"block\"\r\n            servicesModal.style.display = \"block\"\r\n        } else if (e.target.closest('.services-modal__close')) {\r\n            overlay.style.display = \"\"\r\n            servicesModal.style.display = \"\"\r\n        } else if (!e.target.closest('.services-modal')  && e.target.closest('.overlay')) {\r\n            overlay.style.display = \"\"\r\n            servicesModal.style.display = \"\"\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://js-diplom/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/modalPhoto.js":
/*!***********************************!*\
  !*** ./src/modules/modalPhoto.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalPhoto = () => {\r\n    const style = '.modal-img { z-index: 99; position: fixed; top: 2%; left: 33%; background: url(./images/documents/original/document4.jpg) center / cover; width: 654px; height: 900px; transition: 200ms;}'\r\n    const styleCreate = document.createElement('style')\r\n    styleCreate.innerText = style\r\n    document.head.appendChild(styleCreate)\r\n\r\n    const overlay = document.querySelector('.overlay')\r\n    const body = document.querySelector('body')\r\n    \r\n    const imgs = document.querySelectorAll('.sertificate-document');\r\n    const disableImgAttributes = document.querySelectorAll('.sertificate-document')\r\n    const hoverEffectImgs = document.querySelectorAll('.sertificate-document')\r\n    \r\n    hoverEffectImgs.forEach(hoverEffectImg => {\r\n        hoverEffectImg.addEventListener('mouseover', () => {\r\n            hoverEffectImg.style.transition = '0.2'\r\n            hoverEffectImg.style.opacity = \"0.5\"\r\n        })\r\n        hoverEffectImg.addEventListener('mouseout', () => {\r\n            hoverEffectImg.style.transition = '0.2'\r\n            hoverEffectImg.style.opacity = \"1\"\r\n        })\r\n    })\r\n    \r\n    disableImgAttributes.forEach(disableImgAttributes => {\r\n        disableImgAttributes.setAttribute('href', '')\r\n        disableImgAttributes.style.cursor = 'zoom-in'\r\n    })\r\n    \r\n    const addModalDocument = () => {\r\n        overlay.style.display = \"block\";\r\n        const modalDiv = document.createElement('div')\r\n        modalDiv.classList.add('modal-img')\r\n        body.append(modalDiv)\r\n        modalDiv.innerHTML = `\r\n        <span title=\"Close\" class=\"header-modal__close\">x</span>\r\n        `\r\n        document.addEventListener('click', (e) => {\r\n            if (e.target.closest('.overlay') || e.target.closest(\".header-modal__close\")) {\r\n                modalDiv.remove()\r\n                overlay.style.display = 'none'\r\n            }\r\n\r\n        })\r\n    }\r\n    \r\n    imgs.forEach(imgDiv => {\r\n        imgDiv.addEventListener('click', (e) => {\r\n            e.preventDefault()            \r\n            addModalDocument()\r\n        })\r\n    })    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalPhoto);\n\n//# sourceURL=webpack://js-diplom/./src/modules/modalPhoto.js?");

/***/ }),

/***/ "./src/modules/modalServices.js":
/*!**************************************!*\
  !*** ./src/modules/modalServices.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalServices = () => {\r\n    const benefitItems = document.querySelectorAll('.benefits__item')\r\n    const cards = document.querySelectorAll('.col-md-12.col-lg-6') \r\n\r\n    const style = '.not-active {display:none}'\r\n    const styleCreate = document.createElement('style')\r\n    styleCreate.innerText = style\r\n    document.head.appendChild(styleCreate)\r\n\r\n    const checkForInnerWidth = (toIt) => {\r\n        let toItArr = Array.from(toIt)\r\n        toIt.forEach((item, i) => {\r\n            if (window.innerWidth >= 576) {\r\n                if (toItArr.length % 3 === 0){\r\n                    if (i > 2) {\r\n                        item.classList.add('not-active')\r\n                    }\r\n                } \r\n                if (toItArr.length % 4 === 0){\r\n                    if (i >= 2) {\r\n                        item.classList.add('not-active')\r\n                    }\r\n                }\r\n                    \r\n            } else {\r\n                    prevSlide(benefitItems, currentSlide, 'not-active')\r\n        \r\n                    if (e.target.closest('.benefits__arrow--right')) {\r\n                        currentSlide++\r\n                    } else if (e.target.closest('.benefits__arrow--left')) {\r\n                        currentSlide--          \r\n                    }\r\n                    if (currentSlide >= benefitItems.length) {\r\n                        currentSlide = 0\r\n                    }\r\n                    if (currentSlide < 0) {\r\n                        currentSlide = benefitItems.length - 1\r\n                    }\r\n            \r\n                    nextSlide(benefitItems, currentSlide, 'not-active')\r\n            }  \r\n        })\r\n    }\r\n\r\n    checkForInnerWidth(benefitItems)\r\n    checkForInnerWidth(cards)\r\n    \r\n    const classSwitcher = (item) => {\r\n        item.forEach(item => {\r\n            if (item.classList.contains('not-active')) {\r\n                item.classList.remove('not-active')\r\n            } else {\r\n                item.classList.add('not-active')\r\n            }\r\n        })  \r\n    }\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.benefits__arrow--right')) {\r\n            classSwitcher(benefitItems)\r\n        }\r\n        if (e.target.closest('.benefits__arrow--left')) {\r\n            classSwitcher(benefitItems)\r\n        }\r\n        if (e.target.closest('.services__arrow--right')) {\r\n            classSwitcher(cards)\r\n        }\r\n        if (e.target.closest('.services__arrow--left')) {\r\n            classSwitcher(cards)\r\n        }\r\n    })\r\n \r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass)\r\n    }\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalServices);\n\n//# sourceURL=webpack://js-diplom/./src/modules/modalServices.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const scrollBtn = document.querySelector('.smooth-scroll')\r\n\r\n    window.addEventListener('scroll', () => {\r\n        if (window.pageYOffset < 550) {\r\n            scrollBtn.style.transition = \".5s\"\r\n            scrollBtn.style.opacity = \"0\"\r\n        } else {\r\n            scrollBtn.style.transition = \".5s\"\r\n            scrollBtn.style.opacity = \"1\"\r\n        }\r\n    })\r\n    \r\n    scrollBtn.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        const anchor = document.getElementById('header')\r\n        anchor.scrollIntoView({block: \"start\", behavior: \"smooth\"});\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://js-diplom/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/sendingForm.js":
/*!************************************!*\
  !*** ./src/modules/sendingForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendingForm = ({ formId, someElem = [] }) => {\r\n    const form = document.getElementById(formId)\r\n    const statusBlock = document.createElement('div')\r\n\r\n    const loadText = '???????? ????????????????...'\r\n    const errorText = '??????-???? ?????????? ???? ??????...'\r\n    const successText = '??????????????! ?????????? ???? ?? ???????? ????????????????'\r\n\r\n    const validate = (formElements) => {\r\n        let success = true\r\n        formElements.forEach(input => {\r\n           if (input.name == 'fio') {\r\n                if (input.value === '') {\r\n                    success = false\r\n                } else if (input.value.match(/[^??-????-??\\^a-zA-Z\\s]/g)) {\r\n                    success = false\r\n                }\r\n            } else if (input.name == 'phone') {\r\n                if (input.value === '') {\r\n                    success = false\r\n                } else if (input.value.match(/[^0-9\\(\\)\\+\\-]/g)) {\r\n                    success = false\r\n                }\r\n            } \r\n        })\r\n        return success\r\n    }\r\n\r\n    const sendData = async (data) => {\r\n        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        })\r\n        return await res.json()\r\n    }\r\n    \r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input')\r\n        const formData = new FormData(form)\r\n        const formBody = {}\r\n        statusBlock.textContent = loadText\r\n        form.append(statusBlock)\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val\r\n        })\r\n\r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id)\r\n            if (document.querySelector('body').classList.contains('balkony')) {\r\n                if(element == null) {\r\n                    console.log('?????????????? ????????!');\r\n                } else {\r\n                    if (elem.type === 'block') {\r\n                        formBody[elem.id] = element.value\r\n                    }\r\n                }\r\n            }\r\n            \r\n        })\r\n\r\n        if (validate(formElements)) {\r\n            sendData(formBody)\r\n                .then(data => {\r\n                    statusBlock.textContent = successText\r\n\r\n                    formElements.forEach(input => {\r\n                        input.value = ''\r\n                    })\r\n                    setTimeout(() => {\r\n                        statusBlock.remove()\r\n                    }, 2000)\r\n                })\r\n                .catch(error => {\r\n                    statusBlock.textContent = errorText\r\n                })\r\n            \r\n        } else {\r\n            alert('???????????????????????? ???????????????????? ??????????!')\r\n            statusBlock.textContent = errorText\r\n            setTimeout(() => {\r\n                statusBlock.remove()\r\n            }, 2000)\r\n        }\r\n    }\r\n\r\n    try {\r\n        if (!form) {\r\n            throw new Error ('?????????????? ??????????')\r\n        }\r\n        submitForm()\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }   \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendingForm);\n\n//# sourceURL=webpack://js-diplom/./src/modules/sendingForm.js?");

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