"use strict";

window.addEventListener('load', function () {
  document.querySelector('.page-loader').classList.add('fade-out');
  this.setTimeout(function () {
    document.querySelector('.page-loader').style.display = 'none';
  }, 600); //  animation on scroll

  AOS.init();
}); // toggle navbar

var navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', toggleNav);

function toggleNav() {
  navToggler.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('open');
} // close a  nav when clicking a nav item


document.addEventListener('click', function (e) {
  if (e.target.closest('.nav-item')) {
    toggleNav();
  }
}); // sticky header

window.addEventListener('scroll', function () {
  if (this.pageYOffset > 60) {
    document.querySelector('.header').classList.add('sticky');
  } else {
    document.querySelector('.header').classList.remove('sticky');
  }
}); // menu tabs

var menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click', function (e) {
  if (e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')) {
    var target = e.target.getAttribute('data-target');
    menuTabs.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    var menuSection = document.querySelector('.menu-section');
    menuSection.querySelector('.menu-tab-content.active').classList.remove('active');
    menuSection.querySelector(target).classList.add('active');
    AOS.init();
  }
});