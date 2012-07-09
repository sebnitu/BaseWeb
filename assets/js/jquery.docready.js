/* ==========================================================
 * BaseWeb - jQuery Document & Image Ready Scripts
 * https://github.com/sebnitu/BaseWeb
 * ==========================================================
 * Copyright 2012 Sebastian Nitu.
 * ========================================================== */

/* ==========================================================
	When Document is Ready
============================================================= */
$(document).ready(function() {
	
	/**
	 * Mobile Orientation and Scale Fix
	 */
	mobileOrientationScale();

	/**
	 * Desktop, Tablet, Phone classes
	 */
	responsiveClasses();
	resizeTrigger(responsiveClasses);
	
});
/* ==========================================================
	When Images are Loaded
============================================================= */
$(window).load(function() {
	
	
	
});
/* ==========================================================
	End of Document & Image Ready Scripts
============================================================= */