import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

(() => {
  const fullSwiper = new Swiper('.full-carousel', {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    breakpoints: {
      420: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    }
  })
})()

;(() => {
  const singleSwiper = new Swiper('.single-space', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
  })
})()

;(() => {
  const dishSwiper = new Swiper('.dish-carousel', {
    effect: "cards",
    loop: true,
  })
})()