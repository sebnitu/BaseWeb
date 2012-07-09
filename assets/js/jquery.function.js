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
 * FancyBox AJAX Call
 */
function ajax_fancybox(selector) {
	
	selector.each(function() {
		$(this).fancybox({
		
			// Default Options
			type: 'ajax',
			padding: 0,
			fitToView: false,
			
			// This enables fancybox to work on content
			// that is loaded by fancybox
			afterShow: function() {
				selector.fancybox({
					type: 'ajax',
					padding: 0,
					fitToView: false,
				});
			}
			
		});
	});

}

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
 * Image Scale
 */
function imgScale() {
	
	var imageBox = $('.banner'),
		image = imageBox.find('img').css({ 'width' : 'auto', 'height' : 'auto' }),
		imageBoxWidth = imageBox.width(),
		imageBoxHeight = imageBox.height(),
		imageWidth = image.width(),
		imageHeight = image.height();
	
	var heightDif = imageWidth - imageBoxWidth;
	var widthDif = imageHeight - imageBoxHeight;
	
	if ( widthDif >= heightDif ) {
		newImageHeight = imageBoxWidth * imageHeight / imageWidth;
		newImageWidth = imageBoxWidth;
	} else {
		newImageWidth = imageBoxHeight * imageWidth / imageHeight;
		newImageHeight = imageBoxHeight;
	}
	
	var imageLeft = -centerElement(newImageWidth, imageBoxWidth),
		imageTop = -centerElement(newImageHeight, imageBoxHeight);
	
	// , 'left' : imageLeft, 'top' : imageTop
	image.css({ 'width' : newImageWidth, 'height' : newImageHeight });
	imageBox.animate({ 'opacity' : 1 }, 500);
	
}

/**
 * Image Center
 */
function centerBannerImage() {
	var banner = $(".banner, .heading"),
		bannerImage = $(".banner img, .heading img");
	
	bannerImage.css({
		left : ( -centerElement(bannerImage.width(), banner.width()) )
	});
}

/**
 * Center Element by Emilia Nitu
 */
function centerElement(a, b) {
	return (a - b) / 2;
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
