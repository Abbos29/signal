const navToggle = document.querySelector(".burger__menu");
const mainMenu = document.querySelector(".nav");
const tBody = document.querySelector("body");

navToggle.addEventListener("click", () => {
  mainMenu.classList.toggle("burger__active");
  tBody.classList.toggle("lock");
});

mainMenu.addEventListener("click", (event) => {
  if(event.target){
    mainMenu.classList.remove("burger__active");
    tBody.classList.remove("lock");
  }
});

// SLIDER

$('.slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 2,
  dots: true,
  arrows: true,
  prevArrow: $('.slider__arrows-prev'),
  nextArrow: $('.slider__arrows-next'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 1
      }
    }
  ]
});


$('.partner__wrapper').slick({
  centerMode: true,
  dots: false,
  arrows: false,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: '20px',
      }
    }
  ]
})


