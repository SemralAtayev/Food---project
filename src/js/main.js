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

    const deadLine = ('2022-05-28');

    function timePerem(endtime) {
        let allTime = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(allTime / (1000 * 60 * 60 * 24)),
            hours = Math.floor(allTime / (1000 * 60) % 24),
            minutes = Math.floor(allTime / 1000 / 60 % 60),
            seconds = Math.floor(allTime / 1000 % 60);

        return {
            "allTime": allTime,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function zero (num){
        if (num >= 0 && num < 10 ){
            return `0${num}`;
        } else {
            return num;
        }
    }



    function setTimer(parentClassTimer, endDeadLine) {
        let timer = document.querySelector(parentClassTimer),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            update = setInterval(updateClock, 1000);

            updateClock();

            function updateClock() {
                const allTime = timePerem(endDeadLine);

                days.innerHTML = zero(allTime.days);               
                hours.innerHTML = zero(allTime.hours);               
                minutes.innerHTML = zero(allTime.minutes);               
                seconds.innerHTML = zero(allTime.seconds);               
            }

    }

    setTimer('.timer', deadLine);









});