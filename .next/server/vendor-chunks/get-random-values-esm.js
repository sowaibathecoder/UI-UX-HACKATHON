"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-random-values-esm";
exports.ids = ["vendor-chunks/get-random-values-esm"];
exports.modules = {

/***/ "(ssr)/./node_modules/get-random-values-esm/index.mjs":
/*!******************************************************!*\
  !*** ./node_modules/get-random-values-esm/index.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getRandomValues)\n/* harmony export */ });\n// Strict ESM env, designed to run outside Node.js in envs that provide WebCrypto (deno, browsers, etc)\n\nfunction getRandomValues(typedArray) {\n  const crypto =\n    typeof window !== 'undefined' && 'crypto' in window\n      ? window.crypto\n      : globalThis.crypto\n\n  if (!crypto || !crypto.getRandomValues) {\n    throw new Error('WebCrypto not available in this environment')\n  }\n\n  return crypto.getRandomValues(typedArray)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ2V0LXJhbmRvbS12YWx1ZXMtZXNtL2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiRDpcXFNPV05fR0lBSUNcXE5FWFQtV09SS1xcSEFDS0FUSE9OLTNcXFVJLVVYLUhBQ0tBVEhPTi1OZXh0SlMtRGVzaWduLUphbS0yMDI0XFxub2RlX21vZHVsZXNcXGdldC1yYW5kb20tdmFsdWVzLWVzbVxcaW5kZXgubWpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN0cmljdCBFU00gZW52LCBkZXNpZ25lZCB0byBydW4gb3V0c2lkZSBOb2RlLmpzIGluIGVudnMgdGhhdCBwcm92aWRlIFdlYkNyeXB0byAoZGVubywgYnJvd3NlcnMsIGV0YylcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UmFuZG9tVmFsdWVzKHR5cGVkQXJyYXkpIHtcbiAgY29uc3QgY3J5cHRvID1cbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnY3J5cHRvJyBpbiB3aW5kb3dcbiAgICAgID8gd2luZG93LmNyeXB0b1xuICAgICAgOiBnbG9iYWxUaGlzLmNyeXB0b1xuXG4gIGlmICghY3J5cHRvIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdXZWJDcnlwdG8gbm90IGF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50JylcbiAgfVxuXG4gIHJldHVybiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHR5cGVkQXJyYXkpXG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/get-random-values-esm/index.mjs\n");

/***/ })

};
;