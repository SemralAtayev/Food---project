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

window.addEventListener("DOMContentLoaded", function () {
  const tabContent = document.querySelectorAll(".tabcontent"),
    tabs = document.querySelectorAll(".tabheader__item"),
    tabsParent = document.querySelector(".tabheader__items");

  function tabsHide() {
    tabContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTab(i = 0) {
    tabContent[i].classList.add("show", "fade");
    tabContent[i].classList.remove("hide");

    tabs[i].classList.add("tabheader__item_active");
  }

  tabsHide();
  showTab();

  tabsParent.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (event.target == item) {
          tabsHide();
          showTab(i);
        }
      });
    }
  });

  // 3 Timer

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

  const deadline = "2022-05-29";

  function setTimer(t) {
    let allTime = Date.parse(t) - Date.parse(new Date()),
      days = Math.floor(allTime / (1000 * 60 * 60 * 24)),
      hours = Math.floor((allTime / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((allTime / 1000 / 60) % 60),
      seconds = Math.floor((allTime / 1000) % 60);

    return {
      allTime: allTime,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  //   console.log(setTimer());

  function placeTimer(deadTimerParam, parentClass) {
    let parentTimerClass = document.querySelector(parentClass),
      days = parentTimerClass.querySelector("#days"),
      hours = parentTimerClass.querySelector("#hours"),
      minutes = parentTimerClass.querySelector("#minutes"),
      seconds = parentTimerClass.querySelector("#seconds"),
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

  placeTimer(deadline, ".timer");

  // modal **********************************************

  const dataModal = document.querySelectorAll("[data-modal]"),
    modalFormClass = document.querySelector(".modal"),
    body = document.querySelector("body");

  // gloal function to create modal in 3 variables dataModalVar, dataCloseVar, formClassVar

  // function modal(dataModalVar, dataCloseVar, modalFormClass  // function to open modal

  // }

  // modal(dataModal, dataClose, modalFormClass);
  function openModal() {
    modalFormClass.classList.remove("showing");
    modalFormClass.classList.add("showing");
    body.classList.add("overflow-hidden");
    clearInterval(timerOpenModal);
  }

  // foreach all elements with data attribute data-modal
  dataModal.forEach((element) => {
    element.addEventListener("click", openModal);
  });

  // function to close modal use in different places
  function closeModal() {
    modalFormClass.classList.remove("showing");
    body.classList.remove("overflow-hidden");
  }

  // close modal on click on x button on modal window
  // dataClose.addEventListener('click', (e) => {
  //     if (modalFormClass.classList.contains('showing') || e.target == document.getAttribute('data-close')) {
  //         closeModal();
  //     }
  // });

  //close modal on click on another place than modal
  modalFormClass.addEventListener("click", (elem) => {
    if (
      elem.target === modalFormClass ||
      elem.target.getAttribute("data-close") == ""
    ) {
      closeModal();
    }
  });

  // close modal on click on Escape button and check if modal has showing class
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modalFormClass.classList.contains("showing")) {
      closeModal();
    }
  });

  // open modal after some time on site

  const timerOpenModal = setTimeout(openModal, 50000);

  // open modal after scroll to end of site

  function showModalOnScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      window.removeEventListener("scroll", showModalOnScroll);
    }
  }

  window.addEventListener("scroll", showModalOnScroll);

  // nail ******************************************

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
      document.querySelector(".offer__text").classList.add("sss");
    } else {
      document.querySelector(".offer__text").classList.remove("sss");
    }
  });

  // menu cards template

  // const menuItem = document.querySelector('.menu__item'),
  //     menuItemImg = menuItem.querySelector('img'),
  //     menuItemTitle = menuItem.querySelector('.menu__item-subtitle'),
  //     menuItemDesc = menuItem.querySelector('.menu__item-descr'),
  //     menuItemPrice = menuItem.querySelector('.menu__item-total span');

  // class MenuItem {
  //     constructor(scr, title, description, price) {
  //         this.scr = scr;
  //         this.title = title;
  //         this.description = description;
  //         this.price = price;
  //     }

  //     replaceVars(scr, title, description, price) {
  //         scr.src = `/img/tabs/${this.scr}.jpg`;
  //         title.innerHTML = this.title;
  //         description.innerHTML = this.description;
  //         price.innerHTML = this.price;

  //     }
  // }

  // const fitness = new MenuItem('vegy', 'Меню 2  "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', '230');

  // const premium = new MenuItem('elite', 'Меню 2 “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', '551');

  // fitness.replaceVars(menuItemImg, menuItemTitle, menuItemDesc, menuItemPrice);

  // class MenuItem {
  //     constructor(scr, alt, title, description, price) {
  //         this.scr = scr;
  //         this.alt = alt;
  //         this.title = title;
  //         this.description = description;
  //         this.price = price;
  //     }

  //     replaceVars (scr, alt, title, description, price) {
  //         scr.forEach(img => {
  //             img.src = `/img/tabs/${this.scr}.jpg`;
  //         });

  //         alt.forEach(elem => {
  //             elem.innerHTML = this.alt;
  //         });

  //         title.forEach(elem => {
  //             elem.innerHTML = this.title;
  //         });

  //         description.forEach(text => {
  //             text.innerHTML = this.description;
  //         });
  //         price.forEach(elem => {
  //             elem.innerHTML = this.price;
  //         });
  //     }

  // }

  // const menuItem = document.querySelectorAll('.menu__item'),
  //     menuItemImg = document.querySelectorAll('.menu__item img'),
  //     menuItemAlt = document.querySelectorAll('.menu__item img[alt]'),
  //     menuItemTitle = document.querySelectorAll('.menu__item .menu__item-subtitle'),
  //     menuItemDesc = document.querySelectorAll('.menu__item .menu__item-descr'),
  //     menuItemPrice = document.querySelectorAll('.menu__item .menu__item-total span');

  // const fitness = new MenuItem('vegy', 'vegy_alt', 'Меню 2  "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', '230');

  // fitness.replaceVars(menuItemImg, menuItemAlt, menuItemTitle, menuItemDesc, menuItemPrice);

  // вариант учителя

  // class MenuCard {
  //     constructor(scr, alt, title, description, price, parentSelector) {
  //         this.scr = scr;
  //         this.alt = alt;
  //         this.title = title;
  //         this.description = description;
  //         this.price = price;
  //         this.parent = document.querySelector(parentSelector);
  //         this.transfer = 27;
  //         this.changeToUAH();
  //     }

  //     changeToUAH() {
  //         this.price = this.price * this.transfer;
  //     }

  //     render() {
  //         const element = document.createElement('div');

  //         element.innerHTML = `
  //         <div class="menu__item">
  //                 <img src=${this.scr} alt=${this.alt}>
  //                 <h3 class="menu__item-subtitle">${this.title}</h3>
  //                 <div class="menu__item-descr">${this.description}</div>
  //                 <div class="menu__item-divider"></div>
  //                 <div class="menu__item-price">
  //                     <div class="menu__item-cost">Цена:</div>
  //                     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
  //                 </div>
  //             </div>
  //         `;
  //         this.parent.append(element);
  //     }
  // }

  // new MenuCard(
  //     "img/tabs/elite.jpg",
  //     "elite",
  //     'Меню “Премиум”',
  //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
  //     9,
  //     '.menu .container'
  // ).render();

  // мой вариант конструктора

  class MenuCard {
    constructor(src, alt, title, desc, price, parentElement, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.desc = desc;
      this.price = price;
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
        this.classes.forEach((className) => element.classList.add(className));
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
  }

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    "Меню “Премиум”",
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container"
  ).render();

  new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    14,
    ".menu .container",
    "menu__item"
  ).render();

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    "Меню “Премиум”",
    "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    21,
    ".menu .container",
    "menu__item"
  ).render();

  // Forms

  const forms = document.querySelectorAll("form");
  const message = {
    loading: "/img/svg/Spinner.svg",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  forms.forEach((item) => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.textContent = message.loading;
      statusMessage.style.cssText = `margin: 10px auto 0 auto; max-width:25px; display: block;`;
      // form.appendChild(statusMessage);
      form.insertAdjacentElement("afterend", statusMessage);

      const formData = new FormData(form);

      const object = {};
      formData.forEach(function (value, key) {
          object[key] = value;
      });
      const json = JSON.stringify(object);

      fetch("server.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: json, // must match 'Content-Type' header
      })
        .then((data) => data.text())
        .then((request) => {
          console.log(request);
          thanksModal(message.success);
          statusMessage.remove();
        })
        .catch(() => {
          thanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  const prevModal = document.querySelector(".modal__dialog");

  function thanksModal(message) {
    prevModal.classList.add("hide");

    const thanskPopup = document.createElement("div");
    openModal();
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
      closeModal();
    }, 4000);
  }

  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST',
  //     body: JSON.stringify( {name: 'Alex'} ),
  //     headers: {
  //         'Content-type' : 'application/json'
  //     }
  // })
  // .then(response => response.json())
  // .then(json => console.log(json));

  fetch('http://localhost:3000/menu')
  .then(data => data.json())
  .then(pros => console.log(pros));
});
