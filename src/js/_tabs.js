// require _utility.js

var tabs = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    classTrigger : 'tabs-nav',
    classWrap : 'tabs',
    classContent : 'tabs-content',
    classActive : 'active',
  };

  //
  // Private Methods
  //

  var getContent = function (wrap, nav) {

    // Init content variable
    var content;

    // Check if a wrap exists
    if (wrap) {
      // Query the wrap for the content
      content = wrap.querySelector('.' + settings.classContent);
    } else {
      // Set the content ID
      var id = nav.dataset.content;
      // Check if a content ID exists
      if (id) {
        // Query the document for the content
        content = document.querySelector('#' + id);
      } else {
        // Set to null if no content is found
        content = null;
      }
    }

    // Return the content variable
    return content;

  };

  var runTabs = function () {

    // Get the trigger
    var trigger = event.target.closest('.' + settings.classTrigger);

    // Exit if a trigger doesn't exist
    if ( !trigger ) return;

    // Is the clicked item already active?
    var is_active = u.hasClass(event.target.parentElement, settings.classActive);

    // If it's not active
    if (!is_active) {

      // Tabs wrap nav and content
      var wrap = event.target.closest('.' + settings.classWrap);
      var content = getContent(wrap, trigger);

      // Get target
      var target = event.target.getAttribute('href');

      // Remove active classes from nav and content
      u.removeClass(trigger.querySelector('.' + settings.classActive), settings.classActive);
      u.removeClass(content.querySelector('.' + settings.classActive), settings.classActive);

      // Set tab nav and content item to active
      u.addClass(event.target.parentElement, settings.classActive);
      u.addClass(content.querySelector(target), settings.classActive);

    } // End if is_active

    // Prevent default behavior
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

    // Add event listener
    document.addEventListener('click', runTabs, false);

  };

  api.destroy = function () {

    // Remove event listener
    document.removeEventListener('click', runTabs, false);

    // Reset settings
    settings = null;

  };

  //
  // Return Public APIs
  //

  return api;

})();
