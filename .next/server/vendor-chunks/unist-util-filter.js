"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-filter";
exports.ids = ["vendor-chunks/unist-util-filter"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-filter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/unist-util-filter/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar convert = __webpack_require__(/*! unist-util-is/convert */ \"(ssr)/./node_modules/unist-util-is/convert.js\")\n\nmodule.exports = filter\n\nvar own = {}.hasOwnProperty\n\nfunction filter(tree, options, test) {\n  var is = convert(test || options)\n  var cascade = options.cascade == null ? true : options.cascade\n\n  return preorder(tree, null, null)\n\n  function preorder(node, index, parent) {\n    var children\n    var childIndex\n    var result\n    var next\n    var key\n\n    if (!is(node, index, parent)) return null\n\n    if (node.children) {\n      children = []\n      childIndex = -1\n\n      while (++childIndex < node.children.length) {\n        result = preorder(node.children[childIndex], childIndex, node)\n\n        if (result) {\n          children.push(result)\n        }\n      }\n\n      if (cascade && node.children.length && !children.length) return null\n    }\n\n    // Create a shallow clone, using the new children.\n    next = {}\n\n    for (key in node) {\n      /* istanbul ignore else - Prototype injection. */\n      if (own.call(node, key)) {\n        next[key] = key === 'children' ? children : node[key]\n      }\n    }\n\n    return next\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1maWx0ZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVosY0FBYyxtQkFBTyxDQUFDLDRFQUF1Qjs7QUFFN0M7O0FBRUEsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJEOlxcU09XTl9HSUFJQ1xcTkVYVC1XT1JLXFxIQUNLQVRIT04tM1xcVUktVVgtSEFDS0FUSE9OLU5leHRKUy1EZXNpZ24tSmFtLTIwMjRcXG5vZGVfbW9kdWxlc1xcdW5pc3QtdXRpbC1maWx0ZXJcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZmlsdGVyXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG5mdW5jdGlvbiBmaWx0ZXIodHJlZSwgb3B0aW9ucywgdGVzdCkge1xuICB2YXIgaXMgPSBjb252ZXJ0KHRlc3QgfHwgb3B0aW9ucylcbiAgdmFyIGNhc2NhZGUgPSBvcHRpb25zLmNhc2NhZGUgPT0gbnVsbCA/IHRydWUgOiBvcHRpb25zLmNhc2NhZGVcblxuICByZXR1cm4gcHJlb3JkZXIodHJlZSwgbnVsbCwgbnVsbClcblxuICBmdW5jdGlvbiBwcmVvcmRlcihub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gICAgdmFyIGNoaWxkcmVuXG4gICAgdmFyIGNoaWxkSW5kZXhcbiAgICB2YXIgcmVzdWx0XG4gICAgdmFyIG5leHRcbiAgICB2YXIga2V5XG5cbiAgICBpZiAoIWlzKG5vZGUsIGluZGV4LCBwYXJlbnQpKSByZXR1cm4gbnVsbFxuXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIGNoaWxkcmVuID0gW11cbiAgICAgIGNoaWxkSW5kZXggPSAtMVxuXG4gICAgICB3aGlsZSAoKytjaGlsZEluZGV4IDwgbm9kZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0ID0gcHJlb3JkZXIobm9kZS5jaGlsZHJlbltjaGlsZEluZGV4XSwgY2hpbGRJbmRleCwgbm9kZSlcblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChyZXN1bHQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNhc2NhZGUgJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggJiYgIWNoaWxkcmVuLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYSBzaGFsbG93IGNsb25lLCB1c2luZyB0aGUgbmV3IGNoaWxkcmVuLlxuICAgIG5leHQgPSB7fVxuXG4gICAgZm9yIChrZXkgaW4gbm9kZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgLSBQcm90b3R5cGUgaW5qZWN0aW9uLiAqL1xuICAgICAgaWYgKG93bi5jYWxsKG5vZGUsIGtleSkpIHtcbiAgICAgICAgbmV4dFtrZXldID0ga2V5ID09PSAnY2hpbGRyZW4nID8gY2hpbGRyZW4gOiBub2RlW2tleV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFxuICB9XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-filter/index.js\n");

/***/ })

};
;