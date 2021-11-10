'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var l7React = require('@antv/l7-react');
var antd = require('antd');
var classnames = require('classnames');
var uuid = require('uuid');
var papaparse = require('papaparse');
var md5 = require('md5');
var IdbKvStore = require('idb-kv-store');
var moment = require('moment');
var ahooks = require('ahooks');
var request = require('umi-request');
var reactBeautifulDnd = require('react-beautiful-dnd');
var lodash = require('lodash');
var reactColor = require('react-color');
var turf = require('@turf/turf');
var h3Js = require('h3-js');
var zhCN = require('antd/lib/locale/zh_CN');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);
var papaparse__default = /*#__PURE__*/_interopDefaultLegacy(papaparse);
var md5__default = /*#__PURE__*/_interopDefaultLegacy(md5);
var IdbKvStore__default = /*#__PURE__*/_interopDefaultLegacy(IdbKvStore);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var request__default = /*#__PURE__*/_interopDefaultLegacy(request);
var zhCN__default = /*#__PURE__*/_interopDefaultLegacy(zhCN);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n@import url('//at.alicdn.com/t/font_2898812_y5ir6hhtevt.css');\n.is-link {\n  cursor: pointer;\n}\n.is-link:hover {\n  color: #1890ff;\n}\n.is-red-link {\n  cursor: pointer;\n}\n.is-red-link:hover {\n  color: #1890ff;\n}\n.is-red-link:hover {\n  color: red;\n}\n.ant-typography {\n  margin-bottom: 0;\n}\n.index_container__3JLBB {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.index_control__2A4Gx {\n  z-index: 1000;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.index_sidebar__1UE1C {\n  z-index: 1000;\n  margin: 10px;\n}\n.index_previewHidden__3TLad {\n  display: none;\n}\n";
var styles = {"container":"index_container__3JLBB","control":"index_control__2A4Gx","sidebar":"index_sidebar__1UE1C","previewHidden":"index_previewHidden__3TLad"};
styleInject(css_248z);

var DEFAULT_COLOR = '#1890ff';
var MAPBOX_THEME_LIST = [{
  label: '幻影黑',
  value: 'dark'
}, {
  label: '标准',
  value: 'normal'
}, {
  label: '月光银',
  value: 'light'
}];
var MAP_THEME_LIST = [{
  label: '幻影黑',
  value: 'dark'
}, {
  label: '标准',
  value: 'normal'
}, {
  label: '月光银',
  value: 'light'
}, {
  label: '远山黛',
  value: 'whitesmoke'
}, {
  label: '草色青',
  value: 'fresh'
}, {
  label: '雅士灰',
  value: 'grey'
}, {
  label: '涂鸦',
  value: 'graffiti'
}, {
  label: '马卡龙',
  value: 'macaron'
}, {
  label: '靛青蓝',
  value: 'blue'
}, {
  label: '极夜蓝',
  value: 'darkblue'
}, {
  label: '酱籽',
  value: 'wine'
}];
var MAP_TYPES = [{
  label: '高德',
  value: 'amap'
}, {
  label: 'MapBox',
  value: 'mapbox'
}];
var LOCAL_STORAGE_KEY = {
  MAP_THEME: 'DIPPER_VIEW_MAP_THEME',
  MAP_TYPE: 'DIPPER_VIEW_MAP_TYPE',
  TOP_PANEL_HEIGHT: 'DIPPER_VIEW_TOP_PANEL_HEIGHT'
};
var DATASET_FIELD_TYPE_COLOR = {
  string: 'green',
  number: 'gold',
  boolean: 'blue'
};
var LAYER_TYPE_LIST = [{
  label: '点(Point)',
  value: 'point'
}, {
  label: '线(Line)',
  value: 'line'
}, {
  label: '路径(Trip)',
  value: 'trip'
}, {
  label: '多边形(Polygon)',
  value: 'polygon'
}, {
  label: '六边形(Hex)',
  value: 'hex'
}, {
  label: '热力(Heat)',
  value: 'heat'
}];
var LINE_TYPE_LIST = [{
  label: '直线',
  value: 'line'
}, {
  label: '曲线',
  value: 'arcmini'
}];
var DEFAULT_POINT_LAYER_CONFIG = {
  lngField: null,
  latField: null,
  fillColor: {
    value: DEFAULT_COLOR,
    enable: true
  },
  borderColor: {
    value: DEFAULT_COLOR
  },
  radius: {
    value: 10,
    rangeValue: [1, 10],
    field: null
  }
};
var DEFAULT_LINE_LAYER_CONFIG = {
  startLngField: null,
  startLatField: null,
  endLngField: null,
  endLatField: null,
  lineType: 'line',
  lineWidth: {
    value: 1,
    rangeValue: [1, 10],
    field: null
  },
  color: {
    value: [DEFAULT_COLOR, DEFAULT_COLOR]
  }
};
var DEFAULT_TRIP_LAYER_CONFIG = {
  geoField: null,
  color: {
    value: [DEFAULT_COLOR, DEFAULT_COLOR],
    field: null
  },
  lineWidth: {
    value: 1,
    rangeValue: [1, 10],
    field: null
  }
};
var DEFAULT_POLYGON_LAYER_CONFIG = {
  geoField: null,
  fillColor: {
    value: DEFAULT_COLOR,
    field: null
  },
  borderColor: {
    value: DEFAULT_COLOR,
    field: null
  },
  borderWidth: {
    value: 1,
    rangeValue: [1, 10],
    field: null
  }
};
var DEFAULT_HEX_LAYER_CONFIG = {
  hexId: null,
  fillColor: {
    value: DEFAULT_COLOR,
    field: null
  }
};

var MapModelContext = /*#__PURE__*/React.createContext();
var Provider = MapModelContext.Provider,
    Consumer = MapModelContext.Consumer;

var MapContext = function MapContext(_ref) {
  var _localStorage$getItem, _localStorage$getItem2;

  var children = _ref.children;

  var _useState = React.useState((_localStorage$getItem = localStorage.getItem(LOCAL_STORAGE_KEY.MAP_THEME)) !== null && _localStorage$getItem !== void 0 ? _localStorage$getItem : MAP_THEME_LIST[0].value),
      _useState2 = _slicedToArray(_useState, 2),
      mapTheme = _useState2[0],
      setMapTheme = _useState2[1];

  var _useState3 = React.useState((_localStorage$getItem2 = localStorage.getItem(LOCAL_STORAGE_KEY.MAP_TYPE)) !== null && _localStorage$getItem2 !== void 0 ? _localStorage$getItem2 : MAP_TYPES[0].value),
      _useState4 = _slicedToArray(_useState3, 2),
      mapType = _useState4[0],
      setMapType = _useState4[1];

  React.useEffect(function () {
    localStorage.setItem(LOCAL_STORAGE_KEY.MAP_THEME, mapTheme);
  }, [mapTheme]);
  React.useEffect(function () {
    localStorage.setItem(LOCAL_STORAGE_KEY.MAP_TYPE, mapType);
  }, [mapType]);
  return /*#__PURE__*/React__default['default'].createElement(Provider, {
    value: {
      mapTheme: mapTheme,
      setMapTheme: setMapTheme,
      mapType: mapType,
      setMapType: setMapType
    }
  }, children);
};

var AppMap = function AppMap(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$map = _ref.map,
      map = _ref$map === void 0 ? 'amap' : _ref$map;

  var _useContext = React.useContext(MapModelContext),
      mapTheme = _useContext.mapTheme;

  var MapScene = map === 'amap' ? l7React.AMapScene : l7React.MapboxScene;
  return /*#__PURE__*/React__default['default'].createElement(MapScene, {
    className: className,
    map: {
      center: [120.153576, 30.287459],
      pitch: 0,
      zoom: 10,
      style: mapTheme
    },
    option: {
      logoPosition: 'bottomright'
    }
  }, children);
};

var css_248z$1 = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n@import url('//at.alicdn.com/t/font_2898812_y5ir6hhtevt.css');\n.is-link {\n  cursor: pointer;\n}\n.is-link:hover {\n  color: #1890ff;\n}\n.is-red-link {\n  cursor: pointer;\n}\n.is-red-link:hover {\n  color: #1890ff;\n}\n.is-red-link:hover {\n  color: red;\n}\n.ant-typography {\n  margin-bottom: 0;\n}\n.index_appControlGroup__1sMqC {\n  display: flex;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n}\n.index_appControlGroup__1sMqC + .index_appControlGroup__1sMqC {\n  margin-left: 10px;\n}\n.index_appControlItem__1TROa {\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n}\n.index_appControlItem__1TROa .index_appControlItemName__3YPad {\n  display: inline-flex;\n  align-items: center;\n  padding: 0 12px;\n}\n.index_appControlItem__1TROa .index_appControlItemNameActive__3yEfl {\n  color: #1890ff;\n}\n.index_appControlItem__1TROa .index_appControlItemIcon__1ocz6 {\n  margin-right: 4px;\n}\n.index_appControlItem__1TROa.index_appControlItemBtn__OaNNM {\n  padding: 0 16px;\n}\n.index_appControlItem__1TROa:hover {\n  color: #1890ff;\n}\n.index_appControlItem__1TROa .anticon-down {\n  margin-left: 4px;\n  font-size: 12px;\n}\n.index_appControlItem__1TROa + .index_appControlItem__1TROa {\n  border-left: 1px solid #d9d9d9;\n}\n.index_exitPreview__2Cg4l {\n  position: absolute !important;\n  right: 10px;\n  top: 10px;\n}\n";
var styles$1 = {"appControlGroup":"index_appControlGroup__1sMqC","appControlItem":"index_appControlItem__1TROa","appControlItemName":"index_appControlItemName__3YPad","appControlItemNameActive":"index_appControlItemNameActive__3yEfl","appControlItemIcon":"index_appControlItemIcon__1ocz6","appControlItemBtn":"index_appControlItemBtn__OaNNM","exitPreview":"index_exitPreview__2Cg4l"};
styleInject(css_248z$1);

var AppControlGroup = function AppControlGroup(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$1.appControlGroup
  }, children);
};

var IconContext = /*#__PURE__*/React.createContext({});

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit$1(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return Number(n) * 100 + "%";
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}]; // Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`

function toHsv(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`


function toHex(_ref2) {
  var r = _ref2.r,
      g = _ref2.g,
      b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.


function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正


  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间


  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }

  patterns.push(toHex(pColor));

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);

    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));

    patterns.push(_colorString);
  } // dark theme patterns


  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
          opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || '#141414'), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});

/* eslint-disable no-console */
var warned = {};
function warning(valid, message) {
  // Support uglify
  if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
    console.error("Warning: ".concat(message));
  }
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
/* eslint-enable */

function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

var MARK_KEY = "rc-util-key";

function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }

  var head = document.querySelector('head');
  return head || document.body;
}

function injectCSS(css) {
  var _option$csp;

  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!canUseDom()) {
    return null;
  }

  var styleNode = document.createElement('style');

  if ((_option$csp = option.csp) === null || _option$csp === void 0 ? void 0 : _option$csp.nonce) {
    var _option$csp2;

    styleNode.nonce = (_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce;
  }

  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;

  if (option.prepend && container.prepend) {
    // Use `prepend` first
    container.prepend(styleNode);
  } else if (option.prepend && firstChild) {
    // Fallback to `insertBefore` like IE not support `prepend`
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }

  return styleNode;
}
var containerCache = new Map();
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer(option); // Get real parent

  if (!containerCache.has(container)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    parentNode.removeChild(placeholderStyle);
  }

  var existNode = Array.from(containerCache.get(container).children).find(function (node) {
    return node.tagName === 'STYLE' && node[MARK_KEY] === key;
  });

  if (existNode) {
    var _option$csp3, _option$csp4;

    if (((_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce) && existNode.nonce !== ((_option$csp4 = option.csp) === null || _option$csp4 === void 0 ? void 0 : _option$csp4.nonce)) {
      var _option$csp5;

      existNode.nonce = (_option$csp5 = option.csp) === null || _option$csp5 === void 0 ? void 0 : _option$csp5.nonce;
    }

    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }

    return existNode;
  }

  var newNode = injectCSS(css, option);
  newNode[MARK_KEY] = key;
  return newNode;
}

function warning$1(valid, message) {
  warningOnce(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (_typeof(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];

    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;

      default:
        acc[key] = val;
    }

    return acc;
  }, {});
}
function generate$1(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/React__default['default'].createElement(node.tag, _objectSpread2$1({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return generate$1(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }

  return /*#__PURE__*/React__default['default'].createElement(node.tag, _objectSpread2$1(_objectSpread2$1({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return generate$1(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles() {
  var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;

  var _useContext = React.useContext(IconContext),
      csp = _useContext.csp;

  React.useEffect(function () {
    updateCSS(styleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp
    });
  }, []);
};

var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return _objectSpread2$1({}, twoToneColorPalette);
}

var IconBase = function IconBase(props) {
  var icon = props.icon,
      className = props.className,
      onClick = props.onClick,
      style = props.style,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor,
      restProps = _objectWithoutProperties$1(props, _excluded);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }

  useInsertStyles();
  warning$1(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = _objectSpread2$1(_objectSpread2$1({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }

  return generate$1(target.icon, "svg-".concat(target.name), _objectSpread2$1({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps));
};

IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = IconBase.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}

var _excluded$1 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
// should move it to antd main repo?

setTwoToneColor('#1890ff');
var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var className = props.className,
      icon = props.icon,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      twoToneColor = props.twoToneColor,
      restProps = _objectWithoutProperties$1(props, _excluded$1);

  var _React$useContext = React.useContext(IconContext),
      _React$useContext$pre = _React$useContext.prefixCls,
      prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;

  var classString = classnames__default['default'](prefixCls, (_classNames = {}, _defineProperty$1(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty$1(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), _classNames), className);
  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray$1(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return /*#__PURE__*/React.createElement("span", _objectSpread2$1(_objectSpread2$1({
    role: "img",
    "aria-label": icon.name
  }, restProps), {}, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/React.createElement(IconBase, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

// This icon file is generated automatically.
var DownOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, "name": "down", "theme": "outlined" };

var DownOutlined$1 = function DownOutlined$1(props, ref) {
  return /*#__PURE__*/React.createElement(Icon, _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    ref: ref,
    icon: DownOutlined
  }));
};

DownOutlined$1.displayName = 'DownOutlined';
var DownOutlined$2 = /*#__PURE__*/React.forwardRef(DownOutlined$1);

// This icon file is generated automatically.
var EditOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, "name": "edit", "theme": "outlined" };

var EditOutlined$1 = function EditOutlined$1(props, ref) {
  return /*#__PURE__*/React.createElement(Icon, _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    ref: ref,
    icon: EditOutlined
  }));
};

EditOutlined$1.displayName = 'EditOutlined';
var EditOutlined$2 = /*#__PURE__*/React.forwardRef(EditOutlined$1);

// This icon file is generated automatically.
var EnterOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z" } }] }, "name": "enter", "theme": "outlined" };

var EnterOutlined$1 = function EnterOutlined$1(props, ref) {
  return /*#__PURE__*/React.createElement(Icon, _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    ref: ref,
    icon: EnterOutlined
  }));
};

EnterOutlined$1.displayName = 'EnterOutlined';
var EnterOutlined$2 = /*#__PURE__*/React.forwardRef(EnterOutlined$1);

// This icon file is generated automatically.
var InboxOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z" } }] }, "name": "inbox", "theme": "outlined" };

var InboxOutlined$1 = function InboxOutlined$1(props, ref) {
  return /*#__PURE__*/React.createElement(Icon, _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    ref: ref,
    icon: InboxOutlined
  }));
};

InboxOutlined$1.displayName = 'InboxOutlined';
var InboxOutlined$2 = /*#__PURE__*/React.forwardRef(InboxOutlined$1);

// This icon file is generated automatically.
var LeftOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, "name": "left", "theme": "outlined" };

var LeftOutlined$1 = function LeftOutlined$1(props, ref) {
  return /*#__PURE__*/React.createElement(Icon, _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    ref: ref,
    icon: LeftOutlined
  }));
};

LeftOutlined$1.displayName = 'LeftOutlined';
var LeftOutlined$2 = /*#__PURE__*/React.forwardRef(LeftOutlined$1);

// This icon file is generated automatically.
var PlusOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };

var PlusOutlined$1 = function PlusOutlined$1(props, ref) {
  return /*#__PURE__*/React.createElement(Icon, _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    ref: ref,
    icon: PlusOutlined
  }));
};

PlusOutlined$1.displayName = 'PlusOutlined';
var PlusOutlined$2 = /*#__PURE__*/React.forwardRef(PlusOutlined$1);

// This icon file is generated automatically.
var RightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, "name": "right", "theme": "outlined" };

var RightOutlined$1 = function RightOutlined$1(props, ref) {
  return /*#__PURE__*/React.createElement(Icon, _objectSpread2$1(_objectSpread2$1({}, props), {}, {
    ref: ref,
    icon: RightOutlined
  }));
};

RightOutlined$1.displayName = 'RightOutlined';
var RightOutlined$2 = /*#__PURE__*/React.forwardRef(RightOutlined$1);

var AppControlItem = function AppControlItem(_ref) {
  var _classnames, _classnames2;

  var text = _ref.text,
      dropdown = _ref.dropdown,
      icon = _ref.icon,
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? ['hover'] : _ref$trigger,
      onActiveChange = _ref.onActiveChange;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$1.appControlItem
  }, dropdown ? /*#__PURE__*/React__default['default'].createElement(antd.Dropdown, {
    overlay: dropdown,
    arrow: true,
    placement: "bottomCenter",
    trigger: trigger,
    onVisibleChange: function onVisibleChange(visible) {
      setActive(visible);
      onActiveChange === null || onActiveChange === void 0 ? void 0 : onActiveChange(visible);
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']((_classnames = {}, _defineProperty(_classnames, styles$1.appControlItemName, true), _defineProperty(_classnames, styles$1.appControlItemNameActive, active), _classnames))
  }, icon && /*#__PURE__*/React__default['default'].createElement("span", {
    className: styles$1.appControlItemIcon
  }, icon), text, /*#__PURE__*/React__default['default'].createElement(DownOutlined$2, null))) : /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']((_classnames2 = {}, _defineProperty(_classnames2, styles$1.appControlItemName, true), _defineProperty(_classnames2, styles$1.appControlItemNameActive, active), _classnames2)),
    onClick: function onClick() {
      onActiveChange === null || onActiveChange === void 0 ? void 0 : onActiveChange(!active);
      setActive(!active);
    }
  }, icon && /*#__PURE__*/React__default['default'].createElement("span", {
    className: styles$1.appControlItemIcon
  }, icon), text));
};

function MapTheme() {
  var _useContext = React.useContext(MapModelContext),
      mapTheme = _useContext.mapTheme,
      setMapTheme = _useContext.setMapTheme,
      mapType = _useContext.mapType;

  return /*#__PURE__*/React__default['default'].createElement(AppControlItem, {
    text: "\u5730\u56FE\u4E3B\u9898",
    icon: /*#__PURE__*/React__default['default'].createElement("i", {
      className: "dpiconfont dpicon-ditu"
    }),
    dropdown: /*#__PURE__*/React__default['default'].createElement(antd.Menu, null, (mapType === 'amap' ? MAP_THEME_LIST : MAPBOX_THEME_LIST).map(function (item) {
      return /*#__PURE__*/React__default['default'].createElement(antd.Menu.Item, {
        key: item.value,
        onClick: function onClick(_ref) {
          var key = _ref.key;
          setMapTheme(key);
        }
      }, /*#__PURE__*/React__default['default'].createElement(antd.Radio, {
        checked: mapTheme === item.value
      }, item.label));
    }))
  });
}

function MapType() {
  var _useContext = React.useContext(MapModelContext),
      mapType = _useContext.mapType,
      setMapType = _useContext.setMapType;

  return /*#__PURE__*/React__default['default'].createElement(AppControlItem, {
    text: "\u5E95\u56FE\u7C7B\u578B",
    icon: /*#__PURE__*/React__default['default'].createElement("i", {
      className: "dpiconfont dpicon-ditu"
    }),
    dropdown: /*#__PURE__*/React__default['default'].createElement(antd.Menu, null, MAP_TYPES.map(function (item) {
      return /*#__PURE__*/React__default['default'].createElement(antd.Menu.Item, {
        key: item.value,
        onClick: function onClick(_ref) {
          var key = _ref.key;
          setMapType(key);
        }
      }, /*#__PURE__*/React__default['default'].createElement(antd.Radio, {
        checked: mapType === item.value
      }, item.label));
    }))
  });
}

var GlobalModelContext = /*#__PURE__*/React.createContext();
var Provider$1 = GlobalModelContext.Provider,
    Consumer$1 = GlobalModelContext.Consumer;

var GlobalContext = function GlobalContext(_ref) {
  var children = _ref.children;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPreview = _useState2[0],
      setIsPreview = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      selectPlan = _useState4[0],
      setSelectPlan = _useState4[1];

  return /*#__PURE__*/React__default['default'].createElement(Provider$1, {
    value: {
      isPreview: isPreview,
      setIsPreview: setIsPreview,
      selectPlan: selectPlan,
      setSelectPlan: setSelectPlan
    }
  }, children);
};

var Preview = function Preview() {
  var _useContext = React.useContext(GlobalModelContext),
      setIsPreview = _useContext.setIsPreview;

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']([styles$1.appControlItem, styles$1.appControlItemBtn]),
    onClick: function onClick() {
      return setIsPreview(true);
    }
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: classnames__default['default'](['dpiconfont', 'dpicon-yulan', styles$1.appControlItemIcon])
  }), /*#__PURE__*/React__default['default'].createElement("span", null, "\u9884\u89C8"));
};

function AppControl(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: className
  }, /*#__PURE__*/React__default['default'].createElement(AppControlGroup, null, /*#__PURE__*/React__default['default'].createElement(MapTheme, null), /*#__PURE__*/React__default['default'].createElement(MapType, null), /*#__PURE__*/React__default['default'].createElement(Preview, null)));
}

var css_248z$2 = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n@import url('//at.alicdn.com/t/font_2898812_y5ir6hhtevt.css');\n.is-link {\n  cursor: pointer;\n}\n.is-link:hover {\n  color: #1890ff;\n}\n.is-red-link {\n  cursor: pointer;\n}\n.is-red-link:hover {\n  color: #1890ff;\n}\n.is-red-link:hover {\n  color: red;\n}\n.ant-typography {\n  margin-bottom: 0;\n}\n.index_appSidebarContainer__1GPkB {\n  height: calc(100% - 20px);\n  position: relative;\n  margin: 10px;\n  width: 310px;\n}\n.index_appSidebarContainer__1GPkB.index_show__QlMpF {\n  -webkit-animation: index_fadeInLeft__212cZ 0.5s forwards;\n          animation: index_fadeInLeft__212cZ 0.5s forwards;\n}\n.index_appSidebarContainer__1GPkB.index_hide__2KiRP {\n  -webkit-animation: index_fadeOutLeft__1BU3A 0.5s forwards;\n          animation: index_fadeOutLeft__1BU3A 0.5s forwards;\n}\n.index_appSidebar__2JCbd {\n  display: inline-block;\n  width: 300px;\n  height: 100%;\n  margin-right: 6px;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n}\n.index_appSidebarToggleBtn__1RmK9 {\n  background-color: #fff;\n  position: absolute;\n  left: 310px;\n  top: 0;\n}\n.index_appSidebarToggleBtn__1RmK9:hover {\n  background-color: #fff;\n}\n@-webkit-keyframes index_fadeInLeft__212cZ {\n  from {\n    opacity: 1;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes index_fadeInLeft__212cZ {\n  from {\n    opacity: 1;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes index_fadeOutLeft__1BU3A {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n@keyframes index_fadeOutLeft__1BU3A {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n";
var styles$2 = {"appSidebarContainer":"index_appSidebarContainer__1GPkB","show":"index_show__QlMpF","fadeInLeft":"index_fadeInLeft__212cZ","hide":"index_hide__2KiRP","fadeOutLeft":"index_fadeOutLeft__1BU3A","appSidebar":"index_appSidebar__2JCbd","appSidebarToggleBtn":"index_appSidebarToggleBtn__1RmK9"};
styleInject(css_248z$2);

var AppSidebar = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isHidden = _useState2[0],
      setIsHidden = _useState2[1];

  return (
    /*#__PURE__*/
    // @ts-ignore
    React__default['default'].createElement("div", {
      ref: ref,
      className: classnames__default['default']([styles$2.appSidebarContainer, isHidden ? styles$2.hide : styles$2.show, className])
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: classnames__default['default'](_defineProperty({}, styles$2.appSidebar, true))
    }, children, /*#__PURE__*/React__default['default'].createElement(antd.Button, {
      className: styles$2.appSidebarToggleBtn,
      icon: isHidden ? /*#__PURE__*/React__default['default'].createElement(RightOutlined$2, null) : /*#__PURE__*/React__default['default'].createElement(LeftOutlined$2, null),
      onClick: function onClick() {
        return setIsHidden(!isHidden);
      }
    })))
  );
});

var css_248z$3 = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n@import url('//at.alicdn.com/t/font_2898812_y5ir6hhtevt.css');\n.is-link {\n  cursor: pointer;\n}\n.is-link:hover {\n  color: #1890ff;\n}\n.is-red-link {\n  cursor: pointer;\n}\n.is-red-link:hover {\n  color: #1890ff;\n}\n.is-red-link:hover {\n  color: red;\n}\n.ant-typography {\n  margin-bottom: 0;\n}\n.index_appHeader__3QYAV {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  height: 45px;\n  padding: 10px;\n  border-bottom: 1px solid #d9d9d9;\n}\n.index_appHeader__3QYAV .index_moreIcon__24_Mx {\n  cursor: pointer;\n  font-size: 20px;\n}\n.index_appHeader__3QYAV img {\n  width: 20px;\n  height: 20px;\n}\n.index_appHeader__3QYAV .ant-typography {\n  margin-bottom: 0;\n}\n.index_appHeaderDropdown__2V84I .anticon {\n  margin-right: 6px;\n}\n";
var styles$3 = {"appHeader":"index_appHeader__3QYAV","moreIcon":"index_moreIcon__24_Mx","appHeaderDropdown":"index_appHeaderDropdown__2V84I"};
styleInject(css_248z$3);

var logo = "0541d5b663d4c159.png";

// import { ExportOutlined } from '@ant-design/icons';

var Title = antd.Typography.Title;
var AppHeader = /*#__PURE__*/React__default['default'].forwardRef(function (_ref, ref) {
  _objectDestructuringEmpty(_ref);

  // const [visible, setVisible] = useState(false);
  // const menu = (
  //   <Menu>
  //     <Menu.Item key="list" onClick={() => setVisible(true)}>
  //       <ProfileOutlined />
  //       方案管理
  //     </Menu.Item>
  //   </Menu>
  // );
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$3.appHeader,
    ref: ref
  }, /*#__PURE__*/React__default['default'].createElement(antd.Space, {
    align: "center"
  }, /*#__PURE__*/React__default['default'].createElement("img", {
    src: logo,
    alt: ""
  }), /*#__PURE__*/React__default['default'].createElement(Title, {
    level: 5
  }, "\u5730\u5149\u6570\u636E\u53EF\u89C6\u5316\u5E73\u53F0"))));
});

var css_248z$4 = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n@import url('//at.alicdn.com/t/font_2898812_y5ir6hhtevt.css');\n.is-link {\n  cursor: pointer;\n}\n.is-link:hover {\n  color: #1890ff;\n}\n.is-red-link {\n  cursor: pointer;\n}\n.is-red-link:hover {\n  color: #1890ff;\n}\n.is-red-link:hover {\n  color: red;\n}\n.ant-typography {\n  margin-bottom: 0;\n}\n.index_appDataset__2TUzW {\n  box-sizing: border-box;\n  height: 200px;\n  border-bottom: 1px solid #d9d9d9;\n  background-color: #ffffff;\n}\n.index_appDatasetHeader__qRnI7 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px 10px;\n}\n.index_appDatasetContent__2NUmd {\n  box-sizing: border-box;\n  height: calc(100% - 38px);\n  overflow: auto;\n  background-color: #ffffff;\n}\n.index_appDatasetItem__3M3mI {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.index_appDatasetItem__3M3mI:hover {\n  background-color: #ffffff;\n}\n.index_appDatasetItem__3M3mI.is-select {\n  background-color: rgba(24, 144, 255, 0.2);\n}\n.index_appDatasetItem__3M3mI.is-drag {\n  background-color: #ffffff !important;\n}\n.index_appDatasetItemContent__3aVtB {\n  flex-grow: 1;\n  flex-shrink: 1;\n  height: 100%;\n}\n.index_appDatasetItemContent__3aVtB .index_datasetInfo__1oNpu {\n  overflow: hidden;\n}\n.index_appDatasetItemContent__3aVtB .index_datasetInfo__1oNpu > * {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.index_appDatasetItemContent__3aVtB .index_datasetName__1LPaA {\n  margin-top: 4px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.index_appDatasetItemContent__3aVtB .index_datasetName__1LPaA .ant-typography-edit {\n  display: inline-flex !important;\n  align-items: center !important;\n  line-height: 21px;\n}\n.index_appDatasetItemContent__3aVtB .index_datasetFileName__3YzsL {\n  display: inline-block;\n  margin-top: 2px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 12px;\n}\n.index_appDatasetItemContent__3aVtB .index_datasetFileName__3YzsL i {\n  font-size: 14px;\n  line-height: 12px;\n}\n.index_appDatasetItemContent__3aVtB .index_btnGroup__gLpkx {\n  display: inline-flex;\n  align-items: center;\n  float: right;\n  height: 100%;\n  margin: 0 10px;\n  opacity: 0;\n}\n.index_appDatasetItemContent__3aVtB .index_btnGroup__gLpkx i + i {\n  margin-left: 6px;\n}\n.index_appDatasetItemContent__3aVtB:hover .index_btnGroup__gLpkx {\n  opacity: 1;\n}\n.index_datasetDetailDrawer__3XBSx .index_datasetExtraInfo__3j7_g {\n  position: absolute;\n  bottom: 24px;\n  left: 10px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.index_datasetDetailDrawer__3XBSx .index_tableTh__v6WJH {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.index_datasetDetailDrawer__3XBSx .ant-drawer-close {\n  padding: 16px;\n}\n.index_clamp__VhStw {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.index_addDatasetModal__35nrS .ant-modal-body {\n  padding-top: 10px;\n}\n.index_addDatasetModal__35nrS .index_exampleBtnGroup__1X-su {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.45);\n  display: flex;\n  justify-content: right;\n  align-items: center;\n  margin-bottom: 10px;\n}\n";
var styles$4 = {"appDataset":"index_appDataset__2TUzW","appDatasetHeader":"index_appDatasetHeader__qRnI7","appDatasetContent":"index_appDatasetContent__2NUmd","appDatasetItem":"index_appDatasetItem__3M3mI","appDatasetItemContent":"index_appDatasetItemContent__3aVtB","datasetInfo":"index_datasetInfo__1oNpu","datasetName":"index_datasetName__1LPaA","datasetFileName":"index_datasetFileName__3YzsL","btnGroup":"index_btnGroup__gLpkx","datasetDetailDrawer":"index_datasetDetailDrawer__3XBSx","datasetExtraInfo":"index_datasetExtraInfo__3j7_g","tableTh":"index_tableTh__v6WJH","clamp":"index_clamp__VhStw","addDatasetModal":"index_addDatasetModal__35nrS","exampleBtnGroup":"index_exampleBtnGroup__1X-su"};
styleInject(css_248z$4);

/**
 * 获取随机的id
 * @param prefix id前缀
 */

var getRandomId = function getRandomId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (prefix) {
    return "".concat(prefix, "-").concat(uuid.v4());
  }

  return uuid.v4();
};
/**
 * 获取元素到page左上角的像素值
 * @param element
 */

var getRealOffsetTop = function getRealOffsetTop(element) {
  var _element$offsetTop;

  var currentElement = element; // @ts-ignore

  var top = (_element$offsetTop = element.offsetTop) !== null && _element$offsetTop !== void 0 ? _element$offsetTop : 0;

  while (currentElement !== null) {
    var _element$offsetTop2;

    // @ts-ignore
    currentElement = currentElement.offsetParent; // @ts-ignore

    top += (_element$offsetTop2 = element.offsetTop) !== null && _element$offsetTop2 !== void 0 ? _element$offsetTop2 : 0;
  }

  return top;
};
/**
 * 生成以length结尾的唯一名称
 * @param list
 * @param field
 * @param prefix
 */

function generateUnRepeatValue(list, field, prefix) {
  var fieldList = list.map(function (item) {
    return item[field];
  });
  var index = 0;
  var newValue = index;

  do {
    index += 1;
    newValue = prefix ? prefix + index : index;
  } while (fieldList.includes(newValue));

  return newValue;
}
/**
 * 根据datasetId筛选
 * @param list
 * @param datasetId
 */

var filterByDatasetId = function filterByDatasetId(list, datasetId) {
  if (!datasetId) {
    return list;
  }

  return list.filter(function (item) {
    return item.datasetId === datasetId;
  });
};

// @ts-ignore
var store = new IdbKvStore__default['default']('dipperView');
function getDBStore(key) {
  return store.get(key);
}
function setDBStore(key, value) {
  return store.set(key, value);
}

/**
 * 获取dataset和filters的唯一映射值
 * @param dataset
 * @param filters
 */

var getFiltersKey = function getFiltersKey(dataset, filters) {
  return md5__default['default'](JSON.stringify({
    datasetId: dataset.id,
    filters: filters.map(function (item) {
      return {
        field: item.field.name,
        value: item.value
      };
    }).sort(function (a, b) {
      return a.field.localeCompare(b.field);
    })
  }));
};

var filterData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dataset, filters) {
    var _yield$getDBStore;

    var storeKey, filterDataObj, targetData, computedResult;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            storeKey = getFiltersKey(dataset, filters);
            _context.next = 3;
            return getDBStore('FILTERED_DATASET');

          case 3:
            _context.t1 = _yield$getDBStore = _context.sent;
            _context.t0 = _context.t1 !== null;

            if (!_context.t0) {
              _context.next = 7;
              break;
            }

            _context.t0 = _yield$getDBStore !== void 0;

          case 7:
            if (!_context.t0) {
              _context.next = 11;
              break;
            }

            _context.t2 = _yield$getDBStore;
            _context.next = 12;
            break;

          case 11:
            _context.t2 = {};

          case 12:
            filterDataObj = _context.t2;
            targetData = filterDataObj[storeKey];

            if (!targetData) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", targetData);

          case 16:
            computedResult = dataset.data.filter(function (item) {
              return filters.every(function (filter) {
                var name = filter.field.name;

                if (filter.field.type === 'string') {
                  var value = filter.value;

                  if (!value.length) {
                    return true;
                  }

                  return value.includes(item[name]);
                }

                if (filter.field.type === 'number') {
                  var _filter$value = _slicedToArray(filter.value, 2),
                      min = _filter$value[0],
                      max = _filter$value[1];

                  return item[name] >= min && item[name] <= max;
                }

                if (filter.field.type === 'boolean') {
                  return item[name] === filter.value;
                }

                return true;
              });
            });

            if (!targetData) {
              setDBStore('FILTERED_DATASET', _objectSpread2(_objectSpread2({}, filterDataObj), {}, _defineProperty({}, storeKey, computedResult)));
            }

            return _context.abrupt("return", computedResult);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function filterData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 将list持久化保存在indexDb中
 * @param list
 * @param setList
 * @param key
 */

var useIndexDBHook = function useIndexDBHook(list, setList, key) {
  React.useEffect(function () {
    getDBStore(key).then(function () {
      var newList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      setList(newList);
    });
  }, []);
  ahooks.useDebounceEffect(function () {
    setDBStore(key, list !== null && list !== void 0 ? list : []);
  }, [list], {
    wait: 500
  });
};

var DatasetModelContext = /*#__PURE__*/React.createContext();
var Provider$2 = DatasetModelContext.Provider,
    Consumer$2 = DatasetModelContext.Consumer;

var DatasetContext = function DatasetContext(_ref) {
  var children = _ref.children;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      datasetList = _useState2[0],
      setDatasetList = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      selectDatasetId = _useState4[0],
      setSelectDatasetId = _useState4[1];

  useIndexDBHook(datasetList, setDatasetList, 'DATASET_LIST');
  var selectDataset = React.useMemo(function () {
    if (!selectDatasetId) {
      return null;
    }

    return datasetList.find(function (item) {
      return item.id === selectDatasetId;
    });
  }, [selectDatasetId, datasetList]);
  return /*#__PURE__*/React__default['default'].createElement(Provider$2, {
    value: {
      datasetList: datasetList,
      setDatasetList: setDatasetList,
      selectDatasetId: selectDatasetId,
      setSelectDatasetId: setSelectDatasetId,
      selectDataset: selectDataset
    }
  }, children);
};

var useDataset = function useDataset() {
  var _useContext = React.useContext(DatasetModelContext),
      datasetList = _useContext.datasetList,
      setDatasetList = _useContext.setDatasetList;

  var getNewDatasetName = React.useCallback(function () {
    return generateUnRepeatValue(datasetList, 'name', '数据源');
  }, [datasetList]); // @ts-ignore

  var addDataset = React.useCallback( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
      var newDataset;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newDataset = _objectSpread2(_objectSpread2({}, params), {}, {
                id: getRandomId('dataset'),
                type: 'json',
                order: datasetList.length + 1,
                createTime: Date.now(),
                name: params.name || getNewDatasetName()
              });
              setDatasetList([].concat(_toConsumableArray(datasetList), [newDataset]));
              return _context.abrupt("return", newDataset);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [datasetList, getNewDatasetName, setDatasetList]);
  var copyDataset = React.useCallback(function (dataset) {
    var newDataset = _objectSpread2(_objectSpread2({}, dataset), {}, {
      id: getRandomId('dataset'),
      name: getNewDatasetName(),
      order: datasetList.length + 1,
      createTime: Date.now()
    });

    setDatasetList([].concat(_toConsumableArray(datasetList), [newDataset]));
    return newDataset;
  }, [datasetList, getNewDatasetName, setDatasetList]);
  var getTargetDataset = React.useCallback(function (datasetId) {
    var _datasetList$find;

    if (!datasetId) {
      return null;
    }

    return (_datasetList$find = datasetList.find(function (dataset) {
      return dataset.id === datasetId;
    })) !== null && _datasetList$find !== void 0 ? _datasetList$find : null;
  }, [datasetList]);
  var getNewDatasetFields = React.useCallback(function (data) {
    if (!data.length) {
      return [];
    }

    var firstData = data[0];
    return Object.entries(firstData).map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          name = _ref3[0],
          value = _ref3[1];

      if (typeof value === 'string' || typeof value === 'number') {
        var values = data.map(function (item) {
          return item[name];
        });
        var uniqueValues = Array.from(new Set(values));

        if (typeof value === 'string') {
          return {
            type: 'string',
            name: name,
            values: values,
            uniqueValues: uniqueValues
          };
        }

        return {
          type: 'number',
          name: name,
          values: values,
          uniqueValues: uniqueValues,
          range: [Math.min.apply(Math, _toConsumableArray(values)), Math.max.apply(Math, _toConsumableArray(values))]
        };
      }

      return {
        type: 'boolean',
        name: name
      };
    });
  }, []);
  return {
    addDataset: addDataset,
    getNewDatasetName: getNewDatasetName,
    copyDataset: copyDataset,
    getTargetDataset: getTargetDataset
  };
};

function dataTransform(eventData) {
  var originData = eventData.data;
  var data = [];
  var isCSV = false; // 转json/csv字符串的数据 => json数组格式

  if (Array.isArray(originData)) {
    data = originData;
  } else {
    try {
      if (originData.trim().startsWith('[') && originData.trim().endsWith(']')) {
        data = JSON.parse(originData);
      } else {
        var _papaparse$parse$data;

        data = (_papaparse$parse$data = papaparse__default['default'].parse(originData, {
          header: true,
          skipEmptyLines: true
        }).data) !== null && _papaparse$parse$data !== void 0 ? _papaparse$parse$data : [];
        isCSV = true;
      }
    } catch (e) {
      console.log(e); // message.error('数据解析有误');
    }
  } // 监测各个字段的类型


  var fields = [];

  if (data.length) {
    var firstRow = data[0];
    Object.keys(firstRow).forEach(function (name) {
      var value = firstRow[name];

      if (typeof value === 'number' || isCSV && /^(-?\d+)(\.\d+)?$/.test(String(value)) && !Number.isNaN(+value)) {
        fields.push({
          type: 'number',
          name: name,
          values: [],
          uniqueValues: [],
          range: [0, 0]
        });
      } else if (typeof value === 'boolean' || isCSV && /^(true|false)$/.test(value)) {
        fields.push({
          type: 'boolean',
          name: name
        });
      } else {
        fields.push({
          type: 'string',
          name: name,
          values: [],
          uniqueValues: []
        });
      }
    });
  } // 转换数据字段类型 + 收集总value


  data.forEach(function (item) {
    fields.forEach(function (field) {
      if (field.type === 'number') {
        if (isCSV) {
          item[field.name] = +item[field.name] || 0;
        }

        field.values.push(+item[field.name]);
      } else if (field.type === 'boolean') {
        if (isCSV) {
          item[field.name] = Boolean(item[field.name]) || false;
        }
      } else {
        field.values.push(item[field.name]);
      }
    });
  });
  fields.forEach(function (field, index) {
    if (field.type === 'number') {
      field.uniqueValues = Array.from(new Set(field.values));
      field.uniqueValues = field.uniqueValues.sort(function (a, b) {
        return a - b;
      });
      field.range = [+field.uniqueValues[0], +field.uniqueValues[field.uniqueValues.length - 1]];
    }

    if (field.type === 'string') {
      field.uniqueValues = Array.from(new Set(field.values));
    }
  });
  return {
    fields: fields,
    data: data
  };
}

var DEFAULT_FORM = {
  type: 'url',
  url: '',
  name: '',
  data: []
};

var normFile = function normFile(e) {
  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

var AddDatasetModal = function AddDatasetModal(_ref) {
  var visible = _ref.visible,
      setVisible = _ref.setVisible,
      loading = _ref.loading,
      setLoading = _ref.setLoading;

  var _useDataset = useDataset(),
      addDataset = _useDataset.addDataset,
      getNewDatasetName = _useDataset.getNewDatasetName;

  var _useState = React.useState(DEFAULT_FORM),
      _useState2 = _slicedToArray(_useState, 2),
      form = _useState2[0],
      setForm = _useState2[1];

  var typeOptions = React.useMemo(function () {
    return [{
      label: '文件链接',
      value: 'url'
    }, {
      label: '上传文件',
      value: 'upload'
    }];
  }, []); // eslint-disable-next-line consistent-return

  var onSubmit = React.useCallback( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(formData) {
      var type, url, data, name, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              type = formData.type, url = formData.url, data = formData.data, name = formData.name;

              if (!(type === 'url' && !url)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", antd.message.error('请输入文件链接'));

            case 3:
              if (!(type === 'upload' && !(data === null || data === void 0 ? void 0 : data.length))) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", antd.message.error('请选择上传文件'));

            case 5:
              setLoading(true);
              _context.prev = 6;
              _context.t0 = dataTransform;

              if (!(type === 'url')) {
                _context.next = 14;
                break;
              }

              _context.next = 11;
              return request__default['default'](url);

            case 11:
              _context.t1 = _context.sent;
              _context.next = 15;
              break;

            case 14:
              _context.t1 = data;

            case 15:
              _context.t2 = _context.t1;
              _context.t3 = {
                data: _context.t2
              };
              result = (0, _context.t0)(_context.t3);
              _context.next = 20;
              return addDataset({
                name: name,
                url: url,
                data: result.data,
                fields: result.fields
              });

            case 20:
              antd.message.success('数据源新建成功');
              setLoading(false);
              setVisible(false);
              _context.next = 28;
              break;

            case 25:
              _context.prev = 25;
              _context.t4 = _context["catch"](6);
              console.error(_context.t4);

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 25]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [addDataset, form, setVisible]);
  React.useEffect(function () {
    setForm(_objectSpread2(_objectSpread2({}, DEFAULT_FORM), {}, {
      name: getNewDatasetName()
    }));
  }, [getNewDatasetName, setForm]);
  var onTryExample = React.useCallback(function (exampleType) {
    var exampleMap = {
      '1': 'https://gw.alipayobjects.com/os/bmw-prod/ba077ba7-2a28-435f-b163-4def4a3c874d.json',
      '2': 'https://gw.alipayobjects.com/os/bmw-prod/d382b49f-c14b-4662-a281-63890798e969.json',
      '3': 'https://gw.alipayobjects.com/os/bmw-prod/bc47a55e-6d08-40ad-bc22-1fa62471aa39.json'
    };

    var newForm = _objectSpread2(_objectSpread2({}, form), {}, {
      type: 'url',
      // @ts-ignore
      url: exampleMap[String(exampleType)] || ''
    });

    setForm(newForm);
    onSubmit(newForm);
  }, [onSubmit]);
  return /*#__PURE__*/React__default['default'].createElement(antd.Modal, {
    title: "\u6DFB\u52A0\u6570\u636E\u6E90",
    className: styles$4.addDatasetModal,
    destroyOnClose: true,
    visible: visible,
    confirmLoading: loading,
    onOk: function onOk() {
      return onSubmit(form);
    },
    onCancel: function onCancel() {
      return setVisible(false);
    }
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$4.exampleBtnGroup
  }, /*#__PURE__*/React__default['default'].createElement("span", null, "\u793A\u4F8B\u6570\u636E\uFF1A"), /*#__PURE__*/React__default['default'].createElement(antd.Radio.Group, {
    size: "small"
  }, /*#__PURE__*/React__default['default'].createElement(antd.Radio.Button, {
    value: "1",
    onClick: function onClick() {
      return onTryExample(1);
    }
  }, "Point/Line/Hex/Heat"), /*#__PURE__*/React__default['default'].createElement(antd.Radio.Button, {
    value: "1",
    onClick: function onClick() {
      return onTryExample(2);
    }
  }, "Trip"), /*#__PURE__*/React__default['default'].createElement(antd.Radio.Button, {
    value: "1",
    onClick: function onClick() {
      return onTryExample(3);
    }
  }, "Polygon"))), /*#__PURE__*/React__default['default'].createElement(antd.Form, {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 20
    }
  }, /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u6570\u636E\u6E90\u540D\u79F0"
  }, /*#__PURE__*/React__default['default'].createElement(antd.Input, {
    value: form.name,
    placeholder: "\u8BF7\u8F93\u5165\u6570\u636E\u6E90\u540D\u79F0",
    onChange: function onChange(e) {
      return setForm(_objectSpread2(_objectSpread2({}, form), {}, {
        name: e.target.value
      }));
    }
  })), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u4E0A\u4F20\u7C7B\u578B"
  }, /*#__PURE__*/React__default['default'].createElement(antd.Radio.Group, {
    value: form.type,
    onChange: function onChange(e) {
      return setForm(_objectSpread2(_objectSpread2({}, form), {}, {
        type: e.target.value
      }));
    },
    options: typeOptions,
    optionType: "button",
    buttonStyle: "solid"
  })), form.type === 'url' ? /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u6587\u4EF6\u94FE\u63A5"
  }, /*#__PURE__*/React__default['default'].createElement(antd.Input, {
    value: form.url,
    onChange: function onChange(e) {
      return setForm(_objectSpread2(_objectSpread2({}, form), {}, {
        url: e.target.value
      }));
    },
    placeholder: "\u8F93\u5165\u6587\u4EF6\u94FE\u63A5"
  }))) : /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    valuePropName: "fileList",
    getValueFromEvent: normFile,
    label: "\u4E0A\u4F20\u6587\u4EF6"
  }, /*#__PURE__*/React__default['default'].createElement(antd.Upload.Dragger, {
    name: "data",
    accept: ".csv,.json",
    maxCount: 1,
    customRequest: function customRequest(_ref3) {
      var file = _ref3.file,
          onSuccess = _ref3.onSuccess;
      var fileReader = new FileReader();
      fileReader.readAsText(file);

      fileReader.onload = function (event) {
        var _event$target$result, _event$target;

        setForm(_objectSpread2(_objectSpread2({}, form), {}, {
          // @ts-ignore
          data: (_event$target$result = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result) !== null && _event$target$result !== void 0 ? _event$target$result : ''
        })); // @ts-ignore

        onSuccess();
      };
    }
  }, /*#__PURE__*/React__default['default'].createElement("p", null, /*#__PURE__*/React__default['default'].createElement(InboxOutlined$2, {
    style: {
      fontSize: 40,
      marginBottom: 8
    }
  })), /*#__PURE__*/React__default['default'].createElement("p", null, "\u53EF\u5C06\u4E0A\u4F20\u6587\u4EF6\u62D6\u62FD\u81F3\u8FD9\u91CC")))));
};

var css_248z$5 = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n@import url('//at.alicdn.com/t/font_2898812_y5ir6hhtevt.css');\n.is-link {\n  cursor: pointer;\n}\n.is-link:hover {\n  color: #1890ff;\n}\n.is-red-link {\n  cursor: pointer;\n}\n.is-red-link:hover {\n  color: #1890ff;\n}\n.is-red-link:hover {\n  color: red;\n}\n.ant-typography {\n  margin-bottom: 0;\n}\n.index_dragItem__3ZXnL .index_dragIcon__2Zaj3 {\n  display: inline-flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 100%;\n  cursor: move;\n  opacity: 0;\n}\n.index_dragItem__3ZXnL.is-drag .index_dragIcon__2Zaj3,\n.index_dragItem__3ZXnL:hover .index_dragIcon__2Zaj3 {\n  opacity: 1;\n}\n.index_dragContent__2v-Ug {\n  width: calc(100% - 30px);\n}\n";
var styles$5 = {"dragItem":"index_dragItem__3ZXnL","dragIcon":"index_dragIcon__2Zaj3","dragContent":"index_dragContent__2v-Ug"};
styleInject(css_248z$5);

function DragList(_ref) {
  var children = _ref.children,
      itemClassName = _ref.itemClassName,
      items = _ref.items,
      onDrag = _ref.onDrag,
      onItemClick = _ref.onItemClick,
      _ref$keyField = _ref.keyField,
      keyField = _ref$keyField === void 0 ? 'id' : _ref$keyField;
  var onDragEnd = React.useCallback(function (result) {
    if (result.destination) {
      var newItems = _toConsumableArray(items);

      var sourceIndex = result.source.index;
      var targetIndex = result.destination.index;

      var _newItems$splice = newItems.splice(sourceIndex, 1),
          _newItems$splice2 = _slicedToArray(_newItems$splice, 1),
          item = _newItems$splice2[0];

      newItems.splice(targetIndex, 0, item);
      onDrag(newItems);
    }
  }, [items, onDrag]);
  return /*#__PURE__*/React__default['default'].createElement(reactBeautifulDnd.DragDropContext, {
    onDragEnd: onDragEnd
  }, /*#__PURE__*/React__default['default'].createElement(reactBeautifulDnd.Droppable, {
    droppableId: "datasetDropable",
    direction: "vertical"
  }, function (provided) {
    return /*#__PURE__*/React__default['default'].createElement("div", _objectSpread2({
      ref: provided.innerRef
    }, provided.droppableProps), items.map(function (item, index) {
      return /*#__PURE__*/React__default['default'].createElement(reactBeautifulDnd.Draggable, {
        key: item[keyField],
        draggableId: String(item[keyField]),
        index: index
      }, function (itemProvided, snapshot) {
        var className = typeof itemClassName === 'function' ? itemClassName(items[index]) : itemClassName;
        return /*#__PURE__*/React__default['default'].createElement("div", _objectSpread2(_objectSpread2({}, itemProvided.draggableProps), {}, {
          ref: itemProvided.innerRef,
          className: classnames__default['default']([styles$5.dragItem, className, snapshot.isDragging ? 'is-drag' : null]),
          key: item[keyField],
          onClick: function onClick() {
            return onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(items[index]);
          }
        }), children(item, /*#__PURE__*/React__default['default'].createElement("i", _objectSpread2({
          className: classnames__default['default'](['dpiconfont', 'dpicon-yidong', styles$5.dragIcon])
        }, itemProvided.dragHandleProps))));
      });
    }));
  }));
}

var TypeTag = function TypeTag(_ref) {
  var type = _ref.type;
  return /*#__PURE__*/React__default['default'].createElement(antd.Tag, {
    color: DATASET_FIELD_TYPE_COLOR[type]
  }, type);
};

var _excluded$2 = ["currentDatasetId", "datasetList", "visible"];
var Paragraph = antd.Typography.Paragraph;
var TabPane = antd.Tabs.TabPane;

var DataDetailDrawer = function DataDetailDrawer(_ref) {
  var currentDatasetId = _ref.currentDatasetId,
      datasetList = _ref.datasetList,
      visible = _ref.visible,
      drawProps = _objectWithoutProperties(_ref, _excluded$2);

  var _useState = React.useState(currentDatasetId),
      _useState2 = _slicedToArray(_useState, 2),
      currentTab = _useState2[0],
      setCurrentTab = _useState2[1];

  React.useEffect(function () {
    setCurrentTab(currentDatasetId);
  }, [visible, currentDatasetId]);
  return /*#__PURE__*/React__default['default'].createElement(antd.Drawer, _objectSpread2(_objectSpread2({}, drawProps), {}, {
    visible: visible,
    bodyStyle: {
      padding: '0 10px'
    },
    placement: "bottom",
    height: 500,
    className: styles$4.datasetDetailDrawer
  }), /*#__PURE__*/React__default['default'].createElement(antd.Tabs, {
    activeKey: currentTab,
    onChange: setCurrentTab,
    destroyInactiveTabPane: true
  }, datasetList.map(function (dataset) {
    return /*#__PURE__*/React__default['default'].createElement(TabPane, {
      tab: dataset.name,
      key: dataset.id
    }, /*#__PURE__*/React__default['default'].createElement(antd.Table, {
      dataSource: dataset.data,
      rowKey: "id",
      columns: dataset.fields.map(function (item) {
        return {
          key: item.name,
          dataIndex: item.name,
          width: 150,
          render: function render(value) {
            return /*#__PURE__*/React__default['default'].createElement(antd.Tooltip, {
              title: value
            }, /*#__PURE__*/React__default['default'].createElement("span", {
              className: styles$4.clamp
            }, value));
          },
          title: function title() {
            return /*#__PURE__*/React__default['default'].createElement("div", {
              className: styles$4.tableTh
            }, /*#__PURE__*/React__default['default'].createElement(TypeTag, {
              type: item.type
            }), /*#__PURE__*/React__default['default'].createElement("span", {
              title: item.name
            }, item.name));
          }
        };
      }),
      scroll: {
        y: 310
      }
    }), /*#__PURE__*/React__default['default'].createElement("span", {
      className: styles$4.datasetExtraInfo
    }, "\u521B\u5EFA\u65F6\u95F4\uFF1A", moment__default['default'](dataset.createTime).format('YYYY-MM-DD HH:mm:ss')));
  })));
};

var useListHook = function useListHook(list, setList) {
  var onChange = React.useCallback(function (newItem) {
    var newList = _toConsumableArray(list);

    var targetIndex = newList.findIndex(function (item) {
      return item.id === newItem.id;
    });

    if (targetIndex > -1) {
      newList[targetIndex] = _objectSpread2(_objectSpread2({}, newList[targetIndex]), newItem);
    }

    setList(newList);
  }, [list, setList]);
  var onEditName = React.useCallback(function (newName, _ref) {
    var id = _ref.id,
        oldName = _ref.name;

    if (oldName === newName) {
      return;
    }

    var repeatNameItem = list.find(function (item) {
      return item.name === newName && item.id !== id;
    });

    if (repeatNameItem) {
      antd.message.error('名称与其他项重复');
      return;
    }

    onChange({
      id: id,
      name: newName
    });
  }, [list, onChange]);
  var onDragEnd = React.useCallback(function (newList) {
    newList.forEach(function (item, index) {
      Object.assign(item, {
        order: index + 1
      });
    });
    setList(newList);
  }, [setList]);
  var onDelete = React.useCallback(function (_ref2) {
    var id = _ref2.id;

    var newList = _toConsumableArray(list);

    var targetIndex = newList.findIndex(function (item) {
      return item.id === id;
    });

    if (targetIndex > -1) {
      newList.splice(targetIndex, 1);
    }

    setList(newList);
    antd.message.success('删除成功');
  }, [list, setList]);
  return {
    onEditName: onEditName,
    onDragEnd: onDragEnd,
    onDelete: onDelete,
    onChange: onChange
  };
};

var css_248z$6 = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n@import url('//at.alicdn.com/t/font_2898812_y5ir6hhtevt.css');\n.is-link {\n  cursor: pointer;\n}\n.is-link:hover {\n  color: #1890ff;\n}\n.is-red-link {\n  cursor: pointer;\n}\n.is-red-link:hover {\n  color: #1890ff;\n}\n.is-red-link:hover {\n  color: red;\n}\n.ant-typography {\n  margin-bottom: 0;\n}\n.index_editName__1j3cJ {\n  display: flex;\n  align-items: center;\n  height: 24px;\n}\n.index_editName__1j3cJ .index_editNameText__1InDt {\n  flex-shrink: 1;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.index_editName__1j3cJ .index_editNameText__1InDt:hover .index_editIcon__3QGyV {\n  opacity: 1;\n}\n.index_editName__1j3cJ .index_editIcon__3QGyV {\n  margin-left: 4px;\n  color: #1890ff;\n  cursor: pointer;\n  opacity: 0;\n}\n.index_editName__1j3cJ:hover .index_editIcon__3QGyV {\n  opacity: 1;\n}\n";
var styles$6 = {"editName":"index_editName__1j3cJ","editNameText":"index_editNameText__1InDt","editIcon":"index_editIcon__3QGyV"};
styleInject(css_248z$6);

var EditName = function EditName(_ref) {
  var name = _ref.name,
      onChange = _ref.onChange,
      className = _ref.className;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEdit = _useState2[0],
      setIsEdit = _useState2[1];

  var _useState3 = React.useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      cacheName = _useState4[0],
      setCacheName = _useState4[1];

  React.useEffect(function () {
    setCacheName(name);
  }, [name, isEdit]);
  var onSubmit = React.useCallback(function () {
    if (!cacheName) {
      antd.message.warn('请输入名称');
      return;
    }

    if (cacheName === name) {
      antd.message.warn('名称未更改');
    } else {
      onChange(cacheName);
      antd.message.success('名称修改成功');
    }

    setIsEdit(false);
  }, [onChange, cacheName, setIsEdit]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']([styles$6.editName, className])
  }, isEdit ? /*#__PURE__*/React__default['default'].createElement(antd.Input, {
    autoFocus: true,
    value: cacheName,
    size: "small",
    onPressEnter: onSubmit,
    onChange: function onChange(e) {
      return setCacheName(e.target.value);
    },
    onBlur: function onBlur() {
      return setIsEdit(false);
    },
    placeholder: "\u8BF7\u8F93\u5165\u540D\u79F0",
    suffix: /*#__PURE__*/React__default['default'].createElement(EnterOutlined$2, null)
  }) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    title: name,
    className: styles$6.editNameText
  }, name), /*#__PURE__*/React__default['default'].createElement(EditOutlined$2, {
    className: styles$6.editIcon,
    title: "\u7F16\u8F91\u540D\u79F0",
    onClick: function onClick(e) {
      e.stopPropagation();
      setIsEdit(true);
    }
  })));
};

var ConfigModelContext = /*#__PURE__*/React.createContext();
var Provider$3 = ConfigModelContext.Provider,
    Consumer$3 = ConfigModelContext.Consumer;

var MapContext$1 = function MapContext(_ref) {
  var children = _ref.children;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      layerList = _useState2[0],
      setLayerList = _useState2[1];

  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      filterList = _useState4[0],
      setFilterList = _useState4[1];

  var _useState5 = React.useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      interactiveList = _useState6[0],
      setInteractiveList = _useState6[1];

  useIndexDBHook(layerList, setLayerList, 'LAYER_LIST');
  useIndexDBHook(filterList, setFilterList, 'FILTER_LIST');
  useIndexDBHook(interactiveList, setInteractiveList, 'INTERACTIVE_LIST');
  return /*#__PURE__*/React__default['default'].createElement(Provider$3, {
    value: {
      layerList: layerList,
      setLayerList: setLayerList,
      filterList: filterList,
      setFilterList: setFilterList,
      interactiveList: interactiveList,
      setInteractiveList: setInteractiveList
    }
  }, children);
};

function DatasetList(_ref) {
  var className = _ref.className;

  var _useContext = React.useContext(DatasetModelContext),
      datasetList = _useContext.datasetList,
      setDatasetList = _useContext.setDatasetList,
      selectDatasetId = _useContext.selectDatasetId,
      setSelectDatasetId = _useContext.setSelectDatasetId;

  var _useContext2 = React.useContext(ConfigModelContext),
      layerList = _useContext2.layerList,
      filterList = _useContext2.filterList,
      interactiveList = _useContext2.interactiveList,
      setLayerList = _useContext2.setLayerList,
      setFilterList = _useContext2.setFilterList,
      setInteractiveList = _useContext2.setInteractiveList;

  var _useListHook = useListHook(datasetList, setDatasetList),
      onDragEnd = _useListHook.onDragEnd,
      onEditName = _useListHook.onEditName,
      onDelete = _useListHook.onDelete;

  var _useState = React.useState({
    visible: false,
    datasetId: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      datasetDetail = _useState2[0],
      setDatasetDetail = _useState2[1];

  var _useDataset = useDataset(),
      copyDataset = _useDataset.copyDataset;

  var onClick = function onClick(dataset) {
    setSelectDatasetId(selectDatasetId === dataset.id ? null : dataset.id);
  };

  var onCopy = function onCopy(dataset) {
    copyDataset(dataset);
    antd.message.success('复制成功');
  };

  var onFullDelete = function onFullDelete(dataset) {
    var id = dataset.id;
    onDelete(dataset);
    setLayerList(layerList.filter(function (item) {
      return item.datasetId !== id;
    }));
    setFilterList(filterList.filter(function (item) {
      return item.datasetId !== id;
    }));
    setInteractiveList(interactiveList.filter(function (item) {
      return item.datasetId !== id;
    }));
  };

  var checkDelete = function checkDelete(dataset) {
    var datasetId = dataset.id;

    if ([].concat(_toConsumableArray(layerList), _toConsumableArray(filterList), _toConsumableArray(interactiveList)).filter(function (item) {
      return item.datasetId === datasetId;
    }).length) {
      antd.Modal.confirm({
        content: '当前有配置关联至该数据源，确认是否删除',
        onOk: function onOk() {
          return onFullDelete(dataset);
        }
      });
    } else {
      onFullDelete(dataset);
    }
  };

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: className
  }, /*#__PURE__*/React__default['default'].createElement(DragList, {
    itemClassName: function itemClassName(item) {
      var _classnames;

      return classnames__default['default']((_classnames = {}, _defineProperty(_classnames, styles$4.appDatasetItem, true), _defineProperty(_classnames, 'is-select', item.id === selectDatasetId), _classnames));
    },
    items: datasetList,
    onDrag: onDragEnd,
    onItemClick: onClick
  }, function (dataset, icon) {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, icon, /*#__PURE__*/React__default['default'].createElement("div", {
      className: styles$4.appDatasetItemContent
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: styles$4.btnGroup
    }, /*#__PURE__*/React__default['default'].createElement(antd.Tooltip, {
      overlay: "\u590D\u5236",
      placement: "bottom"
    }, /*#__PURE__*/React__default['default'].createElement("i", {
      className: "dpiconfont dpicon-fuzhi is-link",
      onClick: function onClick(e) {
        e.stopPropagation();
        onCopy(dataset);
      }
    })), /*#__PURE__*/React__default['default'].createElement(antd.Popconfirm, {
      title: "\u786E\u8BA4\u5220\u9664\u6B64\u6570\u636E\u6E90",
      onConfirm: function onConfirm() {
        return checkDelete(dataset);
      }
    }, /*#__PURE__*/React__default['default'].createElement(antd.Tooltip, {
      overlay: "\u5220\u9664",
      placement: "bottom"
    }, /*#__PURE__*/React__default['default'].createElement("i", {
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      className: "dpiconfont dpicon-icon_shanchu is-red-link"
    })))), /*#__PURE__*/React__default['default'].createElement("div", {
      className: styles$4.datasetInfo
    }, /*#__PURE__*/React__default['default'].createElement(EditName, {
      name: dataset.name,
      onChange: function onChange(newName) {
        return onEditName(newName, dataset);
      }
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: classnames__default['default']([styles$4.datasetFileName, 'is-link']),
      onClick: function onClick(e) {
        e.stopPropagation();
        setDatasetDetail({
          datasetId: dataset.id,
          visible: true
        });
      }
    }, /*#__PURE__*/React__default['default'].createElement("span", null, "\u5171", dataset.data.length, "\u884C\u6570\u636E"), /*#__PURE__*/React__default['default'].createElement("i", {
      className: "dpiconfont dpicon-right"
    })))));
  }), !datasetList.length && /*#__PURE__*/React__default['default'].createElement(antd.Empty, {
    image: antd.Empty.PRESENTED_IMAGE_SIMPLE,
    description: "\u6682\u65E0\u6570\u636E\u6E90"
  }), /*#__PURE__*/React__default['default'].createElement(DataDetailDrawer, {
    currentDatasetId: datasetDetail.datasetId,
    datasetList: datasetList,
    visible: datasetDetail.visible,
    onClose: function onClose() {
      return setDatasetDetail(_objectSpread2(_objectSpread2({}, datasetDetail), {}, {
        visible: false
      }));
    }
  }));
}

var Title$1 = antd.Typography.Title;

var AppDataset = function AppDataset(_ref) {
  var style = _ref.style;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      addDatasetVisible = _useState2[0],
      setAddDatasetVisible = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$4.appDataset,
    style: style
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$4.appDatasetHeader
  }, /*#__PURE__*/React__default['default'].createElement(Title$1, {
    level: 5
  }, "\u6570\u636E\u6E90"), /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(antd.Tooltip, {
    overlay: '添加数据源'
  }, loading ? /*#__PURE__*/React__default['default'].createElement(antd.Spin, {
    spinning: true
  }) : /*#__PURE__*/React__default['default'].createElement(antd.Button, {
    type: "text",
    icon: /*#__PURE__*/React__default['default'].createElement(PlusOutlined$2, null),
    onClick: function onClick() {
      return setAddDatasetVisible(true);
    }
  })))), /*#__PURE__*/React__default['default'].createElement(DatasetList, {
    className: styles$4.appDatasetContent
  }), /*#__PURE__*/React__default['default'].createElement(AddDatasetModal, {
    visible: addDatasetVisible,
    setVisible: setAddDatasetVisible,
    loading: loading,
    setLoading: setLoading
  }));
};

var css_248z$7 = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n@import url('//at.alicdn.com/t/font_2898812_y5ir6hhtevt.css');\n.is-link {\n  cursor: pointer;\n}\n.is-link:hover {\n  color: #1890ff;\n}\n.is-red-link {\n  cursor: pointer;\n}\n.is-red-link:hover {\n  color: #1890ff;\n}\n.is-red-link:hover {\n  color: red;\n}\n.ant-typography {\n  margin-bottom: 0;\n}\n.index_appEdit__2tK5m {\n  height: calc(100% - 200px - 6px);\n}\n.index_appEdit__2tK5m .ant-tabs-nav {\n  margin-bottom: 0;\n}\n.index_appEdit__2tK5m .ant-tabs-content-holder {\n  overflow: auto;\n  background-color: #ffffff;\n}\n.index_appEdit__2tK5m .ant-tabs-tab {\n  margin-left: 16px;\n}\n.index_appEdit__2tK5m .ant-tabs-tab .ant-tabs-tab-btn {\n  font-size: 14px;\n}\n.index_appEdit__2tK5m .ant-tabs-tab i {\n  font-size: 16px;\n}\n.index_appEdit__2tK5m .ant-tabs-tab:first-child {\n  margin-left: 10px;\n}\n.index_appEdit__2tK5m .ant-tabs-tabpane,\n.index_appEdit__2tK5m .ant-tabs-content,\n.index_appEdit__2tK5m .ant-tabs-tabpane > div {\n  height: 100%;\n  overflow: auto;\n}\n.index_appEdit__2tK5m .ant-empty {\n  margin-top: 30px;\n}\n";
var styles$7 = {"appEdit":"index_appEdit__2tK5m"};
styleInject(css_248z$7);

var css_248z$8 = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n@import url('//at.alicdn.com/t/font_2898812_y5ir6hhtevt.css');\n.is-link {\n  cursor: pointer;\n}\n.is-link:hover {\n  color: #1890ff;\n}\n.is-red-link {\n  cursor: pointer;\n}\n.is-red-link:hover {\n  color: #1890ff;\n}\n.is-red-link:hover {\n  color: red;\n}\n.ant-typography {\n  margin-bottom: 0;\n}\n.index_layerList__2YhJR {\n  height: 100%;\n  overflow: auto;\n}\n.index_layerListContent__WKESm {\n  height: calc(100% - 40px);\n  overflow: auto;\n}\n.index_layerListFooter__Kltcz {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  background-color: #ffffff;\n  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n}\n.index_addFilterBtn__1Zt0W {\n  width: calc(100% - 8px);\n  height: 32px;\n  line-height: 20px;\n}\n.index_layerItem__1DhMa {\n  margin: 8px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.index_layerItem__1DhMa .index_editName__2vf0c {\n  width: calc(100% - 120px);\n}\n.index_layerItem__1DhMa .index_layerItemHeader__2ah3h {\n  display: flex;\n  align-items: center;\n}\n.index_layerItem__1DhMa .index_layerItemMore__sM9lu {\n  display: inline-flex;\n  align-items: center;\n  opacity: 0;\n}\n.index_layerItem__1DhMa .index_layerItemMore__sM9lu .dpiconfont,\n.index_layerItem__1DhMa .index_layerItemMore__sM9lu .ant-switch {\n  margin-left: 4px;\n}\n.index_layerItem__1DhMa:hover .index_layerItemMore__sM9lu {\n  opacity: 1;\n}\n.index_layerItem__1DhMa .ant-collapse-header {\n  padding: 6px 16px 6px 0 !important;\n}\n.index_layerItem__1DhMa .ant-collapse-content-box {\n  padding: 8px !important;\n  background-color: #ffffff;\n}\n.index_layerItem__1DhMa .ant-row {\n  margin-bottom: 8px;\n}\n.index_layerItem__1DhMa .ant-form-item-label {\n  padding-bottom: 0;\n}\n.index_layerItem__1DhMa .ant-form label {\n  font-size: 12px;\n}\n.index_layerItem__1DhMa .ant-slider {\n  padding-top: 0;\n}\n.index_splitPanel__2EYFk {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.index_colorWrapper__2mOgc,\n.index_rangeWrapper__38e8E {\n  position: relative;\n}\n.index_fieldFormCheckbox__ojr7r {\n  position: absolute;\n  top: 5px;\n  right: 0;\n  z-index: 1;\n}\n";
var styles$8 = {"layerList":"index_layerList__2YhJR","layerListContent":"index_layerListContent__WKESm","layerListFooter":"index_layerListFooter__Kltcz","addFilterBtn":"index_addFilterBtn__1Zt0W","layerItem":"index_layerItem__1DhMa","editName":"index_editName__2vf0c","layerItemHeader":"index_layerItemHeader__2ah3h","layerItemMore":"index_layerItemMore__sM9lu","splitPanel":"index_splitPanel__2EYFk","colorWrapper":"index_colorWrapper__2mOgc","rangeWrapper":"index_rangeWrapper__38e8E","fieldFormCheckbox":"index_fieldFormCheckbox__ojr7r"};
styleInject(css_248z$8);

var useLayer = function useLayer() {
  var _useContext = React.useContext(ConfigModelContext),
      layerList = _useContext.layerList,
      setLayerList = _useContext.setLayerList;

  var getDefaultConfig = React.useCallback(function (type) {
    var config = {};

    if (type === 'point') {
      config = DEFAULT_POINT_LAYER_CONFIG;
    }

    if (type === 'line') {
      config = DEFAULT_LINE_LAYER_CONFIG;
    }

    if (type === 'trip') {
      config = DEFAULT_TRIP_LAYER_CONFIG;
    }

    if (type === 'polygon') {
      config = DEFAULT_POLYGON_LAYER_CONFIG;
    }

    if (type === 'hex') {
      config = DEFAULT_HEX_LAYER_CONFIG;
    }

    return lodash.cloneDeep(config);
  }, []);
  var addLayer = React.useCallback(function (dataset) {
    var id = dataset.id;
    var newLayer = {
      id: getRandomId('layer'),
      name: generateUnRepeatValue(layerList, 'name', '图层'),
      order: layerList.length + 1,
      datasetId: id,
      createTime: Date.now(),
      config: getDefaultConfig('point'),
      type: 'point',
      visible: true,
      zIndex: 0
    };
    var newlayerList = [].concat(_toConsumableArray(layerList), [newLayer]);
    setLayerList(newlayerList);
    return newLayer;
  }, [getDefaultConfig, layerList, setLayerList]);
  var copyLayer = React.useCallback(function (filter) {
    var newFilter = _objectSpread2(_objectSpread2({}, lodash.cloneDeep(filter)), {}, {
      id: getRandomId('layer'),
      name: generateUnRepeatValue(layerList, 'name', '图层'),
      order: layerList.length + 1,
      createTime: Date.now()
    });

    setLayerList([].concat(_toConsumableArray(layerList), [newFilter]));
    return newFilter;
  }, [layerList, setLayerList]);
  return {
    addLayer: addLayer,
    copyLayer: copyLayer,
    getDefaultConfig: getDefaultConfig
  };
};

var _excluded$3 = ["value", "visible", "setVisible", "onChange"];

var DatasetModal = function DatasetModal(_ref) {
  var value = _ref.value,
      visible = _ref.visible,
      setVisible = _ref.setVisible,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded$3);

  var _useState = React.useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      selectDatasetId = _useState2[0],
      setSelectDatasetId = _useState2[1];

  var _useContext = React.useContext(DatasetModelContext),
      datasetList = _useContext.datasetList;

  React.useEffect(function () {
    setSelectDatasetId(value);
  }, [value, visible]);

  var onOk = function onOk() {
    if (!selectDatasetId) {
      antd.message.warn('未选中数据源');
      return;
    }

    onChange(selectDatasetId);
    setVisible(false);
  };

  return /*#__PURE__*/React__default['default'].createElement(antd.Modal, _objectSpread2({
    title: "\u9009\u62E9\u6570\u636E\u6E90",
    visible: visible,
    onOk: onOk,
    onCancel: function onCancel() {
      return setVisible(false);
    }
  }, props), /*#__PURE__*/React__default['default'].createElement("div", null, "\u9009\u4E2D\u6570\u636E\u6E90\uFF1A"), /*#__PURE__*/React__default['default'].createElement(antd.Select, {
    style: {
      width: '100%',
      marginTop: '6px'
    },
    placeholder: "\u8BF7\u9009\u62E9\u6570\u636E\u6E90",
    value: selectDatasetId,
    onChange: setSelectDatasetId,
    options: datasetList.map(function (item) {
      return {
        label: item.name,
        value: item.id
      };
    })
  }));
};

var css_248z$9 = ".index_filterSelect__3cPYr .ant-select-item-option-content,\n.index_filterSelectOption__wIUg8 .ant-select-item-option-content {\n  display: flex;\n  align-items: center;\n}\n.index_filterSelect__3cPYr .ant-select-item-option-content > span:first-child,\n.index_filterSelectOption__wIUg8 .ant-select-item-option-content > span:first-child {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  flex-shrink: 1;\n}\n.index_filterSelect__3cPYr .ant-tag,\n.index_filterSelectOption__wIUg8 .ant-tag {\n  flex-shrink: 0;\n  margin-left: 6px;\n  line-height: 16px;\n}\n";
var styles$9 = {"filterSelect":"index_filterSelect__3cPYr","filterSelectOption":"index_filterSelectOption__wIUg8"};
styleInject(css_248z$9);

var _excluded$4 = ["value", "fields", "onChange"];
var Option = antd.Select.Option;

var FieldSelect = function FieldSelect(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? undefined : _ref$value,
      _ref$fields = _ref.fields,
      fields = _ref$fields === void 0 ? [] : _ref$fields,
      _onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded$4);

  return /*#__PURE__*/React__default['default'].createElement(antd.Select, _objectSpread2({
    value: value !== null && value !== void 0 ? value : undefined,
    placeholder: "\u6682\u672A\u9009\u62E9\u5B57\u6BB5",
    className: styles$9.filterSelect,
    onChange: function onChange() {
      var newValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var targetField = fields.find(function (item) {
        return item.name === newValue;
      });
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(newValue, targetField);
    }
  }, props), fields.map(function (field) {
    return /*#__PURE__*/React__default['default'].createElement(Option, {
      key: field.name,
      value: field.name,
      className: styles$9.filterSelectOption
    }, /*#__PURE__*/React__default['default'].createElement("span", {
      title: field.name
    }, field.name), /*#__PURE__*/React__default['default'].createElement(antd.Tag, {
      color: DATASET_FIELD_TYPE_COLOR[field.type]
    }, field.type));
  }));
};

var useCommonHook = function useCommonHook(layer, onChange) {
  var _useDataset = useDataset(),
      getTargetDataset = _useDataset.getTargetDataset;

  var targetDataset = React.useMemo(function () {
    return getTargetDataset(layer.datasetId);
  }, [layer.datasetId, getTargetDataset]);
  var targetDatasetFields = React.useMemo(function () {
    var _targetDataset$fields;

    return (_targetDataset$fields = targetDataset === null || targetDataset === void 0 ? void 0 : targetDataset.fields) !== null && _targetDataset$fields !== void 0 ? _targetDataset$fields : [];
  }, [targetDataset]);
  var onFormChange = React.useCallback(function (changedConfig) {
    onChange(lodash.merge({}, layer, {
      config: changedConfig
    }));
  }, [onChange, layer]);
  return {
    targetDataset: targetDataset,
    targetDatasetFields: targetDatasetFields,
    onFormChange: onFormChange
  };
};

function LayerTypeSelect(_ref) {
  var layer = _ref.layer,
      _onChange = _ref.onChange;
  return /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u7C7B\u578B:"
  }, /*#__PURE__*/React__default['default'].createElement(antd.Select, {
    value: layer.type,
    options: LAYER_TYPE_LIST,
    onChange: function onChange(type) {
      return _onChange(_objectSpread2(_objectSpread2({}, layer), {}, {
        type: type
      }));
    }
  }));
}

var FieldRange = function FieldRange(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;
  var realValue = Array.isArray(value) ? value : [1, 100];

  var _useState = React.useState(realValue),
      _useState2 = _slicedToArray(_useState, 2),
      cacheValue = _useState2[0],
      setCacheValue = _useState2[1];

  React.useEffect(function () {
    setCacheValue(realValue);
  }, [realValue]);

  var onCacheValueChange = function onCacheValueChange(newValue) {
    setCacheValue(newValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(antd.Slider, {
    range: true,
    value: cacheValue,
    onChange: setCacheValue,
    onAfterChange: onCacheValueChange,
    min: 1,
    max: 100
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$8.splitPanel
  }, /*#__PURE__*/React__default['default'].createElement(antd.InputNumber, {
    value: cacheValue[0],
    onChange: function onChange(newMin) {
      return setCacheValue([newMin, cacheValue[1]]);
    },
    min: 1,
    max: cacheValue[1]
  }), /*#__PURE__*/React__default['default'].createElement(antd.InputNumber, {
    value: cacheValue[1],
    onChange: function onChange(newMax) {
      return setCacheValue([cacheValue[1], newMax]);
    },
    min: cacheValue[0],
    max: 100
  })));
};

var SingleRange = function SingleRange(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;

  var _useState = React.useState(value),
      _useState2 = _slicedToArray(_useState, 2),
      cacheValue = _useState2[0],
      setCacheValue = _useState2[1];

  React.useEffect(function () {
    setCacheValue(value);
  }, [value]);

  var onCacheValueChange = function onCacheValueChange(newValue) {
    setCacheValue(newValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(antd.Slider, {
    value: cacheValue,
    onChange: setCacheValue,
    onAfterChange: onCacheValueChange,
    min: 1,
    max: 100
  }), /*#__PURE__*/React__default['default'].createElement(antd.InputNumber, {
    value: cacheValue,
    onChange: setCacheValue,
    min: 1,
    max: 100
  }));
};

var RangeWrapper = function RangeWrapper(_ref) {
  var label = _ref.label,
      field = _ref.field,
      form = _ref.form,
      fields = _ref.fields;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showField = _useState2[0],
      setShowField = _useState2[1];

  var hasField = !!form.getFieldValue([field, 'field']);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$8.rangeWrapper
  }, /*#__PURE__*/React__default['default'].createElement(antd.Checkbox, {
    className: styles$8.fieldFormCheckbox,
    checked: showField,
    onChange: function onChange(e) {
      return setShowField(e.target.checked);
    }
  }, "\u57FA\u4E8E\u5B57\u6BB5"), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: label,
    labelCol: {
      span: 24
    },
    wrapperCol: {
      span: 24
    },
    name: [field, hasField ? 'rangeValue' : 'value']
  }, hasField ? /*#__PURE__*/React__default['default'].createElement(FieldRange, null) : /*#__PURE__*/React__default['default'].createElement(SingleRange, null)), showField && /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u57FA\u4E8E\u5B57\u6BB5",
    name: [field, 'field']
  }, /*#__PURE__*/React__default['default'].createElement(FieldSelect, {
    fields: fields,
    allowClear: true
  })));
};

var css_248z$a = ".index_sketch-color__3RioQ {\n  padding: 1px;\n  height: 22px;\n  border: 1px solid rgba(0, 0, 0, 0.42);\n  border-radius: 2px;\n  width: 22px;\n  margin-top: -3px;\n}\n.index_pasta-color-icon__2CZ_S {\n  cursor: pointer;\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  text-align: right;\n}\n.index_color-picker-container__2ATne .ant-popover-inner-content {\n  padding: 0 !important;\n}\n.index_color-picker-container__2ATne .index_sketch-picker__oZWFq input {\n  width: 100% !important;\n}\n";
var styles$a = {"sketch-color":"index_sketch-color__3RioQ","pasta-color-icon":"index_pasta-color-icon__2CZ_S","color-picker-container":"index_color-picker-container__2ATne","sketch-picker":"index_sketch-picker__oZWFq"};
styleInject(css_248z$a);

var presetColors = ['#5B8FF9', '#5AD8A6', '#5D7092', '#F6BD16', '#E8684A', '#6DC8EC', '#9270CA', '#FF9D4D', '#269A99', '#FF99C3', '#A9ABB1'];
var ColorPicker = /*#__PURE__*/React.memo(function (props) {
  var onChange = props.onChange,
      value = props.value,
      _props$disable = props.disable,
      disable = _props$disable === void 0 ? false : _props$disable;
  var onChangeComplete = React.useCallback(function (color) {
    onChange(color.hex);
  }, [onChange, value]);
  return /*#__PURE__*/React.createElement(antd.Button, {
    type: "text",
    disabled: disable,
    style: {
      padding: '0'
    }
  }, /*#__PURE__*/React.createElement(antd.Popover, {
    trigger: "click",
    placement: "left",
    overlayClassName: styles$a['color-picker-container'],
    content: /*#__PURE__*/React.createElement(reactColor.SketchPicker, {
      color: value,
      disableAlpha: true,
      onChange: onChangeComplete,
      presetColors: presetColors
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$a['sketch-color']
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$a['pasta-color-icon'],
    style: {
      background: value
    }
  }))));
});

var RangeColorPicker = function RangeColorPicker(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [DEFAULT_COLOR, DEFAULT_COLOR] : _ref$value,
      _onChange = _ref.onChange;
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$8.splitPanel
  }, /*#__PURE__*/React__default['default'].createElement(ColorPicker, {
    value: value[0],
    onChange: function onChange(newStartColor) {
      return _onChange === null || _onChange === void 0 ? void 0 : _onChange([newStartColor, value[1]]);
    }
  }), /*#__PURE__*/React__default['default'].createElement(ColorPicker, {
    value: value[1],
    onChange: function onChange(newEndColor) {
      return _onChange === null || _onChange === void 0 ? void 0 : _onChange([value[0], newEndColor]);
    }
  }));
};

var sequential = [
	[
		"rgb(247, 251, 255)",
		"rgb(222, 235, 247)",
		"rgb(198, 219, 239)",
		"rgb(158, 202, 225)",
		"rgb(107, 174, 214)",
		"rgb(66, 146, 198)",
		"rgb(33, 113, 181)",
		"rgb(8, 81, 156)",
		"rgb(8, 48, 107)"
	],
	[
		"rgb(247, 252, 253)",
		"rgb(229, 245, 249)",
		"rgb(204, 236, 230)",
		"rgb(153, 216, 201)",
		"rgb(102, 194, 164)",
		"rgb(65, 174, 118)",
		"rgb(35, 139, 69)",
		"rgb(0, 109, 44)",
		"rgb(0, 68, 27)"
	],
	[
		"rgb(247, 252, 253)",
		"rgb(224, 236, 244)",
		"rgb(191, 211, 230)",
		"rgb(158, 188, 218)",
		"rgb(140, 150, 198)",
		"rgb(140, 107, 177)",
		"rgb(136, 65, 157)",
		"rgb(129, 15, 124)",
		"rgb(77, 0, 75)"
	],
	[
		"rgb(247, 252, 240)",
		"rgb(224, 243, 219)",
		"rgb(204, 235, 197)",
		"rgb(168, 221, 181)",
		"rgb(123, 204, 196)",
		"rgb(78, 179, 211)",
		"rgb(43, 140, 190)",
		"rgb(8, 104, 172)",
		"rgb(8, 64, 129)"
	],
	[
		"rgb(255, 247, 236)",
		"rgb(254, 232, 200)",
		"rgb(253, 212, 158)",
		"rgb(253, 187, 132)",
		"rgb(252, 141, 89)",
		"rgb(239, 101, 72)",
		"rgb(215, 48, 31)",
		"rgb(179, 0, 0)",
		"rgb(127, 0, 0)"
	],
	[
		"rgb(255, 247, 251)",
		"rgb(236, 231, 242)",
		"rgb(208, 209, 230)",
		"rgb(166, 189, 219)",
		"rgb(116, 169, 207)",
		"rgb(54, 144, 192)",
		"rgb(5, 112, 176)",
		"rgb(4, 90, 141)",
		"rgb(2, 56, 88)"
	],
	[
		"rgb(255, 247, 251)",
		"rgb(236, 226, 240)",
		"rgb(208, 209, 230)",
		"rgb(166, 189, 219)",
		"rgb(103, 169, 207)",
		"rgb(54, 144, 192)",
		"rgb(2, 129, 138)",
		"rgb(1, 108, 89)",
		"rgb(1, 70, 54)"
	],
	[
		"rgb(247, 244, 249)",
		"rgb(231, 225, 239)",
		"rgb(212, 185, 218)",
		"rgb(201, 148, 199)",
		"rgb(223, 101, 176)",
		"rgb(231, 41, 138)",
		"rgb(206, 18, 86)",
		"rgb(152, 0, 67)",
		"rgb(103, 0, 31)"
	],
	[
		"rgb(255, 247, 243)",
		"rgb(253, 224, 221)",
		"rgb(252, 197, 192)",
		"rgb(250, 159, 181)",
		"rgb(247, 104, 161)",
		"rgb(221, 52, 151)",
		"rgb(174, 1, 126)",
		"rgb(122, 1, 119)",
		"rgb(73, 0, 106)"
	],
	[
		"rgb(255, 255, 229)",
		"rgb(247, 252, 185)",
		"rgb(217, 240, 163)",
		"rgb(173, 221, 142)",
		"rgb(120, 198, 121)",
		"rgb(65, 171, 93)",
		"rgb(35, 132, 67)",
		"rgb(0, 104, 55)",
		"rgb(0, 69, 41)"
	],
	[
		"rgb(255, 255, 217)",
		"rgb(237, 248, 177)",
		"rgb(199, 233, 180)",
		"rgb(127, 205, 187)",
		"rgb(65, 182, 196)",
		"rgb(29, 145, 192)",
		"rgb(34, 94, 168)",
		"rgb(37, 52, 148)",
		"rgb(8, 29, 88)"
	],
	[
		"rgb(255, 255, 229)",
		"rgb(255, 247, 188)",
		"rgb(254, 227, 145)",
		"rgb(254, 196, 79)",
		"rgb(254, 153, 41)",
		"rgb(236, 112, 20)",
		"rgb(204, 76, 2)",
		"rgb(153, 52, 4)",
		"rgb(102, 37, 6)"
	],
	[
		"rgb(255, 255, 204)",
		"rgb(255, 237, 160)",
		"rgb(254, 217, 118)",
		"rgb(254, 178, 76)",
		"rgb(253, 141, 60)",
		"rgb(252, 78, 42)",
		"rgb(227, 26, 28)",
		"rgb(189, 0, 38)",
		"rgb(128, 0, 38)"
	]
];
var singlehue = [
	[
		"rgb(247, 252, 245)",
		"rgb(229, 245, 224)",
		"rgb(199, 233, 192)",
		"rgb(161, 217, 155)",
		"rgb(116, 196, 118)",
		"rgb(65, 171, 93)",
		"rgb(35, 139, 69)",
		"rgb(0, 109, 44)",
		"rgb(0, 68, 27)"
	],
	[
		"rgb(255, 255, 255)",
		"rgb(240, 240, 240)",
		"rgb(217, 217, 217)",
		"rgb(189, 189, 189)",
		"rgb(150, 150, 150)",
		"rgb(115, 115, 115)",
		"rgb(82, 82, 82)",
		"rgb(37, 37, 37)",
		"rgb(0, 0, 0)"
	],
	[
		"rgb(255, 245, 235)",
		"rgb(254, 230, 206)",
		"rgb(253, 208, 162)",
		"rgb(253, 174, 107)",
		"rgb(253, 141, 60)",
		"rgb(241, 105, 19)",
		"rgb(217, 72, 1)",
		"rgb(166, 54, 3)",
		"rgb(127, 39, 4)"
	],
	[
		"rgb(252, 251, 253)",
		"rgb(239, 237, 245)",
		"rgb(218, 218, 235)",
		"rgb(188, 189, 220)",
		"rgb(158, 154, 200)",
		"rgb(128, 125, 186)",
		"rgb(106, 81, 163)",
		"rgb(84, 39, 143)",
		"rgb(63, 0, 125)"
	],
	[
		"rgb(255, 245, 240)",
		"rgb(254, 224, 210)",
		"rgb(252, 187, 161)",
		"rgb(252, 146, 114)",
		"rgb(251, 106, 74)",
		"rgb(239, 59, 44)",
		"rgb(203, 24, 29)",
		"rgb(165, 15, 21)",
		"rgb(103, 0, 13)"
	]
];
var diverging = [
	[
		"rgb(140, 81, 10)",
		"rgb(191, 129, 45)",
		"rgb(223, 194, 125)",
		"rgb(246, 232, 195)",
		"rgb(245, 245, 245)",
		"rgb(199, 234, 229)",
		"rgb(128, 205, 193)",
		"rgb(53, 151, 143)",
		"rgb(1, 102, 94)"
	],
	[
		"rgb(197, 27, 125)",
		"rgb(222, 119, 174)",
		"rgb(241, 182, 218)",
		"rgb(253, 224, 239)",
		"rgb(247, 247, 247)",
		"rgb(230, 245, 208)",
		"rgb(184, 225, 134)",
		"rgb(127, 188, 65)",
		"rgb(77, 146, 33)"
	],
	[
		"rgb(118, 42, 131)",
		"rgb(153, 112, 171)",
		"rgb(194, 165, 207)",
		"rgb(231, 212, 232)",
		"rgb(247, 247, 247)",
		"rgb(217, 240, 211)",
		"rgb(166, 219, 160)",
		"rgb(90, 174, 97)",
		"rgb(27, 120, 55)"
	],
	[
		"rgb(179, 88, 6)",
		"rgb(224, 130, 20)",
		"rgb(253, 184, 99)",
		"rgb(254, 224, 182)",
		"rgb(247, 247, 247)",
		"rgb(216, 218, 235)",
		"rgb(178, 171, 210)",
		"rgb(128, 115, 172)",
		"rgb(84, 39, 136)"
	],
	[
		"rgb(178, 24, 43)",
		"rgb(214, 96, 77)",
		"rgb(244, 165, 130)",
		"rgb(253, 219, 199)",
		"rgb(247, 247, 247)",
		"rgb(209, 229, 240)",
		"rgb(146, 197, 222)",
		"rgb(67, 147, 195)",
		"rgb(33, 102, 172)"
	],
	[
		"rgb(178, 24, 43)",
		"rgb(214, 96, 77)",
		"rgb(244, 165, 130)",
		"rgb(253, 219, 199)",
		"rgb(255, 255, 255)",
		"rgb(224, 224, 224)",
		"rgb(186, 186, 186)",
		"rgb(135, 135, 135)",
		"rgb(77, 77, 77)"
	],
	[
		"rgb(215, 48, 39)",
		"rgb(244, 109, 67)",
		"rgb(253, 174, 97)",
		"rgb(254, 224, 144)",
		"rgb(255, 255, 191)",
		"rgb(224, 243, 248)",
		"rgb(171, 217, 233)",
		"rgb(116, 173, 209)",
		"rgb(69, 117, 180)"
	],
	[
		"rgb(215, 48, 39)",
		"rgb(244, 109, 67)",
		"rgb(253, 174, 97)",
		"rgb(254, 224, 139)",
		"rgb(255, 255, 191)",
		"rgb(217, 239, 139)",
		"rgb(166, 217, 106)",
		"rgb(102, 189, 99)",
		"rgb(26, 152, 80)"
	],
	[
		"rgb(213, 62, 79)",
		"rgb(244, 109, 67)",
		"rgb(253, 174, 97)",
		"rgb(254, 224, 139)",
		"rgb(255, 255, 191)",
		"rgb(230, 245, 152)",
		"rgb(171, 221, 164)",
		"rgb(102, 194, 165)",
		"rgb(50, 136, 189)"
	]
];
var COLOR_LIST_MAP = {
	sequential: sequential,
	singlehue: singlehue,
	diverging: diverging
};

var css_248z$b = ".index_colorList__3WDe1 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.index_colorItem__rAIxK {\n  height: 16px;\n  flex-grow: 1;\n}\n";
var styles$b = {"colorList":"index_colorList__3WDe1","colorItem":"index_colorItem__rAIxK"};
styleInject(css_248z$b);

var Option$1 = antd.Select.Option;

var FieldColorPicker = function FieldColorPicker(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange;
  var colorTypeOptions = React.useMemo(function () {
    return Object.keys(COLOR_LIST_MAP).map(function (item) {
      return {
        label: item,
        value: item
      };
    });
  }, []);

  var _useState = React.useState(function () {
    var targetType = colorTypeOptions.find(function (option) {
      return COLOR_LIST_MAP[option.value].find(function (colorList) {
        return lodash.isEqual(colorList, value);
      });
    });
    return (targetType === null || targetType === void 0 ? void 0 : targetType.value) || colorTypeOptions[0].value;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      colorType = _useState2[0],
      setColorType = _useState2[1];

  var colorList = React.useMemo(function () {
    return COLOR_LIST_MAP[colorType] || [];
  }, [colorType]);
  React.useEffect(function () {
    if (!colorList.find(function (item) {
      return lodash.isEqual(item, value);
    })) {
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(colorList[0]);
    }
  }, [value, colorList, _onChange]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u989C\u8272\u7C7B\u578B",
    labelCol: {
      span: 7
    },
    wrapperCol: {
      span: 17
    }
  }, /*#__PURE__*/React__default['default'].createElement(antd.Select, {
    value: colorType,
    onChange: setColorType,
    options: colorTypeOptions
  })), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u989C\u8272\u533A\u95F4",
    labelCol: {
      span: 7
    },
    wrapperCol: {
      span: 17
    }
  }, /*#__PURE__*/React__default['default'].createElement(antd.Select, {
    value: JSON.stringify(value),
    onChange: function onChange(newValue) {
      _onChange === null || _onChange === void 0 ? void 0 : _onChange(JSON.parse(newValue));
    }
  }, colorList.map(function (item, index) {
    return /*#__PURE__*/React__default['default'].createElement(Option$1, {
      key: index,
      value: JSON.stringify(item)
    }, /*#__PURE__*/React__default['default'].createElement("div", {
      className: styles$b.colorList
    }, item === null || item === void 0 ? void 0 : item.map(function (color) {
      return /*#__PURE__*/React__default['default'].createElement("div", {
        key: color,
        className: styles$b.colorItem,
        style: {
          backgroundColor: color
        }
      });
    })));
  }))));
};

var ColorWrapper = function ColorWrapper(_ref) {
  var label = _ref.label,
      form = _ref.form,
      field = _ref.field,
      fields = _ref.fields,
      _ref$range = _ref.range,
      range = _ref$range === void 0 ? false : _ref$range,
      _ref$displayFieldChec = _ref.displayFieldCheckbox,
      displayFieldCheckbox = _ref$displayFieldChec === void 0 ? true : _ref$displayFieldChec;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showField = _useState2[0],
      setShowField = _useState2[1];

  var colorField = form.getFieldValue([field, 'field']);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$8.colorWrapper
  }, displayFieldCheckbox && /*#__PURE__*/React__default['default'].createElement(antd.Checkbox, {
    className: styles$8.fieldFormCheckbox,
    checked: showField,
    onChange: function onChange(e) {
      return setShowField(e.target.checked);
    }
  }, "\u57FA\u4E8E\u5B57\u6BB5"), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    noStyle: true,
    shouldUpdate: function shouldUpdate(pre, cur) {
      var _pre$field, _cur$field;

      return (pre === null || pre === void 0 ? void 0 : (_pre$field = pre[field]) === null || _pre$field === void 0 ? void 0 : _pre$field.field) !== (cur === null || cur === void 0 ? void 0 : (_cur$field = cur[field]) === null || _cur$field === void 0 ? void 0 : _cur$field.field);
    }
  }, function () {
    var content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null);

    if (!colorField) {
      content = range ? /*#__PURE__*/React__default['default'].createElement(RangeColorPicker, null) : /*#__PURE__*/React__default['default'].createElement(ColorPicker, {
        value: DEFAULT_COLOR,
        onChange: function onChange() {}
      });
    } else {
      content = /*#__PURE__*/React__default['default'].createElement(FieldColorPicker, null);
    }

    return /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
      label: label,
      labelCol: {
        span: 24
      },
      wrapperCol: {
        span: 24
      },
      name: [field, 'value']
    }, content);
  }), showField && /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u57FA\u4E8E\u5B57\u6BB5",
    name: [field, 'field']
  }, /*#__PURE__*/React__default['default'].createElement(FieldSelect, {
    fields: fields,
    allowClear: true
  })));
};

var PointLayer = function PointLayer(_ref) {
  var layer = _ref.layer,
      onChange = _ref.onChange;

  var _Form$useForm = antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useCommonHook = useCommonHook(layer, onChange),
      targetDatasetFields = _useCommonHook.targetDatasetFields,
      onFormChange = _useCommonHook.onFormChange;

  React.useEffect(function () {
    form.setFieldsValue(layer.config);
  }, [layer.config]);
  return /*#__PURE__*/React__default['default'].createElement(antd.Form, {
    labelCol: {
      span: 7
    },
    wrapperCol: {
      span: 19
    },
    labelAlign: "left",
    form: form,
    onValuesChange: onFormChange
  }, /*#__PURE__*/React__default['default'].createElement(LayerTypeSelect, {
    layer: layer,
    onChange: onChange
  }), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u7ECF\u5EA6",
    name: "lngField"
  }, /*#__PURE__*/React__default['default'].createElement(FieldSelect, {
    fields: targetDatasetFields
  })), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u7EAC\u5EA6",
    name: "latField"
  }, /*#__PURE__*/React__default['default'].createElement(FieldSelect, {
    fields: targetDatasetFields
  })), /*#__PURE__*/React__default['default'].createElement(ColorWrapper, {
    label: "\u586B\u5145\u989C\u8272",
    field: "fillColor",
    form: form,
    fields: targetDatasetFields
  }), /*#__PURE__*/React__default['default'].createElement(RangeWrapper, {
    label: "\u534A\u5F84",
    field: "radius",
    form: form,
    fields: targetDatasetFields
  }));
};

var LineLayer = function LineLayer(_ref) {
  var layer = _ref.layer,
      onChange = _ref.onChange;

  var _Form$useForm = antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useCommonHook = useCommonHook(layer, onChange),
      targetDatasetFields = _useCommonHook.targetDatasetFields,
      onFormChange = _useCommonHook.onFormChange;

  React.useEffect(function () {
    form.setFieldsValue(layer.config);
  }, [layer.config]);
  return /*#__PURE__*/React__default['default'].createElement(antd.Form, {
    labelCol: {
      span: 7
    },
    wrapperCol: {
      span: 19
    },
    labelAlign: "left",
    form: form,
    onValuesChange: onFormChange
  }, /*#__PURE__*/React__default['default'].createElement(LayerTypeSelect, {
    layer: layer,
    onChange: onChange
  }), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u7EBF\u6BB5\u7C7B\u578B",
    name: "lineType"
  }, /*#__PURE__*/React__default['default'].createElement(antd.Select, {
    options: LINE_TYPE_LIST
  })), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u8D77\u70B9\u7ECF\u5EA6",
    name: "startLngField"
  }, /*#__PURE__*/React__default['default'].createElement(FieldSelect, {
    fields: targetDatasetFields
  })), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u8D77\u70B9\u7EAC\u5EA6",
    name: "startLatField"
  }, /*#__PURE__*/React__default['default'].createElement(FieldSelect, {
    fields: targetDatasetFields
  })), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u7EC8\u70B9\u7ECF\u5EA6",
    name: "endLngField"
  }, /*#__PURE__*/React__default['default'].createElement(FieldSelect, {
    fields: targetDatasetFields
  })), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u7EC8\u70B9\u7EAC\u5EA6",
    name: "endLatField"
  }, /*#__PURE__*/React__default['default'].createElement(FieldSelect, {
    fields: targetDatasetFields
  })), /*#__PURE__*/React__default['default'].createElement(ColorWrapper, {
    label: "\u989C\u8272",
    field: "color",
    form: form,
    fields: targetDatasetFields,
    range: true
  }), /*#__PURE__*/React__default['default'].createElement(RangeWrapper, {
    label: "\u7EBF\u5BBD",
    field: "lineWidth",
    form: form,
    fields: targetDatasetFields
  }));
};

var TripLayer = function TripLayer(_ref) {
  var layer = _ref.layer,
      onChange = _ref.onChange;

  var _Form$useForm = antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useCommonHook = useCommonHook(layer, onChange),
      targetDatasetFields = _useCommonHook.targetDatasetFields,
      onFormChange = _useCommonHook.onFormChange;

  React.useEffect(function () {
    form.setFieldsValue(layer.config);
  }, [layer.config]);
  return /*#__PURE__*/React__default['default'].createElement(antd.Form, {
    labelCol: {
      span: 7
    },
    wrapperCol: {
      span: 19
    },
    labelAlign: "left",
    form: form,
    onValuesChange: onFormChange
  }, /*#__PURE__*/React__default['default'].createElement(LayerTypeSelect, {
    layer: layer,
    onChange: onChange
  }), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "Geojson",
    name: "geoField",
    tooltip: '请以","分隔经纬度，以";"分隔各点，如: 12.1,13.4;54.1,69.2...'
  }, /*#__PURE__*/React__default['default'].createElement(FieldSelect, {
    fields: targetDatasetFields
  })), /*#__PURE__*/React__default['default'].createElement(ColorWrapper, {
    label: "\u989C\u8272",
    field: "color",
    form: form,
    fields: targetDatasetFields,
    range: true
  }), /*#__PURE__*/React__default['default'].createElement(RangeWrapper, {
    label: "\u7EBF\u5BBD",
    field: "lineWidth",
    form: form,
    fields: targetDatasetFields
  }));
};

var PolygonLayer = function PolygonLayer(_ref) {
  var layer = _ref.layer,
      onChange = _ref.onChange;

  var _Form$useForm = antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useCommonHook = useCommonHook(layer, onChange),
      targetDatasetFields = _useCommonHook.targetDatasetFields,
      onFormChange = _useCommonHook.onFormChange;

  React.useEffect(function () {
    form.setFieldsValue(layer.config);
  }, [form, layer.config]);
  return /*#__PURE__*/React__default['default'].createElement(antd.Form, {
    labelCol: {
      span: 7
    },
    wrapperCol: {
      span: 19
    },
    labelAlign: "left",
    form: form,
    onValuesChange: onFormChange
  }, /*#__PURE__*/React__default['default'].createElement(LayerTypeSelect, {
    layer: layer,
    onChange: onChange
  }), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "Geojson",
    name: "geoField",
    tooltip: '请以","分隔经纬度，以";"分隔各点，如: 12.1,13.4;54.1,69.2...'
  }, /*#__PURE__*/React__default['default'].createElement(FieldSelect, {
    fields: targetDatasetFields
  })), /*#__PURE__*/React__default['default'].createElement(ColorWrapper, {
    label: "\u586B\u5145\u989C\u8272",
    field: "fillColor",
    form: form,
    fields: targetDatasetFields
  }), /*#__PURE__*/React__default['default'].createElement(ColorWrapper, {
    label: "\u8FB9\u6846\u989C\u8272",
    field: "borderColor",
    form: form,
    fields: targetDatasetFields
  }), /*#__PURE__*/React__default['default'].createElement(RangeWrapper, {
    label: "\u8FB9\u6846\u5BBD\u5EA6",
    field: "borderWidth",
    form: form,
    fields: targetDatasetFields
  }));
};

var HexLayer = function HexLayer(_ref) {
  var layer = _ref.layer,
      onChange = _ref.onChange;

  var _Form$useForm = antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useCommonHook = useCommonHook(layer, onChange),
      targetDatasetFields = _useCommonHook.targetDatasetFields,
      onFormChange = _useCommonHook.onFormChange;

  React.useEffect(function () {
    form.setFieldsValue(layer.config);
  }, [layer.config]);
  return /*#__PURE__*/React__default['default'].createElement(antd.Form, {
    labelCol: {
      span: 7
    },
    wrapperCol: {
      span: 19
    },
    labelAlign: "left",
    form: form,
    onValuesChange: onFormChange
  }, /*#__PURE__*/React__default['default'].createElement(LayerTypeSelect, {
    layer: layer,
    onChange: onChange
  }), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "hexId",
    name: "hexId"
  }, /*#__PURE__*/React__default['default'].createElement(FieldSelect, {
    fields: targetDatasetFields
  })), /*#__PURE__*/React__default['default'].createElement(ColorWrapper, {
    label: "\u586B\u5145\u989C\u8272",
    field: "fillColor",
    form: form,
    fields: targetDatasetFields
  }));
};

var HeatLayer = function HeatLayer(_ref) {
  var layer = _ref.layer,
      onChange = _ref.onChange;

  var _Form$useForm = antd.Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _useCommonHook = useCommonHook(layer, onChange),
      targetDatasetFields = _useCommonHook.targetDatasetFields,
      onFormChange = _useCommonHook.onFormChange;

  var _useDataset = useDataset(),
      getTargetDataset = _useDataset.getTargetDataset;

  var targetDataset = React.useMemo(function () {
    return getTargetDataset(layer.datasetId);
  }, [layer.datasetId, getTargetDataset]);
  React.useEffect(function () {
    form.setFieldsValue(layer.config);
  }, [layer.config]);
  var onFormValueChanged = React.useCallback(function (changedValues) {
    var ranges = [];

    if (changedValues.magField) {
      ranges = targetDataset === null || targetDataset === void 0 ? void 0 : targetDataset.fields.find(function (field) {
        return field.name === changedValues.magField;
      }).range;
    }

    onFormChange(_objectSpread2(_objectSpread2({}, changedValues), ranges.length && {
      ranges: ranges
    }));
  }, [onFormChange, targetDataset]);
  return /*#__PURE__*/React__default['default'].createElement(antd.Form, {
    labelCol: {
      span: 7
    },
    wrapperCol: {
      span: 19
    },
    labelAlign: "left",
    form: form,
    onValuesChange: onFormValueChanged
  }, /*#__PURE__*/React__default['default'].createElement(LayerTypeSelect, {
    layer: layer,
    onChange: onChange
  }), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u7ECF\u5EA6",
    name: "lngField"
  }, /*#__PURE__*/React__default['default'].createElement(FieldSelect, {
    fields: targetDatasetFields
  })), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u7EAC\u5EA6",
    name: "latField"
  }, /*#__PURE__*/React__default['default'].createElement(FieldSelect, {
    fields: targetDatasetFields
  })), /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, {
    label: "\u6570\u503C",
    name: "magField"
  }, /*#__PURE__*/React__default['default'].createElement(FieldSelect, {
    fields: targetDatasetFields
  })), /*#__PURE__*/React__default['default'].createElement(ColorWrapper, {
    label: "\u586B\u5145\u989C\u8272",
    field: "fillColor",
    form: form,
    fields: targetDatasetFields
  }), /*#__PURE__*/React__default['default'].createElement(RangeWrapper, {
    label: "\u534A\u5F84",
    field: "radius",
    form: form,
    fields: targetDatasetFields
  }));
};

var Panel = antd.Collapse.Panel;

var LayerItemConfig = function LayerItemConfig(_ref) {
  var _layer$datasetId;

  var layer = _ref.layer,
      onEditName = _ref.onEditName,
      dragIcon = _ref.dragIcon,
      _onChange = _ref.onChange,
      onDelete = _ref.onDelete,
      onCopy = _ref.onCopy;
  var dropdownRef = React.useRef(null);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var header = /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$8.layerItemHeader,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, dragIcon, /*#__PURE__*/React__default['default'].createElement(EditName, {
    name: layer.name,
    className: styles$8.editName,
    onChange: function onChange(newName) {
      return onEditName(newName, layer);
    }
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    ref: dropdownRef,
    className: styles$8.layerItemMore
  }, /*#__PURE__*/React__default['default'].createElement(antd.Switch, {
    size: "small",
    checked: layer.visible,
    onChange: function onChange(newVisible) {
      return _onChange({
        id: layer.id,
        visible: newVisible
      });
    }
  }), /*#__PURE__*/React__default['default'].createElement(antd.Popconfirm, {
    title: "\u786E\u8BA4\u662F\u5426\u5220\u9664\uFF1F",
    placement: "bottom",
    onConfirm: function onConfirm() {
      return onDelete(layer);
    }
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: "dpiconfont dpicon-icon_shanchu is-red-link",
    title: "\u5220\u9664"
  })), /*#__PURE__*/React__default['default'].createElement(antd.Dropdown, {
    getPopupContainer: function getPopupContainer() {
      var _dropdownRef$current;

      return (_dropdownRef$current = dropdownRef.current) !== null && _dropdownRef$current !== void 0 ? _dropdownRef$current : document.body;
    },
    overlay: /*#__PURE__*/React__default['default'].createElement(antd.Menu, null, /*#__PURE__*/React__default['default'].createElement(antd.Menu.Item, {
      key: "changeDataset",
      icon: /*#__PURE__*/React__default['default'].createElement("i", {
        className: "dpiconfont dpicon-peizhishujuyuan"
      }),
      onClick: function onClick() {
        return setVisible(true);
      }
    }, "\u66F4\u6539\u6570\u636E\u6E90"), /*#__PURE__*/React__default['default'].createElement(antd.Menu.Item, {
      key: "copyLayer",
      icon: /*#__PURE__*/React__default['default'].createElement("i", {
        className: "dpiconfont dpicon-fuzhi"
      }),
      onClick: function onClick() {
        return onCopy(layer);
      }
    }, "\u590D\u5236\u56FE\u5C42"))
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: "dpiconfont dpicon-more is-link"
  }))));
  var content = React.useMemo(function () {
    switch (layer.type) {
      case 'point':
        return /*#__PURE__*/React__default['default'].createElement(PointLayer, {
          layer: layer,
          onChange: _onChange
        });

      case 'line':
        return /*#__PURE__*/React__default['default'].createElement(LineLayer, {
          layer: layer,
          onChange: _onChange
        });

      case 'trip':
        return /*#__PURE__*/React__default['default'].createElement(TripLayer, {
          layer: layer,
          onChange: _onChange
        });

      case 'polygon':
        return /*#__PURE__*/React__default['default'].createElement(PolygonLayer, {
          layer: layer,
          onChange: _onChange
        });

      case 'hex':
        return /*#__PURE__*/React__default['default'].createElement(HexLayer, {
          layer: layer,
          onChange: _onChange
        });

      case 'heat':
        return /*#__PURE__*/React__default['default'].createElement(HeatLayer, {
          layer: layer,
          onChange: _onChange
        });

      default:
        return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null);
    }
  }, [layer, _onChange]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(antd.Collapse, {
    ghost: true,
    defaultActiveKey: [layer.id],
    expandIconPosition: "right"
  }, /*#__PURE__*/React__default['default'].createElement(Panel, {
    key: layer.id,
    header: header
  }, content)), /*#__PURE__*/React__default['default'].createElement(DatasetModal, {
    visible: visible,
    setVisible: setVisible,
    value: (_layer$datasetId = layer.datasetId) !== null && _layer$datasetId !== void 0 ? _layer$datasetId : undefined,
    onChange: function onChange(datasetId) {
      return _onChange({
        id: layer.id,
        datasetId: datasetId
      });
    }
  }));
};

var AppLayerConfig = function AppLayerConfig() {
  var _useContext = React.useContext(ConfigModelContext),
      layerList = _useContext.layerList,
      setLayerList = _useContext.setLayerList;

  var _useContext2 = React.useContext(DatasetModelContext),
      selectDataset = _useContext2.selectDataset;

  var _useLayer = useLayer(),
      addLayer = _useLayer.addLayer,
      copyLayer = _useLayer.copyLayer,
      getDefaultConfig = _useLayer.getDefaultConfig;

  var _useListHook = useListHook(layerList, setLayerList),
      onDragEnd = _useListHook.onDragEnd,
      onDelete = _useListHook.onDelete,
      onChange = _useListHook.onChange,
      onEditName = _useListHook.onEditName;

  var displayLayerList = React.useMemo(function () {
    return filterByDatasetId(layerList, selectDataset === null || selectDataset === void 0 ? void 0 : selectDataset.id);
  }, [layerList, selectDataset]);
  var onLayerChange = React.useCallback(function (oldLayer, newLayer) {
    if (newLayer.type && newLayer.type !== oldLayer.type) {
      onChange(_objectSpread2(_objectSpread2(_objectSpread2({}, oldLayer), newLayer), {}, {
        type: newLayer.type,
        config: getDefaultConfig(newLayer.type)
      }));
    } else {
      onChange(newLayer);
    }
  }, [getDefaultConfig, onChange]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$8.layerList
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$8.layerListContent
  }, !displayLayerList.length ? /*#__PURE__*/React__default['default'].createElement(antd.Empty, {
    description: "\u6682\u65E0\u56FE\u5C42"
  }) : /*#__PURE__*/React__default['default'].createElement(DragList, {
    itemClassName: styles$8.layerItem,
    items: displayLayerList,
    onDrag: onDragEnd
  }, function (layer, icon) {
    return /*#__PURE__*/React__default['default'].createElement(LayerItemConfig, {
      layer: layer,
      dragIcon: icon,
      onDelete: onDelete,
      onChange: function onChange(newLayer) {
        return onLayerChange(layer, newLayer);
      },
      onCopy: copyLayer,
      onEditName: onEditName
    });
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$8.layerListFooter
  }, /*#__PURE__*/React__default['default'].createElement(antd.Button, {
    icon: /*#__PURE__*/React__default['default'].createElement("i", {
      className: "dpiconfont dpicon-tianjia"
    }),
    className: styles$8.addFilterBtn,
    disabled: !selectDataset,
    type: "ghost",
    onClick: function onClick() {
      return addLayer(selectDataset);
    }
  }, "\u6DFB\u52A0\u56FE\u5C42")));
};

var css_248z$c = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n@import url('//at.alicdn.com/t/font_2898812_y5ir6hhtevt.css');\n.is-link {\n  cursor: pointer;\n}\n.is-link:hover {\n  color: #1890ff;\n}\n.is-red-link {\n  cursor: pointer;\n}\n.is-red-link:hover {\n  color: #1890ff;\n}\n.is-red-link:hover {\n  color: red;\n}\n.ant-typography {\n  margin-bottom: 0;\n}\n.index_filterList__2mh-Z {\n  height: 100%;\n  overflow: auto;\n}\n.index_filterListContent__1GZJx {\n  height: calc(100% - 40px);\n  overflow: auto;\n}\n.index_filterListFooter__aPCjp {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  background-color: #ffffff;\n  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n}\n.index_addFilterBtn__265IL {\n  width: calc(100% - 8px);\n  height: 32px;\n  line-height: 20px;\n}\n.index_filterItem__2eQ4m {\n  margin: 8px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.index_filterItem__2eQ4m .index_filterItemHeader__2JCsc {\n  display: flex;\n  align-items: center;\n  height: 34px;\n}\n.index_filterItem__2eQ4m .index_filterItemHeader__2JCsc .index_editName__Cb3HJ {\n  width: calc(100% - 120px);\n}\n.index_filterItem__2eQ4m .index_filterItemContent__2xLSA {\n  padding: 8px;\n  background-color: #ffffff;\n}\n.index_filterItem__2eQ4m .index_filterItemMore__2XOMC {\n  display: inline-flex;\n  align-items: center;\n  margin-left: 16px;\n  opacity: 0;\n}\n.index_filterItem__2eQ4m .index_filterItemMore__2XOMC .ant-switch,\n.index_filterItem__2eQ4m .index_filterItemMore__2XOMC .dpiconfont {\n  margin-right: 4px;\n}\n.index_filterItem__2eQ4m .index_filterItemLabel__3Ec-K {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 12px;\n}\n.index_filterItem__2eQ4m .index_filterItemContentRow__2dNWM {\n  display: flex;\n  align-items: center;\n}\n.index_filterItem__2eQ4m .index_filterItemContentRow__2dNWM > *:last-child {\n  flex-grow: 1;\n}\n.index_filterItem__2eQ4m .index_filterItemContentRow__2dNWM + .index_filterItemContentRow__2dNWM {\n  margin-top: 6px;\n}\n.index_filterItem__2eQ4m:hover .index_filterItemMore__2XOMC {\n  opacity: 1;\n}\n.index_inputRangePanel__2YsA8 {\n  display: flex;\n  justify-content: space-between;\n}\n.index_inputRangePanel__2YsA8 .ant-input-number {\n  flex-grow: 1;\n}\n.index_inputRangePanel__2YsA8 .ant-input-number + .ant-input-number {\n  margin-left: 16px;\n}\n.index_filterValue__1JEyx .ant-select-selection-item {\n  padding-left: 4px;\n}\n.index_filterValue__1JEyx .ant-select-selection-item-content {\n  font-size: 12px;\n}\n.index_filterValue__1JEyx .ant-select-selection-item-remove {\n  display: inline-flex;\n  align-items: center;\n}\n";
var styles$c = {"filterList":"index_filterList__2mh-Z","filterListContent":"index_filterListContent__1GZJx","filterListFooter":"index_filterListFooter__aPCjp","addFilterBtn":"index_addFilterBtn__265IL","filterItem":"index_filterItem__2eQ4m","filterItemHeader":"index_filterItemHeader__2JCsc","editName":"index_editName__Cb3HJ","filterItemContent":"index_filterItemContent__2xLSA","filterItemMore":"index_filterItemMore__2XOMC","filterItemLabel":"index_filterItemLabel__3Ec-K","filterItemContentRow":"index_filterItemContentRow__2dNWM","inputRangePanel":"index_inputRangePanel__2YsA8","filterValue":"index_filterValue__1JEyx"};
styleInject(css_248z$c);

var useFilter = function useFilter() {
  var _useContext = React.useContext(ConfigModelContext),
      filterList = _useContext.filterList,
      setFilterList = _useContext.setFilterList;

  var addFilter = React.useCallback(function (dataset) {
    var id = dataset.id,
        fields = dataset.fields;
    var newFilter = {
      id: getRandomId('filter'),
      name: generateUnRepeatValue(filterList, 'name', '筛选器'),
      order: filterList.length + 1,
      // @ts-ignore
      field: null,
      datasetId: id,
      value: [],
      enable: true,
      createTime: Date.now()
    };

    if (fields.length) {
      var _fields = _slicedToArray(fields, 1);

      newFilter.field = _fields[0];
    }

    var newFilterList = [].concat(_toConsumableArray(filterList), [newFilter]);
    setFilterList(newFilterList);
    return newFilter;
  }, [filterList, setFilterList]);
  var copyFilter = React.useCallback(function (filter) {
    var newFilter = _objectSpread2(_objectSpread2({}, lodash.cloneDeep(filter)), {}, {
      id: getRandomId('dataset'),
      name: generateUnRepeatValue(filterList, 'name', '筛选器'),
      order: filterList.length + 1,
      createTime: Date.now()
    });

    setFilterList([].concat(_toConsumableArray(filterList), [newFilter]));
    return newFilter;
  }, [filterList, setFilterList]);
  return {
    addFilter: addFilter,
    copyFilter: copyFilter
  };
};

var FilterValue = function FilterValue(props) {
  var field = props.field,
      _onChange = props.onChange,
      value = props.value;

  if (!field) {
    return null;
  }

  var content = null;

  if (field.type === 'boolean') {
    content = /*#__PURE__*/React__default['default'].createElement(antd.Switch, {
      checked: value,
      onChange: _onChange
    });
  }

  if (field.type === 'string') {
    content = /*#__PURE__*/React__default['default'].createElement(antd.Select, {
      mode: "multiple",
      style: {
        width: '100%'
      },
      value: value,
      placeholder: "\u8BF7\u9009\u62E9\u8981\u7B5B\u9009\u7684\u503C",
      allowClear: true,
      options: field.uniqueValues.map(function (item) {
        return {
          label: item,
          value: item
        };
      }),
      onChange: _onChange
    });
  }

  if (field.type === 'number') {
    var _field$range = _slicedToArray(field.range, 2),
        minRange = _field$range[0],
        maxRange = _field$range[1];

    var _value = _slicedToArray(value, 2),
        minValue = _value[0],
        maxValue = _value[1];

    content = /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(antd.Slider, {
      range: true,
      step: 1,
      value: value,
      min: minRange,
      max: maxRange,
      onAfterChange: _onChange
    }), /*#__PURE__*/React__default['default'].createElement("div", {
      className: styles$c.inputRangePanel
    }, /*#__PURE__*/React__default['default'].createElement(antd.InputNumber, {
      min: minRange,
      max: maxValue,
      value: minValue,
      onChange: function onChange(newMinValue) {
        return _onChange([newMinValue, maxValue]);
      }
    }), /*#__PURE__*/React__default['default'].createElement(antd.InputNumber, {
      min: minValue,
      max: maxRange,
      value: maxValue,
      onChange: function onChange(newMaxValue) {
        return _onChange([minValue, newMaxValue]);
      }
    })));
  }

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$c.filterValue
  }, content);
};

var FilterItem = function FilterItem(_ref) {
  var _filter$field$name, _filter$field, _filter$datasetId;

  var filter = _ref.filter,
      _onChange = _ref.onChange,
      onEditName = _ref.onEditName,
      onDelete = _ref.onDelete,
      onCopy = _ref.onCopy,
      dragIcon = _ref.dragIcon;

  var _useDataset = useDataset(),
      getTargetDataset = _useDataset.getTargetDataset;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var dropdownRef = React.useRef(null);
  var fields = React.useMemo(function () {
    var _getTargetDataset$fie, _getTargetDataset;

    return (_getTargetDataset$fie = (_getTargetDataset = getTargetDataset(filter.datasetId)) === null || _getTargetDataset === void 0 ? void 0 : _getTargetDataset.fields) !== null && _getTargetDataset$fie !== void 0 ? _getTargetDataset$fie : [];
  }, [getTargetDataset, filter.datasetId]);
  var resetFilterProperties = React.useCallback(function (field) {
    var targetDataset = getTargetDataset(filter.datasetId);

    if (!targetDataset) {
      return {};
    }

    if (field.type === 'boolean') {
      return {
        value: true
      };
    }

    if (field.type === 'string') {
      return {
        value: []
      };
    }

    if (field.type === 'number') {
      return {
        value: _toConsumableArray(field.range)
      };
    }

    return {};
  }, [filter, getTargetDataset]);
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$c.filterItemHeader
  }, dragIcon, /*#__PURE__*/React__default['default'].createElement(EditName, {
    name: filter.name,
    className: styles$c.editName,
    onChange: function onChange(newName) {
      return onEditName(newName, filter);
    }
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    ref: dropdownRef,
    className: styles$c.filterItemMore
  }, /*#__PURE__*/React__default['default'].createElement(antd.Switch, {
    size: "small",
    checked: filter.enable,
    onChange: function onChange(newEnable) {
      return _onChange({
        id: filter.id,
        enable: newEnable
      });
    }
  }), /*#__PURE__*/React__default['default'].createElement(antd.Popconfirm, {
    title: "\u786E\u8BA4\u662F\u5426\u5220\u9664\uFF1F",
    placement: "bottom",
    onConfirm: function onConfirm() {
      return onDelete(filter);
    }
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: "dpiconfont dpicon-icon_shanchu is-red-link",
    title: "\u5220\u9664"
  })), /*#__PURE__*/React__default['default'].createElement(antd.Dropdown, {
    getPopupContainer: function getPopupContainer() {
      var _dropdownRef$current;

      return (_dropdownRef$current = dropdownRef.current) !== null && _dropdownRef$current !== void 0 ? _dropdownRef$current : document.body;
    },
    overlay: /*#__PURE__*/React__default['default'].createElement(antd.Menu, null, /*#__PURE__*/React__default['default'].createElement(antd.Menu.Item, {
      key: "changeDataset",
      icon: /*#__PURE__*/React__default['default'].createElement("i", {
        className: "dpiconfont dpicon-peizhishujuyuan"
      }),
      onClick: function onClick() {
        return setVisible(true);
      }
    }, "\u66F4\u6539\u6570\u636E\u6E90"), /*#__PURE__*/React__default['default'].createElement(antd.Menu.Item, {
      key: "copyFilter",
      icon: /*#__PURE__*/React__default['default'].createElement("i", {
        className: "dpiconfont dpicon-fuzhi"
      }),
      onClick: function onClick() {
        return onCopy(filter);
      }
    }, "\u590D\u5236\u7B5B\u9009\u5668"))
  }, /*#__PURE__*/React__default['default'].createElement("i", {
    className: "dpiconfont dpicon-more is-link"
  })))), /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$c.filterItemContent
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$c.filterItemContentRow
  }, /*#__PURE__*/React__default['default'].createElement("span", {
    className: styles$c.filterItemLabel
  }, "\u7B5B\u9009\u5B57\u6BB5\uFF1A"), /*#__PURE__*/React__default['default'].createElement(FieldSelect, {
    size: "small",
    bordered: false,
    fields: fields,
    value: (_filter$field$name = (_filter$field = filter.field) === null || _filter$field === void 0 ? void 0 : _filter$field.name) !== null && _filter$field$name !== void 0 ? _filter$field$name : undefined,
    onChange: function onChange(_, field) {
      _onChange(_objectSpread2({
        id: filter.id,
        field: field
      }, field ? resetFilterProperties(field) : {}));
    }
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$c.filterItemContentRow
  }, /*#__PURE__*/React__default['default'].createElement(FilterValue, {
    value: filter.value,
    field: filter.field,
    onChange: function onChange(newValue) {
      return _onChange({
        id: filter.id,
        value: newValue
      });
    }
  }))), /*#__PURE__*/React__default['default'].createElement(DatasetModal, {
    visible: visible,
    setVisible: setVisible,
    value: (_filter$datasetId = filter.datasetId) !== null && _filter$datasetId !== void 0 ? _filter$datasetId : undefined,
    onChange: function onChange(datasetId) {
      return _onChange({
        id: filter.id,
        datasetId: datasetId
      });
    }
  }));
};

var AppFilterConfig = function AppFilterConfig() {
  var _useContext = React.useContext(ConfigModelContext),
      filterList = _useContext.filterList,
      setFilterList = _useContext.setFilterList;

  var _useContext2 = React.useContext(DatasetModelContext),
      selectDataset = _useContext2.selectDataset;

  var _useFilter = useFilter(),
      addFilter = _useFilter.addFilter,
      copyFilter = _useFilter.copyFilter;

  var _useListHook = useListHook(filterList, setFilterList),
      onEditName = _useListHook.onEditName,
      onDragEnd = _useListHook.onDragEnd,
      onDelete = _useListHook.onDelete,
      onChange = _useListHook.onChange;

  var displayFilterList = React.useMemo(function () {
    return filterByDatasetId(filterList, selectDataset === null || selectDataset === void 0 ? void 0 : selectDataset.id);
  }, [filterList, selectDataset]);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$c.filterList
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$c.filterListContent
  }, !displayFilterList.length ? /*#__PURE__*/React__default['default'].createElement(antd.Empty, {
    description: "\u6682\u65E0\u7B5B\u9009\u5668"
  }) : /*#__PURE__*/React__default['default'].createElement(DragList, {
    itemClassName: styles$c.filterItem,
    items: displayFilterList,
    onDrag: onDragEnd
  }, function (filter, icon) {
    return /*#__PURE__*/React__default['default'].createElement(FilterItem, {
      filter: filter,
      dragIcon: icon,
      onEditName: onEditName,
      onChange: onChange,
      onDelete: onDelete,
      onCopy: copyFilter
    });
  })), /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$c.filterListFooter
  }, /*#__PURE__*/React__default['default'].createElement(antd.Button, {
    icon: /*#__PURE__*/React__default['default'].createElement("i", {
      className: "dpiconfont dpicon-tianjia"
    }),
    className: styles$c.addFilterBtn,
    disabled: !selectDataset,
    type: "ghost",
    onClick: function onClick() {
      return addFilter(selectDataset);
    }
  }, "\u6DFB\u52A0\u7B5B\u9009\u5668")));
};

var css_248z$d = ".index_interactiveConfig__3KFRI {\n  height: 100%;\n  overflow: auto;\n}\n";
var styles$d = {"interactiveConfig":"index_interactiveConfig__3KFRI"};
styleInject(css_248z$d);

var AppInteractiveConfig = function AppInteractiveConfig() {
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$d.interactiveConfig
  });
};

var TabPane$1 = antd.Tabs.TabPane;

var AppEdit = function AppEdit(_ref) {
  var style = _ref.style;
  return /*#__PURE__*/React__default['default'].createElement(antd.Tabs, {
    className: styles$7.appEdit,
    size: "small",
    style: style
  }, /*#__PURE__*/React__default['default'].createElement(TabPane$1, {
    tab: /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("i", {
      className: "dpiconfont dpicon-tuceng"
    }), /*#__PURE__*/React__default['default'].createElement("span", null, "\u56FE\u5C42")),
    key: "\u56FE\u5C42"
  }, /*#__PURE__*/React__default['default'].createElement(AppLayerConfig, null)), /*#__PURE__*/React__default['default'].createElement(TabPane$1, {
    tab: /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("i", {
      className: "dpiconfont dpicon-guolvqi"
    }), /*#__PURE__*/React__default['default'].createElement("span", null, "\u8FC7\u6EE4\u5668")),
    key: "\u8FC7\u6EE4\u5668"
  }, /*#__PURE__*/React__default['default'].createElement(AppFilterConfig, null)), /*#__PURE__*/React__default['default'].createElement(TabPane$1, {
    tab: /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement("i", {
      className: "dpiconfont dpicon-jiaohu"
    }), /*#__PURE__*/React__default['default'].createElement("span", null, "\u4EA4\u4E92")),
    key: "\u4EA4\u4E92"
  }, /*#__PURE__*/React__default['default'].createElement(AppInteractiveConfig, null)));
};

var getPointList = function getPointList(coordinates) {
  return coordinates.split(';').map(function (item) {
    return item.split(',').map(function (item1) {
      return +item1;
    });
  });
};
var transformSource = function transformSource(layer, data) {
  var source = {
    data: turf.featureCollection([])
  };

  try {
    var type = layer.type;

    if (['point', 'heat'].includes(type)) {
      var _layer$config = layer.config,
          lngField = _layer$config.lngField,
          latField = _layer$config.latField;

      if (lngField && latField) {
        source.data = turf.featureCollection(data.map(function (item) {
          return turf.point([+item[lngField], +item[latField]], item);
        }));
      }
    }

    if (type === 'line') {
      var _layer$config2 = layer.config,
          startLngField = _layer$config2.startLngField,
          startLatField = _layer$config2.startLatField,
          endLngField = _layer$config2.endLngField,
          endLatField = _layer$config2.endLatField;

      if (startLngField && startLatField && endLngField && endLatField) {
        source.data = turf.featureCollection(data.map(function (item) {
          return turf.lineString([[+item[startLngField], +item[startLatField]], [+item[endLngField], +item[endLatField]]], item);
        }));
      }
    }

    if (type === 'polygon') {
      var geoField = layer.config.geoField;

      if (geoField) {
        source.data = turf.featureCollection(data.map(function (item) {
          return turf.polygon([getPointList(item[geoField])], item);
        }));
      }
    }

    if (type === 'trip') {
      var _geoField = layer.config.geoField;

      if (_geoField) {
        source.data = turf.featureCollection(data.map(function (item) {
          return turf.lineString(getPointList(item[_geoField]), item);
        }));
      }
    }

    if (type === 'hex') {
      var hexId = layer.config.hexId;

      if (hexId) {
        source.data = turf.featureCollection(data.map(function (item) {
          var pointList = h3Js.h3ToGeoBoundary(item[hexId]).map(function (item) {
            return item.reverse();
          });
          pointList.push(pointList[0]);
          return turf.polygon([pointList], item);
        }));
      }
    }
  } catch (e) {
    console.error(e);
    antd.message.error('数据解析有误');
  }

  return source;
};

var getCommonLayerProps = function getCommonLayerProps(layer) {
  return {
    options: {
      visible: layer.visible,
      blend: 'normal',
      zIndex: layer.zIndex,
      autoFit: true
    },
    active: {
      option: {
        color: 'yellow'
      }
    },
    shape: {
      values: 'fill'
    }
  };
};

var setColorProps = function setColorProps(props, colorConfig) {
  if (colorConfig.enable === false) {
    return;
  }

  if (colorConfig.field) {
    var field = colorConfig.field,
        values = colorConfig.value;
    Object.assign(props, {
      color: {
        field: field,
        values: values
      },
      scale: {
        values: _defineProperty({}, field, {
          type: 'quantile'
        })
      }
    });
  } else {
    Object.assign(props, {
      color: {
        values: colorConfig.value
      }
    });
  }
};
var setSizeProps = function setSizeProps(props, sizeConfig) {
  var value = sizeConfig.value,
      rangeValue = sizeConfig.rangeValue,
      field = sizeConfig.field;
  Object.assign(props, {
    size: {
      field: field !== null && field !== void 0 ? field : undefined,
      values: field ? rangeValue : value
    }
  });
};
var transformProps = function transformProps(layer) {
  var props = _objectSpread2({}, getCommonLayerProps(layer));

  if (layer.type === 'heat') {
    var config = layer.config;
    var fillColor = config.fillColor,
        ranges = config.ranges;
    var positions = [];

    if (fillColor === null || fillColor === void 0 ? void 0 : fillColor.value) {
      // 区间长度
      var sectionLen = ranges[1] - ranges[0] / fillColor.value.length;
      positions = fillColor.value.map(function (_, i) {
        return ranges[0] + i * sectionLen;
      });
    }

    props.shape = {
      values: 'heatmap'
    };
    lodash.merge(props, {
      style: {
        rampColors: {
          colors: (fillColor === null || fillColor === void 0 ? void 0 : fillColor.value) || [],
          positions: positions
        }
      }
    });
  }

  if (layer.type === 'polygon') {
    var _config = layer.config;
    var _fillColor = _config.fillColor,
        borderColor = _config.borderColor,
        borderWidth = _config.borderWidth;
    var borderProps = lodash.cloneDeep(props);
    setColorProps(props, _fillColor);
    borderProps.shape = {
      values: 'line'
    };
    setColorProps(borderProps, borderColor);
    setSizeProps(borderProps, borderWidth);
    return [props, borderProps];
  }

  if (layer.type === 'point') {
    var _config2 = layer.config;
    var _fillColor2 = _config2.fillColor,
        _borderColor = _config2.borderColor,
        radius = _config2.radius;
    setColorProps(props, _fillColor2);
    setSizeProps(props, radius);
    props.shape = {
      values: 'circle'
    };
    lodash.merge(props, {
      style: {
        stroke: _borderColor.enable ? _borderColor.value : undefined,
        strokeWidth: _borderColor.enable ? 1 : 0
      }
    });
  }

  if (layer.type === 'line') {
    var _config3 = layer.config;
    var lineType = _config3.lineType,
        color = _config3.color,
        lineWidth = _config3.lineWidth;
    setColorProps(props, color);
    setSizeProps(props, lineWidth);
    Object.assign(props, {
      shape: {
        values: lineType !== null && lineType !== void 0 ? lineType : 'line'
      },
      style: {
        segmentNumber: 15
      }
    });
  }

  if (layer.type === 'trip') {
    var _config4 = layer.config;
    var _color = _config4.color,
        _lineWidth = _config4.lineWidth;
    setColorProps(props, _color);
    setSizeProps(props, _lineWidth);
    props.shape = {
      values: 'line'
    };
  }

  if (layer.type === 'hex') {
    var _config5 = layer.config;
    var _fillColor3 = _config5.fillColor;
    setColorProps(props, _fillColor3);
  }

  return [props];
};

var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch() {
      this.setState({
        hasError: true
      });
      antd.message.error('图层数据有误，请检查数据');
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        return null;
      }

      return this.props.children;
    }
  }]);

  return ErrorBoundary;
}(React__default['default'].Component);

var LAYER_COMPONENT_MAP = {
  point: l7React.PointLayer,
  line: l7React.LineLayer,
  polygon: l7React.PolygonLayer,
  trip: l7React.LineLayer,
  hex: l7React.PolygonLayer,
  heat: l7React.HeatmapLayer
};

function getLayerKey(layer, index) {
  if (layer.type === 'line') {
    return "".concat(layer.id, "+").concat(index, "-").concat(layer.config.lineType);
  }

  return "".concat(layer.id, "-").concat(index);
}

var LayerItem = /*#__PURE__*/React__default['default'].memo(function (_ref) {
  var config = _ref.config;
  var layer = config.layer,
      data = config.data;
  var source = React.useMemo(function () {
    return transformSource(layer, data);
  }, [data, layer]);
  var propsList = React.useMemo(function () {
    return transformProps(layer);
  }, [layer]);
  var LayerComponent = React.useMemo(function () {
    return LAYER_COMPONENT_MAP[layer.type];
  }, [layer.type]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, propsList.map(function (props, propsIndex) {
    var key = getLayerKey(layer, propsIndex);
    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, {
      key: key
    }, LayerComponent ? /*#__PURE__*/React__default['default'].createElement(LayerComponent, _objectSpread2(_objectSpread2({
      key: getLayerKey(layer, propsIndex) + '-layer'
    }, props), {}, {
      source: source
    })) : null);
  }));
});

var AppLayerList = function AppLayerList() {
  var _useContext = React.useContext(ConfigModelContext),
      layerList = _useContext.layerList,
      filterList = _useContext.filterList;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      layerConfigList = _useState2[0],
      setLayerConfigList = _useState2[1];

  var _useDataset = useDataset(),
      getTargetDataset = _useDataset.getTargetDataset;

  var displayLayerList = React.useMemo(function () {
    return layerList.filter(function (layer) {
      return layer.visible && getTargetDataset(layer.datasetId);
    });
  }, [getTargetDataset, layerList]);
  React.useEffect(function () {
    Promise.all(displayLayerList.map(function (layer, layerIndex, array) {
      var targetDataset = getTargetDataset(layer.datasetId);
      return filterData(targetDataset, filterByDatasetId(filterList, targetDataset.id)).then(function (data) {
        return {
          layer: Object.assign(layer, {
            zIndex: array.length - layerIndex
          }),
          dataset: targetDataset,
          data: data
        };
      });
    })).then(function (newLayerConfigList) {
      setLayerConfigList(newLayerConfigList);
    });
  }, [displayLayerList, filterList, getTargetDataset]);
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, layerConfigList.map(function (config) {
    return /*#__PURE__*/React__default['default'].createElement(LayerItem, {
      key: config.layer.id,
      config: config
    });
  }));
};

var css_248z$e = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n@import url('//at.alicdn.com/t/font_2898812_y5ir6hhtevt.css');\n.is-link {\n  cursor: pointer;\n}\n.is-link:hover {\n  color: #1890ff;\n}\n.is-red-link {\n  cursor: pointer;\n}\n.is-red-link:hover {\n  color: #1890ff;\n}\n.is-red-link:hover {\n  color: red;\n}\n.ant-typography {\n  margin-bottom: 0;\n}\n.index_appDragPanel__2tg9U {\n  height: calc(100% - 45px);\n}\n.index_appDragDragLine__2O9Bf {\n  border-top: 1px solid #d9d9d9;\n  overflow: visible;\n}\n.index_appDragDragLine__2O9Bf .index_appDragDragPanel__3lkAc {\n  height: 3px;\n  margin-top: -2px;\n}\n.index_appDragDragLine__2O9Bf .index_appDragDragPanelActive__2HmGI {\n  background-color: #1890ff;\n}\n";
var styles$e = {"appDragPanel":"index_appDragPanel__2tg9U","appDragDragLine":"index_appDragDragLine__2O9Bf","appDragDragPanel":"index_appDragDragPanel__3lkAc","appDragDragPanelActive":"index_appDragDragPanelActive__2HmGI"};
styleInject(css_248z$e);

var AppDragPanel = function AppDragPanel(_ref) {
  var _classnames;

  var TopComponent = _ref.TopComponent,
      BottomComponent = _ref.BottomComponent,
      sidebarRef = _ref.sidebarRef,
      sidebarHeaderRef = _ref.sidebarHeaderRef,
      className = _ref.className;
  var dragPanelRef = React.useRef(null);

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      panelHeight = _useState2[0],
      setPanelHeight = _useState2[1];

  var _useState3 = React.useState(function () {
    var newTopHeight = localStorage.getItem(LOCAL_STORAGE_KEY.TOP_PANEL_HEIGHT);
    return newTopHeight ? +newTopHeight : 0;
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      topHeight = _useState4[0],
      setTopHeight = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isDrag = _useState6[0],
      setIsDrag = _useState6[1];

  React.useEffect(function () {
    if (topHeight) {
      localStorage.setItem(LOCAL_STORAGE_KEY.TOP_PANEL_HEIGHT, String(topHeight));
    }
  }, [topHeight]);
  var onSidebarResize = React.useCallback(function () {
    var _sidebarRef$current$o, _sidebarRef$current, _sidebarHeaderRef$cur, _sidebarHeaderRef$cur2;

    var sidebarHeight = (_sidebarRef$current$o = (_sidebarRef$current = sidebarRef.current) === null || _sidebarRef$current === void 0 ? void 0 : _sidebarRef$current.offsetHeight) !== null && _sidebarRef$current$o !== void 0 ? _sidebarRef$current$o : 0;
    var sidebarHeaderHeight = (_sidebarHeaderRef$cur = (_sidebarHeaderRef$cur2 = sidebarHeaderRef.current) === null || _sidebarHeaderRef$cur2 === void 0 ? void 0 : _sidebarHeaderRef$cur2.offsetHeight) !== null && _sidebarHeaderRef$cur !== void 0 ? _sidebarHeaderRef$cur : 0;
    var newPanelHeight = sidebarHeight - sidebarHeaderHeight;
    setPanelHeight(newPanelHeight);

    if (!topHeight || topHeight > newPanelHeight) {
      setTopHeight(newPanelHeight / 2);
    }
  }, [sidebarRef.current, sidebarHeaderRef.current, panelHeight]);
  React.useEffect(function () {
    var _sidebarRef$current3;

    if (sidebarRef.current && sidebarHeaderRef.current) {
      var _sidebarRef$current2;

      (_sidebarRef$current2 = sidebarRef.current) === null || _sidebarRef$current2 === void 0 ? void 0 : _sidebarRef$current2.addEventListener('resize', onSidebarResize);
    }

    return (_sidebarRef$current3 = sidebarRef.current) === null || _sidebarRef$current3 === void 0 ? void 0 : _sidebarRef$current3.removeEventListener('resize', onSidebarResize);
  }, [sidebarRef.current, sidebarHeaderRef.current, onSidebarResize]);
  var onDragMove = React.useCallback(function (e) {
    if (isDrag) {
      debugger;
      var container = document.querySelector(".".concat(styles.container));

      if (container) {
        setTopHeight(e.clientY - panelHeight - getRealOffsetTop(container));
      }
    }
  }, [isDrag, sidebarRef.current]);
  var onDragUp = React.useCallback(function () {
    setIsDrag(false);
  }, []);
  ahooks.useMount(function () {
    onSidebarResize();
  });
  React.useEffect(function () {
    if (isDrag) {
      window.addEventListener('mousemove', onDragMove);
      window.addEventListener('mouseup', onDragUp);
    }

    return function () {
      window.removeEventListener('mousemove', onDragMove);
      window.removeEventListener('mouseup', onDragUp);
    };
  }, [onDragMove, onDragUp, isDrag]);
  var onDragStart = React.useCallback(function () {
    setIsDrag(true);
  }, []);
  return /*#__PURE__*/React__default['default'].createElement("div", {
    ref: dragPanelRef,
    className: classnames__default['default']([styles$e.appDragPanel, className])
  }, /*#__PURE__*/React__default['default'].createElement(TopComponent, null), /*#__PURE__*/React__default['default'].createElement("div", {
    className: styles$e.appDragDragLine
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: classnames__default['default']((_classnames = {}, _defineProperty(_classnames, styles$e.appDragDragPanel, true), _defineProperty(_classnames, styles$e.appDragDragPanelActive, isDrag), _classnames))
  })), /*#__PURE__*/React__default['default'].createElement(BottomComponent, null));
};

var ExitPreview = function ExitPreview() {
  var _useContext = React.useContext(GlobalModelContext),
      setIsPreview = _useContext.setIsPreview;

  return /*#__PURE__*/React__default['default'].createElement(antd.Button, {
    className: styles$1.exitPreview,
    onClick: function onClick() {
      return setIsPreview(false);
    }
  }, "\u9000\u51FA\u9884\u89C8");
};

function MapContainer() {
  var _classnames, _classnames2;

  var _useContext = React.useContext(GlobalModelContext),
      isPreview = _useContext.isPreview;

  var _useContext2 = React.useContext(MapModelContext),
      mapType = _useContext2.mapType;

  var sidebarRef = React.useRef(null);
  var sidebarHeaderRef = React.useRef(null);
  return /*#__PURE__*/React__default['default'].createElement(AppMap, {
    className: styles.container,
    map: mapType
  }, /*#__PURE__*/React__default['default'].createElement(AppControl, {
    className: classnames__default['default']((_classnames = {}, _defineProperty(_classnames, styles.control, true), _defineProperty(_classnames, styles.previewHidden, isPreview), _classnames))
  }), /*#__PURE__*/React__default['default'].createElement(AppSidebar, {
    ref: sidebarRef,
    className: classnames__default['default']((_classnames2 = {}, _defineProperty(_classnames2, styles.sidebar, true), _defineProperty(_classnames2, styles.previewHidden, isPreview), _classnames2))
  }, /*#__PURE__*/React__default['default'].createElement(AppHeader, {
    ref: sidebarHeaderRef
  }), /*#__PURE__*/React__default['default'].createElement(AppDragPanel, {
    sidebarRef: sidebarRef,
    sidebarHeaderRef: sidebarHeaderRef,
    TopComponent: AppDataset,
    BottomComponent: AppEdit
  })), /*#__PURE__*/React__default['default'].createElement(AppLayerList, null), isPreview && /*#__PURE__*/React__default['default'].createElement(ExitPreview, null));
}

var ContextProvider = function ContextProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement(MapContext, null, /*#__PURE__*/React__default['default'].createElement(DatasetContext, null, /*#__PURE__*/React__default['default'].createElement(MapContext$1, null, /*#__PURE__*/React__default['default'].createElement(GlobalContext, null, children))));
};

function Container() {
  return /*#__PURE__*/React__default['default'].createElement(antd.ConfigProvider, {
    locale: zhCN__default['default']
  }, /*#__PURE__*/React__default['default'].createElement(ContextProvider, null, /*#__PURE__*/React__default['default'].createElement(MapContainer, null)));
}

exports.Container = Container;
