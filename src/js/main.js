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

    function showTab(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');

        tabs[i].classList.add('tabheader__item_active');
    }

    tabsHide();
    showTab();

    tabsParent.addEventListener('click', (event) => {

        if (event.target && event.target.classList.contains('tabheader__item')) {
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
            'seconds': seconds,
        };
    }

    //   console.log(setTimer());

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

    placeTimer(deadline, '.timer');







    // modal **********************************************

    const dataModal = document.querySelectorAll('[data-modal]'),
        dataClose = document.querySelector('[data-close]'),
        modalFormClass = document.querySelector('.modal'),
        body = document.querySelector('body');

    // gloal function to create modal in 3 variables dataModalVar, dataCloseVar, formClassVar

    function modal(dataModalVar, dataCloseVar, formClassVar) {

        // function to open modal
        function openModal() {
            formClassVar.classList.remove('showing');
            formClassVar.classList.add('showing');
            body.classList.add('overflow-hidden');
            clearInterval(timerOpenModal);
        }

        // foreach all elements with data attribute data-modal
        dataModalVar.forEach(element => {
            element.addEventListener('click', openModal);
        });



        // function to close modal use in different places
        function closeModal() {
            formClassVar.classList.remove('showing');
            body.classList.remove('overflow-hidden');
        }

        // close modal on click on x button on modal window
        dataCloseVar.addEventListener('click', () => {
            if (formClassVar.classList.contains('showing')) {
                closeModal();
            }
        });

        //close modal on click on another place than modal 
        modalFormClass.addEventListener('click', (elem) => {
            if (elem.target === modalFormClass) {
                closeModal();
            }
        });

        // close modal on click on Escape button and check if modal has showing class
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && formClassVar.classList.contains('showing')) {
                closeModal();
            }
        });

        // open modal after some time on site

        const timerOpenModal = setTimeout(openModal, 10000);

        // open modal after scroll to end of site

        function showModalOnScroll (){
            if( window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
                openModal();
                window.removeEventListener('scroll', showModalOnScroll);
            }            
        }

        window.addEventListener('scroll', showModalOnScroll);
        



    }

    modal(dataModal, dataClose, modalFormClass);

});