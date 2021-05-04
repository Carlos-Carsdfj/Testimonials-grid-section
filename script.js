var myCarousel = document.querySelector('#carouselExampleControls')
var carousel = new bootstrap.Carousel(myCarousel,{
    interval: 20000,
    wrap: true,

    
  })

  carousel.setAttribute('style','data-bs-interval:10')

  