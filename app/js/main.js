$('.header-slider').owlCarousel({
	loop:true,
	nav:true,
	items:1,
	dotsContainer: '.owl-dots-custom'
});

$(function() {
	var bodywidth = $('body').width();
	$('.h-nav__sub-wp').width(bodywidth);

	$('.h-nav__item').hover(function() {
		$(this).children('.h-nav__sub-wp').stop(false, true).fadeToggle();
	});
});