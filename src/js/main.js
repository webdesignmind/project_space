const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".review-swiper__pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".review-swiper__button--prev",
    prevEl: ".review-swiper__button--next",
  },
});
