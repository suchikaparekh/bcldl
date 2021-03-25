


// === Slider Start

// $('.home_slider').owlCarousel({
//   loop: true,
//   margin: 10,
//   dots: false,
//   nav: false,
//   responsive:{
//       0:{
//           items:1
//       }
//   }
// })

// === Slider End

// === Menu Start 

window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// === Menu End 



// Scrollspy initiation
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#scroll-spy',
  offset: 70
})

// tap to top
$('.tap-top').on('click', function () {
  $("html, body").animate({
    scrollTop: 0
  }, 600);
  return false;
});











