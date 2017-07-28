var dropdowns = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    classTrigger: 'dropdown-trigger',
    classDropdown: 'dropdown',
    classOnClick: 'on-click',
    classOnHover: 'on-hover',
    classActive: 'active',
    delay: 500,
  };

  var triggers = [];
  var triggersHover = [];
  var timeoutID;

  //
  // Private Methods
  //

  var runDropdownClick = function () {

    // Get the trigger
    var trigger = event.target.closest('.' + settings.classTrigger + '.' + settings.classOnClick);

    // Check if parent element is a trigger
    var is_trigger_child = u.hasClass(event.target.parentElement, [settings.classTrigger, settings.classOnClick]);

    // Initiate is active
    var is_active;

    // Save the state of the current trigger
    if ( trigger ) {
      is_active = u.hasClass(trigger, settings.classActive);
    }

    // Hide all dropdowns that are click activated
    api.hideAll();

    // Exit if a trigger doesn't exist
    if ( !trigger ) return;

    // Keep the parent dropdowns active
    api.showParents(event.target);

    // Add active class if item is not active
    if (!is_active) {
      u.addClass(trigger, settings.classActive);
    } else {
      // Remove active class if child of a trigger
      if (is_trigger_child) {
        u.removeClass(trigger, settings.classActive);
      }
    }

    // Prevent default link behavior if trigger is clicked
    if (is_trigger_child) {
      event.preventDefault();
    }

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

    var parent = u.closest(el, [settings.classTrigger, settings.classOnClick]);

    while (parent) {
      u.addClass(parent, settings.classActive);
      parent = u.closest(parent, settings.classTrigger);
    }

  };

  api.init = function (options) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Get triggers and dropdowns
    triggers = document.querySelectorAll('.' + settings.classTrigger);
    triggersHover = document.querySelectorAll('.' + settings.classTrigger + '.' + settings.classOnHover);

    // Add event listener to document
    document.addEventListener('click', runDropdownClick, false);

    // Loop through our hover triggers
    triggersHover.forEach(function (el) {
      // Init timer var
      var timer;

      // Add on mouse over event listener to trigger
      el.addEventListener('mouseover', function () {
        // Get the trigger
        var trigger = event.target.closest('.' + settings.classTrigger + '.' + settings.classOnHover);
        // Clear our set timeout if set
        clearTimeout(timer);
        // Add the active class
        u.addClass(trigger, settings.classActive);
      }, false);

      // Add on mouse leave event listener to trigger
      el.addEventListener('mouseleave', function () {
        var trigger = event.target.closest('.' + settings.classTrigger + '.' + settings.classOnHover);
        // Set a delay before we remove active class
        timer = setTimeout(function () {
          // Remove the active class
          u.removeClass(trigger, settings.classActive);
        }, settings.delay);
      }, false);

    }); // End of hover triggers loop

  };

  api.destroy = function () {

    // Remove listeners
    document.removeEventListener('click', runDropdownClick, false);

    // Reset settings
    settings = null;
    triggers = [];
    triggersHover = [];

  };

  //
  // Return Public APIs
  //

  return api;

})();
