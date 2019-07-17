(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _dismissible = _interopRequireDefault(require("./dismissible"));

var _dropdowns = _interopRequireDefault(require("./dropdowns"));

var _offcanvas = _interopRequireDefault(require("./offcanvas"));

var _tabs = _interopRequireDefault(require("./tabs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dismissible = new _dismissible["default"]();
var dropdowns = new _dropdowns["default"]();
var offcanvas = new _offcanvas["default"]();
var tabs = new _tabs["default"]();

},{"./dismissible":2,"./dropdowns":3,"./offcanvas":4,"./tabs":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _utility = _interopRequireDefault(require("./utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(options) {
  var api = {};
  var settings;
  var defaults = {
    classTrigger: 'dismiss',
    classDismissible: 'dismissible',
    classHide: 'hide'
  };

  var runDismissible = function runDismissible() {
    var trigger = event.target.closest('.' + settings.classTrigger);
    if (!trigger) return;
    var dismissible = event.target.closest('.' + settings.classDismissible);
    if (!dismissible) return;

    if (dismissible) {
      _utility["default"].addClass(dismissible, settings.classHide);
    } else {
      console.log('Dismissible element was not found!');
    }

    event.preventDefault();
  };

  api.init = function (options) {
    api.destroy();
    settings = _utility["default"].extend(defaults, options || {});
    document.addEventListener('click', runDismissible, false);
  };

  api.destroy = function () {
    document.removeEventListener('click', runDismissible, false);
    settings = null;
  };

  api.showAll = function (selector) {
    var dismissible = api.getDismissible(selector);
    dismissible.forEach(function (el) {
      _utility["default"].removeClass(el, settings.classHide);
    });
  };

  api.hideAll = function (selector) {
    var dismissible = api.getDismissible(selector);
    dismissible.forEach(function (el) {
      _utility["default"].addClass(el, settings.classHide);
    });
  };

  api.getDismissible = function (selector) {
    var dismissible = [];

    if (selector) {
      var items = document.querySelectorAll(selector);
      items.forEach(function (el) {
        var items = el.querySelectorAll('.' + settings.classDismissible);
        items.forEach(function (el) {
          dismissible.push(el);
        });
      });
    } else {
      dismissible = document.querySelectorAll('.' + settings.classDismissible);
    }

    return dismissible;
  };

  api.init(options);
  return api;
}

},{"./utility.js":6}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _utility = _interopRequireDefault(require("./utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(options) {
  var api = {};
  var settings;
  var defaults = {
    classTrigger: 'dropdown-trigger',
    classDropdown: 'dropdown',
    classOnClick: 'on-click',
    classOnHover: 'on-hover',
    classActive: 'active',
    delay: 500
  };
  var triggers = [];
  var triggersHover = [];

  var runDropdownClick = function runDropdownClick() {
    var trigger = event.target.closest('.' + settings.classTrigger + '.' + settings.classOnClick);

    var is_trigger_child = _utility["default"].hasClass(event.target.parentElement, [settings.classTrigger, settings.classOnClick]);

    var is_active;

    if (trigger) {
      is_active = _utility["default"].hasClass(trigger, settings.classActive);
    }

    hideAll();
    if (!trigger) return;
    showParents(event.target);

    if (!is_active) {
      _utility["default"].addClass(trigger, settings.classActive);
    } else {
      if (is_trigger_child) {
        _utility["default"].removeClass(trigger, settings.classActive);
      }
    }

    if (is_trigger_child) {
      event.preventDefault();
    }
  };

  var hideAll = function hideAll() {
    triggers.forEach(function (el) {
      _utility["default"].removeClass(el, settings.classActive);
    });
  };

  var showParents = function showParents(el) {
    var parent = _utility["default"].closest(el, [settings.classTrigger, settings.classOnClick]);

    while (parent) {
      _utility["default"].addClass(parent, settings.classActive);

      parent = _utility["default"].closest(parent, settings.classTrigger);
    }
  };

  api.init = function (options) {
    api.destroy();
    settings = _utility["default"].extend(defaults, options || {});
    triggers = document.querySelectorAll('.' + settings.classTrigger);
    triggersHover = document.querySelectorAll('.' + settings.classTrigger + '.' + settings.classOnHover);
    document.addEventListener('click', runDropdownClick, false);
    triggersHover.forEach(function (el) {
      var timer;
      el.addEventListener('mouseover', function () {
        var trigger = event.target.closest('.' + settings.classTrigger + '.' + settings.classOnHover);
        clearTimeout(timer);

        _utility["default"].addClass(trigger, settings.classActive);
      }, false);
      el.addEventListener('mouseleave', function () {
        var trigger = event.target.closest('.' + settings.classTrigger + '.' + settings.classOnHover);
        timer = setTimeout(function () {
          _utility["default"].removeClass(trigger, settings.classActive);
        }, settings.delay);
      }, false);
    });
  };

  api.destroy = function () {
    document.removeEventListener('click', runDropdownClick, false);
    settings = null;
    triggers = [];
    triggersHover = [];
  };

  api.init(options);
  return api;
}

},{"./utility.js":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _utility = _interopRequireDefault(require("./utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(options) {
  var api = {};
  var settings;
  var defaults = {
    classTrigger: 'oc-trigger',
    classWrap: 'oc-wrap',
    classAside: 'oc-aside',
    classActive: 'oc-active',
    classDelay: 'oc-delay',
    timer: 500
  };

  var openOffCanvas = function openOffCanvas() {
    var trigger = event.target.closest('.' + settings.classTrigger);
    var target = trigger.dataset.target;

    if (target) {
      var wrap = event.target.closest('.' + settings.classWrap);

      if (wrap) {
        wrap.setAttribute('class', settings.classWrap);

        _utility["default"].addClass(wrap, target);

        setTimeout(function () {
          _utility["default"].addClass(wrap, [settings.classActive, settings.classDelay]);
        }, 25);
      }
    } else {
      closeOffCanvas();
    }
  };

  var closeOffCanvas = function closeOffCanvas() {
    var wrap = event.target.closest('.' + settings.classWrap);

    if (wrap) {
      _utility["default"].removeClass(wrap, settings.classActive);

      setTimeout(function () {
        _utility["default"].removeClass(wrap, settings.classDelay);
      }, settings.timer);
    }
  };

  var runOffcanvas = function runOffcanvas() {
    var wrap = event.target.closest('.' + settings.classWrap);
    if (!wrap) return;
    var trigger = event.target.closest('.' + settings.classTrigger);
    var aside = event.target.closest('.' + settings.classAside);
    if (!trigger && !aside) closeOffCanvas();

    if (trigger) {
      openOffCanvas();
      event.preventDefault();
    }
  };

  api.init = function (options) {
    api.destroy();
    settings = _utility["default"].extend(defaults, options || {});
    document.addEventListener('click', runOffcanvas, false);
  };

  api.destroy = function () {
    document.removeEventListener('click', runOffcanvas, false);
    settings = null;
  };

  api.init(options);
  return api;
}

},{"./utility.js":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _utility = _interopRequireDefault(require("./utility.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(options) {
  var api = {};
  var settings;
  var defaults = {
    classTrigger: 'tabs-nav',
    classWrap: 'tabs',
    classContent: 'tabs-content',
    classActive: 'active'
  };

  var getContent = function getContent(wrap, nav) {
    var content;

    if (wrap) {
      content = wrap.querySelector('.' + settings.classContent);
    } else {
      var id = nav.dataset.content;

      if (id) {
        content = document.querySelector('#' + id);
      } else {
        content = null;
      }
    }

    return content;
  };

  var runTabs = function runTabs() {
    var trigger = event.target.closest('.' + settings.classTrigger);
    if (!trigger) return;

    var is_active = _utility["default"].hasClass(event.target.parentElement, settings.classActive);

    if (!is_active) {
      var wrap = event.target.closest('.' + settings.classWrap);
      var content = getContent(wrap, trigger);
      var target = event.target.getAttribute('href');

      _utility["default"].removeClass(trigger.querySelector('.' + settings.classActive), settings.classActive);

      _utility["default"].removeClass(content.querySelector('.' + settings.classActive), settings.classActive);

      _utility["default"].addClass(event.target.parentElement, settings.classActive);

      _utility["default"].addClass(content.querySelector(target), settings.classActive);
    }

    event.preventDefault();
  };

  api.init = function (options) {
    api.destroy();
    settings = _utility["default"].extend(defaults, options || {});
    document.addEventListener('click', runTabs, false);
  };

  api.destroy = function () {
    document.removeEventListener('click', runTabs, false);
    settings = null;
  };

  api.init(options);
  return api;
}

},{"./utility.js":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default() {
  var api = {};

  api.hasClass = function (el, c) {
    c = api.toArray(c);
    return c.every(function (c) {
      return el.classList.contains(c);
    });
  };

  api.addClass = function (el, c) {
    c = api.toArray(c);
    c.forEach(function (c) {
      el.classList.add(c);
    });
  };

  api.removeClass = function (el, c) {
    c = api.toArray(c);
    c.forEach(function (c) {
      el.classList.remove(c);
    });
  };

  api.toggleClass = function (el, c) {
    c = api.toArray(c);
    c.forEach(function (c) {
      el.classList.toggle(c);
    });
  };

  api.closest = function (el, c) {
    while ((el = el.parentElement) && !api.hasClass(el, c)) {
      return el;
    }
  };

  api.toArray = function (s) {
    var array = [];

    if (typeof s === 'string') {
      array.push(s);
    } else if (Array.isArray(s)) {
      array = s;
    } else {
      return false;
    }

    return array;
  };

  api.extend = function () {
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }

    var merge = function merge(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    for (i = 0; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  };

  return api;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYmFzZXdlYi5qcyIsInNyYy9qcy9kaXNtaXNzaWJsZS5qcyIsInNyYy9qcy9kcm9wZG93bnMuanMiLCJzcmMvanMvb2ZmY2FudmFzLmpzIiwic3JjL2pzL3RhYnMuanMiLCJzcmMvanMvdXRpbGl0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNLFdBQVcsR0FBRyxJQUFJLHVCQUFKLEVBQXBCO0FBQ0EsSUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBSixFQUFsQjtBQUNBLElBQU0sU0FBUyxHQUFHLElBQUkscUJBQUosRUFBbEI7QUFDQSxJQUFNLElBQUksR0FBRyxJQUFJLGdCQUFKLEVBQWI7Ozs7Ozs7Ozs7QUNSQTs7OztBQUVlLGtCQUFTLE9BQVQsRUFBa0I7QUFFL0IsTUFBSSxHQUFHLEdBQUcsRUFBVjtBQUNBLE1BQUksUUFBSjtBQUNBLE1BQUksUUFBUSxHQUFHO0FBQ2IsSUFBQSxZQUFZLEVBQUcsU0FERjtBQUViLElBQUEsZ0JBQWdCLEVBQUcsYUFGTjtBQUdiLElBQUEsU0FBUyxFQUFHO0FBSEMsR0FBZjs7QUFNQSxNQUFJLGNBQWMsR0FBRyxTQUFqQixjQUFpQixHQUFZO0FBQy9CLFFBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFOLENBQWEsT0FBYixDQUFxQixNQUFNLFFBQVEsQ0FBQyxZQUFwQyxDQUFkO0FBQ0EsUUFBSyxDQUFDLE9BQU4sRUFBZ0I7QUFDaEIsUUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU4sQ0FBYSxPQUFiLENBQXFCLE1BQU0sUUFBUSxDQUFDLGdCQUFwQyxDQUFsQjtBQUNBLFFBQUssQ0FBQyxXQUFOLEVBQW9COztBQUNwQixRQUFJLFdBQUosRUFBaUI7QUFDZiwwQkFBRSxRQUFGLENBQVcsV0FBWCxFQUF3QixRQUFRLENBQUMsU0FBakM7QUFDRCxL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LElBQUQsQ0FBUixHQUFpQixNQUFNLENBQUUsSUFBRixFQUFRLFFBQVEsQ0FBQyxJQUFELENBQWhCLEVBQXdCLEdBQUcsQ0FBQyxJQUFELENBQTNCLENBQXZCO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsWUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSLEdBQWlCLEdBQUcsQ0FBQyxJQUFELENBQXBCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsS0FWRDs7QUFXQSxTQUFNLENBQUMsR0FBRyxDQUFWLEVBQWEsQ0FBQyxHQUFHLE1BQWpCLEVBQXlCLENBQUMsRUFBMUIsRUFBK0I7QUFDN0IsVUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUQsQ0FBbkI7QUFDQSxNQUFBLEtBQUssQ0FBQyxHQUFELENBQUw7QUFDRDs7QUFDRCxXQUFPLFFBQVA7QUFDRCxHQXpCRDs7QUEyQkEsU0FBTyxHQUFQO0FBQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgRGlzbWlzc2libGUgZnJvbSAnLi9kaXNtaXNzaWJsZSdcbmltcG9ydCBEcm9wZG93bnMgZnJvbSAnLi9kcm9wZG93bnMnXG5pbXBvcnQgT2ZmY2FudmFzIGZyb20gJy4vb2ZmY2FudmFzJ1xuaW1wb3J0IFRhYnMgZnJvbSAnLi90YWJzJ1xuXG5jb25zdCBkaXNtaXNzaWJsZSA9IG5ldyBEaXNtaXNzaWJsZSgpXG5jb25zdCBkcm9wZG93bnMgPSBuZXcgRHJvcGRvd25zKClcbmNvbnN0IG9mZmNhbnZhcyA9IG5ldyBPZmZjYW52YXMoKVxuY29uc3QgdGFicyA9IG5ldyBUYWJzKClcbiIsImltcG9ydCB1IGZyb20gJy4vdXRpbGl0eS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ob3B0aW9ucykge1xuXG4gIHZhciBhcGkgPSB7fVxuICB2YXIgc2V0dGluZ3NcbiAgdmFyIGRlZmF1bHRzID0ge1xuICAgIGNsYXNzVHJpZ2dlciA6ICdkaXNtaXNzJyxcbiAgICBjbGFzc0Rpc21pc3NpYmxlIDogJ2Rpc21pc3NpYmxlJyxcbiAgICBjbGFzc0hpZGUgOiAnaGlkZScsXG4gIH1cblxuICB2YXIgcnVuRGlzbWlzc2libGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRyaWdnZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLicgKyBzZXR0aW5ncy5jbGFzc1RyaWdnZXIpXG4gICAgaWYgKCAhdHJpZ2dlciApIHJldHVyblxuICAgIHZhciBkaXNtaXNzaWJsZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuJyArIHNldHRpbmdzLmNsYXNzRGlzbWlzc2libGUpXG4gICAgaWYgKCAhZGlzbWlzc2libGUgKSByZXR1cm5cbiAgICBpZiAoZGlzbWlzc2libGUpIHtcbiAgICAgIHUuYWRkQ2xhc3MoZGlzbWlzc2libGUsIHNldHRpbmdzLmNsYXNzSGlkZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ0Rpc21pc3NpYmxlIGVsZW1lbnQgd2FzIG5vdCBmb3VuZCEnKVxuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBhcGkuaW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgYXBpLmRlc3Ryb3koKVxuICAgIHNldHRpbmdzID0gdS5leHRlbmQoIGRlZmF1bHRzLCBvcHRpb25zIHx8IHt9IClcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJ1bkRpc21pc3NpYmxlLCBmYWxzZSlcbiAgfVxuXG4gIGFwaS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcnVuRGlzbWlzc2libGUsIGZhbHNlKVxuICAgIHNldHRpbmdzID0gbnVsbFxuICB9XG5cbiAgYXBpLnNob3dBbGwgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgZGlzbWlzc2libGUgPSBhcGkuZ2V0RGlzbWlzc2libGUoc2VsZWN0b3IpXG4gICAgZGlzbWlzc2libGUuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHUucmVtb3ZlQ2xhc3MoZWwsIHNldHRpbmdzLmNsYXNzSGlkZSlcbiAgICB9KVxuXG4gIH1cblxuICBhcGkuaGlkZUFsbCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHZhciBkaXNtaXNzaWJsZSA9IGFwaS5nZXREaXNtaXNzaWJsZShzZWxlY3RvcilcbiAgICBkaXNtaXNzaWJsZS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgdS5hZGRDbGFzcyhlbCwgc2V0dGluZ3MuY2xhc3NIaWRlKVxuICAgIH0pXG4gIH1cblxuICBhcGkuZ2V0RGlzbWlzc2libGUgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgZGlzbWlzc2libGUgPSBbXVxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgdmFyIGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgc2V0dGluZ3MuY2xhc3NEaXNtaXNzaWJsZSlcbiAgICAgICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBkaXNtaXNzaWJsZS5wdXNoKGVsKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzbWlzc2libGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHNldHRpbmdzLmNsYXNzRGlzbWlzc2libGUpXG4gICAgfVxuICAgIHJldHVybiBkaXNtaXNzaWJsZVxuICB9XG5cbiAgYXBpLmluaXQob3B0aW9ucylcbiAgcmV0dXJuIGFwaVxufVxuIiwiaW1wb3J0IHUgZnJvbSAnLi91dGlsaXR5LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgdmFyIGFwaSA9IHt9XG4gIHZhciBzZXR0aW5nc1xuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgY2xhc3NUcmlnZ2VyOiAnZHJvcGRvd24tdHJpZ2dlcicsXG4gICAgY2xhc3NEcm9wZG93bjogJ2Ryb3Bkb3duJyxcbiAgICBjbGFzc09uQ2xpY2s6ICdvbi1jbGljaycsXG4gICAgY2xhc3NPbkhvdmVyOiAnb24taG92ZXInLFxuICAgIGNsYXNzQWN0aXZlOiAnYWN0aXZlJyxcbiAgICBkZWxheTogNTAwLFxuICB9XG4gIHZhciB0cmlnZ2VycyA9IFtdXG4gIHZhciB0cmlnZ2Vyc0hvdmVyID0gW11cblxuICB2YXIgcnVuRHJvcGRvd25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdHJpZ2dlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuJyArIHNldHRpbmdzLmNsYXNzVHJpZ2dlciArICcuJyArIHNldHRpbmdzLmNsYXNzT25DbGljaylcbiAgICB2YXIgaXNfdHJpZ2dlcl9jaGlsZCA9IHUuaGFzQ2xhc3MoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQsIFtzZXR0aW5ncy5jbGFzc1RyaWdnZXIsIHNldHRpbmdzLmNsYXNzT25DbGlja10pXG4gICAgdmFyIGlzX2FjdGl2ZVxuICAgIGlmICggdHJpZ2dlciApIHtcbiAgICAgIGlzX2FjdGl2ZSA9IHUuaGFzQ2xhc3ModHJpZ2dlciwgc2V0dGluZ3MuY2xhc3NBY3RpdmUpXG4gICAgfVxuICAgIGhpZGVBbGwoKVxuICAgIGlmICggIXRyaWdnZXIgKSByZXR1cm5cbiAgICBzaG93UGFyZW50cyhldmVudC50YXJnZXQpXG4gICAgaWYgKCFpc19hY3RpdmUpIHtcbiAgICAgIHUuYWRkQ2xhc3ModHJpZ2dlciwgc2V0dGluZ3MuY2xhc3NBY3RpdmUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc190cmlnZ2VyX2NoaWxkKSB7XG4gICAgICAgIHUucmVtb3ZlQ2xhc3ModHJpZ2dlciwgc2V0dGluZ3MuY2xhc3NBY3RpdmUpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc190cmlnZ2VyX2NoaWxkKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuICB9XG5cbiAgdmFyIGhpZGVBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdHJpZ2dlcnMuZm9yRWFjaCggZnVuY3Rpb24gKGVsKSB7XG4gICAgICB1LnJlbW92ZUNsYXNzKGVsLCBzZXR0aW5ncy5jbGFzc0FjdGl2ZSlcbiAgICB9KVxuICB9XG5cbiAgdmFyIHNob3dQYXJlbnRzID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgdmFyIHBhcmVudCA9IHUuY2xvc2VzdChlbCwgW3NldHRpbmdzLmNsYXNzVHJpZ2dlciwgc2V0dGluZ3MuY2xhc3NPbkNsaWNrXSlcbiAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICB1LmFkZENsYXNzKHBhcmVudCwgc2V0dGluZ3MuY2xhc3NBY3RpdmUpXG4gICAgICBwYXJlbnQgPSB1LmNsb3Nlc3QocGFyZW50LCBzZXR0aW5ncy5jbGFzc1RyaWdnZXIpXG4gICAgfVxuICB9XG5cbiAgYXBpLmluaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGFwaS5kZXN0cm95KClcbiAgICBzZXR0aW5ncyA9IHUuZXh0ZW5kKCBkZWZhdWx0cywgb3B0aW9ucyB8fCB7fSApXG4gICAgdHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHNldHRpbmdzLmNsYXNzVHJpZ2dlcilcbiAgICB0cmlnZ2Vyc0hvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBzZXR0aW5ncy5jbGFzc1RyaWdnZXIgKyAnLicgKyBzZXR0aW5ncy5jbGFzc09uSG92ZXIpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBydW5Ecm9wZG93bkNsaWNrLCBmYWxzZSlcbiAgICB0cmlnZ2Vyc0hvdmVyLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICB2YXIgdGltZXJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLicgKyBzZXR0aW5ncy5jbGFzc1RyaWdnZXIgKyAnLicgKyBzZXR0aW5ncy5jbGFzc09uSG92ZXIpXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgdS5hZGRDbGFzcyh0cmlnZ2VyLCBzZXR0aW5ncy5jbGFzc0FjdGl2ZSlcbiAgICAgIH0sIGZhbHNlKVxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRyaWdnZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLicgKyBzZXR0aW5ncy5jbGFzc1RyaWdnZXIgKyAnLicgKyBzZXR0aW5ncy5jbGFzc09uSG92ZXIpXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdS5yZW1vdmVDbGFzcyh0cmlnZ2VyLCBzZXR0aW5ncy5jbGFzc0FjdGl2ZSlcbiAgICAgICAgfSwgc2V0dGluZ3MuZGVsYXkpXG4gICAgICB9LCBmYWxzZSlcbiAgICB9KVxuICB9XG5cbiAgYXBpLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBydW5Ecm9wZG93bkNsaWNrLCBmYWxzZSlcbiAgICBzZXR0aW5ncyA9IG51bGxcbiAgICB0cmlnZ2VycyA9IFtdXG4gICAgdHJpZ2dlcnNIb3ZlciA9IFtdXG4gIH1cblxuICBhcGkuaW5pdChvcHRpb25zKVxuICByZXR1cm4gYXBpXG59XG4iLCJpbXBvcnQgdSBmcm9tICcuL3V0aWxpdHkuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuICB2YXIgYXBpID0ge31cbiAgdmFyIHNldHRpbmdzXG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICBjbGFzc1RyaWdnZXIgOiAnb2MtdHJpZ2dlcicsXG4gICAgY2xhc3NXcmFwIDogJ29jLXdyYXAnLFxuICAgIGNsYXNzQXNpZGUgOiAnb2MtYXNpZGUnLFxuICAgIGNsYXNzQWN0aXZlIDogJ29jLWFjdGl2ZScsXG4gICAgY2xhc3NEZWxheSA6ICdvYy1kZWxheScsXG4gICAgdGltZXIgOiA1MDAsXG4gIH1cblxuICB2YXIgb3Blbk9mZkNhbnZhcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB0cmlnZ2VyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy4nICsgc2V0dGluZ3MuY2xhc3NUcmlnZ2VyKVxuICAgIHZhciB0YXJnZXQgPSB0cmlnZ2VyLmRhdGFzZXQudGFyZ2V0XG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgdmFyIHdyYXAgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLicgKyBzZXR0aW5ncy5jbGFzc1dyYXApXG4gICAgICBpZiAod3JhcCkge1xuICAgICAgICB3cmFwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBzZXR0aW5ncy5jbGFzc1dyYXApXG4gICAgICAgIHUuYWRkQ2xhc3Mod3JhcCwgdGFyZ2V0KVxuICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICB1LmFkZENsYXNzKHdyYXAsIFtzZXR0aW5ncy5jbGFzc0FjdGl2ZSwgc2V0dGluZ3MuY2xhc3NEZWxheV0pXG4gICAgICAgIH0sIDI1IClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2VPZmZDYW52YXMoKVxuICAgIH1cbiAgfVxuXG4gIHZhciBjbG9zZU9mZkNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgd3JhcCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuJyArIHNldHRpbmdzLmNsYXNzV3JhcClcbiAgICBpZiAod3JhcCkge1xuICAgICAgdS5yZW1vdmVDbGFzcyh3cmFwLCBzZXR0aW5ncy5jbGFzc0FjdGl2ZSlcbiAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdS5yZW1vdmVDbGFzcyh3cmFwLCBzZXR0aW5ncy5jbGFzc0RlbGF5KVxuICAgICAgfSwgc2V0dGluZ3MudGltZXIgKVxuICAgIH1cbiAgfVxuXG4gIHZhciBydW5PZmZjYW52YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHdyYXAgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLicgKyBzZXR0aW5ncy5jbGFzc1dyYXApXG4gICAgaWYgKCAhd3JhcCApIHJldHVyblxuICAgIHZhciB0cmlnZ2VyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy4nICsgc2V0dGluZ3MuY2xhc3NUcmlnZ2VyKVxuICAgIHZhciBhc2lkZSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuJyArIHNldHRpbmdzLmNsYXNzQXNpZGUpXG4gICAgaWYgKCAhdHJpZ2dlciAmJiAhYXNpZGUgKSBjbG9zZU9mZkNhbnZhcygpXG4gICAgaWYgKCB0cmlnZ2VyICkge1xuICAgICAgb3Blbk9mZkNhbnZhcygpXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuICB9XG5cbiAgYXBpLmluaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGFwaS5kZXN0cm95KClcbiAgICBzZXR0aW5ncyA9IHUuZXh0ZW5kKCBkZWZhdWx0cywgb3B0aW9ucyB8fCB7fSApXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBydW5PZmZjYW52YXMsIGZhbHNlKVxuICB9XG5cbiAgYXBpLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBydW5PZmZjYW52YXMsIGZhbHNlKVxuICAgIHNldHRpbmdzID0gbnVsbFxuICB9XG5cbiAgYXBpLmluaXQob3B0aW9ucylcbiAgcmV0dXJuIGFwaVxufVxuIiwiaW1wb3J0IHUgZnJvbSAnLi91dGlsaXR5LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgdmFyIGFwaSA9IHt9XG4gIHZhciBzZXR0aW5nc1xuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgY2xhc3NUcmlnZ2VyIDogJ3RhYnMtbmF2JyxcbiAgICBjbGFzc1dyYXAgOiAndGFicycsXG4gICAgY2xhc3NDb250ZW50IDogJ3RhYnMtY29udGVudCcsXG4gICAgY2xhc3NBY3RpdmUgOiAnYWN0aXZlJyxcbiAgfVxuXG4gIHZhciBnZXRDb250ZW50ID0gZnVuY3Rpb24gKHdyYXAsIG5hdikge1xuICAgIHZhciBjb250ZW50XG4gICAgaWYgKHdyYXApIHtcbiAgICAgIGNvbnRlbnQgPSB3cmFwLnF1ZXJ5U2VsZWN0b3IoJy4nICsgc2V0dGluZ3MuY2xhc3NDb250ZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaWQgPSBuYXYuZGF0YXNldC5jb250ZW50XG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgaWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZW50ID0gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29udGVudFxuICB9XG5cbiAgdmFyIHJ1blRhYnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRyaWdnZXIgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLicgKyBzZXR0aW5ncy5jbGFzc1RyaWdnZXIpXG4gICAgaWYgKCAhdHJpZ2dlciApIHJldHVyblxuICAgIHZhciBpc19hY3RpdmUgPSB1Lmhhc0NsYXNzKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LCBzZXR0aW5ncy5jbGFzc0FjdGl2ZSlcbiAgICBpZiAoIWlzX2FjdGl2ZSkge1xuICAgICAgdmFyIHdyYXAgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLicgKyBzZXR0aW5ncy5jbGFzc1dyYXApXG4gICAgICB2YXIgY29udGVudCA9IGdldENvbnRlbnQod3JhcCwgdHJpZ2dlcilcbiAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgIHUucmVtb3ZlQ2xhc3ModHJpZ2dlci5xdWVyeVNlbGVjdG9yKCcuJyArIHNldHRpbmdzLmNsYXNzQWN0aXZlKSwgc2V0dGluZ3MuY2xhc3NBY3RpdmUpXG4gICAgICB1LnJlbW92ZUNsYXNzKGNvbnRlbnQucXVlcnlTZWxlY3RvcignLicgKyBzZXR0aW5ncy5jbGFzc0FjdGl2ZSksIHNldHRpbmdzLmNsYXNzQWN0aXZlKVxuICAgICAgdS5hZGRDbGFzcyhldmVudC50YXJnZXQucGFyZW50RWxlbWVudCwgc2V0dGluZ3MuY2xhc3NBY3RpdmUpXG4gICAgICB1LmFkZENsYXNzKGNvbnRlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpLCBzZXR0aW5ncy5jbGFzc0FjdGl2ZSlcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgYXBpLmluaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGFwaS5kZXN0cm95KClcbiAgICBzZXR0aW5ncyA9IHUuZXh0ZW5kKCBkZWZhdWx0cywgb3B0aW9ucyB8fCB7fSApXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBydW5UYWJzLCBmYWxzZSlcbiAgfVxuXG4gIGFwaS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcnVuVGFicywgZmFsc2UpXG4gICAgc2V0dGluZ3MgPSBudWxsXG4gIH1cblxuICBhcGkuaW5pdChvcHRpb25zKVxuICByZXR1cm4gYXBpXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcblxuICB2YXIgYXBpID0ge31cblxuICBhcGkuaGFzQ2xhc3MgPSBmdW5jdGlvbiAoIGVsLCBjICkge1xuICAgIGMgPSBhcGkudG9BcnJheShjKVxuICAgIHJldHVybiBjLmV2ZXJ5KCBmdW5jdGlvbiAoIGMgKSB7XG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGMpXG4gICAgfSlcbiAgfVxuXG4gIGFwaS5hZGRDbGFzcyA9IGZ1bmN0aW9uICggZWwsIGMgKSB7XG4gICAgYyA9IGFwaS50b0FycmF5KGMpXG4gICAgYy5mb3JFYWNoKCBmdW5jdGlvbiAoIGMgKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCBjIClcbiAgICB9KVxuICB9XG5cbiAgYXBpLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKCBlbCwgYyApIHtcbiAgICBjID0gYXBpLnRvQXJyYXkoYylcbiAgICBjLmZvckVhY2goIGZ1bmN0aW9uICggYyApIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoIGMgKVxuICAgIH0pXG4gIH1cblxuICBhcGkudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbiAoIGVsLCBjICkge1xuICAgIGMgPSBhcGkudG9BcnJheShjKVxuICAgIGMuZm9yRWFjaCggZnVuY3Rpb24gKCBjICkge1xuICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZShjKVxuICAgIH0pXG4gIH1cblxuICBhcGkuY2xvc2VzdCA9IGZ1bmN0aW9uICggZWwsIGMgKSB7XG4gICAgd2hpbGUgKChlbCA9IGVsLnBhcmVudEVsZW1lbnQpICYmICFhcGkuaGFzQ2xhc3MoZWwsIGMpKVxuICAgIHJldHVybiBlbFxuICB9XG5cbiAgYXBpLnRvQXJyYXkgPSBmdW5jdGlvbiggcyApIHtcbiAgICB2YXIgYXJyYXkgPSBbXVxuICAgIGlmICh0eXBlb2YgcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGFycmF5LnB1c2gocylcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocykpIHtcbiAgICAgIGFycmF5ID0gc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5XG4gIH1cblxuICBhcGkuZXh0ZW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRlZCA9IHt9XG4gICAgdmFyIGRlZXAgPSBmYWxzZVxuICAgIHZhciBpID0gMFxuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgaWYgKCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIGFyZ3VtZW50c1swXSApID09PSAnW29iamVjdCBCb29sZWFuXScgKSB7XG4gICAgICBkZWVwID0gYXJndW1lbnRzWzBdXG4gICAgICBpKytcbiAgICB9XG4gICAgdmFyIG1lcmdlID0gZnVuY3Rpb24gKCBvYmogKSB7XG4gICAgICBmb3IgKCB2YXIgcHJvcCBpbiBvYmogKSB7XG4gICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBvYmosIHByb3AgKSApIHtcbiAgICAgICAgICBpZiAoIGRlZXAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9ialtwcm9wXSkgPT09ICdbb2JqZWN0IE9iamVjdF0nICkge1xuICAgICAgICAgICAgZXh0ZW5kZWRbcHJvcF0gPSBleHRlbmQoIHRydWUsIGV4dGVuZGVkW3Byb3BdLCBvYmpbcHJvcF0gKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBleHRlbmRlZFtwcm9wXSA9IG9ialtwcm9wXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXVxuICAgICAgbWVyZ2Uob2JqKVxuICAgIH1cbiAgICByZXR1cm4gZXh0ZW5kZWRcbiAgfVxuXG4gIHJldHVybiBhcGlcbn1cbiJdfQ==

//# sourceMappingURL=scripts.js.map
