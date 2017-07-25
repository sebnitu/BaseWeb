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

  var triggers = [];

  //
  // Private Methods
  //

  var runDismissible = function () {

    // Get the dismissible parent element
    var dismissible = u.closest(event.target, settings.classDismissible);

    // Add initial classes
    if (dismissible) {
      u.addClass(dismissible, settings.classHide);
    } else {
      console.log('Dismissible element was not found!');
    }

    // Prevent default link behavior
    event.preventDefault();

  };

  //
  // Public Methods
  //

  api.init = function (options) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Find triggers
    triggers = document.querySelectorAll('.' + settings.classDismissible + ' .' + settings.classTrigger);

    // Add event listener to triggers
    triggers.forEach(function (el) {
      el.addEventListener('click', runDismissible, false);
    });

  };

  api.destroy = function () {

    // Remove listener
    triggers.forEach(function (el) {
      el.removeEventListener('click', runDismissible, false);
    });

    // Reset settings
    settings = null;
    triggers = [];

  };

  //
  // Return Public APIs
  //

  return api;

})();
