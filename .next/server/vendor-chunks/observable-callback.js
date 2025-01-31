"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/observable-callback";
exports.ids = ["vendor-chunks/observable-callback"];
exports.modules = {

/***/ "(ssr)/./node_modules/observable-callback/dist/esm/observableCallback.js":
/*!*************************************************************************!*\
  !*** ./node_modules/observable-callback/dist/esm/observableCallback.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   observableCallback: () => (/* binding */ observableCallback)\n/* harmony export */ });\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ \"(ssr)/./node_modules/rxjs/dist/esm5/internal/Subject.js\");\n\nvar pass = function (input$) { return input$; };\nfunction observableCallback(operator) {\n    if (operator === void 0) { operator = pass; }\n    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();\n    return [subject.pipe(operator), function (arg) { return subject.next(arg); }];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JzZXJ2YWJsZS1jYWxsYmFjay9kaXN0L2VzbS9vYnNlcnZhYmxlQ2FsbGJhY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0I7QUFDL0IsK0JBQStCO0FBQ3hCO0FBQ1AsK0JBQStCO0FBQy9CLHNCQUFzQix5Q0FBTztBQUM3QixxREFBcUQsMkJBQTJCO0FBQ2hGIiwic291cmNlcyI6WyJEOlxcU09XTl9HSUFJQ1xcTkVYVC1XT1JLXFxIQUNLQVRIT04tM1xcVUktVVgtSEFDS0FUSE9OLU5leHRKUy1EZXNpZ24tSmFtLTIwMjRcXG5vZGVfbW9kdWxlc1xcb2JzZXJ2YWJsZS1jYWxsYmFja1xcZGlzdFxcZXNtXFxvYnNlcnZhYmxlQ2FsbGJhY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG52YXIgcGFzcyA9IGZ1bmN0aW9uIChpbnB1dCQpIHsgcmV0dXJuIGlucHV0JDsgfTtcbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZhYmxlQ2FsbGJhY2sob3BlcmF0b3IpIHtcbiAgICBpZiAob3BlcmF0b3IgPT09IHZvaWQgMCkgeyBvcGVyYXRvciA9IHBhc3M7IH1cbiAgICB2YXIgc3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcmV0dXJuIFtzdWJqZWN0LnBpcGUob3BlcmF0b3IpLCBmdW5jdGlvbiAoYXJnKSB7IHJldHVybiBzdWJqZWN0Lm5leHQoYXJnKTsgfV07XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/observable-callback/dist/esm/observableCallback.js\n");

/***/ })

};
;