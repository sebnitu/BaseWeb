var tabs = (function () {

  'use strict';

  //
  // Variables
  //

  var u = utility;

  var api = {};
  var settings;
  var defaults = {
    classWrap : 'tabs',
    classNav : 'tabs-nav',
    classContent : 'tabs-content',
    classActive : 'active',
  };

  var triggers = [];

  //
  // Private Methods
  //

  var getTabsContent = function (wrap, nav) {

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

  var removeActive = function (nav, content) {

    var nav = Array.prototype.slice.call(nav.querySelectorAll('.' + settings.classActive));
    var content = Array.prototype.slice.call(content.querySelectorAll('.' + settings.classActive));
    var active = nav.concat(content);

    active.forEach(function (el) {
      u.removeClass(el, settings.classActive);
    });

  };

  var runTabs = function () {

    // Get the trigger
    var trigger = event.target.closest('.' + settings.classNav);

    // Exit if a trigger doesn't exist
    if ( !trigger ) return;

    // Is the clicked item already active?
    var is_active = u.hasClass(event.target.parentElement, settings.classActive);

    // If it's not active
    if (!is_active) {

      // Tabs wrap nav and content
      var tabs = event.target.closest('.' + settings.classWrap);
      var tabsNav = event.target.closest('.' + settings.classNav);
      var tabsContent = getTabsContent(tabs, tabsNav);

      // Get target
      var target = event.target.getAttribute('href');

      // Remove all active classes
      removeActive(tabsNav, tabsContent);

      // Set tab nav and content item to active
      u.addClass(event.target.parentElement, settings.classActive);
      u.addClass(tabsContent.querySelector(target), settings.classActive);

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
