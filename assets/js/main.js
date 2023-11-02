$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {  
            '1199': {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            '767': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '480': {
              slidesPerView: 1,
              spaceBetween: 20,},

          },
      });
});
