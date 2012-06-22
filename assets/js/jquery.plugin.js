/* ==========================================================
 * BaseWeb - jQuery Plugin Template
 * https://github.com/sebnitu/BaseWeb
 * ==========================================================
 * Copyright 2012 Sebastian Nitu.
 * ========================================================== */

/* ==========================================================
	Plugin Name
============================================================= */
(function($) {
	
	$.fn.pluginName = function(options) {
				
		// Extend our default options with those provided.
		var opts = $.extend({}, $.fn.pluginName.defaults, options);
				
		return this.each(function () {
						
	  	// Save our object
	  	var $this = $(this);
						
	  	// Build element specific options
	  	// This lets me access options with this syntax: o.optionName
	  	var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
		
		});

	};
	
	$.fn.pluginName.defaults = {
		pauseOnHover : true
	};
	
})(jQuery);

/* ==========================================================
	End of Plugin Name
============================================================= */
