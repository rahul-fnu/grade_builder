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
exports.id = "pages/token";
exports.ids = ["pages/token"];
exports.modules = {

/***/ "./pages/token/index.js":
/*!******************************!*\
  !*** ./pages/token/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TokenSetter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var aws_cognito_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-cognito-next */ \"aws-cognito-next\");\n/* harmony import */ var aws_cognito_next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aws_cognito_next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! query-string */ \"query-string\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/rahulraiii/Desktop/grade_builder/pages/token/index.js\";\n// pages/token.tsx\n\n\n\n\n\nconst extractFirst = value => {\n  return Array.isArray(value) ? value[0] : value;\n}; // When a user comes back from authenticating, the url looks like this:\n//   /token#id_token=....\n// At this point, there will be no cookies yet. If we would render any page on\n// the server now, it would seem as-if the user is not authenticated yet.\n//\n// We therefore wait until Amplify has set its cookies. It does this\n// automatically because the id_token hash is present. Then we redirect the\n// user back to the main page. That page can now use SSR as the user will have\n// the necessary cookies ready.\n\n\nfunction TokenSetter() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  (0,aws_cognito_next__WEBPACK_IMPORTED_MODULE_3__.useAuthRedirect)(() => {\n    // We are not using the router here, since the query object will be empty\n    // during prerendering if the page is statically optimized.\n    // So the router's location would return no search the first time.\n    const redirectUriAfterSignIn = extractFirst(query_string__WEBPACK_IMPORTED_MODULE_4___default().parse(window.location.search).to || \"\") || \"/login\";\n    router.replace(redirectUriAfterSignIn);\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"loading..\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 10\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFkZV9idWlsZGVyLy4vcGFnZXMvdG9rZW4vaW5kZXguanM/ZTBjOCJdLCJuYW1lcyI6WyJleHRyYWN0Rmlyc3QiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIlRva2VuU2V0dGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlQXV0aFJlZGlyZWN0IiwicmVkaXJlY3RVcmlBZnRlclNpZ25JbiIsInF1ZXJ5U3RyaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJ0byIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQzlCLFNBQU9DLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixLQUFkLElBQXVCQSxLQUFLLENBQUMsQ0FBRCxDQUE1QixHQUFrQ0EsS0FBekM7QUFDRCxDQUZELEMsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNlLFNBQVNHLFdBQVQsR0FBdUI7QUFDcEMsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBQyxtRUFBZSxDQUFDLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0EsVUFBTUMsc0JBQXNCLEdBQzFCUixZQUFZLENBQUNTLHlEQUFBLENBQWtCQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWxDLEVBQTBDQyxFQUExQyxJQUFnRCxFQUFqRCxDQUFaLElBQW9FLFFBRHRFO0FBR0FSLFVBQU0sQ0FBQ1MsT0FBUCxDQUFlTixzQkFBZjtBQUNELEdBUmMsQ0FBZjtBQVVBLHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRCIsImZpbGUiOiIuL3BhZ2VzL3Rva2VuL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvdG9rZW4udHN4XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUF1dGhSZWRpcmVjdCB9IGZyb20gXCJhd3MtY29nbml0by1uZXh0XCI7XG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSBcInF1ZXJ5LXN0cmluZ1wiO1xuXG5jb25zdCBleHRyYWN0Rmlyc3QgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWVbMF0gOiB2YWx1ZTtcbn07XG5cbi8vIFdoZW4gYSB1c2VyIGNvbWVzIGJhY2sgZnJvbSBhdXRoZW50aWNhdGluZywgdGhlIHVybCBsb29rcyBsaWtlIHRoaXM6XG4vLyAgIC90b2tlbiNpZF90b2tlbj0uLi4uXG4vLyBBdCB0aGlzIHBvaW50LCB0aGVyZSB3aWxsIGJlIG5vIGNvb2tpZXMgeWV0LiBJZiB3ZSB3b3VsZCByZW5kZXIgYW55IHBhZ2Ugb25cbi8vIHRoZSBzZXJ2ZXIgbm93LCBpdCB3b3VsZCBzZWVtIGFzLWlmIHRoZSB1c2VyIGlzIG5vdCBhdXRoZW50aWNhdGVkIHlldC5cbi8vXG4vLyBXZSB0aGVyZWZvcmUgd2FpdCB1bnRpbCBBbXBsaWZ5IGhhcyBzZXQgaXRzIGNvb2tpZXMuIEl0IGRvZXMgdGhpc1xuLy8gYXV0b21hdGljYWxseSBiZWNhdXNlIHRoZSBpZF90b2tlbiBoYXNoIGlzIHByZXNlbnQuIFRoZW4gd2UgcmVkaXJlY3QgdGhlXG4vLyB1c2VyIGJhY2sgdG8gdGhlIG1haW4gcGFnZS4gVGhhdCBwYWdlIGNhbiBub3cgdXNlIFNTUiBhcyB0aGUgdXNlciB3aWxsIGhhdmVcbi8vIHRoZSBuZWNlc3NhcnkgY29va2llcyByZWFkeS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRva2VuU2V0dGVyKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlQXV0aFJlZGlyZWN0KCgpID0+IHtcbiAgICAvLyBXZSBhcmUgbm90IHVzaW5nIHRoZSByb3V0ZXIgaGVyZSwgc2luY2UgdGhlIHF1ZXJ5IG9iamVjdCB3aWxsIGJlIGVtcHR5XG4gICAgLy8gZHVyaW5nIHByZXJlbmRlcmluZyBpZiB0aGUgcGFnZSBpcyBzdGF0aWNhbGx5IG9wdGltaXplZC5cbiAgICAvLyBTbyB0aGUgcm91dGVyJ3MgbG9jYXRpb24gd291bGQgcmV0dXJuIG5vIHNlYXJjaCB0aGUgZmlyc3QgdGltZS5cbiAgICBjb25zdCByZWRpcmVjdFVyaUFmdGVyU2lnbkluID1cbiAgICAgIGV4dHJhY3RGaXJzdChxdWVyeVN0cmluZy5wYXJzZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS50byB8fCBcIlwiKSB8fCBcIi9sb2dpblwiO1xuXG4gICAgcm91dGVyLnJlcGxhY2UocmVkaXJlY3RVcmlBZnRlclNpZ25Jbik7XG4gIH0pO1xuXG4gIHJldHVybiA8cD5sb2FkaW5nLi48L3A+O1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/token/index.js\n");

/***/ }),

/***/ "aws-cognito-next":
/*!***********************************!*\
  !*** external "aws-cognito-next" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("aws-cognito-next");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("query-string");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/token/index.js"));
module.exports = __webpack_exports__;

})();