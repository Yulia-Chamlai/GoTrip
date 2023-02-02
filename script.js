function navToggle() {
  var navToggleNav = document.getElementById("nav");
  navToggleNav.classList.toggle("_active");
  var html = document.getElementById("html");
  html.classList.toggle("_overflow");
  var body = document.getElementById("body");
  body.classList.toggle("_overflow");
}

/*$(".owl-carousel").owlCarousel({
  items: 2,
  lazyLoad: true,
  loop: true,
  center: true,
  margin: 30,
});*/

const owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  lazyLoad: true,
  loop: true,
  center: true,
  margin: 20,
  responsive: {
    // breakpoint from 480 up
    480: {
      items: 2,
      margin: 20,
    },
    //breakpoint 769 up
    769: {
      items: 2.5,
      margin: 30,
    },
  },
});

// Go to the previous item
$(".slider__btn--prev").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [300]);
});
// Go to the next item
$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});
