// start to custom animate js

$(window).on("load", function () {
  $(".loder").delay(200).fadeOut(2000, function () {
    $("body").css("overflow", "auto");
  });
});
$(document).ready(function () {
  "use strict";

  let isRtl = $('html[lang="ar"]').length > 0;

  // when click to responsive btn show ul and overlay
  $(".nav-btn").click(function () {
    $(this).addClass("active");
    $(".nav-links").addClass("active");
    $(".nav-overlay").addClass("show");
  });

  // when i click on overlay remove class show and remove ul

  $(".nav-overlay").click(function () {
    $(".nav-btn").removeClass("active");
    $(".nav-links").removeClass("active");
    $(".nav-overlay").removeClass("show");
  });

  // select-2
  $(".select-plugin").select2({
    dir: isRtl ? "rtl" : "ltr",
  });

  $(".select").select2({
    dir: isRtl ? "rtl" : "ltr",
  });

  // toggle class active by clcik on to nav-item

  $(".map-list .nav-item .nav-link").click(function () {
    $(".map-list .nav-item").removeClass("active");
    $(this).parents(".nav-item").addClass("active");
  });

  $(".nav-pills .nav-item a").click(function () {
    $(".nav-item").removeClass("active");
    $(this).parents(".nav-item").addClass("active");
  });

  $(".like i").click(function () {
    var plusN = parseInt($(".like i").siblings().html());
    $(this).parents(".like").toggleClass("active");
    if ($(this).parents(".like").hasClass("active")) {
      $(this)
        .siblings("span")
        .html(plusN + 1);
      console.log("aaaaaaa");
    } else {
      $(this)
        .siblings("span")
        .html(plusN - 1);
    }
  });

  /*====================== responsive-footer-links-collapse=======================*/
  if ($(window).width() <= 768) {
    $(".footer-section .links").stop().slideUp(0);
    $(".foot-title").click(function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).siblings(".links").stop().slideUp();
      } else {
        $(".foot-title").removeClass("active");
        $(".footer-section .links").stop().slideUp();
        $(this).addClass("active");
        $(this).siblings(".links").stop().slideDown();
      }
    });
  }

  $(':input[type="number"]').on("input", function () {
    var nonNumReg = /[^0-9]/g;
    $(this).val($(this).val().replace(nonNumReg, ""));
  });

  // filter-icon / when i click it show filter-sidebar and overlay
  $(".filter-icon").click(function () {
    $(".filter-input").addClass("show");
    $(".overlay-filter-input").addClass("show");
  });

  $(".overlay-filter-input").click(function () {
    $(".filter-input").removeClass("show");
    $(this).removeClass("show");
  });

  $(".addphonenum").focus(function () {
    $(this).parents(".added-another-input").addClass("show");
  });

  $(".password-group i").click(function () {
    $(this).toggleClass("active");
    if ($(this).hasClass("active")) {
      $(this).siblings(".input").attr("type", "text");
    } else {
      $(this).siblings(".input").attr("type", "password");
    }
  });

  $(".category-box .fave, .room-banner .inner .icons .icon").click(function (
    e
  ) {
    e.preventDefault();
    $(this).toggleClass("active");
  });

  $(".banner-slider").owlCarousel({
    items: 1,
    loop: true,
    rtl: isRtl,
    margin: 10,
    nav: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    smartSpeed: 1000,
    responsive: {
      320: {
        autoplay: true,
        loop: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
      },

      600: {
        items: 1,
        autoplay: false,
        loop: false,
      },
    },
  });

  $( ".info-product:odd" ).css( "background-color", "#F5F5F5" );

  $(".remove-img .item").click(function() {
    console.log("lol");
    if ($(this).parents(".remove-img").find('img').hasClass("uploader-img-active single-img")) {

      $(this).parents(".remove-img").find('img').attr('src', 'img/picture_add.png');
      $(this).parents(".remove-img").find('img').removeClass('uploader-img-active single-img');
      $(this).removeClass('show')
      $(".profile-img-upload input").val(null)
    } else {
     
    }

  });

  $(".location-ar .dropdown-item").click(function () {
    console.log($('.text-span').text());
    $(".location-ar .text-span").text($(this).text());
  });
});


