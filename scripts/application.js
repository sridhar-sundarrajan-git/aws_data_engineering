window.addEventListener("load", () => {
  const dataAccordionContainer = document.querySelectorAll(
    "[data-accordion-container]"
  );

  dataAccordionContainer.forEach((accordionContainer) => {
    const theTabs = accordionContainer.querySelectorAll(".accordion-trigger");

    function theAccordionClicks(accordionClickEvent) {
      const clickedTab = accordionClickEvent.currentTarget;

      // var tabParent =
      //  accordionClickEvent.currentTarget.parentNode.parentNode.parentNode.parentNode;
      // console.log(tabParent);
      // var theTabs = tabParent.querySelectorAll('.nav-tabs button');
      for (let i = 0; i < theTabs.length; i++) {
        theTabs[i].parentNode.classList.remove("active");
      }

      clickedTab.parentNode.classList.add("active");
      accordionClickEvent.preventDefault();
    }
    for (let i = 0; i < theTabs.length; i++) {
      theTabs[i].addEventListener("click", theAccordionClicks);
    }
  });
  // store tabs variable
});

// Open menu in mobile

const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".nav-main");

const toggleNav = () => {
  mainNav.classList.toggle("open");
};

// hamburger.addEventListener("click", toggleNav);

// Tiny slider

// const imgMarquee = document.querySelector(".marquee-slider");

// if (imgMarquee) {
//   var textMarqueeRef = tns({
//     container: imgMarquee,
//     gutter: 16,

//     mouseDrag: false,
//     nav: false,
//     controls: false,
//     autoplayButtonOutput: false,
//     preventActionWhenRunning: true,
//     autoplay: true,
//     autoplayTimeout: 0,
//     controlsPosition: "bottom",
//     speed: 6000,
//     autoWidth: true,
//     loop: true,

//     responsive: {
//       768: {
//         items: 4,
//       },
//     },
//   });
// }

const arrowLeft =
  '<svg width="30" height="20" fill="none" viewBox="0 0 30 20"><path fill="#CE3640" d="m9.937 19.428 2.352-2.363-5.45-5.424 22.674-.023-.003-3.334-22.613.023 5.358-5.384L9.893.572l-9.406 9.45 9.45 9.406Z"/></svg>';

const arrowRight =
  '<svg width="30" height="20" fill="none" viewBox="0 0 30 20"><path fill="#CE3640" d="m20.063.572-2.351 2.362 5.45 5.425-22.675.023.003 3.334 22.613-.023-5.359 5.383 2.363 2.352 9.406-9.45-9.45-9.406Z"/></svg>';

const leftArrow =
  '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" transform="translate(32) rotate(90)" fill="#7043E3" fill-opacity="0.3"/><path d="M20 8L12 16L20 24" stroke="#7043E3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const rightArrow =
  '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" transform="matrix(-4.37114e-08 1 1 4.37114e-08 0 0)" fill="#7043E3"/><path d="M12 8L20 16L12 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const testimonialSlider = document.querySelector(".testimonial-slider");
const blogSlider = document.querySelector(".blog-slider");

const mobile = window.innerWidth > 767;

if (testimonialSlider) {
  var testimonialSliderRef = tns({
    container: testimonialSlider,
    gutter: 20,
    items: 1,
    mouseDrag: false,
    nav: true,
    navPosition: "bottom",
    controls: false,
    speed: 500,
    loop: mobile ? false : true,

    responsive: {
      0: {
        items: 1,
        autoplay: true,
        // loop: true,
      },
      768: {
        items: 2.3,
        startIndex: 0,
        nav: false,
        mouseDrag: true,
        autoplay: false,
        loop: false,
      },
    },
  });
}

if (blogSlider) {
  var testimonialSliderRef = tns({
    container: blogSlider,
    gutter: 20,
    items: 1,
    mouseDrag: false,
    nav: true,
    navPosition: "bottom",
    controls: false,
    speed: 500,
    loop: true,

    responsive: {
      0: {
        items: 1,
        autoplay: true,
        // loop: true,
      },
      768: {
        items: 3,
        startIndex: 0,
        nav: false,
        controls: true,
        controlsPosition: "top",
        controlsText: [leftArrow, rightArrow],
        mouseDrag: true,
        autoplay: false,
        loop: false,
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  const accordionHeaderss = document.querySelectorAll(".accordion-headers");

  // Open the first accordion by default
  accordionHeaders[0]?.classList.add("active");
  accordionHeaderss[0]?.classList.add("active");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const arrow = this.querySelector(".arrow");

      if (this.classList.contains("active")) {
        // content.style.display = "none";
        content.classList.remove("dropdown-accordion");
        arrow.style.transform = "rotate(0deg)";
        this.classList.remove("active");
      } else {
        // Close other accordions before opening this one
        accordionHeaders.forEach((otherHeader) => {
          if (otherHeader !== this) {
            const otherContent = otherHeader.nextElementSibling;
            const otherArrow = otherHeader.querySelector(".arrow");
            // otherContent.style.display = "none";
            otherContent.classList.remove("dropdown-accordion");
            otherArrow.style.transform = "rotate(0deg)";
            otherHeader.classList.remove("active");
          }
        });

        // content.style.display = "block";
        content.classList.add("dropdown-accordion");
        arrow.style.transform = "rotate(180deg)";
        this.classList.add("active");
      }
    });
  });
  accordionHeaderss.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const arrow = this.querySelector(".arrow");

      if (this.classList.contains("active")) {
        content.classList.remove("dropdown-accordion");
        arrow.style.transform = "rotate(0deg)";
        this.classList.remove("active");
      } else {
        // Close other accordions before opening this one
        accordionHeaderss.forEach((otherHeader) => {
          if (otherHeader !== this) {
            const otherContent = otherHeader.nextElementSibling;
            const otherArrow = otherHeader.querySelector(".arrow");

            otherContent.classList.remove("dropdown-accordion");
            otherArrow.style.transform = "rotate(0deg)";
            otherHeader.classList.remove("active");
          }
        });

        content.classList.add("dropdown-accordion");
        arrow.style.transform = "rotate(180deg)";
        this.classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".achievement-grid");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      removeActiveClass();
      card.classList.add("active");
    });
  });
  function removeActiveClass() {
    cards.forEach((item) => {
      item.classList.remove("active");
    });
  }
});

const cards = document.querySelector(".footer-banner");
if (!mobile) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      cards.classList.add("show-footer-banner");
    } else {
      cards.classList.remove("show-footer-banner");
    }
  });
}

const bannerSlider = document.querySelector(".banner");

if (bannerSlider) {
  var bannerSliderRef = tns({
    container: bannerSlider,
    autoplayButtonOutput: false,
    mouseDrag: false,
    loop: true,
    gutter: 200,
    speed: 10000,
    controls: false,
    nav: false,
    preventActionWhenRunning: true,
    autoplay: true,
    autoplayTimeout: 0,

    responsive: {
      0: {
        items: 0.6,
      },

      768: {
        items: 1.3,
      },
      1024: {
        items: 1.6,
      },
      1200: {
        items: 2.3,
      },
    },
  });
}


const logoSlider = document.querySelector(".logo-slider");

if (logoSlider) {
  var logoSliderRef = tns({
    container: logoSlider,
    autoplayButtonOutput: false,
    mouseDrag: false,
    loop: true,
    gutter: 20,
    speed: 4000,
    controls: false,
    nav: false,
    preventActionWhenRunning: true,
    autoplay: true,
    autoplayTimeout: 0,

    responsive: {
      0: {
        items: 2.5,
      },

      768: {
        items: 4,
      },

      1200: {
        items: 6,
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // if (mobile) {
  const hamburger = document.querySelector(".hamburger");
  const navMain = document.querySelector(".nav-area");

  const navLinks = document.querySelectorAll(".nav-link");
  hamburger.addEventListener("click", () => {
    navMain.classList.toggle("nav-open");
    hamburger.classList.toggle("active");
  });

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      navMain.classList.remove("nav-open");
      hamburger.classList.remove("active");
    });
  });
});

// Smooth scroll on anchor click

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// (function () {
//   'use strict';

//   var section = document.querySelectorAll('.scrollspy-section');
//   var sections = {};
//   var i = 0;

//   Array.prototype.forEach.call(section, function (e) {
//     sections[e.id] = e.offsetTop;
//   });

//   window.onscroll = function () {
//     var scrollPosition =
//       document.documentElement.scrollTop || document.body.scrollTop;

//     for (i in sections) {
//       if (sections[i] <= scrollPosition) {
//         document.querySelector('.active').setAttribute('class', ' ');
//         document
//           .querySelector('a[href*=' + i + ']')
//           .setAttribute('class', 'active');
//       }
//     }
//   };
// })();

// Countdown timer

// Set the date we're counting down to
var countDownDate = new Date("Sep 8, 2023 00:00:00").getTime();


// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  const daysContainer = document.querySelectorAll(".days-container");
  const hoursContainer = document.querySelectorAll(".hours-container");
  const minutesContainer = document.querySelectorAll(".minutes-container");
  const secondsContainer = document.querySelectorAll(".seconds-container");

  // document.getElementById('timer').innerHTML =
  //   days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

  daysContainer.forEach((day) => {
    day.innerHTML = days + "";
  });
  hoursContainer.forEach((hour) => {
    hour.innerHTML = hours + "";
  });
  minutesContainer.forEach((minute) => {
    minute.innerHTML = minutes + "";
  });
  secondsContainer.forEach((second) => {
    second.innerHTML = seconds + "";

  });

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

// Popup-Ad
let intervalID;

// document.addEventListener("DOMContentLoaded", () => {
//   let closebtn = document.querySelector(".close-btn");
//   let popup = document.querySelector(".popup-ad");
//   let popupSlider = document.querySelector(".popup-slider");

//   const callTimeOut = (time) => {
//     setTimeout(() => {
//       popup.classList.remove("visible-popup");
//       popupSlider.classList.remove("animate");
//     }, time);
//   };

//   intervalID = setInterval(() => {
//     popup.classList.add("visible-popup");
//     popupSlider.classList.add("animate");
//     callTimeOut(4000);
//   }, 8000);

//   closebtn.addEventListener("click", () => {
//     popup.classList.remove("visible-popup");
//     popupSlider.classList.remove("animate");
//   });
// });
