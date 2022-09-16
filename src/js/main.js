import tabs from "./modules/tabs";
import timer from "./modules/timer";
import modal from "./modules/modal";
import cards from "./modules/cards";
import forms from "./modules/forms";
import slider from "./modules/slider";
import calc from "./modules/calc";
import { openModal} from "./modules/modal";

window.addEventListener("DOMContentLoaded", function () {

    // open modal after some time on site

    const timerOpenModal = setTimeout(() => openModal(".modal", timerOpenModal), 2000);
    // console.log(timerOpenModal);
  
  tabs(".tabcontent", ".tabheader__item", ".tabheader__items", "tabheader__item_active");
  timer("2022-12-07");
  modal("[data-modal]", ".modal", timerOpenModal);
  cards();
  forms(timerOpenModal);
  slider({
    completeSliderSelector: ".offer__slider",
    slideWrapperSelecor: ".offer__slider-wrapper",
    sliderWrapperInnerSelector: ".slide__wrapper-inner",
    slideSelector: ".offer__slide",
    slideNextSelector: ".offer__slider-next",
    slidePrevSelector : ".offer__slider-prev"
  });
  calc();
  // ----------------------------------------
  // obshiy dom loaded
  // ----------------------------------------
});
