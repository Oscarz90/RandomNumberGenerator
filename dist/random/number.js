"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomNumberGenerator = randomNumberGenerator;

var _flipCoin = require("../utils/flip-coin");

/**
 * Calculates a random number less than a limit provided, it uses the Linear Congruential Method
 * @param {*} limit A limit provided to calculate the random number
 * @returns {int} Returns a random number between 0 and less than the limit provided
 * @throws {error} Throws validation erros for non-parameters and limit constraints
 */
function randomNumberGenerator(limit) {
  try {
    /**
     * Validating input data
     */
    if (limit === undefined || limit === null) throw new Error("There isn't data provided");
    if (limit <= 0) throw new Error("The limit should be greater than 0");
    if (limit >= 1000000) throw new Error("The limit should be less than 1000000");
    /**
     * Using Linear Congruential Method to generate the random number
     * Values needed to calculate the random number
    */
    var seed = (0, _flipCoin.generateSeedFromFlipsCoin)(limit);
    var multiplier = (0, _flipCoin.generateSeedFromFlipsCoin)(limit);
    var increment = (0, _flipCoin.generateSeedFromFlipsCoin)(limit);
    var randomNumber = (multiplier * seed + increment) % limit;

    return randomNumber;
  } catch (error) {
    throw error;
  }
} /** I import here the FLIP FUNCTION!!!! */