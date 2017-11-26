/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var DblclickCopy = __webpack_require__(1);

new DblclickCopy();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class DblclickCopy {
	constructor() {
		this.title = document.title;
		this.timer = null;

		this._init = this._init.bind(this);
		this._bindEvent();
	}
	_init() {
		let _this = this;
		try {
			// unselected
			if (window.getSelection().toString().trim().length === 0) return;
			// copy
			document.execCommand('copy');
			// prompt
			document.title = 'copy success!';
			_this.timer = setTimeout(function() {
				document.title = _this.title;
				clearTimeout(_this.timer);
			}, 1000)
		} catch (err) {
			throw Error(err);
		}
	}
	_bindEvent() {
		let _this = this;
		window.addEventListener('dblclick', _this._init, false);
		window.addEventListener('focus', function() {
			window.addEventListener('dblclick', _this._init, false);
		}, false);
		window.addEventListener('blur', function() {
			window.removeEventListener('dblclick', _this._init, false);
		}, false);
	}
}

module.exports = DblclickCopy;

/***/ })
/******/ ]);