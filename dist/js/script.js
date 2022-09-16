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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");








window.addEventListener("DOMContentLoaded", function () {
  // open modal after some time on site
  const timerOpenModal = setTimeout(() => Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["openModal"])(".modal", timerOpenModal), 2000); // console.log(timerOpenModal);

  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])(".tabcontent", ".tabheader__item", ".tabheader__items", "tabheader__item_active");
  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])("2022-12-07");
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])("[data-modal]", ".modal", timerOpenModal);
  Object(_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_4__["default"])(timerOpenModal);
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
    completeSliderSelector: ".offer__slider",
    slideWrapperSelecor: ".offer__slider-wrapper",
    sliderWrapperInnerSelector: ".slide__wrapper-inner",
    slideSelector: ".offer__slide",
    slideNextSelector: ".offer__slider-next",
    slidePrevSelector: ".offer__slider-prev"
  });
  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])(); // ----------------------------------------
  // obshiy dom loaded
  // ----------------------------------------
});

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {
  //calculator
  const result = document.querySelector(".calculating__result span");
  let gender, height, weight, age, ratio;

  if (localStorage.getItem("gender")) {
    gender = localStorage.getItem("gender");
  } else {
    gender = "female";
    localStorage.setItem("gender", "female");
  }

  if (localStorage.getItem("ratio")) {
    ratio = localStorage.getItem("ratio");
  } else {
    ratio = 1.375;
    localStorage.setItem("ratio", 1.375);
  }

  function addActiveClass(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(elem => {
      elem.classList.remove(activeClass);

      if (elem.getAttribute("id") === localStorage.getItem("gender") || elem.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
        elem.classList.add(activeClass);
      }
    });
  }

  addActiveClass("#gender div", "calculating__choose-item_active");
  addActiveClass(".calculating__choose.calculating__choose_big div", "calculating__choose-item_active");

  function calcResult() {
    if (!gender || !height || !weight || !age || !ratio) {
      result.innerHTML = "____";
      return;
    } else {
      if (gender === "female") {
        result.innerHTML = Math.round(447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio;
      } else {
        result.innerHTML = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
      }
    }
  }

  calcResult();

  function getStaticInfo(parent, activeClass) {
    const calcChoose = document.querySelectorAll(`${parent} div`);
    calcChoose.forEach(e => {
      e.addEventListener("click", event => {
        if (event.target.getAttribute("id") === "female") {
          gender = "female";
          localStorage.setItem("gender", event.target.getAttribute("id"));
        } else if (event.target.getAttribute("id") === "male") {
          gender = "male";
          localStorage.setItem("gender", event.target.getAttribute("id"));
        }

        if (event.target.hasAttribute("data-ratio")) {
          ratio = +event.target.getAttribute("data-ratio");
          localStorage.setItem("ratio", +event.target.getAttribute("data-ratio"));
        }

        calcChoose.forEach(ev => {
          ev.classList.remove(activeClass);
        });
        event.target.classList.add(activeClass);
        calcResult();
      });
    });
  }

  function getDinamicInfo(parent) {
    const input = document.querySelector(parent).querySelectorAll("input");
    input.forEach(e => {
      e.addEventListener("input", event => {
        if (event.target.id === "height") {
          if (event.target.value.match(/\D/g)) {
            event.target.style.border = "1px solid red";
          } else {
            event.target.style.border = "";
            height = +e.value;
          }
        }

        if (event.target.id === "weight") {
          if (event.target.value.match(/\D/g)) {
            event.target.style.border = "1px solid red";
          } else {
            event.target.style.border = "";
            weight = +e.value;
          }
        }

        if (event.target.id === "age") {
          if (event.target.value.match(/\D/g)) {
            event.target.style.border = "1px solid red";
          } else {
            event.target.style.border = "";
            age = +e.value;
          }
        }

        calcResult();
      });
    });
  }

  getStaticInfo("#gender", "calculating__choose-item_active");
  getStaticInfo(".calculating__choose.calculating__choose_big", "calculating__choose-item_active");
  getDinamicInfo(".calculating__choose_medium");
}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function cards() {
  // menu cards template
  // мой вариант конструктора
  class MenuCard {
    constructor(src, alt, title, desc, price, parentElement) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.desc = desc;
      this.price = price;

      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }

      this.classes = classes;
      this.parentElement = document.querySelector(parentElement);
      this.convertation = 27;
      this.converToUAH();
    }

    converToUAH() {
      this.price = this.price * this.convertation;
    }

    render() {
      const element = document.createElement("div");

      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = `           
                <img src=${this.src} alt=${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.desc}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>            
            `;
      this.parentElement.append(element);
    }

  } // const getResours = async (url) => {
  //   const res = await fetch(url);
  //   if (!res.ok) {
  //     throw new Error(`Ошибка в url ${url} и в ${res.status}`);
  //   }
  //   return await res.json();
  // };
  // getResours('http://localhost:3000/menu')
  //   .then(data => {
  //     data.forEach( ({img, altimg, title, descr, price}) => {
  //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
  //     });
  //   });


  axios.get("http://localhost:3000/menu").then(datam => {
    datam.data.forEach(_ref => {
      let {
        img,
        altimg,
        title,
        descr,
        price
      } = _ref;
      new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");



function forms(timerOpenModal) {
  // Forms
  const forms = document.querySelectorAll("form");
  const message = {
    loading: "/img/svg/Spinner.svg",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так..."
  };
  forms.forEach(item => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      let statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.textContent = message.loading;
      statusMessage.style.cssText = `margin: 10px auto 0 auto; max-width:25px; display: block;`; // form.appendChild(statusMessage);

      form.insertAdjacentElement("afterend", statusMessage);
      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])("http://localhost:3000/requests", json).then(request => {
        console.log(request);
        thanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        thanksModal(message.failure);
      }).finally(() => {
        form.reset();
      });
    });
  }

  const prevModal = document.querySelector(".modal__dialog");

  function thanksModal(message) {
    prevModal.classList.add("hide");
    const thanskPopup = document.createElement("div");
    Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal', timerOpenModal);
    thanskPopup.classList.add("modal__dialog");
    thanskPopup.innerHTML = `
            <div class="modal__content">        
                <div data-close class="modal__close">×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
    document.querySelector(".modal").append(thanskPopup);
    setTimeout(() => {
      thanskPopup.remove();
      prevModal.classList.add("show");
      prevModal.classList.remove("hide");
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
    }, 4000);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default, closeModal, openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
// modal(dataModal, dataClose, modalFormClass);
function openModal(modalFormClassSelector, timerOpenModal) {
  const modalFormClass = document.querySelector(modalFormClassSelector);
  modalFormClass.classList.remove("showing");
  modalFormClass.classList.add("showing");
  document.querySelector("body").classList.add("overflow-hidden"); // console.dir(timerOpenModal);

  if (timerOpenModal) {
    clearInterval(timerOpenModal);
  }
} // function to close modal use in different places


function closeModal(modalFormClassSelector) {
  const modalFormClass = document.querySelector(modalFormClassSelector);
  modalFormClass.classList.remove("showing");
  document.querySelector("body").classList.remove("overflow-hidden");
}

function modal(dataModalTrigger, modalFormClassSelector, timerOpenModal) {
  // modal **********************************************
  const dataModal = document.querySelectorAll(dataModalTrigger),
        modalFormClass = document.querySelector(modalFormClassSelector),
        body = document.querySelector("body"); // foreach all elements with data attribute data-modal

  dataModal.forEach(element => {
    element.addEventListener("click", () => openModal(modalFormClassSelector, timerOpenModal));
  }); //close modal on click on another place than modal

  modalFormClass.addEventListener("click", elem => {
    if (elem.target === modalFormClass || elem.target.getAttribute("data-close") == "") {
      closeModal(modalFormClassSelector);
    }
  }); // close modal on click on Escape button and check if modal has showing class

  document.addEventListener("keydown", e => {
    if (e.code === "Escape" && modalFormClass.classList.contains("showing")) {
      closeModal(modalFormClassSelector);
    }
  }); // open modal after scroll to end of site

  function showModalOnScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal(modalFormClassSelector, timerOpenModal);
      window.removeEventListener("scroll", showModalOnScroll);
    }
  }

  window.addEventListener("scroll", showModalOnScroll);
}

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider(_ref) {
  let {
    completeSliderSelector,
    slideWrapperSelecor,
    sliderWrapperInnerSelector,
    slideSelector,
    slideNextSelector,
    slidePrevSelector
  } = _ref;
  //   slideShow();
  const slideWrapper = document.querySelector(slideWrapperSelecor),
        sliderWrapperInner = document.querySelector(sliderWrapperInnerSelector),
        slide = document.querySelectorAll(slideSelector),
        slideNext = document.querySelector(slideNextSelector),
        slidePrev = document.querySelector(slidePrevSelector),
        width = window.getComputedStyle(slideWrapper).width;
  let completeSlider = document.querySelector(completeSliderSelector); // console.log(width);

  const currentSlideNumber = document.querySelector("#current");
  const totalSlideNumber = document.querySelector("#total");
  let slideIndex = 1;
  let offset = 0;

  if (slide.length < 10) {
    totalSlideNumber.innerHTML = `0${slide.length}`;
    currentSlideNumber.innerHTML = `0${slideIndex}`;
  } else {
    totalSlideNumber.innerHTML = slide.length;
    currentSlideNumber.innerHTML = slideIndex;
  }

  slideWrapper.style.overflow = "hidden";
  sliderWrapperInner.style.display = "flex";
  sliderWrapperInner.style.width = 100 * slide.length + "%";
  sliderWrapperInner.style.transition = "all .5s ease";
  slide.forEach(item => item.style.width = width); // dots

  completeSlider.style.position = "relative";
  let indicatorsDiv = document.createElement("div");
  let dots = [];
  indicatorsDiv.classList.add("carousel-indicators");
  completeSlider.append(indicatorsDiv);

  for (let i = 0; i < slide.length; i++) {
    let dotsDiv = document.createElement("div");
    dotsDiv.classList.add("dot");
    dotsDiv.dataset.count = i + 1;

    if (i == 0) {
      dotsDiv.classList.add("active");
    }

    indicatorsDiv.appendChild(dotsDiv);
    dots.push(dotsDiv);
  } //functions


  const addActiveDot = function (dotVar) {
    dotVar.forEach(dot => {
      dot.classList.remove("active");
    });
    dotVar[slideIndex - 1].classList.add("active");
  };

  const checkIndex = function () {
    if (slideIndex < 10) {
      currentSlideNumber.innerHTML = `0${slideIndex}`;
    } else {
      currentSlideNumber.innerHTML = slideIndex;
    }
  };

  const plusIndex = function () {
    if (slideIndex == slide.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
  };

  const replacePx = function (str) {
    return +str.replace(/\D/g, "");
  }; //functions end


  slideNext.addEventListener("click", () => {
    if (offset == replacePx(width) * (slide.length - 1)) {
      offset = 0;
    } else {
      offset += replacePx(width);
    }

    sliderWrapperInner.style.transform = `translateX(-${offset}px)`;
    plusIndex();
    checkIndex();
    addActiveDot(dots);
  });
  slidePrev.addEventListener("click", () => {
    if (offset == 0) {
      offset = replacePx(width) * (slide.length - 1);
    } else {
      offset -= replacePx(width);
    }

    sliderWrapperInner.style.transform = `translateX(-${offset}px)`;
    plusIndex();
    checkIndex();
    addActiveDot(dots);
  }); // add event listener to all dots and when we press one of the dots we going to slide number, which is equal to e.target.getAttribute('data-count')

  dots.forEach(dot => {
    dot.addEventListener("click", e => {
      const slideTo = e.target.getAttribute("data-count");
      slideIndex = slideTo;
      offset = replacePx(width) * (slideTo - 1);
      sliderWrapperInner.style.transform = `translateX(-${offset}px)`;
      addActiveDot(dots);
      checkIndex();
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabContentSelector, tabsSelector, tabsParentSelector, tabsItemActive) {
  // 2 Tabs
  const tabContent = document.querySelectorAll(tabContentSelector),
        tabs = document.querySelectorAll(tabsSelector),
        tabsParent = document.querySelector(tabsParentSelector);

  function tabsHide() {
    tabContent.forEach(item => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach(item => {
      item.classList.remove(tabsItemActive);
    });
  }

  function showTab() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabContent[i].classList.add("show", "fade");
    tabContent[i].classList.remove("hide");
    tabs[i].classList.add(tabsItemActive);
  }

  tabsHide();
  showTab();
  tabsParent.addEventListener("click", event => {
    if (event.target && event.target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (event.target == item) {
          tabsHide();
          showTab(i);
        }
      });
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(deadline) {
  function setTimer(t) {
    let allTime = Date.parse(t) - Date.parse(new Date()),
        days = Math.floor(allTime / (1000 * 60 * 60 * 24)),
        hours = Math.floor(allTime / (1000 * 60 * 60) % 24),
        minutes = Math.floor(allTime / 1000 / 60 % 60),
        seconds = Math.floor(allTime / 1000 % 60);
    return {
      allTime: allTime,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  } //   console.log(setTimer());


  function placeTimer(deadline, parentClass) {
    let parentTimerClass = document.querySelector(parentClass),
        days = parentTimerClass.querySelector("#days"),
        hours = parentTimerClass.querySelector("#hours"),
        minutes = parentTimerClass.querySelector("#minutes"),
        seconds = parentTimerClass.querySelector("#seconds"),
        update = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      let timerFunc = setTimer(deadline);
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

  placeTimer(deadline, ".timer");
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: postData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: data
  });
  return await res.json();
};



/***/ })

/******/ });
//# sourceMappingURL=script.js.map