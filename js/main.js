const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show');
  });
}

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show');
  });
}

function listnerEventScroll() {
  const header = document.querySelector('#header');
  const navHeight = header.offsetHeight;
  const backToTopButton = document.querySelector('.back-to-top');

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll-shadow');
  } else {
    header.classList.remove('scroll-shadow');
  }

  if (this.window.scrollY >= 570) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

const sections = document.querySelectorAll('main section[id]');
function ativeMenu() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 1.5;
  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  }
}

const swiperListner = new Swiper('#listeners .swiper', {
  speed: 400,
  spaceBetween: 10,
  slidesPerView: 1,
  //effect: 'slide' | 'custom' | 'fade' | 'cube' | 'coverflow' | 'flip',
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  //mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 3,
      setWrapperSize: true,
    },
    640: {
      slidesPerView: 1,
    },
  },
});
//swiper.init();
//swiper.slideNext();

//const progressCircle = document.querySelector(".autoplay-progress svg");
//const progressContent = document.querySelector(".autoplay-progress span");
var swiperHome = new Swiper('#home .mySwiper', {
  direction: 'vertical',
  duration: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  /*
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }, */
});

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
    #home .image, #home .text,
    #about .image, #about .text,
    #contributors .contributor,
    #services header, #services .card,
    #testimonial header, #testimonials .testimonials,
    #contact .text, #contact .links,
    #map .text,
    footer .brand, footer .social
  `,
  { interval: 100 }
);

window.addEventListener('scroll', function () {
  listnerEventScroll();
  ativeMenu();
});
