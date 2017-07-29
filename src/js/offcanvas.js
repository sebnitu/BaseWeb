var offcanvas = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    classTrigger : 'oc-trigger',
    classWrap : 'oc-wrap',
    classAside : 'oc-aside',
    classActive : 'oc-active',
    classDelay : 'oc-delay',
    timer : 500,
  };

  //
  // Private Methods
  //

  var openOffCanvas = function() {

    // Get the target data
    var target = event.target.dataset.target;
    // Check if a target exists
    if (target) {
      // Get the wrap
      var wrap = event.target.closest('.' + settings.classWrap);
      // Check if a wrap exists
      if (wrap) {
        // Reset the wrap class
        wrap.setAttribute('class', settings.classWrap);
        // Add the target class
        u.addClass(wrap, target);
        // Add active and delay classes after a slight delay
        setTimeout( function() {
          u.addClass(wrap, [settings.classActive, settings.classDelay])
        }, 25 );
      }
    } else {
      // If there's not target data, it's a close button
      closeOffCanvas();
    }

  };

  var closeOffCanvas = function () {

    // Get the wrap
    var wrap = event.target.closest('.' + settings.classWrap);
    // Check if a wrap exists
    if (wrap) {
      // Remove active class
      u.removeClass(wrap, settings.classActive);
      // Remove delay class after the set transition duration
      setTimeout( function () {
        u.removeClass(wrap, settings.classDelay);
      }, settings.timer );
    }

  };

  var runOffcanvas = function () {

    // Get the trigger
    var wrap = event.target.closest('.' + settings.classWrap);

    // Exit if a wrap doesn't exist
    if ( !wrap ) return;

    // Get the aside and trigger
    var trigger = event.target.closest('.' + settings.classTrigger);
    var aside = event.target.closest('.' + settings.classAside);

    // If a trigger or aside doesn't exists, close our off-canvas
    if ( !trigger && !aside ) closeOffCanvas();

    // If a trigger was clicked
    if ( trigger ) {
      // Get the target
      openOffCanvas();
      // Prevent default behavior
      event.preventDefault();
    }

  };

  //
  // Public Methods
  //

  api.init = function (options) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Add event listener to trigger
    document.addEventListener('click', runOffcanvas, false);

  };

  api.destroy = function () {

    // Remove listener
    document.removeEventListener('click', runOffcanvas, false);

    // Reset settings
    settings = null;

  };

  //
  // Return Public APIs
  //

  return api;

})();
