/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/utils/theme.ts":
/*!***********************************!*\
  !*** ./components/utils/theme.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\nconst theme = {\n  breakpoints: {\n    values: {\n      xs: 0,\n      sm: 576,\n      md: 768,\n      lg: 992,\n      xl: 1200,\n      xxl: 1400,\n      mobile: 576,\n      tablet: 992,\n      desktop: 1400\n    },\n\n    up(key) {\n      const value = this.values[key];\n      return `@media (min-width:${value}px)`;\n    },\n\n    down(key) {\n      const value = this.values[key];\n      return `@media (max-width:${value - 5 / 100}px)`;\n    }\n\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3V0aWxzL3RoZW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxNQUFNQSxLQUFZLEdBQUc7QUFDMUJDLEVBQUFBLFdBQVcsRUFBRTtBQUNYQyxJQUFBQSxNQUFNLEVBQUU7QUFDTkMsTUFBQUEsRUFBRSxFQUFFLENBREU7QUFFTkMsTUFBQUEsRUFBRSxFQUFFLEdBRkU7QUFHTkMsTUFBQUEsRUFBRSxFQUFFLEdBSEU7QUFJTkMsTUFBQUEsRUFBRSxFQUFFLEdBSkU7QUFLTkMsTUFBQUEsRUFBRSxFQUFFLElBTEU7QUFNTkMsTUFBQUEsR0FBRyxFQUFFLElBTkM7QUFPTkMsTUFBQUEsTUFBTSxFQUFFLEdBUEY7QUFRTkMsTUFBQUEsTUFBTSxFQUFFLEdBUkY7QUFTTkMsTUFBQUEsT0FBTyxFQUFFO0FBVEgsS0FERzs7QUFZWEMsSUFBQUEsRUFBRSxDQUFDQyxHQUFELEVBQU07QUFDTixZQUFNQyxLQUFLLEdBQUcsS0FBS1osTUFBTCxDQUFZVyxHQUFaLENBQWQ7QUFDQSxhQUFRLHFCQUFvQkMsS0FBTSxLQUFsQztBQUNELEtBZlU7O0FBZ0JYQyxJQUFBQSxJQUFJLENBQUNGLEdBQUQsRUFBTTtBQUNSLFlBQU1DLEtBQUssR0FBRyxLQUFLWixNQUFMLENBQVlXLEdBQVosQ0FBZDtBQUNBLGFBQVEscUJBQW9CQyxLQUFLLEdBQUcsSUFBSSxHQUFJLEtBQTVDO0FBQ0Q7O0FBbkJVO0FBRGEsQ0FBckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9temMtd2ViaW5hci1mcm9udGVuZC8uL2NvbXBvbmVudHMvdXRpbHMvdGhlbWUudHM/NGM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RoZW1lfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmV4cG9ydCBjb25zdCB0aGVtZTogVGhlbWUgPSB7XG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgdmFsdWVzOiB7XG4gICAgICB4czogMCxcbiAgICAgIHNtOiA1NzYsXG4gICAgICBtZDogNzY4LFxuICAgICAgbGc6IDk5MixcbiAgICAgIHhsOiAxMjAwLFxuICAgICAgeHhsOiAxNDAwLFxuICAgICAgbW9iaWxlOiA1NzYsXG4gICAgICB0YWJsZXQ6IDk5MixcbiAgICAgIGRlc2t0b3A6IDE0MDAsXG4gICAgfSxcbiAgICB1cChrZXkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgIHJldHVybiBgQG1lZGlhIChtaW4td2lkdGg6JHt2YWx1ZX1weClgO1xuICAgIH0sXG4gICAgZG93bihrZXkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgIHJldHVybiBgQG1lZGlhIChtYXgtd2lkdGg6JHt2YWx1ZSAtIDUgLyAxMDB9cHgpYDtcbiAgICB9LFxuICB9LFxuIFxuIFxufTtcblxuIl0sIm5hbWVzIjpbInRoZW1lIiwiYnJlYWtwb2ludHMiLCJ2YWx1ZXMiLCJ4cyIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwibW9iaWxlIiwidGFibGV0IiwiZGVza3RvcCIsInVwIiwia2V5IiwidmFsdWUiLCJkb3duIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/utils/theme.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_utils_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/utils/theme */ \"./components/utils/theme.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/mz01-mjoo/Documents/GitHub/react-lottie/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // import 'normalize.css';\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n    theme: _components_utils_theme__WEBPACK_IMPORTED_MODULE_3__.theme,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=750, user-scalable=no, target-densitydpi=device-dpi viewport-fit=cover\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLFNBQVNHLEtBQVQsQ0FBZTtBQUFDQyxFQUFBQSxTQUFEO0FBQVlDLEVBQUFBO0FBQVosQ0FBZixFQUFpRDtBQUMvQyxzQkFDRSw4REFBQyx5REFBRDtBQUFlLFNBQUssRUFBRUgsMERBQXRCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVFFLDhEQUFDLFNBQUQsb0JBQWVHLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0FBRUQsaUVBQWVGLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9temMtd2ViaW5hci1mcm9udGVuZC8uL3BhZ2VzL19hcHAudHN4PzcyMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuLy8gaW1wb3J0ICdub3JtYWxpemUuY3NzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgdHlwZSB7QXBwUHJvcHN9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7VGhlbWVQcm92aWRlcn0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHt0aGVtZX0gZnJvbSAnQC9jb21wb25lbnRzL3V0aWxzL3RoZW1lJztcblxuZnVuY3Rpb24gTXlBcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9NzUwLCB1c2VyLXNjYWxhYmxlPW5vLCB0YXJnZXQtZGVuc2l0eWRwaT1kZXZpY2UtZHBpIHZpZXdwb3J0LWZpdD1jb3ZlclwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();