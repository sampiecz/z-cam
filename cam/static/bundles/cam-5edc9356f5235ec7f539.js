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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./cam/static/js/cam.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cam/static/js/cam.js":
/*!******************************!*\
  !*** ./cam/static/js/cam.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/pi/projects/ZorroCam/cam/static/js/cam.js: Missing semicolon. (2:5)\\n\\n\\u001b[0m \\u001b[90m 1 |\\u001b[39m \\u001b[36mimport\\u001b[39m \\u001b[33mReact\\u001b[39m \\u001b[36mfrom\\u001b[39m \\u001b[32m'react'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 2 |\\u001b[39m mport \\u001b[33mReactDOM\\u001b[39m \\u001b[36mfrom\\u001b[39m \\u001b[32m'react-dom'\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m   |\\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 |\\u001b[39m \\u001b[36mfunction\\u001b[39m \\u001b[33mCam\\u001b[39m() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 |\\u001b[39m   \\u001b[0m\\n    at Object._raise (/home/pi/projects/ZorroCam/node_modules/@babel/parser/lib/index.js:806:17)\\n    at Object.raiseWithData (/home/pi/projects/ZorroCam/node_modules/@babel/parser/lib/index.js:799:17)\\n    at Object.raise (/home/pi/projects/ZorroCam/node_modules/@babel/parser/lib/index.js:760:17)\\n    at Object.semicolon (/home/pi/projects/ZorroCam/node_modules/@babel/parser/lib/index.js:9878:10)\\n    at Object.parseExpressionStatement (/home/pi/projects/ZorroCam/node_modules/@babel/parser/lib/index.js:12980:10)\\n    at Object.parseStatementContent (/home/pi/projects/ZorroCam/node_modules/@babel/parser/lib/index.js:12574:19)\\n    at Object.parseStatement (/home/pi/projects/ZorroCam/node_modules/@babel/parser/lib/index.js:12438:17)\\n    at Object.parseBlockOrModuleBlockBody (/home/pi/projects/ZorroCam/node_modules/@babel/parser/lib/index.js:13022:25)\\n    at Object.parseBlockBody (/home/pi/projects/ZorroCam/node_modules/@babel/parser/lib/index.js:13013:10)\\n    at Object.parseProgram (/home/pi/projects/ZorroCam/node_modules/@babel/parser/lib/index.js:12369:10)\\n    at Object.parseTopLevel (/home/pi/projects/ZorroCam/node_modules/@babel/parser/lib/index.js:12360:25)\\n    at Object.parse (/home/pi/projects/ZorroCam/node_modules/@babel/parser/lib/index.js:14070:10)\\n    at parse (/home/pi/projects/ZorroCam/node_modules/@babel/parser/lib/index.js:14122:38)\\n    at parser (/home/pi/projects/ZorroCam/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/home/pi/projects/ZorroCam/node_modules/@babel/core/lib/transformation/normalize-file.js:55:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/home/pi/projects/ZorroCam/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/home/pi/projects/ZorroCam/node_modules/@babel/core/lib/transform.js:19:41)\\n    at transform.next (<anonymous>)\\n    at step (/home/pi/projects/ZorroCam/node_modules/gensync/index.js:261:32)\\n    at gen.next (/home/pi/projects/ZorroCam/node_modules/gensync/index.js:273:13)\\n    at async.call.value (/home/pi/projects/ZorroCam/node_modules/gensync/index.js:223:11)\");\n\n//# sourceURL=webpack:///./cam/static/js/cam.js?");

/***/ })

/******/ });