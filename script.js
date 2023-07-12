'use strict';

const menu = document.querySelector('.menu')
const menuItem = document.querySelectorAll('.menu_item')
const hamburger = document.querySelector('.hamburger')

const clickLink = function() {
    hamburger.classList.toggle('hamburger_active')
    menu.classList.toggle('menu_active')
}

hamburger.addEventListener('click', clickLink);
menuItem.forEach(item => item.addEventListener('click', clickLink))