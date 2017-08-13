var utility = (function () {

  'use strict';

  //
  // Variables
  //

  var api = {};
  // var settings;
  // var defaults = {};

  //
  // Public Methods
  //

  /**
   * Checks if an element has a class or not
   * @param {Element} Element to check class(es) on
   * @param {String} || {Array} Class(es) to check
   * @returns {Boolean} Returns true if class exists on element, otherwise false
   */
  api.hasClass = function ( el, c ) {

    c = api.toArray(c);

    return c.every( function ( c ) {
      return el.classList.contains(c);
    });

  }; // End hasClass

  /**
   * Adds a class or classes to an element
   * @param {Element} Element to add class(es) on
   * @param {String} || {Array} Class(es) to add
   */
  api.addClass = function ( el, c ) {

    c = api.toArray(c);

    c.forEach( function ( c ) {
      el.classList.add( c );
    });

  }; // End addClass

  /**
   * Remove a class or classes from an element
   * @param {Element} Element to remove class(es) from
   * @param {String} || {Array} Class(es) to remove
   */
  api.removeClass = function ( el, c ) {

    c = api.toArray(c);

    c.forEach( function ( c ) {
      el.classList.remove( c );
    });

  }; // End removeClass

  /**
   * Toggle a class or classes on an element
   * @param {Element} Element to toggle class(es) on
   * @param {String} || {Array} Class(es) to toggle
   */
  api.toggleClass = function ( el, c ) {

    c = api.toArray(c);

    c.forEach( function ( c ) {
      el.classList.toggle(c);
    });

  }; // End toggleClass

  /**
   * Find the closest parent element based on class. This is different from the
   * native .closest() method in that it doesn't check the current element.
   * @param {Element} Element to start search on
   * @param {String} || {Array} Class(es) to check for
   * @return {Element} Closest parent element
   */
  api.closest = function ( el, c ) {
    while ((el = el.parentElement) && !api.hasClass(el, c));
    return el;
  }; // End closest

  /**
   * Converts a string to an array. If an array is passed, it's returned as is.
   * Anything else is returned as false.
   * @param {String} || {Array} String to convert to an array
   * @return {Array} Return the converted array
   */
  api.toArray = function( s ) {

    var array = [];

    if (typeof s === 'string') {
      array.push(s);
    } else if (Array.isArray(s)) {
      array = s;
    } else {
      return false;
    }

    return array;

  }; // End toArray

  /**
   * Merge two or more objects. Returns a new object. Set the first argument
   * to `true` for a deep or recursive merge.
   * @param {Boolean} [Optional] If true, do a deep (or recursive) merge
   * @param {Object} The objects to merge together; each overriding the next
   * @returns {Object} Merged values of defaults and options
   */
  api.extend = function () {

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

  return api;

})();

// require _utility.js

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

    // Get the trigger
    var trigger = event.target.closest('.' + settings.classTrigger);

    // Exit if a trigger doesn't exist
    if ( !trigger ) return;

    // Get the dismissible parent element
    var dismissible = event.target.closest('.' + settings.classDismissible);

    // Exit if a dismissible doesn't exist
    if ( !dismissible ) return;

    // Add initial classes
    if (dismissible) {
      u.addClass(dismissible, settings.classHide);
    } else {
      console.log('Dismissible element was not found!');
    }

    // Prevent default behavior
    event.preventDefault();

  };

  //
  // Public Methods
  //

  api.getDismissible = function (selector) {

    // Initialize dismissible array
    var dismissible = [];

    // Check if a selector was passed
    if (selector) {
      // Get selector items
      var items = document.querySelectorAll(selector);
      // Loop through selector items
      items.forEach(function (el) {
        // Get dismissible items
        var items = el.querySelectorAll('.' + settings.classDismissible);
        // Loop through dismissible items
        items.forEach(function (el) {
          // Save item to our array
          dismissible.push(el);
        });
      });
    } else {
      // Search dismissible items on documents
      dismissible = document.querySelectorAll('.' + settings.classDismissible);
    }

    // Return dismissible
    return dismissible;

  };

  api.hideAll = function (selector) {

    // Get dismissible items
    var dismissible = api.getDismissible(selector);

    // Loop through and remove active class from dismissible items
    dismissible.forEach(function (el) {
      u.addClass(el, settings.classHide);
    });

  };

  api.showAll = function (selector) {

    // Get dismissible items
    var dismissible = api.getDismissible(selector);

    // Loop through and remove active class from dismissible items
    dismissible.forEach(function (el) {
      u.removeClass(el, settings.classHide);
    });

  };

  api.init = function (options) {

    // Destroy any previous initializations
    api.destroy();

    // Merge user options with the defaults
    settings = u.extend( defaults, options || {} );

    // Add event listener
    document.addEventListener('click', runDismissible, false);

  };

  api.destroy = function () {

    // Remove event listener
    document.removeEventListener('click', runDismissible, false);

    // Reset settings
    settings = null;

  };

  //
  // Return Public APIs
  //

  return api;

})();

// require _utility.js

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

    // Prevent default behavior if trigger is clicked
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

// require _utility.js

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

    // Get the trigger
    var trigger = event.target.closest('.' + settings.classTrigger);
    // Get the target data
    var target = trigger.dataset.target;
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

/*
require
  _utility.js
  _dismissible.js
  _dropdowns.js
  _tabs.js
  _offcanvas.js
*/

// Default initializations
;(function (window, document, undefined) {

  'use strict';

  dismissible.init();
  dropdowns.init();
  tabs.init();
  offcanvas.init();

})(window, document);
