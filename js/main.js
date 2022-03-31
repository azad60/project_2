const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  // spaceBetween: 40,
  // slidesPerGroup: 2,
  // If we need pagination
   pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});