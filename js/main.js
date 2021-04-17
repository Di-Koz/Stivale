'use strict'
const burger = document.querySelector('.burger'),
  navs = document.querySelectorAll('.nav__left, .nav__right'),
  
  homeInnerDownbutton = document.querySelector('.home__inner-downbutton'),
  buttonExplore = document.querySelector('.explore'),
  home = document.querySelector('.home'),
  
  contentNavLinks = document.querySelectorAll('.content__nav-link'),
  columnItems = document.querySelectorAll('.column__item'), 
  
  header = document.querySelector('.header'),
  
  navLinks = document.querySelectorAll('.nav__left-link, .nav__right-link, .book');
//Burger
burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  navs.forEach(item => {
    item.classList.toggle('nav_show');
  })
}) 
//Scroll from homepage
homeInnerDownbutton.addEventListener('click', () => {
  const homeHeight = home.offsetHeight;
  
  window.scrollTo({
    top: homeHeight,
    behavior: 'smooth'
  })
})
buttonExplore.addEventListener('click', () => {
  const homeHeight = home.offsetHeight;
  
  window.scrollTo({
    top: homeHeight,
    behavior: 'smooth'
  })
})
//Menu tabs
contentNavLinks.forEach(elem => {
  elem.addEventListener('click', (event) => {
    event.preventDefault();
    const attrNav = elem.dataset.menuNav;
    for (let item of columnItems) {
      const attrRes = item.dataset.menuResult;
      if (attrRes === attrNav) {
        item.style.display = 'block';
        item.classList.add('column__item_active');
      } else {
        item.style.display = 'none';
        item.classList.remove('column__item_active');
      }
      
    }
  })
});
//Fixed header
window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset;
  let needHeight = home.offsetHeight;

  if (scrollTop >= needHeight) {
    header.classList.add('header_fixed');
  } else {
    header.classList.remove('header_fixed');
  }
})
//Smooth scroll
navLinks.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();

    const blockName = item.dataset.link;
    const block = document.querySelector(`.${blockName}`);
    const scrollTop = block.offsetTop;

    window.scrollTo({
      top: scrollTop - 100,
      behavior: "smooth"
    })

    burger.classList.remove('burger_active');
    navs.forEach(item => {
      item.classList.remove('nav_show');
    })
  })
})
//Slick slider
$('.special__inner-slider').slick({
  infinite: true,
  arrows: false,
  dots: true
});
//jQuery masks for inputs
$("#input__phone1").mask("+7 (999) 999-9999", { placeholder: " "});
$("#input__phone2").mask("+7 (999) 999-9999", { placeholder: " "});
$("#input__date").mask("99/99");