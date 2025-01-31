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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getRandomValues)\n/* harmony export */ });\n// Strict ESM env, designed to run outside Node.js in envs that provide WebCrypto (deno, browsers, etc)\n\nfunction getRandomValues(typedArray) {\n  const crypto =\n    typeof window !== 'undefined' && 'crypto' in window\n      ? window.crypto\n      : globalThis.crypto\n\n  if (!crypto || !crypto.getRandomValues) {\n    throw new Error('WebCrypto not available in this environment')\n  }\n\n  return crypto.getRandomValues(typedArray)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ2V0LXJhbmRvbS12YWx1ZXMtZXNtL2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiRDpcXFNPV05fR0lBSUNcXE5FWFQtV09SS1xcSEFDS0FUSE9OLTNcXFVJLVVYLUhBQ0tBVEhPTi1OZXh0SlMtRGVzaWduLUphbS0yMDI0LShNWS1DTE9ORS1QUk9KRUNUKVxcbm9kZV9tb2R1bGVzXFxnZXQtcmFuZG9tLXZhbHVlcy1lc21cXGluZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdHJpY3QgRVNNIGVudiwgZGVzaWduZWQgdG8gcnVuIG91dHNpZGUgTm9kZS5qcyBpbiBlbnZzIHRoYXQgcHJvdmlkZSBXZWJDcnlwdG8gKGRlbm8sIGJyb3dzZXJzLCBldGMpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJhbmRvbVZhbHVlcyh0eXBlZEFycmF5KSB7XG4gIGNvbnN0IGNyeXB0byA9XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2NyeXB0bycgaW4gd2luZG93XG4gICAgICA/IHdpbmRvdy5jcnlwdG9cbiAgICAgIDogZ2xvYmFsVGhpcy5jcnlwdG9cblxuICBpZiAoIWNyeXB0byB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgIHRocm93IG5ldyBFcnJvcignV2ViQ3J5cHRvIG5vdCBhdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudCcpXG4gIH1cblxuICByZXR1cm4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyh0eXBlZEFycmF5KVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/get-random-values-esm/index.mjs\n");

/***/ })

};
;