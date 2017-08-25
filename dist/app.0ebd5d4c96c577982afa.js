/*!
 * @version 10
 * @data Fri Aug 25 2017 17:55:09 GMT+0800 (CST)
 */
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_css__);


function Toast(config) {
    var defaults = {
        fadeInTime: 200, //渐显时间
        fadeOutTime: 200, //渐隐时间
        fullDisplayTime: 1000, //opacity：1持续时间
        icon: '', //none, success, warn
        text: '' //内容
    };
    for (var param in config) {
        if (defaults.hasOwnProperty(param)) {
            defaults[param] = config[param];
        }
    }
    config = defaults;
    config.durationTime = config.fadeInTime + config.fadeOutTime + config.fullDisplayTime;

    this.init(config);
};
Toast.prototype.init = function (config) {
    if (!document.querySelector('#j-plugin-toast')) {
        var oDiv = document.createElement('div');
        oDiv.innerHTML = '<div id="j-plugin-toast" class="toast-tips active"></div>';
        document.body.appendChild(oDiv.childNodes[0]);
    }
    document.querySelector('#j-plugin-toast').innerHTML = '<div class="tips ' + config.icon + '">\n\t\t\t<i></i>\n\t\t\t<p class="tips-txt">' + config.text + '</p>\n\t\t</div>';
    this.show(config);
};
Toast.prototype.bind = function () {
    document.querySelector('#j-plugin-toast').classList.add('active');
    document.querySelector('#j-plugin-toast').addEventListener('webkitAnimationEnd', this.removeClass);
    document.querySelector('#j-plugin-toast').addEventListener('animationend', this.removeClass);
};
Toast.prototype.unbind = function () {
    document.querySelector('#j-plugin-toast').classList.remove('active');
    document.querySelector('#j-plugin-toast').removeEventListener('webkitAnimationEnd', this.removeClass);
    document.querySelector('#j-plugin-toast').removeEventListener('animationend', this.removeClass);
};
Toast.prototype.removeClass = function () {
    document.querySelector('#j-plugin-toast').classList.remove('active');
};
Toast.prototype.show = function (config) {
    this.unbind(config);
    setTimeout(function () {
        this.bind(config);
    }.bind(this), 100);
};

/* harmony default export */ __webpack_exports__["a"] = (Toast);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(0);


document.getElementById('toast1').onclick = function () {
    new __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */]({
        icon: 'none',
        text: 'text'
    });
};
document.getElementById('toast2').onclick = function () {
    new __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */]({
        icon: 'success',
        text: 'text'
    });
};
document.getElementById('toast3').onclick = function () {
    new __WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */]({
        icon: 'warn',
        text: 'text'
    });
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.0ebd5d4c96c577982afa.js.map