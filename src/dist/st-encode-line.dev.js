"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = encodeLine;

var _index = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split('');
  var result = '';
  var n = 1;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      n++;
    } else if (str[i] !== str[i + 1]) {
      result += n !== 1 ? n + str[i] : str[i];
      n = 1;
    }
  }

  return result;
}