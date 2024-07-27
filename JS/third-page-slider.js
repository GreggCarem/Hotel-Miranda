document.addEventListener("DOMContentLoaded", function () {
  var swiper1 = new Swiper(".first-slider", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
      renderBullet: function (index, number) {
        const totalSlides = this.slides.length;
        const lastIndex = totalSlides - 1;

        if (index < 3 || index === lastIndex) {
          return `<span class="${number}">${index + 1}</span>`;
        } else if (index === 3) {
          return `<span class="${number}">...</span>`;
        } else {
          return "";
        }
      },
    },
  });
});
