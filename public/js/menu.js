'use strict';

var menu = document.getElementById('main-menu');
var menuHeight = menu.offsetTop;

addEventListener('scroll', function () {
    pageYOffset > menuHeight ? menu.classList.add('fixed') : menu.classList.remove('fixed');
});