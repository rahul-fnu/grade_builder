/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/core */ \"@aws-amplify/core\");\n/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-amplify/auth */ \"@aws-amplify/auth\");\n/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/rahulraiii/Desktop/grade_builder/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n_aws_amplify_core__WEBPACK_IMPORTED_MODULE_3___default().configure({\n  Auth: {\n    region: \"us-east-2\",\n    //! Konfiguration\n    userPoolId: \"us-east-2_98yQmo7sG\",\n    userPoolWebClientId: \"62er3jbeahqrq49l9a0a7iknud\",\n    // OPTIONAL - Configuration for cookie storage\n    // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol\n    // example taken from https://aws-amplify.github.io/docs/js/authentication\n    cookieStorage: {\n      // REQUIRED - Cookie domain (only required if cookieStorage is provided)\n      // This should be the subdomain in production as the cookie should only\n      // be present for the current site\n      domain: \"localhost\",\n      // OPTIONAL - Cookie path\n      path: \"/\",\n      // OPTIONAL - Cookie expiration in days\n      expires: 7,\n      // OPTIONAL - Cookie secure flag\n      // Either true or false, indicating if the cookie transmission requires a secure protocol (https).\n      // The cookie can be secure in production\n      secure: false\n    }\n  }\n});\n_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4___default().configure({\n  oauth: {\n    domain: \"grade-builder.auth.us-east-2.amazoncognito.com\",\n    scope: [\"email\", \"openid\"],\n    // we need the /autologin step in between to set the cookies properly,\n    // we don't need that when signing out though\n    redirectSignIn: \"http://localhost:3000/token\",\n    redirectSignOut: \"http://localhost:3000/login\",\n    responseType: \"token\"\n  }\n});\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  // const store = useStore((state) => state);\n  return (\n    /*#__PURE__*/\n    // <PersistGate persistor={store.__persistor} loading = {<div>Loading</div>}>\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this) // </PersistGate>\n\n  );\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp); // export default wrapper.withRedux(MyApp)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFkZV9idWlsZGVyLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIkFtcGxpZnkiLCJBdXRoIiwicmVnaW9uIiwidXNlclBvb2xJZCIsInByb2Nlc3MiLCJ1c2VyUG9vbFdlYkNsaWVudElkIiwiY29va2llU3RvcmFnZSIsImRvbWFpbiIsInBhdGgiLCJleHBpcmVzIiwic2VjdXJlIiwib2F1dGgiLCJzY29wZSIsInJlZGlyZWN0U2lnbkluIiwicmVkaXJlY3RTaWduT3V0IiwicmVzcG9uc2VUeXBlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsa0VBQUEsQ0FBa0I7QUFDaEJDLE1BQUksRUFBRTtBQUNKQyxVQUFNLEVBQUUsV0FESjtBQUNpQjtBQUNyQkMsY0FBVSxFQUFFQyxxQkFGUjtBQUdKQyx1QkFBbUIsRUFBRUQsNEJBSGpCO0FBS0o7QUFDQTtBQUNBO0FBQ0FFLGlCQUFhLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQUMsWUFBTSxFQUFFSCxXQUpLO0FBS2I7QUFDQUksVUFBSSxFQUFFLEdBTk87QUFPYjtBQUNBQyxhQUFPLEVBQUUsQ0FSSTtBQVNiO0FBQ0E7QUFDQTtBQUNBQyxZQUFNLEVBQUU7QUFaSztBQVJYO0FBRFUsQ0FBbEI7QUEwQkFULGtFQUFBLENBQWU7QUFDYlUsT0FBSyxFQUFFO0FBQ0xKLFVBQU0sRUFBRUgsZ0RBREg7QUFFTFEsU0FBSyxFQUFFLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FGRjtBQUdMO0FBQ0E7QUFDQUMsa0JBQWMsRUFBRVQsNkJBTFg7QUFNTFUsbUJBQWUsRUFBRVYsNkJBTlo7QUFPTFcsZ0JBQVksRUFBRTtBQVBUO0FBRE0sQ0FBZjs7QUFZQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkM7QUFDQTtBQUFBO0FBQ0U7QUFDRSxrRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixDQUdFOztBQUhGO0FBS0Q7O0FBQ0QsK0RBQWVGLEtBQWYsRSxDQUNBIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFtcGxpZnkgZnJvbSBcIkBhd3MtYW1wbGlmeS9jb3JlXCI7XG5pbXBvcnQgQXV0aCBmcm9tIFwiQGF3cy1hbXBsaWZ5L2F1dGhcIjtcblxuQW1wbGlmeS5jb25maWd1cmUoe1xuICBBdXRoOiB7XG4gICAgcmVnaW9uOiBcInVzLWVhc3QtMlwiLCAvLyEgS29uZmlndXJhdGlvblxuICAgIHVzZXJQb29sSWQ6IHByb2Nlc3MuZW52LlVTRVJfUE9PTF9JRCxcbiAgICB1c2VyUG9vbFdlYkNsaWVudElkOiBwcm9jZXNzLmVudi5VU0VSX1BPT0xfQ0xJRU5UX0lELFxuXG4gICAgLy8gT1BUSU9OQUwgLSBDb25maWd1cmF0aW9uIGZvciBjb29raWUgc3RvcmFnZVxuICAgIC8vIE5vdGU6IGlmIHRoZSBzZWN1cmUgZmxhZyBpcyBzZXQgdG8gdHJ1ZSwgdGhlbiB0aGUgY29va2llIHRyYW5zbWlzc2lvbiByZXF1aXJlcyBhIHNlY3VyZSBwcm90b2NvbFxuICAgIC8vIGV4YW1wbGUgdGFrZW4gZnJvbSBodHRwczovL2F3cy1hbXBsaWZ5LmdpdGh1Yi5pby9kb2NzL2pzL2F1dGhlbnRpY2F0aW9uXG4gICAgY29va2llU3RvcmFnZToge1xuICAgICAgLy8gUkVRVUlSRUQgLSBDb29raWUgZG9tYWluIChvbmx5IHJlcXVpcmVkIGlmIGNvb2tpZVN0b3JhZ2UgaXMgcHJvdmlkZWQpXG4gICAgICAvLyBUaGlzIHNob3VsZCBiZSB0aGUgc3ViZG9tYWluIGluIHByb2R1Y3Rpb24gYXMgdGhlIGNvb2tpZSBzaG91bGQgb25seVxuICAgICAgLy8gYmUgcHJlc2VudCBmb3IgdGhlIGN1cnJlbnQgc2l0ZVxuICAgICAgZG9tYWluOiBwcm9jZXNzLmVudi5BVVRIX0NPT0tJRV9ET01BSU4sXG4gICAgICAvLyBPUFRJT05BTCAtIENvb2tpZSBwYXRoXG4gICAgICBwYXRoOiBcIi9cIixcbiAgICAgIC8vIE9QVElPTkFMIC0gQ29va2llIGV4cGlyYXRpb24gaW4gZGF5c1xuICAgICAgZXhwaXJlczogNyxcbiAgICAgIC8vIE9QVElPTkFMIC0gQ29va2llIHNlY3VyZSBmbGFnXG4gICAgICAvLyBFaXRoZXIgdHJ1ZSBvciBmYWxzZSwgaW5kaWNhdGluZyBpZiB0aGUgY29va2llIHRyYW5zbWlzc2lvbiByZXF1aXJlcyBhIHNlY3VyZSBwcm90b2NvbCAoaHR0cHMpLlxuICAgICAgLy8gVGhlIGNvb2tpZSBjYW4gYmUgc2VjdXJlIGluIHByb2R1Y3Rpb25cbiAgICAgIHNlY3VyZTogZmFsc2UsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5BdXRoLmNvbmZpZ3VyZSh7XG4gIG9hdXRoOiB7XG4gICAgZG9tYWluOiBwcm9jZXNzLmVudi5JRFBfRE9NQUlOLFxuICAgIHNjb3BlOiBbXCJlbWFpbFwiLCBcIm9wZW5pZFwiXSxcbiAgICAvLyB3ZSBuZWVkIHRoZSAvYXV0b2xvZ2luIHN0ZXAgaW4gYmV0d2VlbiB0byBzZXQgdGhlIGNvb2tpZXMgcHJvcGVybHksXG4gICAgLy8gd2UgZG9uJ3QgbmVlZCB0aGF0IHdoZW4gc2lnbmluZyBvdXQgdGhvdWdoXG4gICAgcmVkaXJlY3RTaWduSW46IHByb2Nlc3MuZW52LlJFRElSRUNUX1NJR05fSU4sXG4gICAgcmVkaXJlY3RTaWduT3V0OiBwcm9jZXNzLmVudi5SRURJUkVDVF9TSUdOX09VVCxcbiAgICByZXNwb25zZVR5cGU6IFwidG9rZW5cIixcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgLy8gY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlKTtcbiAgcmV0dXJuIChcbiAgICAvLyA8UGVyc2lzdEdhdGUgcGVyc2lzdG9yPXtzdG9yZS5fX3BlcnNpc3Rvcn0gbG9hZGluZyA9IHs8ZGl2PkxvYWRpbmc8L2Rpdj59PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIC8vIDwvUGVyc2lzdEdhdGU+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuLy8gZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "@aws-amplify/auth":
/*!************************************!*\
  !*** external "@aws-amplify/auth" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@aws-amplify/auth");;

/***/ }),

/***/ "@aws-amplify/core":
/*!************************************!*\
  !*** external "@aws-amplify/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@aws-amplify/core");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();