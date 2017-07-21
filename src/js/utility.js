// require transitions.js

var utility = (function () {

  'use strict';

  //
  // Variables
  //

  var t = transitions;

  var publicMethods = {};
  var settings;
  var defaults = {};

  //
  // Public Methods
  //

  /**
   * Checks if an element has a class or not
   * @param {Element} Element to check class on
   * @param {String} Class string to check for
   * @returns {Boolean} Returns true if class exists on element, otherwise false
   */
  publicMethods.hasClass = function ( el, c ) {
    return el.classList.contains(c);
  }; // End hasClass

  /**
   * Adds a class to an element
   * @param {Element} Element to add class on
   * @param {String} Class string to add
   */
  publicMethods.addClass = function ( el, c ) {
    el.classList.add( c );
  }; // End addClass

  /**
   * Remove a class from an element
   * @param {Element} Element to remove class from
   * @param {String} Class string to remove
   */
  publicMethods.removeClass = function ( el, c ) {
    el.classList.remove( c );
  }; // End removeClass

  /**
   * Toggle a class on an element
   * @param {Element} Element to toggle class on
   * @param {String} Class string to toggle
   */
  publicMethods.toggleClass = function ( el, c ) {
    var fn = publicMethods.hasClass( el, c ) ? publicMethods.removeClass : publicMethods.addClass;
    fn( elem, c );
  }; // End toggleClass

  /**
   * Find the closest parent element based on class
   * @param {Element} Element to start search on
   * @param {String} Class string to toggle
   * @return {Element} Closest parent element
   */
  publicMethods.closest = function ( el, c ) {
    while ((el = el.parentElement) && !publicMethods.hasClass(el, c));
    return el;
  }; // End closest

  /**
   * Merge two or more objects. Returns a new object.
   * Set the first argument to `true` for a deep or recursive merge
   * @param {Boolean} deep If true, do a deep (or recursive) merge [optional]
   * @param {Object} objects The objects to merge together
   * @returns {Object} Merged values of defaults and options
   */
  publicMethods.extend = function () {

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

  return publicMethods;

})();
