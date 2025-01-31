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

eval("\n\nvar convert = __webpack_require__(/*! unist-util-is/convert */ \"(ssr)/./node_modules/unist-util-is/convert.js\")\n\nmodule.exports = filter\n\nvar own = {}.hasOwnProperty\n\nfunction filter(tree, options, test) {\n  var is = convert(test || options)\n  var cascade = options.cascade == null ? true : options.cascade\n\n  return preorder(tree, null, null)\n\n  function preorder(node, index, parent) {\n    var children\n    var childIndex\n    var result\n    var next\n    var key\n\n    if (!is(node, index, parent)) return null\n\n    if (node.children) {\n      children = []\n      childIndex = -1\n\n      while (++childIndex < node.children.length) {\n        result = preorder(node.children[childIndex], childIndex, node)\n\n        if (result) {\n          children.push(result)\n        }\n      }\n\n      if (cascade && node.children.length && !children.length) return null\n    }\n\n    // Create a shallow clone, using the new children.\n    next = {}\n\n    for (key in node) {\n      /* istanbul ignore else - Prototype injection. */\n      if (own.call(node, key)) {\n        next[key] = key === 'children' ? children : node[key]\n      }\n    }\n\n    return next\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1maWx0ZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVosY0FBYyxtQkFBTyxDQUFDLDRFQUF1Qjs7QUFFN0M7O0FBRUEsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJEOlxcU09XTl9HSUFJQ1xcTkVYVC1XT1JLXFxIQUNLQVRIT04tM1xcVUktVVgtSEFDS0FUSE9OLU5leHRKUy1EZXNpZ24tSmFtLTIwMjQtKE1ZLUNMT05FLVBST0pFQ1QpXFxub2RlX21vZHVsZXNcXHVuaXN0LXV0aWwtZmlsdGVyXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxudmFyIGNvbnZlcnQgPSByZXF1aXJlKCd1bmlzdC11dGlsLWlzL2NvbnZlcnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbHRlclxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuZnVuY3Rpb24gZmlsdGVyKHRyZWUsIG9wdGlvbnMsIHRlc3QpIHtcbiAgdmFyIGlzID0gY29udmVydCh0ZXN0IHx8IG9wdGlvbnMpXG4gIHZhciBjYXNjYWRlID0gb3B0aW9ucy5jYXNjYWRlID09IG51bGwgPyB0cnVlIDogb3B0aW9ucy5jYXNjYWRlXG5cbiAgcmV0dXJuIHByZW9yZGVyKHRyZWUsIG51bGwsIG51bGwpXG5cbiAgZnVuY3Rpb24gcHJlb3JkZXIobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIHZhciBjaGlsZHJlblxuICAgIHZhciBjaGlsZEluZGV4XG4gICAgdmFyIHJlc3VsdFxuICAgIHZhciBuZXh0XG4gICAgdmFyIGtleVxuXG4gICAgaWYgKCFpcyhub2RlLCBpbmRleCwgcGFyZW50KSkgcmV0dXJuIG51bGxcblxuICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICBjaGlsZHJlbiA9IFtdXG4gICAgICBjaGlsZEluZGV4ID0gLTFcblxuICAgICAgd2hpbGUgKCsrY2hpbGRJbmRleCA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdCA9IHByZW9yZGVyKG5vZGUuY2hpbGRyZW5bY2hpbGRJbmRleF0sIGNoaWxkSW5kZXgsIG5vZGUpXG5cbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGNoaWxkcmVuLnB1c2gocmVzdWx0KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjYXNjYWRlICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoICYmICFjaGlsZHJlbi5sZW5ndGgpIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGEgc2hhbGxvdyBjbG9uZSwgdXNpbmcgdGhlIG5ldyBjaGlsZHJlbi5cbiAgICBuZXh0ID0ge31cblxuICAgIGZvciAoa2V5IGluIG5vZGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlIC0gUHJvdG90eXBlIGluamVjdGlvbi4gKi9cbiAgICAgIGlmIChvd24uY2FsbChub2RlLCBrZXkpKSB7XG4gICAgICAgIG5leHRba2V5XSA9IGtleSA9PT0gJ2NoaWxkcmVuJyA/IGNoaWxkcmVuIDogbm9kZVtrZXldXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-filter/index.js\n");

/***/ })

};
;