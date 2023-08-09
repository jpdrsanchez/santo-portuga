import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

(() => {
  const prevButton = document.querySelector('[data-all="prev"]')
  const nextButton = document.querySelector('[data-all="next"]')

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

  prevButton.addEventListener('click', (event) => {
    event.preventDefault()
    fullSwiper.slidePrev()
  })

  nextButton.addEventListener('click', (event) => {
    event.preventDefault()
    fullSwiper.slideNext()
  })
})()

;(() => {
  const prevButton = document.querySelector('[data-single="prev"]')
  const nextButton = document.querySelector('[data-single="next"]')
  const title = document.querySelector('[data-single="title"]')
  const text = document.querySelector('[data-single="text"]')
  const image = document.querySelector('[data-single="image"]')

  const singleSwiper = new Swiper('.single-space', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    on: {
      init: (swiper) => {
        const activeSlide = document.querySelector('.single-space .swiper-slide.swiper-slide-active')
        if (activeSlide?.dataset?.title) {
          title.innerHTML = activeSlide.dataset.title;
        }
        if (activeSlide?.dataset?.text) {
          text.innerHTML = activeSlide.dataset.text;
        }
        if (activeSlide?.dataset?.image) {
          image.setAttribute('src', activeSlide.dataset.image);
        }
      },
      activeIndexChange: (swiper) => {
        const activeSlides = document.querySelectorAll('.single-space .swiper-slide')

        if (activeSlides?.[swiper.activeIndex]?.dataset?.title) {
          title.innerHTML = activeSlides[swiper.activeIndex].dataset.title;
        }
        if (activeSlides?.[swiper.activeIndex]?.dataset?.text) {
          text.innerHTML = activeSlides[swiper.activeIndex].dataset.text;
        }
        if (activeSlides?.[swiper.activeIndex]?.dataset?.image) {
          image.setAttribute('src', activeSlides[swiper.activeIndex].dataset.image);
        }
      }
    }
  })

  prevButton.addEventListener('click', (event) => {
    event.preventDefault()
    singleSwiper.slidePrev()
  })

  nextButton.addEventListener('click', (event) => {
    event.preventDefault()
    singleSwiper.slideNext()
  })
})()

;(() => {
  const prevButton = document.querySelector('[data-dish="prev"]')
  const nextButton = document.querySelector('[data-dish="next"]')
  const navigationButtons = document.querySelectorAll('[data-dish="nav"] button')
  const title = document.querySelector('[data-dish="title"]')
  const text = document.querySelector('[data-dish="text"]')

  const dishSwiper = new Swiper('.dish-carousel', {
    effect: "cards",
    on: {
      init: (swiper) => {
        const currentElement = [...navigationButtons]?.[swiper.activeIndex]
        const activeSlide = document.querySelector('.dish-carousel .swiper-slide.swiper-slide-active')
        if (activeSlide?.dataset?.title) {
          title.innerHTML = activeSlide.dataset.title;
        }
        if (activeSlide?.dataset?.text) {
          text.innerHTML = activeSlide.dataset.text;
        }

        if (currentElement) {
          navigationButtons.forEach(element => {
            element.removeAttribute('style')
          })
          currentElement.setAttribute('style', 'background: #fccc13; border: none;')
        }
      },
      activeIndexChange: (swiper) => {
        const currentElement = [...navigationButtons]?.[swiper.activeIndex]
        const activeSlides = document.querySelectorAll('.dish-carousel .swiper-slide')

        if (activeSlides?.[swiper.activeIndex]?.dataset?.title) {
          title.innerHTML = activeSlides[swiper.activeIndex].dataset.title;
        }
        if (activeSlides?.[swiper.activeIndex]?.dataset?.text) {
          text.innerHTML = activeSlides[swiper.activeIndex].dataset.text;
        }

        if (currentElement) {
          navigationButtons.forEach(element => {
            element.removeAttribute('style')
          })
          currentElement.setAttribute('style', 'background: #fccc13; border: none;')
        }
      }
    }
  })

  prevButton.addEventListener('click', (event) => {
    event.preventDefault()
    dishSwiper.slidePrev()
  })

  nextButton.addEventListener('click', (event) => {
    event.preventDefault()
    dishSwiper.slideNext()
  })
})()