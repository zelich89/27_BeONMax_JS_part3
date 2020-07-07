// console.log('0123');

window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tabs = document.querySelectorAll('.catalog__tab'),
        nav = document.querySelector('.catalog__nav'),
        items = document.querySelectorAll('.catalog__item');


    function hideTab(a) {
        for (let i = a; i < items.length; i ++) {
            items[i].classList.remove('show');
            items[i].classList.add('hide');
        }
    }

    hideTab(1);

    function showTab(b) {
        if(items[b].classList.contains('hide')) {
            items[b].classList.remove('hide');
            items[b].classList.add('show');
        }
    }

    nav.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('catalog__tab')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                     hideTab(0);
                     showTab(i);
                     break;
                }
            }
        }
    })
});