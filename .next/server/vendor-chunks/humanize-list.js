"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/humanize-list";
exports.ids = ["vendor-chunks/humanize-list"];
exports.modules = {

/***/ "(ssr)/./node_modules/humanize-list/index.js":
/*!*********************************************!*\
  !*** ./node_modules/humanize-list/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function humanizeList (list, options) {\n  if (!Array.isArray(list)) {\n    throw new TypeError('humanize-list expected an array')\n  }\n\n  options = options || {}\n  options.conjunction = options.conjunction || 'and'\n\n  var listLength = list.length\n\n  if (listLength === 1) {\n    return list[0]\n  }\n\n  if (options.skipConjunction) {\n    return list.join(', ')\n  }\n\n  var humanizedList = ''\n  for (var i = 0; i < listLength; i++) {\n    if (i === listLength - 1) {\n      if (options.oxfordComma) {\n        humanizedList += ','\n      }\n\n      humanizedList += ' ' + options.conjunction + ' '\n    } else if (i !== 0) {\n      humanizedList += ', '\n    }\n\n    humanizedList += list[i]\n  }\n\n  return humanizedList\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHVtYW5pemUtbGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJEOlxcU09XTl9HSUFJQ1xcTkVYVC1XT1JLXFxIQUNLQVRIT04tM1xcVUktVVgtSEFDS0FUSE9OLU5leHRKUy1EZXNpZ24tSmFtLTIwMjRcXG5vZGVfbW9kdWxlc1xcaHVtYW5pemUtbGlzdFxcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaHVtYW5pemVMaXN0IChsaXN0LCBvcHRpb25zKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2h1bWFuaXplLWxpc3QgZXhwZWN0ZWQgYW4gYXJyYXknKVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgb3B0aW9ucy5jb25qdW5jdGlvbiA9IG9wdGlvbnMuY29uanVuY3Rpb24gfHwgJ2FuZCdcblxuICB2YXIgbGlzdExlbmd0aCA9IGxpc3QubGVuZ3RoXG5cbiAgaWYgKGxpc3RMZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgaWYgKG9wdGlvbnMuc2tpcENvbmp1bmN0aW9uKSB7XG4gICAgcmV0dXJuIGxpc3Quam9pbignLCAnKVxuICB9XG5cbiAgdmFyIGh1bWFuaXplZExpc3QgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RMZW5ndGg7IGkrKykge1xuICAgIGlmIChpID09PSBsaXN0TGVuZ3RoIC0gMSkge1xuICAgICAgaWYgKG9wdGlvbnMub3hmb3JkQ29tbWEpIHtcbiAgICAgICAgaHVtYW5pemVkTGlzdCArPSAnLCdcbiAgICAgIH1cblxuICAgICAgaHVtYW5pemVkTGlzdCArPSAnICcgKyBvcHRpb25zLmNvbmp1bmN0aW9uICsgJyAnXG4gICAgfSBlbHNlIGlmIChpICE9PSAwKSB7XG4gICAgICBodW1hbml6ZWRMaXN0ICs9ICcsICdcbiAgICB9XG5cbiAgICBodW1hbml6ZWRMaXN0ICs9IGxpc3RbaV1cbiAgfVxuXG4gIHJldHVybiBodW1hbml6ZWRMaXN0XG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/humanize-list/index.js\n");

/***/ })

};
;