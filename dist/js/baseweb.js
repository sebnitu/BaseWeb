var transitions = (function() {

  'use strict';

  //
  // Variables
  //

  var publicMethods = {};
  var settings;
  var defaults = {
    timer: 500
  };
  var transitions = [
    'fadeOut',
    'fadeIn'
  ];

  //
  // Public Methods
  //


  //
  // Return Public APIs
  //

  return publicMethods;

})();

// require transitions.js

var utility = (function () {

  'use strict';

  //
  // Variables
  //

  var t = transitions;

  var publicMethods = {};
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
  publicMethods.hasClass = function ( el, c ) {
    return el.classList.contains(c);
  }; // End hasClass

  /**
   * Adds a class to an element
   * @param {Element} Element to add class on
   * @param {String} Class string to add
   */
  publicMethods.addClass = function ( el, c ) {
    el.classList.add( c );
  }; // End addClass

  /**
   * Remove a class from an element
   * @param {Element} Element to remove class from
   * @param {String} Class string to remove
   */
  publicMethods.removeClass = function ( el, c ) {
    el.classList.remove( c );
  }; // End removeClass

  /**
   * Toggle a class on an element
   * @param {Element} Element to toggle class on
   * @param {String} Class string to toggle
   */
  publicMethods.toggleClass = function ( el, c ) {
    var fn = publicMethods.hasClass( el, c ) ? publicMethods.removeClass : publicMethods.addClass;
    fn( elem, c );
  }; // End toggleClass

  /**
   * Find the closest parent element based on class
   * @param {Element} Element to start search on
   * @param {String} Class string to toggle
   * @return {Element} Closest parent element
   */
  publicMethods.closest = function ( el, c ) {
    while ((el = el.parentElement) && !publicMethods.hasClass(el, c));
    return el;
  }; // End closest

  /**
   * Merge two or more objects. Returns a new object.
   * Set the first argument to `true` for a deep or recursive merge
   * @param {Boolean} deep If true, do a deep (or recursive) merge [optional]
   * @param {Object} objects The objects to merge together
   * @returns {Object} Merged values of defaults and options
   */
  publicMethods.extend = function () {

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

  return publicMethods;

})();

// require utility.js

var dismissible = (function () {

  'use strict';

  //
  // Variables
  //

  var t = transitions;
  var u = utility;

  var publicMethods = {};
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

    // Add classes
    u.addClass(dismissible, 'fadeOut');
    u.addClass(dismissible, 'start');

    setInterval(function() {
      u.removeClass(dismissible, 'start');
      u.addClass(dismissible, 'end');
    }, settings.timer);

  }

  //
  // Public Methods
  //

  publicMethods.init = function ( options ) {

    // Destroy any previous initializations
    publicMethods.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Add event listener
    document.addEventListener('click', runDismissible, false);

  };

  publicMethods.destroy = function () {

    // Remove listener
    document.removeEventListener('click', runDismissible, false);

    // Reset settings
    settings = null;

  };

  //
  // Return Public APIs
  //

  return publicMethods;

})();

// require utility.js dismissible.js

// Default initializations
;(function (window, document, undefined) {

  'use strict';

  dismissible.init();

})(window, document);

// require utility.js

// Bind document click event
$(document).click(function(){
  // Hide all dropdowns that are click activated
  $('.dropdown-trigger.on-click').removeClass('active');
});

// Bind the click event to .dropdown-trigger
$('.dropdown-trigger.on-click').click(function(e) {

  // Is the dropdown already active?
  var is_active = $(this).hasClass('active');

  // Hide all dropdowns that are click activated
  $('.dropdown-trigger.on-click').removeClass('active');

  // Keep the parent dropdowns active
  $(this).parents('.dropdown-trigger').addClass('active');

  // If the dropdown is not active, add the active class
  if (!is_active) {
    $(this).addClass('active');
  }

  // Stop the click event from bubbling down to the document
  e.stopPropagation();
});

// Bind the click event to .dropdown
$('.dropdown-trigger.on-click .dropdown').click(function(e) {

  // Hide all dropdowns that are click activated
  $('.dropdown-trigger.on-click').removeClass('active');

  // Keep the parent dropdowns active
  $(this).parents('.dropdown-trigger').addClass('active');

  // Keep the current dropdown active
  $(this).addClass('active');

  // Stop the click event from bubbling down to the document
  e.stopPropagation();
});

// require utility.js

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

// require utility.js

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
