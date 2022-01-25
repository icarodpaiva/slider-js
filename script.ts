const totalSlides: number = document.querySelectorAll('.slider--item').length
let currentSlide: number = 0

const sliderWidth = document.querySelector('.slider--width') as HTMLElement
sliderWidth.style.width = `calc(100vw * ${totalSlides})`

const goPrev = () => {
  currentSlide--
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1
  }
  updateMargin()
}

const goNext = () => {
  currentSlide++
  if (currentSlide > totalSlides - 1) {
    currentSlide = 0
  }
  updateMargin()
}

const updateMargin = () => {
  let newMargin: number =
    currentSlide * document.querySelector('.slider--item')!.clientWidth
  sliderWidth.style.marginLeft = `-${newMargin}px`
}

// setInterval(goNext, 5000)
