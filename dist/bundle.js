/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./source/app.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/ice.jpg":
/*!************************!*\
  !*** ./assets/ice.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"../assets/compiled/6ad45791f915340b6bce6e809730835a.jpg\";\n\n//# sourceURL=webpack:///./assets/ice.jpg?");

/***/ }),

/***/ "./source/app.js":
/*!***********************!*\
  !*** ./source/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/es6/map */ \"./node_modules/core-js/es6/map.js\");\n\n__webpack_require__(/*! core-js/es6/set */ \"./node_modules/core-js/es6/set.js\");\n\n__webpack_require__(/*! raf/polyfill */ \"./node_modules/raf/polyfill.js\");\n\n__webpack_require__(/*! ./scripts/polyfill */ \"./source/scripts/polyfill.js\");\n\n__webpack_require__(/*! ./stylesheets/styles.scss */ \"./source/stylesheets/styles.scss\");\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _App = __webpack_require__(/*! ./scripts/App */ \"./source/scripts/App.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_reactDom2.default.render(_react2.default.createElement(\n    _reactRouterDom.BrowserRouter,\n    null,\n    _react2.default.createElement(_App.App, null)\n), document.getElementById(\"app\"));\n\n// Styles\n// import \"aos/dist/aos.css\";\n// import \"aos/dist/aos.js\";\n// Polyfills\n\n//# sourceURL=webpack:///./source/app.js?");

/***/ }),

/***/ "./source/scripts/App.js":
/*!*******************************!*\
  !*** ./source/scripts/App.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.App = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _Dashboard = __webpack_require__(/*! ./components/Dashboard */ \"./source/scripts/components/Dashboard.js\");\n\nvar _Dashboard2 = _interopRequireDefault(_Dashboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = exports.App = function App() {\n    return _react2.default.createElement(\n        _reactRouterDom.Switch,\n        null,\n        _react2.default.createElement(_reactRouterDom.Route, { path: \"/\", exact: true, component: _Dashboard2.default }),\n        _react2.default.createElement(_reactRouterDom.Route, { component: _Dashboard2.default })\n    );\n};\n\n//# sourceURL=webpack:///./source/scripts/App.js?");

/***/ }),

/***/ "./source/scripts/components/Dashboard.js":
/*!************************************************!*\
  !*** ./source/scripts/components/Dashboard.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _scrollTransition = __webpack_require__(/*! ./../scrollTransition */ \"./source/scripts/scrollTransition.js\");\n\nvar _ice = __webpack_require__(/*! ./../../../assets/ice.jpg */ \"./assets/ice.jpg\");\n\nvar _ice2 = _interopRequireDefault(_ice);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Dashboard = function (_React$Component) {\n    _inherits(Dashboard, _React$Component);\n\n    function Dashboard() {\n        _classCallCheck(this, Dashboard);\n\n        return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));\n    }\n\n    _createClass(Dashboard, [{\n        key: \"componentDidMount\",\n        value: function componentDidMount() {\n            window.scrollTo(0, 0);\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            return _react2.default.createElement(\n                \"div\",\n                { className: \"dashboard\" },\n                _react2.default.createElement(\n                    \"h1\",\n                    { className: \"dashboard__title\" },\n                    \"Dashboard\"\n                ),\n                _react2.default.createElement(\"img\", {\n                    src: _ice2.default\n                })\n            );\n        }\n    }]);\n\n    return Dashboard;\n}(_react2.default.Component);\n\nexports.default = Dashboard;\n;\n\n//# sourceURL=webpack:///./source/scripts/components/Dashboard.js?");

/***/ }),

/***/ "./source/scripts/polyfill.js":
/*!************************************!*\
  !*** ./source/scripts/polyfill.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// STRING INCLUDES\nif (!String.prototype.includes) {\n  String.prototype.includes = function (search, start) {\n    'use strict';\n\n    if (typeof start !== 'number') {\n      start = 0;\n    }\n\n    if (start + search.length > this.length) {\n      return false;\n    } else {\n      return this.indexOf(search, start) !== -1;\n    }\n  };\n}\n\n// ARRAY INCLUDES\nif (!Array.prototype.includes) {\n  Object.defineProperty(Array.prototype, 'includes', {\n    value: function value(searchElement, fromIndex) {\n\n      if (this == null) {\n        throw new TypeError('\"this\" is null or not defined');\n      }\n\n      // 1. Let O be ? ToObject(this value).\n      var o = Object(this);\n\n      // 2. Let len be ? ToLength(? Get(O, \"length\")).\n      var len = o.length >>> 0;\n\n      // 3. If len is 0, return false.\n      if (len === 0) {\n        return false;\n      }\n\n      // 4. Let n be ? ToInteger(fromIndex).\n      //    (If fromIndex is undefined, this step produces the value 0.)\n      var n = fromIndex | 0;\n\n      // 5. If n ≥ 0, then\n      //  a. Let k be n.\n      // 6. Else n < 0,\n      //  a. Let k be len + n.\n      //  b. If k < 0, let k be 0.\n      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);\n\n      function sameValueZero(x, y) {\n        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);\n      }\n\n      // 7. Repeat, while k < len\n      while (k < len) {\n        // a. Let elementK be the result of ? Get(O, ! ToString(k)).\n        // b. If SameValueZero(searchElement, elementK) is true, return true.\n        if (sameValueZero(o[k], searchElement)) {\n          return true;\n        }\n        // c. Increase k by 1.\n        k++;\n      }\n\n      // 8. Return false\n      return false;\n    }\n  });\n}\n\n//# sourceURL=webpack:///./source/scripts/polyfill.js?");

/***/ }),

/***/ "./source/scripts/scrollTransition.js":
/*!********************************************!*\
  !*** ./source/scripts/scrollTransition.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar elementObjects = [];\n\nvar resetElementObjects = exports.resetElementObjects = function resetElementObjects() {\n    elementObjects = [];\n};\n\nvar checkElement = exports.checkElement = function checkElement(elementObject) {\n    var element = elementObject.element;\n    var postClassName = elementObject.postClassName;\n\n    var extraFunction = elementObject.extraFunction;\n\n    var offset = elementObject.offset;\n\n    if (typeof offset === \"undefined\") {\n        offset = 0;\n    }\n\n    if (typeof window.scrollY === \"undefined\") {\n        window.scrollY = document.documentElement.scrollTop;\n    }\n\n    if (window.innerHeight + window.scrollY >= element.offsetTop + offset) {\n        if (element.classList.contains(postClassName)) {\n            return;\n        } else {\n            element.classList.add(postClassName);\n\n            if (typeof extraFunction !== \"undefined\") {\n                extraFunction(\"add\");\n            }\n        }\n    } else if (window.innerHeight + window.scrollY < element.offsetTop) {\n        if (!element.classList.contains(postClassName)) {\n            return;\n        } else {\n            element.classList.remove(postClassName);\n\n            if (typeof extraFunction !== \"undefined\") {\n                extraFunction(\"remove\");\n            }\n        }\n    }\n};\n\nvar addElement = exports.addElement = function addElement(className, postClassName, offset, extraFunction) {\n    var numberOfSameExistingElements = 0;\n\n    elementObjects.map(function (object) {\n        if (object.postClassName === postClassName) {\n            numberOfSameExistingElements++;\n        }\n    });\n\n    var element = document.getElementsByClassName(className)[numberOfSameExistingElements];\n    var object = {\n        element: element,\n        postClassName: postClassName,\n        offset: offset,\n        extraFunction: extraFunction\n    };\n\n    elementObjects.push(object);\n};\n\nvar onScroll = exports.onScroll = function onScroll() {\n    elementObjects.map(function (object) {\n        checkElement(object);\n    });\n};\n\n//# sourceURL=webpack:///./source/scripts/scrollTransition.js?");

/***/ }),

/***/ "./source/stylesheets/styles.scss":
/*!****************************************!*\
  !*** ./source/stylesheets/styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./source/stylesheets/styles.scss?");

/***/ })

/******/ });