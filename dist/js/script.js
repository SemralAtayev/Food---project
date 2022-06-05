/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// window.addEventListener('DOMContentLoaded', () => {
//     const tabs = document.querySelectorAll('.tabheader__item'),
//         tabcontent = document.querySelectorAll('.tabcontent'),
//         tabParent = document.querySelector('.tabheader__items');
//     function deleteTabs() {
//         tabcontent.forEach(item => {
//             item.classList.add('hide');
//             item.classList.remove('show', 'fade');
//         });
//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
//     }
//     function showTabContent(i = 0) {
//         tabcontent[i].classList.remove('hide');
//         tabcontent[i].classList.add('show', 'fade');
//         tabs[i].classList.add('tabheader__item_active');
//     }
//     deleteTabs();
//     showTabContent();
//     tabParent.addEventListener('click', (event) => {
//         const target = event.target;
//         if(target && target.classList.contains('tabheader__item')){
//                 tabs.forEach((item, i) => {
//                     if(target == item ){
//                         deleteTabs();
//                         showTabContent(i); 
//                     }
//                 });
//         }
//     });
// });
// 2 Tabs
window.addEventListener('DOMContentLoaded', function () {
  const tabContent = document.querySelectorAll('.tabcontent'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsParent = document.querySelector('.tabheader__items');

  function tabsHide() {
    tabContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTab() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  tabsHide();
  showTab();
  tabsParent.addEventListener('click', event => {
    if (event.target && event.target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (event.target == item) {
          tabsHide();
          showTab(i);
        }
      });
    }
  }); // 3 Timer
  // const deadLine = ('2022-05-28');
  // function timePerem(endtime) {
  //     let allTime = Date.parse(endtime) - Date.parse(new Date()),
  //         days = Math.floor(allTime / (1000 * 60 * 60 * 24)),
  //         hours = Math.floor(allTime / (1000 * 60) % 24),
  //         minutes = Math.floor(allTime / 1000 / 60 % 60),
  //         seconds = Math.floor(allTime / 1000 % 60);
  //     return {
  //         "allTime": allTime,
  //         "days": days,
  //         "hours": hours,
  //         "minutes": minutes,
  //         "seconds": seconds
  //     };
  // }
  // function zero (num){
  //     if (num >= 0 && num < 10 ){
  //         return `0${num}`;
  //     } else {
  //         return num;
  //     }
  // }
  // function setTimer(parentClassTimer, endDeadLine) {
  //     let timer = document.querySelector(parentClassTimer),
  //         days = timer.querySelector('#days'),
  //         hours = timer.querySelector('#hours'),
  //         minutes = timer.querySelector('#minutes'),
  //         seconds = timer.querySelector('#seconds'),
  //         update = setInterval(updateClock, 1000);
  //         updateClock();
  //         function updateClock() {
  //             const allTime = timePerem(endDeadLine);
  //             days.innerHTML = zero(allTime.days);               
  //             hours.innerHTML = zero(allTime.hours);               
  //             minutes.innerHTML = zero(allTime.minutes);               
  //             seconds.innerHTML = zero(allTime.seconds);               
  //         }
  // }
  // setTimer('.timer', deadLine);
  // попытка номер 2
  // let deadLine = '2022-05-29';
  // function initDate(endtime) {
  //     let allTime = Date.parse(endtime) - Date.parse(new Date()),
  //         days = Math.floor(allTime / (1000 * 60 * 60 * 24)),
  //         hours = Math.floor(allTime / (1000 * 60) % 24),
  //         minutes = Math.floor(allTime / 1000 / 60 % 60),
  //         seconds = Math.floor(allTime / 1000 % 60);
  //     // console.log(days, hours, minutes, seconds);
  //     return {
  //         'days': days,
  //         'hours': hours,
  //         'minutes': minutes,
  //         'seconds': seconds,
  //     };
  // }
  // function addZero (num) {
  //    if (num >= 0 && num < 10){
  //        return `0${num}`;
  //    } else {
  //        return num;
  //    }
  // }
  // function setTimer(parentBlock, deadTime) {
  //     let parent = document.querySelector(parentBlock),
  //         days = parent.querySelector("#days"),
  //         hours = parent.querySelector("#hours"),
  //         minutes = parent.querySelector("#minutes"),
  //         seconds = parent.querySelector("#seconds"),
  //         update = setInterval (updateClock, 1000);
  //         updateClock();
  //     function updateClock() {
  //         const allMilliSecs = initDate(deadTime);
  //         days.innerHTML = addZero(allMilliSecs.days);
  //         hours.innerHTML = addZero(allMilliSecs.hours);
  //         minutes.innerHTML = addZero(allMilliSecs.minutes);
  //         seconds.innerHTML = addZero(allMilliSecs.seconds);
  //     }
  // }
  // setTimer('.timer', deadLine);
  // попытка номер 3

  const deadline = '2022-05-29';

  function setTimer(t) {
    let allTime = Date.parse(t) - Date.parse(new Date()),
        days = Math.floor(allTime / (1000 * 60 * 60 * 24)),
        hours = Math.floor(allTime / (1000 * 60 * 60) % 24),
        minutes = Math.floor(allTime / 1000 / 60 % 60),
        seconds = Math.floor(allTime / 1000 % 60);
    return {
      'allTime': allTime,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  } //   console.log(setTimer());


  function placeTimer(deadTimerParam, parentClass) {
    let parentTimerClass = document.querySelector(parentClass),
        days = parentTimerClass.querySelector('#days'),
        hours = parentTimerClass.querySelector('#hours'),
        minutes = parentTimerClass.querySelector('#minutes'),
        seconds = parentTimerClass.querySelector('#seconds'),
        update = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      let timerFunc = setTimer(deadTimerParam);
      days.innerHTML = timerFunc.days;
      hours.innerHTML = timerFunc.hours;
      minutes.innerHTML = timerFunc.minutes;
      seconds.innerHTML = timerFunc.seconds;

      if (timerFunc.allTime <= 0) {
        clearInterval(update);
        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
      }
    }
  }

  placeTimer(deadline, '.timer'); // modal **********************************************

  const dataModal = document.querySelectorAll('[data-modal]'),
        dataClose = document.querySelector('[data-close]'),
        modalFormClass = document.querySelector('.modal'),
        body = document.querySelector('body'); // gloal function to create modal in 3 variables dataModalVar, dataCloseVar, formClassVar

  function modal(dataModalVar, dataCloseVar, formClassVar) {
    // function to open modal
    function openModal() {
      formClassVar.classList.remove('showing');
      formClassVar.classList.add('showing');
      body.classList.add('overflow-hidden');
      clearInterval(timerOpenModal);
    } // foreach all elements with data attribute data-modal


    dataModalVar.forEach(element => {
      element.addEventListener('click', openModal);
    }); // function to close modal use in different places

    function closeModal() {
      formClassVar.classList.remove('showing');
      body.classList.remove('overflow-hidden');
    } // close modal on click on x button on modal window


    dataCloseVar.addEventListener('click', () => {
      if (formClassVar.classList.contains('showing')) {
        closeModal();
      }
    }); //close modal on click on another place than modal 

    modalFormClass.addEventListener('click', elem => {
      if (elem.target === modalFormClass) {
        closeModal();
      }
    }); // close modal on click on Escape button and check if modal has showing class

    document.addEventListener('keydown', e => {
      if (e.code === 'Escape' && formClassVar.classList.contains('showing')) {
        closeModal();
      }
    }); // open modal after some time on site

    const timerOpenModal = setTimeout(openModal, 10000); // open modal after scroll to end of site

    function showModalOnScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalOnScroll);
      }
    }

    window.addEventListener('scroll', showModalOnScroll);
  }

  modal(dataModal, dataClose, modalFormClass); // nail 
  // window.addEventListener('scroll', () => {
  //     if(window.pageYOffset > 50){
  //         document.querySelector('.offer__text').classList.add('sss');
  //     } else {
  //         document.querySelector('.offer__text').classList.remove('sss');
  //     }
  // });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map