//

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  loop: true,
  center: false,
  margin: 20,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  speed: 2000,
  responsive: {
    0: {
      items: 1.2,
      nav: true,
      loop: true,
    },
    600: {
      items: 1.5,
      nav: true,
      loop: true,
    },
    991: {
      items: 2.2,
      nav: true,
      loop: true,
    },
    1000: {
      items: 2.2,
      nav: true,
      loop: true,
    },
  },
});

// Facts counter
let valueDisplays = document.querySelectorAll(".efk-matrix-title");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    valueDisplay.textContent = startValue + "+";

    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
