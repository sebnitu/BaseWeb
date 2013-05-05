/**
 * baseweb.js
 * The base JavaScript for the BaseWeb framework
 * ----
 * @author Sebastian Nitu
 * @url https://github.com/sebnitu/BaseWeb
 * @url http://sebnitu.com
 */

;(function ($) {
    'use strict';

    window.BaseWeb = {
        
        /**
         * Stuff to do when BaseWeb.js is initiated
         */
        init : function () {
            
            // Turn off mobile orientation scaling
            BaseWeb.mobileOrientationScale();
            
            // Toggle responsive breakpoint classes on the body
            BaseWeb.responsiveClasses();
            BaseWeb.resizeTrigger( BaseWeb.responsiveClasses );
            
        },
        
        /**
         * Orientation and scale fix for iPhone & iPad
         * Script by Jeremy Keith: http://adactio.com/journal/4470/
         */
        mobileOrientationScale : function () {
            if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
                var viewportmeta = document.querySelector('meta[name="viewport"]');
                if (viewportmeta) {
                    viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
                    document.body.addEventListener('gesturestart', function () {
                        viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
                    }, false);
                }
            }
        },
        
        /**
         * Specific classes applied to body for small, mobile, tablet, desktop and large
         */
        responsiveClasses : function () {
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
        },
        
        /**
         * Equal Heights Function
         * Script by Rob Glazebrook: http://www.cssnewbie.com/equal-height-columns-with-jquery/
         */
        equalHeight : function (group) {
            var tallest = 0;
            group.css({ 'height' : 'auto' }).each(function() {
                var thisHeight = $(this).height();
                if(thisHeight > tallest) {
                    tallest = thisHeight;
                }
            });
            group.height(tallest);
        },
        
        /**
         * Call function on browser resize
         */
        resizeTrigger : function (callback, delay) {
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
        
    },
    
    $.fn.baseweb = function () {
                
        return this.each(function () {
            BaseWeb.init();
            return this;
        });
        
    };
    
    // Init BaseWeb JavaScript when document is loaded
    $(document).ready(function () { $(this).baseweb() });
    
}(jQuery));