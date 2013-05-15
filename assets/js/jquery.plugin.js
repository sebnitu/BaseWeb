/**
 * jquery.plugin.js
 * A jQuery plugin boilerplate. Search and replace `pluginName` with whatever you want to call the plugin
 * 
 * @author Sebastian Nitu
 * @url https://github.com/sebnitu/BaseWeb
 * @url http://sebnitu.com
 */

;(function ($) {
    'use strict';

    $.fn.pluginName = function (options) {

        // Extend our default options with those provided.
        var opts = $.extend({}, $.fn.pluginName.defaults, options);

        return this.each(function () {
            
            // Save our object
            var $this = $(this);

            // Build element specific options
            // This lets me access options with the syntax: `o.optionName`
            var o = $.meta ? $.extend({}, opts, $this.data()) : opts;

            // Your fancy JavaScript Here
            
        });

    };

    $.fn.pluginName.defaults = {
        key : 'value'
    };

})(jQuery);
