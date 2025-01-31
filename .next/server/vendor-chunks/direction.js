"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/direction";
exports.ids = ["vendor-chunks/direction"];
exports.modules = {

/***/ "(ssr)/./node_modules/direction/index.js":
/*!*****************************************!*\
  !*** ./node_modules/direction/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = direction\n\nvar RTL = '\\u0591-\\u07FF\\uFB1D-\\uFDFD\\uFE70-\\uFEFC'\nvar LTR =\n  'A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6' +\n  '\\u00F8-\\u02B8\\u0300-\\u0590\\u0800-\\u1FFF\\u200E\\u2C00-\\uFB1C' +\n  '\\uFE00-\\uFE6F\\uFEFD-\\uFFFF'\n\nvar rtl = new RegExp('^[^' + LTR + ']*[' + RTL + ']')\nvar ltr = new RegExp('^[^' + RTL + ']*[' + LTR + ']')\n\nfunction direction(value) {\n  value = String(value || '')\n\n  if (rtl.test(value)) {\n    return 'rtl'\n  }\n\n  if (ltr.test(value)) {\n    return 'ltr'\n  }\n\n  return 'neutral'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGlyZWN0aW9uL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiRDpcXFNPV05fR0lBSUNcXE5FWFQtV09SS1xcSEFDS0FUSE9OLTNcXFVJLVVYLUhBQ0tBVEhPTi1OZXh0SlMtRGVzaWduLUphbS0yMDI0LShNWS1DTE9ORS1QUk9KRUNUKVxcbm9kZV9tb2R1bGVzXFxkaXJlY3Rpb25cXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRpcmVjdGlvblxuXG52YXIgUlRMID0gJ1xcdTA1OTEtXFx1MDdGRlxcdUZCMUQtXFx1RkRGRFxcdUZFNzAtXFx1RkVGQydcbnZhciBMVFIgPVxuICAnQS1aYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2JyArXG4gICdcXHUwMEY4LVxcdTAyQjhcXHUwMzAwLVxcdTA1OTBcXHUwODAwLVxcdTFGRkZcXHUyMDBFXFx1MkMwMC1cXHVGQjFDJyArXG4gICdcXHVGRTAwLVxcdUZFNkZcXHVGRUZELVxcdUZGRkYnXG5cbnZhciBydGwgPSBuZXcgUmVnRXhwKCdeW14nICsgTFRSICsgJ10qWycgKyBSVEwgKyAnXScpXG52YXIgbHRyID0gbmV3IFJlZ0V4cCgnXlteJyArIFJUTCArICddKlsnICsgTFRSICsgJ10nKVxuXG5mdW5jdGlvbiBkaXJlY3Rpb24odmFsdWUpIHtcbiAgdmFsdWUgPSBTdHJpbmcodmFsdWUgfHwgJycpXG5cbiAgaWYgKHJ0bC50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAncnRsJ1xuICB9XG5cbiAgaWYgKGx0ci50ZXN0KHZhbHVlKSkge1xuICAgIHJldHVybiAnbHRyJ1xuICB9XG5cbiAgcmV0dXJuICduZXV0cmFsJ1xufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/direction/index.js\n");

/***/ })

};
;