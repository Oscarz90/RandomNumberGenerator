"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flip = flip;
exports.generateSeedFromFlipsCoin = generateSeedFromFlipsCoin;

var _typeConversion = require("./type-conversion");

/** 
 * Simulates a flip coin, true or false for our purpouses.
 * @returns {boolean} A boolean value that simulates a flip coin
 */
function flip() {
  return Math.random() >= 0.5;
}

/**
 * Generates a seed with a maximun value constraint, its randomness is based
 * on the flip coin function!!!!!!! :D!
 * @param {*} maximunValue The maximun value for the seed generated
 * @returns {int} Returns a seed generated with a maximun value constraint.
 */
function generateSeedFromFlipsCoin(maximunValue) {
  var binary = maximunValue.toString(2),
      randomNumber = 0;

  do {
    binary = binary.split("").map(function (value) {
      return (0, _typeConversion.booleanToString)(flip());
    }).join("");
    randomNumber = Number.parseInt(binary, 2);
  } while (randomNumber >= maximunValue);

  return randomNumber;
}