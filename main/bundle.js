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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/cv.js":
/*!*******************!*\
  !*** ./src/cv.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getCV; });\nfunction getCV() {\r\n    return `<p>Vakhtang Karchava M3310<br></p>\r\n            <p>Grigory Sumlinsky M3310<br></p>`;\r\n}\n\n//# sourceURL=webpack:///./src/cv.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cv */ \"./src/cv.js\");\n/* harmony import */ var _pokemon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemon */ \"./src/pokemon.js\");\n\r\n\r\n\r\nlet sect = document.querySelector('section');\r\nlet pokemon = 'pikachu';\r\n\r\nfunction fillWithUserData() {\r\n    sect.innerHTML = Object(_cv__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\nfunction fillWithPokemon() {\r\n    Object(_pokemon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pokemon).then(info => sect.innerHTML = info);\r\n}\r\n\r\ndocument.getElementById('home').onclick = fillWithUserData;\r\ndocument.getElementById('pokemon').onclick = fillWithPokemon;\r\nfillWithPokemon();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pokemon.js":
/*!************************!*\
  !*** ./src/pokemon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getPokemon; });\nasync function getAbilityInfo(abilityUrl) {\r\n    let response = await fetch(abilityUrl);\r\n    if (!response.ok) {\r\n        console.log('ERROR: Request returned error');\r\n        return null;\r\n    }\r\n    const EFFECT_DATA = await response.json();\r\n    return EFFECT_DATA.effect_entries[0].effect;\r\n}\r\n\r\nasync function getPokemon(pokemonName) {\r\n    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);\r\n\r\n    if (!response.ok) {\r\n        console.log('ERROR: Request returned error');\r\n        return null;\r\n    }\r\n\r\n    let pokeInfo = `<span>Name: ${pokemonName}<br></span>`;//.replace(\"${pokemonName}\", pokemonName);\r\n\r\n    const POKEMON_DATA = await response.json();\r\n\r\n    for (let i = 0; i < POKEMON_DATA.abilities.length; i++) {\r\n        let ability = POKEMON_DATA.abilities[i].ability;\r\n        let abilityUrl = ability.url;\r\n        let abilityPromise = getAbilityInfo(abilityUrl);\r\n        let abilityName = ability.name;\r\n        pokeInfo += `<span>${abilityName}: ${await abilityPromise}<br></span>`//.replace(\"${abilityName}\", abilityName)\r\n    }\r\n\r\n    console.log(pokeInfo);\r\n    pokeInfo = pokeInfo.replace(/span/g, \"p\");\r\n    console.log(pokeInfo);\r\n\r\n    return pokeInfo;\r\n}\n\n//# sourceURL=webpack:///./src/pokemon.js?");

/***/ })

/******/ });