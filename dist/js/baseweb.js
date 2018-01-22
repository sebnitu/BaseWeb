'use strict';

var _dismissible = require('./components/dismissible');

var _dismissible2 = _interopRequireDefault(_dismissible);

var _dropdowns = require('./components/dropdowns');

var _dropdowns2 = _interopRequireDefault(_dropdowns);

var _tabs = require('./components/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _offcanvas = require('./components/offcanvas');

var _offcanvas2 = _interopRequireDefault(_offcanvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (window, document, undefined) {

  _dismissible2.default.init();
  _dropdowns2.default.init();
  _tabs2.default.init();
  _offcanvas2.default.init();
})(window, document);
//# sourceMappingURL=baseweb.js.map
