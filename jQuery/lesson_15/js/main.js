/* Делаем собственный слайдер на jQuery */

$(function() {	
	var slideNow = 1;
	var slideCount = $('.cool-slider-sliderwprapper').children().length;
	var slideTime = 5000;
	var navBtn = $('.cool-slider-slide-nav');

	navBtn.click(function() {
		navBtn = $(this).index();
		$('.cool-slider-active').removeClass('cool-slider-active');
		$(this).toggleClass('cool-slider-active');
		if (navBtn + 1 != slideNow) {
			var translateWidth = -$('.cool-slider-viewport').width()	* (navBtn);	
			$('.cool-slider-sliderwprapper').css({
				'transform': 'translate('+translateWidth+'px,0)',
				'-o-transform': 'translate('+translateWidth+'px,0)',
				'-webkit-transform': 'translate('+translateWidth+'px,0)'
			});	
			slideNow = navBtn + 1;
		}
	});
	
	// setInterval(nextSlide, slideTime);
});	