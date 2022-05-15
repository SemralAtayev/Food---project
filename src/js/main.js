window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabcontent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items');

    function deleteTabs() {
        tabcontent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabcontent[i].classList.remove('hide');
        tabcontent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    }

    deleteTabs();
    showTabContent();

    tabParent.addEventListener('click', (event) => {
        
        const target = event.target;

        if(target && target.classList.contains('tabheader__item')){
                tabs.forEach((item, i) => {
                    if(target == item ){
                        deleteTabs();
                        showTabContent(i); 
                    }
                });
        }
    });
















});