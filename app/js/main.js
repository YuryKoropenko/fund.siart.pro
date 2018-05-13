$('.header-slider').owlCarousel({
	loop:true,
	nav:true,
	items:1,
	dotsContainer: '.owl-dots-custom'
});
$('.p-glavfondslider').owlCarousel({
	loop:true,
	nav:true,
	responsive:{
		0:{
			items:1
		},
		767:{
			items:2
		},
		1024:{
			items:2
		},
		1280:{
			items:3
		},
		1920:{
			items:5
		}
	}
});
$('.p-ruk__slider').owlCarousel({
	loop:true,
	nav:true,
	items:3,
	responsive:{
		0:{
			items:1
		},
		767:{
			items:3
		},
		1024:{
			items:5
		},
		1280:{
			items:3
		}
	}
});

$(function() {
	var bodywidth = $('body').width();
	$('.h-nav__sub-wp').width(bodywidth);

	
	if ($(window).width() > 1920) {
		$('.h-nav__item').hover(function() {
			$(this).children('.h-nav__sub-wp').stop(false, true).fadeToggle();
		});
	}
	if ($(window).width() < 1920) {
		$('.h-nav__button').on('click', function() {
			$('.header__h-nav').fadeIn();
			$('.page__bg').fadeIn();
			return false;
		});
		$('.h-nav__close').on('click', function() {
			$('.header__h-nav').fadeOut();
			$('.page__bg').fadeOut();
			return false;
		});
		$('.h-nav__item-menu .h-nav__link').on('click', function() {
			$(this).parent().children('.h-nav__sub-wp').slideToggle();
			return false;
		});
	}
});