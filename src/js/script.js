$('.burger__container').on("click", function () {
  $('.burger__container').toggleClass('is-active');
  $('.mobile-menu').toggleClass('is-active');
  $('body').toggleClass('lock');
});


$('.js__mobile-submenu').on("click", function () {
  $(this).toggleClass('is-sub-open');
  //$(this).closest(".js__mobile-item").addClass('dontclose');
});

$(".mobile-menu__link").on("click", function () {
  $(this).toggleClass('is-open');
  $(this).closest(".js__mobile-item").toggleClass('is-open');
});
/////search   //aka document.ready
$("input#search").focusin(function () {
    $("#search-bar").addClass("is-focused");
});
$("input#search").focusout(function () {
  $("#search-bar").removeClass("is-focused");
});

////////////////////////////

$(' #bad-eye').on("click", function () {
  $('body').toggleClass('big-font');
});


var mySwiper = new Swiper('.fpbanner-slider', {
  loop: false,
  autoplay: false,
  speed: 900,
  resistance: true,
  resistanceRatio: 0,
  navigation: {
    nextEl: '.fpbanner-slider__next',
    prevEl: '.fpbanner-slider__prev',
  },
});