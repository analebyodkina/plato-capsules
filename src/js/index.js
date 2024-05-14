

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// on scroll animate
import AOS from 'aos';
AOS.init();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    thresholdDelta: 70,
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// copyright
var currentYear = new Date().getFullYear();
document.getElementById("footer-year").innerHTML = currentYear;


const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.nav-icon');
const headerLink = document.querySelector('.header__li');
const openPopUp = document.getElementById("openPopUp");
const popUp = document.querySelector(".pop-up");
const closePopUp = document.querySelector(".close");
const popUpBody = document.querySelector(".pop-up__body");

const toggleNav = () => {
  nav.classList.toggle('mobile-nav--open');
  menuIcon.classList.toggle('nav-icon--active');
  document.body.classList.toggle('no-scroll');
};

const closeNav = () => {
  nav.classList.remove('mobile-nav--open');
  menuIcon.classList.remove('nav-icon--active');
  document.body.classList.remove('no-scroll');
};

const togglePopUp = () => {
  popUp.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
  closeNav();
};

navBtn.onclick = toggleNav;

headerLink.onclick = closeNav;

openPopUp.onclick = togglePopUp;

closePopUp.onclick = (event) => {
  event.stopPropagation();
  popUp.classList.remove("active");
  document.body.classList.remove("no-scroll");
};

popUpBody.onclick = (event) => {
  if (!event.target.classList.contains('pop-up__close')) {
    event.stopPropagation();
  }
};
