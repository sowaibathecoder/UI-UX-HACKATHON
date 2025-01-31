"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-effect-event";
exports.ids = ["vendor-chunks/use-effect-event"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-effect-event/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/use-effect-event/dist/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useEffectEvent: () => (/* binding */ useEffectEvent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n\nfunction useEffectEvent(fn) {\n  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useInsertionEffect)(() => {\n    ref.current = fn;\n  }, [fn]), (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args) => {\n    const latestFn = ref.current;\n    return latestFn(...args);\n  }, []);\n}\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLWVmZmVjdC1ldmVudC9kaXN0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWdFO0FBQ2hFO0FBQ0EsY0FBYyw2Q0FBTTtBQUNwQixTQUFTLHlEQUFrQjtBQUMzQjtBQUNBLEdBQUcsU0FBUyxrREFBVztBQUN2QjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBR0U7QUFDRiIsInNvdXJjZXMiOlsiRDpcXFNPV05fR0lBSUNcXE5FWFQtV09SS1xcSEFDS0FUSE9OLTNcXFVJLVVYLUhBQ0tBVEhPTi1OZXh0SlMtRGVzaWduLUphbS0yMDI0LShNWS1DTE9ORS1QUk9KRUNUKVxcbm9kZV9tb2R1bGVzXFx1c2UtZWZmZWN0LWV2ZW50XFxkaXN0XFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUluc2VydGlvbkVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIHVzZUVmZmVjdEV2ZW50KGZuKSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgcmV0dXJuIHVzZUluc2VydGlvbkVmZmVjdCgoKSA9PiB7XG4gICAgcmVmLmN1cnJlbnQgPSBmbjtcbiAgfSwgW2ZuXSksIHVzZUNhbGxiYWNrKCguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgbGF0ZXN0Rm4gPSByZWYuY3VycmVudDtcbiAgICByZXR1cm4gbGF0ZXN0Rm4oLi4uYXJncyk7XG4gIH0sIFtdKTtcbn1cbmV4cG9ydCB7XG4gIHVzZUVmZmVjdEV2ZW50XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-effect-event/dist/index.js\n");

/***/ })

};
;