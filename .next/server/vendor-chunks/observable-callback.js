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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   observableCallback: () => (/* binding */ observableCallback)\n/* harmony export */ });\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ \"(ssr)/./node_modules/rxjs/dist/esm5/internal/Subject.js\");\n\nvar pass = function (input$) { return input$; };\nfunction observableCallback(operator) {\n    if (operator === void 0) { operator = pass; }\n    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();\n    return [subject.pipe(operator), function (arg) { return subject.next(arg); }];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JzZXJ2YWJsZS1jYWxsYmFjay9kaXN0L2VzbS9vYnNlcnZhYmxlQ2FsbGJhY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0I7QUFDL0IsK0JBQStCO0FBQ3hCO0FBQ1AsK0JBQStCO0FBQy9CLHNCQUFzQix5Q0FBTztBQUM3QixxREFBcUQsMkJBQTJCO0FBQ2hGIiwic291cmNlcyI6WyJEOlxcU09XTl9HSUFJQ1xcTkVYVC1XT1JLXFxIQUNLQVRIT04tM1xcVUktVVgtSEFDS0FUSE9OLU5leHRKUy1EZXNpZ24tSmFtLTIwMjQtKE1ZLUNMT05FLVBST0pFQ1QpXFxub2RlX21vZHVsZXNcXG9ic2VydmFibGUtY2FsbGJhY2tcXGRpc3RcXGVzbVxcb2JzZXJ2YWJsZUNhbGxiYWNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xudmFyIHBhc3MgPSBmdW5jdGlvbiAoaW5wdXQkKSB7IHJldHVybiBpbnB1dCQ7IH07XG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2YWJsZUNhbGxiYWNrKG9wZXJhdG9yKSB7XG4gICAgaWYgKG9wZXJhdG9yID09PSB2b2lkIDApIHsgb3BlcmF0b3IgPSBwYXNzOyB9XG4gICAgdmFyIHN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuICAgIHJldHVybiBbc3ViamVjdC5waXBlKG9wZXJhdG9yKSwgZnVuY3Rpb24gKGFyZykgeyByZXR1cm4gc3ViamVjdC5uZXh0KGFyZyk7IH1dO1xufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/observable-callback/dist/esm/observableCallback.js\n");

/***/ })

};
;