document.addEventListener("DOMContentLoaded", function () {
  var swiper2 = new Swiper(".Swiper2", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  let isSwiperInitialized = true;

  function checkWindowSize() {
    if (window.innerWidth > 1000) {
      if (isSwiperInitialized) {
        swiper2.destroy(true, true);
        isSwiperInitialized = false;
      }
    } else {
      if (!isSwiperInitialized) {
        swiper2 = new Swiper(".Swiper2", {
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          slidesPerView: 1,
          spaceBetween: 10,
          breakpoints: {
            640: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          },
        });
        isSwiperInitialized = true;
      }
    }
  }

  checkWindowSize();

  window.addEventListener("resize", checkWindowSize);

  var swiper4 = new Swiper(".Swiper4", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});
