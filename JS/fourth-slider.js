document.addEventListener("DOMContentLoaded", function () {
  // First Slider
  var swiper1 = new Swiper(".first-slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1000: {
        slidesPerView: 4,
        spaceBetween: 60,
      },
    },
  });
});
