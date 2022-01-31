'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger'),
          menu = document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu_item');

    function scroll() {
        if (burger.classList.contains('burger_active') && menu.classList.contains('menu_active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
        scroll();
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('burger_active');
            menu.classList.toggle('menu_active');
            scroll();
        });
    });

    
});

