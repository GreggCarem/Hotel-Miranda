document.addEventListener("DOMContentLoaded", function () {
  // First Slider
  var swiper1 = new Swiper(".first-slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Second Slider
  var swiper2 = new Swiper(".Swiper2", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Third Slider
  var swiper3 = new Swiper(".Swiper3", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
