var dismissible = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    classTrigger : 'close',
    classDismissible : 'dismissible',
    classHide : 'hide',
  };

  //
  // Private Methods
  //

  var runDismissible = function () {

    // Only run if the clicked link was a dismissible item
    if ( !event.target.matches('.' + settings.classTrigger)) return;

    // Prevent default link behavior
    event.preventDefault();

    // Get the dismissible parent element
    var dismissible = u.closest(event.target, settings.classDismissible);

    // Add initial classes
    if (dismissible) {
      u.addClass(dismissible, settings.classHide);
    } else {
      console.log('Dismissible element was not found!');
    }

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
