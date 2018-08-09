/** I import here the FLIP FUNCTION!!!! */
import {generateSeedFromFlipsCoin} from "@/utils/flip-coin";

/**
 * Calculates a random number less than a limit provided, it uses the Linear Congruential Method
 * @param {*} limit A limit provided to calculate the random number
 * @returns {int} Returns a random number between 0 and less than the limit provided
 * @throws {error} Throws validation erros for non-parameters and limit constraints
 */
export function randomNumberGenerator(limit){
  try{
    /**
     * Validating input data
     */
    if(limit===undefined || limit===null)
      throw new Error("There isn't data provided");
    if(limit<=0)  
      throw new Error("The limit should be greater than 0");
    if(limit>=1000000)
      throw new Error("The limit should be less than 1000000");
    /**
     * Using Linear Congruential Method to generate the random number
     * Values needed to calculate the random number
    */
    const seed = generateSeedFromFlipsCoin(limit);
    const multiplier = generateSeedFromFlipsCoin(limit);
    const increment = generateSeedFromFlipsCoin(limit);
    const randomNumber=(multiplier * seed + increment) % limit;
    
    return randomNumber
  }catch(error){
    throw error;
  }
}


