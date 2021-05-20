'use strict'
const burger = document.querySelector('.burger'),
  navs = document.querySelectorAll('.nav__left, .nav__right'),
  
  homeInnerDownbutton = document.querySelector('.home__inner-downbutton'),
  buttonExplore = document.querySelector('.explore'),
  home = document.querySelector('.home'),
  
  contentNavLinks = document.querySelectorAll('.content__nav-link'),
  columnItems = document.querySelectorAll('.column__item'), 
  
  header = document.querySelector('.header'),
  
  navLinks = document.querySelectorAll('.nav__left-link, .nav__right-link, .book'),

  mapButton = document.querySelector('.map__button > button'),
  mapContent = document.querySelector('.map__content'),

  modalButtons = document.querySelectorAll('.modal__button'),
  modal = document.querySelector('.modal'),
  windowHeaderSpan = document.querySelector('.window__header > span'),
  windowContent = document.querySelector('.window__content'),
  close = document.querySelector('.close'),
  
  order = document.querySelectorAll('.order'),
  message = document.querySelectorAll('.message'),
  gallery = document.querySelectorAll('.gallery__img'),
  
  aboutInnerImg = document.querySelector('.about__inner-img');

const randomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

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
//map
mapButton.addEventListener('click', () => {
  if (mapButton.textContent == 'Открыть карту') {
    mapButton.textContent = 'Закрыть карту';
    mapButton.style.marginBottom = 2 + 'rem';
    mapContent.style.display = 'block';
  } else {
    mapButton.textContent = 'Открыть карту';
    mapButton.style.marginBottom = 0;
    mapContent.style.display = 'none';
  }
})

//modal
modalButtons.forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    let stringHeader = "";
    let stringMain = "";
    let modalShow = true;

    if (item.textContent == 'Заказать столик') {
      if (order[0].value == '' || order[1].value == '' || order[2].value == '+7 (   )    -   ' || order[4].value == '__/__') {
        alert('Указаны не все параметры');
        modalShow = false;
      } else {
        stringHeader = 'Заказ столика';
        stringMain = `<p style="margin-bottom: 1rem">Заказ №${randomInteger(0, 100)}</p> <p style="margin-bottom: 1rem">Имя: ${order[0].value}</p> <p style="margin-bottom: 1rem">Почта: ${order[1].value}</p> <p style="margin-bottom: 1rem">Телефон: ${order[2].value}</p> <p style="margin-bottom: 1rem">Количество персон: ${order[3].value}</p> <p style="margin-bottom: 1rem">Дата: ${order[4].value}</p> <p style="margin-bottom: 1rem">Время суток: ${order[5].value}</p>Оформлено</p>`;
      }
    } else {
      if (message[0].value == '' || message[2].value == '' || message[1].value == '+7 (   )    -   ' || message[3].value == '') {
        alert('Указаны не все параметры');
        modalShow = false;
      } else {
        stringHeader = 'Отправка сообщения';
        stringMain = `<p style="margin-bottom: 1rem">Спасибо, ${message[0].value}</p> </p>Мы ценим отзывы наших клиентов</p>`;
      }
    }

    if (modalShow) {
      windowHeaderSpan.textContent = stringHeader;
      windowContent.innerHTML = stringMain;

      modal.classList.add('modal_show');
      document.body.classList.add('body_overflow');
    }
    
  })
});

close.addEventListener('click', () => {
  modal.classList.remove('modal_show');
  document.body.classList.remove('body_overflow');

  windowContent.innerHTML = '';
  document.querySelector('.modal__wrapper-window').style.width = 43 + 'rem';
});
//gallery
gallery.forEach((item) => {
  item.addEventListener('click', () => {
    windowHeaderSpan.textContent = 'Фото';
    const htmlCode = item.outerHTML;
    const photo = document.createElement('div');
    photo.innerHTML = htmlCode;
    windowContent.append(photo);

    modal.classList.add('modal_show');
    document.body.classList.add('body_overflow');

  })
});

//video
const videoSrc = 'css/video/video.mp4';
aboutInnerImg.addEventListener('click', () => {
  windowHeaderSpan.textContent = 'Видео';
  const video = document.createElement('video');
  video.src = videoSrc;
  video.controls = true;
  document.querySelector('.modal__wrapper-window').style.width = 'initial';

  if (window.innerWidth >= 800) {
    video.width = 700;
    video.height = 400; 
  } else {
    video.width = 400;
    video.height = 250;
  }
  

  windowContent.append(video);

  modal.classList.add('modal_show');
  document.body.classList.add('body_overflow');

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