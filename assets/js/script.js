function header_adj() {
	if ($(window).width() < 992) {
		var header_height = $(".header").outerHeight();
		$(".nav-wrap .nav-list").css({ "padding-top": header_height + "px" });
	} else {
		$(".nav-wrap .nav-list").css({ "padding-top": "0" });
	}
}
function submenu_toggle() {
	if ($(window).width() < 992) {
		$(".nav-list li.with-submenu")
			.off()
			.click(function () {
				$(this).toggleClass("is-open");
				$(".submenu").slideToggle("slow");
			});
	}
}
$(document).ready(function () {
	header_adj();
	submenu_toggle();
	if ($(window).width() < 992) {
		$(".hamburger")
			.off()
			.click(function () {
				$(this).toggleClass("is-active");
				$("body,html").toggleClass("sidebar-open");
				$(".nav-wrap").toggleClass("is-open");
			});

		$(".overlay")
			.off()
			.click(function () {
				$(".hamburger").removeClass("is-active");
				$("body,html").removeClass("sidebar-open");
				$(".nav-wrap").removeClass("is-open");
			});
	} else {
		$(".hamburger").removeClass("is-active");
		$("body,html").removeClass("sidebar-open");
		$(".nav-wrap").removeClass("is-open");
	}
});
$(window).on("resize", function () {
	header_adj();
	submenu_toggle();
	if ($(window).width() < 992) {
		$(".hamburger")
			.off()
			.click(function () {
				$(this).toggleClass("is-active");
				$("body,html").toggleClass("sidebar-open");
				$(".nav-wrap").toggleClass("is-open");
			});

		$(".overlay")
			.off()
			.click(function () {
				$(".hamburger").removeClass("is-active");
				$("body,html").removeClass("sidebar-open");
				$(".nav-wrap").removeClass("is-open");
			});
	} else {
		$(".hamburger").removeClass("is-active");
		$("body,html").removeClass("sidebar-open");
		$(".nav-wrap").removeClass("is-open");
	}
});

// banner slider js start
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.slider-nav-thumbnails',
});

$('.slider-nav-thumbnails').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider',
  dots: true,
  focusOnSelect: true
});

//remove active class from all thumbnail slides
$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

//set active class to first thumbnail slides
$('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

// On before slide change match active thumbnail to current slide
$('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var mySlideNumber = nextSlide;
  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
  $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
});

//UPDATED 
 
// $('.slider').on('afterChange', function(event, slick, currentSlide){   
//  $('.content').hide();
//  $('.content[data-id=' + (currentSlide + 1) + ']').show();
// });

// banner slider js end