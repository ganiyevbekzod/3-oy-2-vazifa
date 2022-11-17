const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
  // do something...
})
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})