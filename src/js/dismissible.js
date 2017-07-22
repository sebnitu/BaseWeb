// require utility.js

var dismissible = (function () {

  'use strict';

  //
  // Variables
  //

  var t = transitions;
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
    u.addClass(dismissible, ['fadeOut', 'start']);

    // Set delay before final classes
    setTimeout(function() {
      u.toggleClass(dismissible, ['start', 'end']);
    }, settings.timer);

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
