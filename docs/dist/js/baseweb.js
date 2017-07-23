var utility = (function () {

  'use strict';

  //
  // Variables
  //

  var api = {};
  var settings;
  var defaults = {};

  //
  // Public Methods
  //

  /**
   * Checks if an element has a class or not
   * @param {Element} Element to check class on
   * @param {String} Class string to check for
   * @returns {Boolean} Returns true if class exists on element, otherwise false
   */
  api.hasClass = function ( el, c ) {
    return el.classList.contains(c);
  }; // End hasClass

  /**
   * Adds a class to an element
   * @param {Element} Element to add class(es) on
   * @param {String} || {Array} Class(es) to add
   */
  api.addClass = function ( el, c ) {

    c = api.toArray(c);

    c.forEach( function ( c ) {
      el.classList.add( c );
    });

  }; // End addClass

  /**
   * Remove a class from an element
   * @param {Element} Element to remove class(es) from
   * @param {String} || {Array} Class(es) to remove
   */
  api.removeClass = function ( el, c ) {

    c = api.toArray(c);

    c.forEach( function ( c ) {
      el.classList.remove( c );
    });

  }; // End removeClass

  /**
   * Toggle a class on an element
   * @param {Element} Element to toggle class(es) on
   * @param {String} || {Array} Class(es) to toggle
   */
  api.toggleClass = function ( el, c ) {

    c = api.toArray(c);

    c.forEach( function ( c ) {
      var fn = api.hasClass( el, c ) ? api.removeClass : api.addClass;
      fn( el, c );
    });

  }; // End toggleClass

  /**
   * Find the closest parent element based on class
   * @param {Element} Element to start search on
   * @param {String} Class string to toggle
   * @return {Element} Closest parent element
   */
  api.closest = function ( el, c ) {
    while ((el = el.parentElement) && !api.hasClass(el, c));
    return el;
  }; // End closest

  /**
   * Converts a string to an array
   * @param {String} || {Array} A string to convert to an array
   * @return {Array} Return the converted array
   */
  api.toArray = function( c ) {

    var array = [];

    if (typeof c === 'string') {
      array.push(c);
    } else if (Array.isArray(c)) {
      array = c;
    } else {
      return false;
    }

    return array;

  }; // End toArray

  /**
   * Creates a forEach loop for Node lists
   */
  api.forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; ++i) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  };

  /**
   * Merge two or more objects. Returns a new object.
   * Set the first argument to `true` for a deep or recursive merge
   * @param {Boolean} deep If true, do a deep (or recursive) merge [optional]
   * @param {Object} objects The objects to merge together
   * @returns {Object} Merged values of defaults and options
   */
  api.extend = function () {

    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
      deep = arguments[0];
      i++;
    }

    // Merge the object into the extended object
    var merge = function ( obj ) {
      for ( var prop in obj ) {
        if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
          // If deep merge and property is an object, merge properties
          if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
            extended[prop] = extend( true, extended[prop], obj[prop] );
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    // Loop through each object and conduct a merge
    for ( ; i < length; i++ ) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;

  }; // End extend

  //
  // Return Public APIs
  //

  return api;

})();

var dismissible = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    selectorTrigger : '.close',
    timer: 500
  };

  //
  // Private Methods
  //

  var runDismissible = function () {

    // Only run if the clicked link was a dismissible item
    if ( !event.target.matches(settings.selectorTrigger)) return;

    // Prevent default link behavior
    event.preventDefault();

    // Get the dismissible parent element
    var dismissible = u.closest(event.target, 'dismissible');

    // Add initial classes
    u.addClass(dismissible, 'hide');

  };

  //
  // Public Methods
  //

  api.init = function ( options ) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Add event listener
    document.addEventListener('click', runDismissible, false);

  };

  api.destroy = function () {

    // Remove listener
    document.removeEventListener('click', runDismissible, false);

    // Reset settings
    settings = null;

  };

  //
  // Return Public APIs
  //

  return api;

})();

var dropdowns = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    selectorTrigger: '.dropdown-trigger.on-click',
    selectorDropdown: '.dropdown',
    classTrigger: 'dropdown-trigger',
    classDropdown: 'dropdown',
    classActive: 'active',
    timer: 500
  };
  var triggers = [];
  var dropdowns = [];

  //
  // Private Methods
  //

  var runDropdownTriggers = function () {

    var trigger = u.closest(event.target, settings.classTrigger);

    // Is the dropdown already active?
    var is_active = u.hasClass(trigger, settings.classActive);

    // Hide all dropdowns that are click activated
    api.hideAll();

    // Keep the parent dropdowns active
    api.showParents(trigger);

    // If the dropdown is not active, add the active class
    if (!is_active) {
      u.addClass(trigger, settings.classActive);
    }

    // Prevent default link behavior
    event.preventDefault();

    // Stop the click event from bubbling down to the document
    event.stopPropagation();

  };

  var runDropdowns = function () {

    // Hide all dropdowns that are click activated
    api.hideAll();

    // Keep the parent dropdowns active
    api.showParents(event.target);

    // Prevent default link behavior
    event.preventDefault();

    // Stop the click event from bubbling down to the document
    event.stopPropagation();

  };

  //
  // Public Methods
  //

  // Hide all dropdowns that are click activated
  api.hideAll = function () {

    triggers.forEach( function (el) {
      u.removeClass(el, settings.classActive);
    });

  };

  // Keep the parent dropdowns active
  api.showParents = function (el) {

    var parent = u.closest(el, settings.classTrigger);

    while (parent) {
      u.addClass(parent, settings.classActive);
      parent = u.closest(parent, settings.classTrigger);
    }

  };

  api.init = function ( options ) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Find triggers and dropdowns
    triggers = document.querySelectorAll(settings.selectorTrigger);
    dropdowns = document.querySelectorAll(settings.selectorTrigger + ' ' + settings.selectorDropdown);

    // Add event listener to document
    document.addEventListener('click', api.hideAll, false);

    // Add event listener to dropdown trigger
    triggers.forEach(function (el) {
      el.addEventListener('click', runDropdownTriggers, false);
    });

    // Add event listener to dropdown
    dropdowns.forEach(function (el) {
      el.addEventListener('click', runDropdowns, false);
    });

  };

  api.destroy = function () {

    // Remove listeners
    document.removeEventListener('click', api.hideAll, false);

    triggers.forEach(function (el) {
      el.removeEventListener('click', runDropdownTriggers, false);
    });

    dropdowns.forEach(function (el) {
      el.removeEventListener('click', runDropdowns, false);
    });

    // Reset settings
    settings = null;
    triggers = null;
    dropdowns = null;

  };

  //
  // Return Public APIs
  //

  return api;

})();

$('.tabs-nav').each(function() {

  // Save this
  var $this = $(this);

  // Save our tabs content
  var tabs_content = $this.parents('.tabs').find('.tabs-content');
  var has_content = tabs_content.length;

  // Check our other tabs content method if one wasn't found yet
  if (!has_content) {
    // Check if we have a linked content data attribute
    tabs_content = $this.attr('data-content');
    if (tabs_content) {
      // Save our tabs content
      tabs_content = $('#' + tabs_content);
      // Set has_content to true
      if (tabs_content.length) {
        has_content = 1;
      }
    } else {
      console.log('Tabs content does not exist!');
    }
  }

  // Add click event to tab links
  $this.find('a').click(function() {
    // Check if item is already active or not
    var is_active = $(this).parents('li').hasClass('active');

    if (!is_active) {
      // Remove active class from all children nav items
      $this.find('li').removeClass('active');
      // Add active class to currently selected item
      $(this).parents('li').addClass('active');

      // Check if tabs-nav has an associated content block
      if (has_content) {
        // Hide current active content
        tabs_content.find('.tabs-panel').removeClass('active');
        // Show new active content
        var target = $(this).attr('href');
        $(target).addClass('active');
      } else {
        console.log('Tabs content does not exist!');
      }
    }

    // Stop the default behavior
    return false;
  });

});

$('.oc-trigger').each(function () {

  var
    $this = $(this),
    $wrap = $this.closest('.oc-wrap'),
    $aside = $wrap.find('.oc-aside'),
    target = $this.attr('data-target'),
    reset = 'oc-wrap',
    is_active = false,
    close = function() {
      // Remove active class
      $wrap.removeClass('oc-active');
      // Remove delay class after the set transition duration
      setTimeout( function() {
        $wrap.removeClass('oc-delay');
      }, 500 );
    }
  ;

  // Button click event
  $this.click(function(e) {
    is_active = $wrap.hasClass('oc-active');

    // Check if it's a close button or if off-canvas is already active
    if(!target || is_active) {
      // Close off-canvas content
      close();
    } else {
      // Reset container class
      $wrap.attr('class', reset);
    }
    // Add target class
    if(target && !is_active) {
      $wrap.addClass(target);
      // Add active and delay classes after a slight delay
      setTimeout( function() {
        $wrap.addClass('oc-active oc-delay');
      }, 25 );
    }

    // Stop the default behavior
    return false;
  });

  // Aside click event
  $aside.click(function(e) {
    // Stop the click propogation from bubbling down to the container
    e.stopPropagation();
  });

  // Container click event
  $wrap.click(function(e) {
    // Close off-canvas content
    close();
  });

});

/*
require
  utility.js
  dismissible.js
  dropdowns.js
  tabs.js
  off-canvas.js
*/

// Default initializations
;(function (window, document, undefined) {

  'use strict';

  dismissible.init();
  dropdowns.init();

})(window, document);

/*!
 * Theia Sticky Sidebar v1.5.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */

(function ($) {
    $.fn.theiaStickySidebar = function (options) {
        var defaults = {
            'containerSelector': '',
            'additionalMarginTop': 0,
            'additionalMarginBottom': 0,
            'updateSidebarHeight': true,
            'minWidth': 0,
            'disableOnResponsiveLayouts': true,
            'sidebarBehavior': 'modern'
        };
        options = $.extend(defaults, options);

        // Validate options
        options.additionalMarginTop = parseInt(options.additionalMarginTop) || 0;
        options.additionalMarginBottom = parseInt(options.additionalMarginBottom) || 0;

        tryInitOrHookIntoEvents(options, this);

        // Try doing init, otherwise hook into window.resize and document.scroll and try again then.
        function tryInitOrHookIntoEvents(options, $that) {
            var success = tryInit(options, $that);

            if (!success) {
                console.log('TSS: Body width smaller than options.minWidth. Init is delayed.');

                $(document).scroll(function (options, $that) {
                    return function (evt) {
                        var success = tryInit(options, $that);

                        if (success) {
                            $(this).unbind(evt);
                        }
                    };
                }(options, $that));
                $(window).resize(function (options, $that) {
                    return function (evt) {
                        var success = tryInit(options, $that);

                        if (success) {
                            $(this).unbind(evt);
                        }
                    };
                }(options, $that))
            }
        }

        // Try doing init if proper conditions are met.
        function tryInit(options, $that) {
            if (options.initialized === true) {
                return true;
            }

            if ($('body').width() < options.minWidth) {
                return false;
            }

            init(options, $that);

            return true;
        }

        // Init the sticky sidebar(s).
        function init(options, $that) {
            options.initialized = true;

            // Add CSS
            $('head').append($('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));

            $that.each(function () {
                var o = {};

                o.sidebar = $(this);

                // Save options
                o.options = options || {};

                // Get container
                o.container = $(o.options.containerSelector);
                if (o.container.length == 0) {
                    o.container = o.sidebar.parent();
                }

                // Create sticky sidebar
                // o.sidebar.parents().css('-webkit-transform', 'none'); // Fix for WebKit bug - https://code.google.com/p/chromium/issues/detail?id=20574
                o.sidebar.css({
                    'position': 'relative',
                    'overflow': 'visible',
                    // The "box-sizing" must be set to "content-box" because we set a fixed height to this element when the sticky sidebar has a fixed position.
                    '-webkit-box-sizing': 'border-box',
                    '-moz-box-sizing': 'border-box',
                    'box-sizing': 'border-box'
                });

                // Get the sticky sidebar element. If none has been found, then create one.
                o.stickySidebar = o.sidebar.find('.theiaStickySidebar');
                if (o.stickySidebar.length == 0) {
                    // Remove <script> tags, otherwise they will be run again when added to the stickySidebar.
                    var javaScriptMIMETypes = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    o.sidebar.find('script').filter(function(index, script) {
                        return script.type.length === 0 || script.type.match(javaScriptMIMETypes);
                    }).remove();

                    o.stickySidebar = $('<div>').addClass('theiaStickySidebar').append(o.sidebar.children());
                    o.sidebar.append(o.stickySidebar);
                }

                // Get existing top and bottom margins and paddings
                o.marginBottom = parseInt(o.sidebar.css('margin-bottom'));
                o.paddingTop = parseInt(o.sidebar.css('padding-top'));
                o.paddingBottom = parseInt(o.sidebar.css('padding-bottom'));

                // Add a temporary padding rule to check for collapsable margins.
                var collapsedTopHeight = o.stickySidebar.offset().top;
                var collapsedBottomHeight = o.stickySidebar.outerHeight();
                o.stickySidebar.css('padding-top', 1);
                o.stickySidebar.css('padding-bottom', 1);
                collapsedTopHeight -= o.stickySidebar.offset().top;
                collapsedBottomHeight = o.stickySidebar.outerHeight() - collapsedBottomHeight - collapsedTopHeight;
                if (collapsedTopHeight == 0) {
                    o.stickySidebar.css('padding-top', 0);
                    o.stickySidebarPaddingTop = 0;
                }
                else {
                    o.stickySidebarPaddingTop = 1;
                }

                if (collapsedBottomHeight == 0) {
                    o.stickySidebar.css('padding-bottom', 0);
                    o.stickySidebarPaddingBottom = 0;
                }
                else {
                    o.stickySidebarPaddingBottom = 1;
                }

                // We use this to know whether the user is scrolling up or down.
                o.previousScrollTop = null;

                // Scroll top (value) when the sidebar has fixed position.
                o.fixedScrollTop = 0;

                // Set sidebar to default values.
                resetSidebar();

                o.onScroll = function (o) {
                    // Stop if the sidebar isn't visible.
                    if (!o.stickySidebar.is(":visible")) {
                        return;
                    }

                    // Stop if the window is too small.
                    if ($('body').width() < o.options.minWidth) {
                        resetSidebar();
                        return;
                    }

                    // Stop if the sidebar width is larger than the container width (e.g. the theme is responsive and the sidebar is now below the content)
                    if (o.options.disableOnResponsiveLayouts) {
                        var sidebarWidth = o.sidebar.outerWidth(o.sidebar.css('float') == 'none');

                        if (sidebarWidth + 50 > o.container.width()) {
                            resetSidebar();
                            return;
                        }
                    }

                    var scrollTop = $(document).scrollTop();
                    var position = 'static';

                    // If the user has scrolled down enough for the sidebar to be clipped at the top, then we can consider changing its position.
                    if (scrollTop >= o.sidebar.offset().top + (o.paddingTop - o.options.additionalMarginTop)) {
                        // The top and bottom offsets, used in various calculations.
                        var offsetTop = o.paddingTop + options.additionalMarginTop;
                        var offsetBottom = o.paddingBottom + o.marginBottom + options.additionalMarginBottom;

                        // All top and bottom positions are relative to the window, not to the parent elemnts.
                        var containerTop = o.sidebar.offset().top;
                        var containerBottom = o.sidebar.offset().top + getClearedHeight(o.container);

                        // The top and bottom offsets relative to the window screen top (zero) and bottom (window height).
                        var windowOffsetTop = 0 + options.additionalMarginTop;
                        var windowOffsetBottom;

                        var sidebarSmallerThanWindow = (o.stickySidebar.outerHeight() + offsetTop + offsetBottom) < $(window).height();
                        if (sidebarSmallerThanWindow) {
                            windowOffsetBottom = windowOffsetTop + o.stickySidebar.outerHeight();
                        }
                        else {
                            windowOffsetBottom = $(window).height() - o.marginBottom - o.paddingBottom - options.additionalMarginBottom;
                        }

                        var staticLimitTop = containerTop - scrollTop + o.paddingTop;
                        var staticLimitBottom = containerBottom - scrollTop - o.paddingBottom - o.marginBottom;

                        var top = o.stickySidebar.offset().top - scrollTop;
                        var scrollTopDiff = o.previousScrollTop - scrollTop;

                        // If the sidebar position is fixed, then it won't move up or down by itself. So, we manually adjust the top coordinate.
                        if (o.stickySidebar.css('position') == 'fixed') {
                            if (o.options.sidebarBehavior == 'modern') {
                                top += scrollTopDiff;
                            }
                        }

                        if (o.options.sidebarBehavior == 'stick-to-top') {
                            top = options.additionalMarginTop;
                        }

                        if (o.options.sidebarBehavior == 'stick-to-bottom') {
                            top = windowOffsetBottom - o.stickySidebar.outerHeight();
                        }

                        if (scrollTopDiff > 0) { // If the user is scrolling up.
                            top = Math.min(top, windowOffsetTop);
                        }
                        else { // If the user is scrolling down.
                            top = Math.max(top, windowOffsetBottom - o.stickySidebar.outerHeight());
                        }

                        top = Math.max(top, staticLimitTop);

                        top = Math.min(top, staticLimitBottom - o.stickySidebar.outerHeight());

                        // If the sidebar is the same height as the container, we won't use fixed positioning.
                        var sidebarSameHeightAsContainer = o.container.height() == o.stickySidebar.outerHeight();

                        if (!sidebarSameHeightAsContainer && top == windowOffsetTop) {
                            position = 'fixed';
                        }
                        else if (!sidebarSameHeightAsContainer && top == windowOffsetBottom - o.stickySidebar.outerHeight()) {
                            position = 'fixed';
                        }
                        else if (scrollTop + top - o.sidebar.offset().top - o.paddingTop <= options.additionalMarginTop) {
                            // Stuck to the top of the page. No special behavior.
                            position = 'static';
                        }
                        else {
                            // Stuck to the bottom of the page.
                            position = 'absolute';
                        }
                    }

                    /*
                     * Performance notice: It's OK to set these CSS values at each resize/scroll, even if they don't change.
                     * It's way slower to first check if the values have changed.
                     */
                    if (position == 'fixed') {
                        o.stickySidebar.css({
                            'position': 'fixed',
                            'width': getWidthForObject(o.stickySidebar) + 'px',
                            'transform': 'translateY(' + top + 'px)',
                            'left': (o.sidebar.offset().left + parseInt(o.sidebar.css('padding-left'))) + 'px',
                            'top': '0px'
                        });
                    }
                    else if (position == 'absolute') {
                        var css = {};

                        if (o.stickySidebar.css('position') != 'absolute') {
                            css.position = 'absolute';
                            css.transform = 'translateY(' + (scrollTop + top - o.sidebar.offset().top - o.stickySidebarPaddingTop - o.stickySidebarPaddingBottom) + 'px)';
                            css.top = '0px';
                        }

                        css.width = getWidthForObject(o.stickySidebar) + 'px';
                        css.left = '';

                        o.stickySidebar.css(css);
                    }
                    else if (position == 'static') {
                        resetSidebar();
                    }

                    if (position != 'static') {
                        if (o.options.updateSidebarHeight == true) {
                            o.sidebar.css({
                                'min-height': o.stickySidebar.outerHeight() + o.stickySidebar.offset().top - o.sidebar.offset().top + o.paddingBottom
                            });
                        }
                    }

                    o.previousScrollTop = scrollTop;
                };

                // Initialize the sidebar's position.
                o.onScroll(o);

                // Recalculate the sidebar's position on every scroll and resize.
                $(document).scroll(function (o) {
                    return function () {
                        o.onScroll(o);
                    };
                }(o));
                $(window).resize(function (o) {
                    return function () {
                        o.stickySidebar.css({'position': 'static'});
                        o.onScroll(o);
                    };
                }(o));

                // Reset the sidebar to its default state
                function resetSidebar() {
                    o.fixedScrollTop = 0;
                    o.sidebar.css({
                        'min-height': '1px'
                    });
                    o.stickySidebar.css({
                        'position': 'static',
                        'width': '',
                        'transform': 'none'
                    });
                }

                // Get the height of a div as if its floated children were cleared. Note that this function fails if the floats are more than one level deep.
                function getClearedHeight(e) {
                    var height = e.height();

                    e.children().each(function () {
                        height = Math.max(height, $(this).height());
                    });

                    return height;
                }
            });
        }

        function getWidthForObject(object) {
            var width;

            try {
                width = object[0].getBoundingClientRect().width;
            }
            catch(err) {
            }

            if (typeof width === "undefined") {
                width = object.width();
            }

            return width;
        }
    }
})(jQuery);

/**
 * jquery.function.js
 * A place to store all your project specific JavaScript functions
 *
 * @author Sebastian Nitu
 * @url https://github.com/sebnitu/BaseWeb
 * @url http://sebnitu.com
 */

// Source: http://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value
var hexDigits = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  // I removed the `'#' +` from the return
  return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

// Source: https://24ways.org/2010/calculating-color-contrast
function getContrastYIQ(hexcolor) {
  var r = parseInt(hexcolor.substr(0,2),16);
  var g = parseInt(hexcolor.substr(2,2),16);
  var b = parseInt(hexcolor.substr(4,2),16);
  var yiq = ((r*299)+(g*587)+(b*114))/1000;
  // Range is between 0 and 255. 128 is the 50% mark. My pref is 170 (2/3 of 255)
  return (yiq >= 170) ? 'text-dark' : '';
}

// require jquery.sticky.js jquery.function.js
/**
 * jquery.docready.js
 * A place to store all your JavaScript you want to run after
 * either the document is ready or images are finished loading
 *
 * @author Sebastian Nitu
 * @url https://github.com/sebnitu/BaseWeb
 * @url http://sebnitu.com
 */

;(function ($) {
  'use strict';

  /**
   * When the document is ready
   */
  $(document).ready(function () {

    /**
     * @Off Canvas
     */
    function off_canvas() {
      $('.oc-trigger').each(function () {
        var
          $this = $(this),
          $wrap = $this.closest('.oc-wrap'),
          $aside = $wrap.find('.oc-aside'),
          target = $this.attr('data-target'),
          reset = 'oc-wrap',
          is_active = false,
          close = function() {
            // Remove active class
            $wrap.removeClass('oc-active');
            // Remove delay class after the set transition duration
            setTimeout( function() {
              $wrap.removeClass('oc-delay');
            }, 500 );
          }
        ;

        // Button click event
        $this.click(function(e) {
          is_active = $wrap.hasClass('oc-active');

          // Check if it's a close button or if off-canvas is already active
          if(!target || is_active) {
            // Close off-canvas content
            close();
          } else {
            // Reset container class
            $wrap.attr('class', reset);
          }
          // Add target class
          if(target && !is_active) {
            $wrap.addClass(target);
            // Add active and delay classes after a slight delay
    				setTimeout( function() {
              $wrap.addClass('oc-active oc-delay');
    				}, 25 );
          }

          // Stop the default behavior
          return false;
        });

        // Aside click event
        $aside.click(function(e) {
          // Stop the click propogation from bubbling down to the container
          e.stopPropagation();
        });

        // Container click event
        $wrap.click(function(e) {
          // Close off-canvas content
          close();
        });

      });
    }

    off_canvas();

    /**
     * @Docs Interface
     */

    // Sticky Element
    $('.sticky').theiaStickySidebar({
      containerSelector : '.row',
      additionalMarginTop : 0
    });

    // Navigation Toggle
    $('.widget-menu .toggle').click(function() {
      $(this).parent().toggleClass('active');
      return false;
    });

    // New Tab Links
    $('.onclick-newtab').click(function() {
      $(this).attr('target', '_blank');
      window.open($(this).attr('href'));
      return false;
    });

    // Swatches Background
    $('.swatch').each(function() {
      var bg = $(this).css('backgroundColor');
      var text = getContrastYIQ(rgb2hex(bg));
      $(this).addClass(text);
    });

    // Switch off-canvas class
    $('.form-off-canvas-transitions select').change(function () {
      var
        $this = $(this),
        oc_effect = $('#oc-effect').val(),
        oc_position = $('#oc-position').val(),
        oc_class = oc_effect + '-' + oc_position,
        $oc_transition_value = $('#oc-transition-value'),
        $oc_trigger = $('#oc-trigger-sample'),
        $oc_aside = $this.closest('.oc-wrap').find('.oc-aside')
      ;

      $oc_transition_value.val(oc_class);
      $oc_trigger.attr('data-target', oc_class);
      $oc_aside.attr('class', 'oc-aside ' + oc_class);

      off_canvas();
    });

    // Select on focus
    $('.form-off-canvas-transitions input[readonly]').focus(function() {
      $(this).select();
    });

  });

  /**
   * When the images are loaded
   */
  $(window).on('load', function() { });

}(jQuery));

/*!
 * @copyright Copyright (c) 2017 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.2.1
 */
/*jslint browser: true */
/*global XDomainRequest, MutationObserver, window */
(function () {
    "use strict";
    if (window && window.addEventListener) {
        var cache = Object.create(null); // holds xhr objects to prevent multiple requests
        var checkUseElems;
        var tid; // timeout id
        var debouncedCheck = function () {
            clearTimeout(tid);
            tid = setTimeout(checkUseElems, 100);
        };
        var unobserveChanges = function () {
            return;
        };
        var observeChanges = function () {
            var observer;
            window.addEventListener("resize", debouncedCheck, false);
            window.addEventListener("orientationchange", debouncedCheck, false);
            if (window.MutationObserver) {
                observer = new MutationObserver(debouncedCheck);
                observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true,
                    attributes: true
                });
                unobserveChanges = function () {
                    try {
                        observer.disconnect();
                        window.removeEventListener("resize", debouncedCheck, false);
                        window.removeEventListener("orientationchange", debouncedCheck, false);
                    } catch (ignore) {}
                };
            } else {
                document.documentElement.addEventListener("DOMSubtreeModified", debouncedCheck, false);
                unobserveChanges = function () {
                    document.documentElement.removeEventListener("DOMSubtreeModified", debouncedCheck, false);
                    window.removeEventListener("resize", debouncedCheck, false);
                    window.removeEventListener("orientationchange", debouncedCheck, false);
                };
            }
        };
        var createRequest = function (url) {
            // In IE 9, cross origin requests can only be sent using XDomainRequest.
            // XDomainRequest would fail if CORS headers are not set.
            // Therefore, XDomainRequest should only be used with cross origin requests.
            function getOrigin(loc) {
                var a;
                if (loc.protocol !== undefined) {
                    a = loc;
                } else {
                    a = document.createElement("a");
                    a.href = loc;
                }
                return a.protocol.replace(/:/g, "") + a.host;
            }
            var Request;
            var origin;
            var origin2;
            if (window.XMLHttpRequest) {
                Request = new XMLHttpRequest();
                origin = getOrigin(location);
                origin2 = getOrigin(url);
                if (Request.withCredentials === undefined && origin2 !== "" && origin2 !== origin) {
                    Request = XDomainRequest || undefined;
                } else {
                    Request = XMLHttpRequest;
                }
            }
            return Request;
        };
        var xlinkNS = "http://www.w3.org/1999/xlink";
        checkUseElems = function () {
            var base;
            var bcr;
            var fallback = ""; // optional fallback URL in case no base path to SVG file was given and no symbol definition was found.
            var hash;
            var href;
            var i;
            var inProgressCount = 0;
            var isHidden;
            var isXlink = false;
            var Request;
            var url;
            var uses;
            var xhr;
            function observeIfDone() {
                // If done with making changes, start watching for chagnes in DOM again
                inProgressCount -= 1;
                if (inProgressCount === 0) { // if all xhrs were resolved
                    unobserveChanges(); // make sure to remove old handlers
                    observeChanges(); // watch for changes to DOM
                }
            }
            function attrUpdateFunc(spec) {
                return function () {
                    if (cache[spec.base] !== true) {
                        if (spec.isXlink) {
                            spec.useEl.setAttributeNS(xlinkNS, "xlink:href", "#" + spec.hash);
                        } else {
                            spec.useEl.setAttribute("href", "#" + spec.hash);
                        }
                    }
                };
            }
            function onloadFunc(xhr) {
                return function () {
                    var body = document.body;
                    var x = document.createElement("x");
                    var svg;
                    xhr.onload = null;
                    x.innerHTML = xhr.responseText;
                    svg = x.getElementsByTagName("svg")[0];
                    if (svg) {
                        svg.setAttribute("aria-hidden", "true");
                        svg.style.position = "absolute";
                        svg.style.width = 0;
                        svg.style.height = 0;
                        svg.style.overflow = "hidden";
                        body.insertBefore(svg, body.firstChild);
                    }
                    observeIfDone();
                };
            }
            function onErrorTimeout(xhr) {
                return function () {
                    xhr.onerror = null;
                    xhr.ontimeout = null;
                    observeIfDone();
                };
            }
            unobserveChanges(); // stop watching for changes to DOM
            // find all use elements
            uses = document.getElementsByTagName("use");
            for (i = 0; i < uses.length; i += 1) {
                try {
                    bcr = uses[i].getBoundingClientRect();
                } catch (ignore) {
                    // failed to get bounding rectangle of the use element
                    bcr = false;
                }
                href = uses[i].getAttribute("href");
                if (!href) {
                    href = uses[i].getAttributeNS(xlinkNS, "href");
                    isXlink = true;
                } else {
                    isXlink = false;
                }
                if (href && href.split) {
                    url = href.split("#");
                } else {
                    url = ["", ""];
                }
                base = url[0];
                hash = url[1];
                isHidden = bcr && bcr.left === 0 && bcr.right === 0 && bcr.top === 0 && bcr.bottom === 0;
                if (bcr && bcr.width === 0 && bcr.height === 0 && !isHidden) {
                    // the use element is empty
                    // if there is a reference to an external SVG, try to fetch it
                    // use the optional fallback URL if there is no reference to an external SVG
                    if (fallback && !base.length && hash && !document.getElementById(hash)) {
                        base = fallback;
                    }
                    if (base.length) {
                        // schedule updating xlink:href
                        xhr = cache[base];
                        if (xhr !== true) {
                            // true signifies that prepending the SVG was not required
                            setTimeout(attrUpdateFunc({
                                useEl: uses[i],
                                base: base,
                                hash: hash,
                                isXlink: isXlink
                            }), 0);
                        }
                        if (xhr === undefined) {
                            Request = createRequest(base);
                            if (Request !== undefined) {
                                xhr = new Request();
                                cache[base] = xhr;
                                xhr.onload = onloadFunc(xhr);
                                xhr.onerror = onErrorTimeout(xhr);
                                xhr.ontimeout = onErrorTimeout(xhr);
                                xhr.open("GET", base);
                                xhr.send();
                                inProgressCount += 1;
                            }
                        }
                    }
                } else {
                    if (!isHidden) {
                        if (cache[base] === undefined) {
                            // remember this URL if the use element was not empty and no request was sent
                            cache[base] = true;
                        } else if (cache[base].onload) {
                            // if it turns out that prepending the SVG is not necessary,
                            // abort the in-progress xhr.
                            cache[base].abort();
                            delete cache[base].onload;
                            cache[base] = true;
                        }
                    } else if (base.length && cache[base]) {
                        attrUpdateFunc({
                            useEl: uses[i],
                            base: base,
                            hash: hash
                        })();
                    }
                }
            }
            uses = "";
            inProgressCount += 1;
            observeIfDone();
        };
        // The load event fires when all resources have finished loading, which allows detecting whether SVG use elements are empty.
        window.addEventListener("load", function winLoad() {
            window.removeEventListener("load", winLoad, false); // to prevent memory leaks
            tid = setTimeout(checkUseElems, 0);
        }, false);
    }
}());