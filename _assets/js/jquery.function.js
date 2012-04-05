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

/* ==========================================================
	End of jQuery Functions
============================================================= */