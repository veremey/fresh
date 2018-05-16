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
	var $asd = $winWidth - $winHeight;
	var $innerBlockWidth = $('.viewport').width();
	var $realwinHeight = $(document).height() - $winHeight;
	var $horizontalWidth = ($innerBlockWidth * ($('.viewport').length )) ;


	$('.horizontal').width($horizontalWidth + 'px');
	$('.camera').height($horizontalWidth + 'px');

	$(document).on('scroll', function () {

		var scroll = $(document).scrollTop();
		var scrolwel = $(document).scrollTop() - $asd;

		var variable = {'left' : '-' + scroll + 'px'}

		$('.horizontal').css(variable)
	});
});

