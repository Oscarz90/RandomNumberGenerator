"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.booleanToString = booleanToString;
/**
 * Converts a boolean value to its corresponding strin value, 1 for true and 0 for false
 * @param {*} value A boolean value, true or false
 * @returns {boolean} Returns a string with a value 1 or 0 correspondint to true and false respectively
 */
function booleanToString(value) {
  return value ? "1" : "0";
};