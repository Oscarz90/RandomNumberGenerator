import {booleanToString} from "@/utils/type-conversion";
/** 
 * Simulates a flip coin, true or false for our purpouses.
 * @returns {boolean} A boolean value that simulates a flip coin
 */
export function flip() {
  return Math.random() >= 0.5;
}

/**
 * Generates a seed with a maximun value constraint, its randomness is based
 * on the flip coin function!!!!!!! :D!
 * @param {*} maximunValue The maximun value for the seed generated
 * @returns {int} Returns a seed generated with a maximun value constraint.
 */
export function generateSeedFromFlipsCoin(maximunValue){
  let binary = maximunValue.toString(2), randomNumber=0;
  
  do{
    binary = binary.split("").map(value=>booleanToString(flip())).join("");
    randomNumber = Number.parseInt(binary, 2);
  }while(randomNumber>=maximunValue);
  
  return randomNumber;
}
