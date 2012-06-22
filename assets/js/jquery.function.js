/* ==========================================================
 * BaseWeb - jQuery Functions
 * https://github.com/sebnitu/BaseWeb
 * ==========================================================
 * Copyright 2012 Sebastian Nitu.
 * ========================================================== */

/* ==========================================================
	Utility Functions
============================================================= */

/**
 * Orientation and scale fix for iPhone & iPad
 * Script by Jeremy Keith: http://adactio.com/journal/4470/
 */
function mobileOrientationScale() {
	if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
		var viewportmeta = document.querySelector('meta[name="viewport"]');
		if (viewportmeta) {
			viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
			document.body.addEventListener('gesturestart', function () {
				viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
			}, false);
		}
	}
}

/**
 * Desktop, Tablet, Phone classes
 */
function responsiveClasses() {
	var viewWidth = $(window).width();
	if (viewWidth >= 960) {
		$('body')
			.addClass('baseweb-desktop')
			.removeClass('baseweb-tablet')
			.removeClass('baseweb-mobile')
			.removeClass('baseweb-smaller-mobile');
	} else if ( (viewWidth < 960) && (viewWidth >= 768) ) {
		$('body')
			.addClass('baseweb-tablet')
			.removeClass('baseweb-desktop')
			.removeClass('baseweb-mobile')
			.removeClass('baseweb-smaller-mobile');
	} else if ( (viewWidth < 767) && (viewWidth >= 480) ) {
		$('body')
			.addClass('baseweb-mobile')
			.removeClass('baseweb-tablet')
			.removeClass('baseweb-desktop')
			.removeClass('baseweb-smaller-mobile');
	} else if (viewWidth < 480) {
		$('body')
			.addClass('baseweb-mobile')
			.addClass('baseweb-smaller-mobile')
			.removeClass('baseweb-tablet')
			.removeClass('baseweb-desktop');
	}
}

/**
 * Equal Heights Function
 * Script by Rob Glazebrook: http://www.cssnewbie.com/equal-height-columns-with-jquery/
 */
function equalHeight(group) {
	var tallest = 0;
	group.css({ 'height' : 'auto' }).each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}

/**
 * Call function on browser resize
 */
function resizeTrigger(callback, delay) {
	// Delay before function is called
	delay = delay || 100;	
	// Call function on resize
	var resizeTimer;
	$(window).resize(function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			callback();
		}, delay);
	});
}

/* ==========================================================
	End of jQuery Functions
============================================================= */
