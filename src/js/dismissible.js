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
