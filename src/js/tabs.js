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

  var getTabsContent = function(wrap, nav) {

    var content;

    if (wrap) {
      u.forEach(wrap.children, function(i, el) {
        if (u.hasClass(el, settings.classContent)) {
          content = el;
        }
      });
    } else {
      var id = nav.dataset.content;
      if (id) {
        content = document.querySelector('#' + id);
      } else {
        console.log('Tabs content was not found!');
      }
    }

    return content;

  };

  var removeActive = function (nav, content) {

    var activeNav = Array.prototype.slice.call(nav.querySelectorAll('.' + settings.classActive));
    var activeContent = Array.prototype.slice.call(content.querySelectorAll('.' + settings.classActive));
    var activeAll = activeNav.concat(activeContent);

    activeAll.forEach(function (el) {
      u.removeClass(el, settings.classActive);
    });

  };

  var runTabs = function () {

    // Is the clicked item already active?
    var is_active = u.hasClass(event.target.parentElement, settings.classActive);

    // If it's not active
    if (!is_active) {

      // Tabs wrapper
      var tabs = u.closest(event.target, settings.classWrap);

      // Tabs nav wrapper
      var tabsNav = u.closest(event.target, settings.classNav);

      // Tabs content
      var tabsContent = getTabsContent(tabs, tabsNav);

      // Get target
      var target = event.target.getAttribute('href');

      // Remove all active classes
      removeActive(tabsNav, tabsContent);

      // Set tab nav and content item to active
      u.addClass(event.target.parentElement, settings.classActive);
      u.addClass(tabsContent.querySelector(target), settings.classActive);

    } // End if is_active

    // Prevent default link behavior
    event.preventDefault();

  };

  //
  // Public Methods
  //

  api.init = function ( options ) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Find triggers
    triggers = document.querySelectorAll('.' + settings.classNav + ' a');

    // Add event listener
    triggers.forEach(function (el) {
      el.addEventListener('click', runTabs, false);
    });

  };

  api.destroy = function () {

    // Remove listener
    triggers.forEach(function (el) {
      el.removeEventListener('click', runTabs, false);
    });

    // Reset settings
    settings = null;
    triggers = null;

  };

  //
  // Return Public APIs
  //

  return api;

})();
