'use strict';

$(document).ready(function () {
	/*- main page click -*/
	$('.story__item').on('click', function (e) {
		e.preventDefault();
		$(this).addClass('is-active');
	});
	/*-  -*/

	var $winWidth = $(window).width();
	var $winHeight = $(window).height();
	var $minus = $winWidth - $winHeight;
	var $innerBlockWidth = $('.viewport').width();
	var $realwinHeight = $(document).height() - $winHeight;
	var $horizontalWidth = ($innerBlockWidth * ($('.viewport').length )) ;


	$('.horizontal').width($horizontalWidth + 'px');
	$('.camera').height($horizontalWidth - $minus + 'px');

	var direction = $(window).scrollTop();

	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();

		if(scroll > 500) {
			var move = scroll - 500;
			var variable = {'left' : '-' + move + 'px'};
			$('.horizontal').css(variable);


			var left = $('.boat').position().left;
			$('.boat').css({
				'left': scroll + ($winWidth / 10) + 'px'
			});

			$('.boat').addClass('in-boat');


		} else {
			if(direction > scroll) {
				console.log('top');
				var left = $('.boat').position().left;
				$('.boat').css({
					'left': (left + scroll) + 'px'  && '400px'
				});
			} else {
				console.log('bottom');
				var left = $('.boat').position().left;
				$('.boat').css({
					'left': (left + scroll)/2 + 'px' && '400px'
				});
			}
			direction = scroll;
			$('.boat').removeClass('in-boat');




		}

	});
});

