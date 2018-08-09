import {expect} from "chai";
import {randomNumberGenerator} from '@/random/number';

describe('Testing the randomNumberGenerator', () => {
  describe('#CornerCases',()=>{
    it('It should throw an exception if it\'s called with either null or undefined or empty parameteres', () => {
      expect(randomNumberGenerator.bind(randomNumberGenerator, undefined)).to.throw("There isn't data provided");
      expect(randomNumberGenerator.bind(randomNumberGenerator, null)).to.throw("There isn't data provided");
      expect(randomNumberGenerator.bind(randomNumberGenerator)).to.throw("There isn't data provided");
    });
    it('It should throw an exception if it\'s called with a value lower or equal than 0', () => {
      expect(randomNumberGenerator.bind(randomNumberGenerator,0)).to.throw("The limit should be greater than 0");
      expect(randomNumberGenerator.bind(randomNumberGenerator,-1)).to.throw("The limit should be greater than 0");
    });
    it('It should throw an exception if it\'s called with a value greater than 1000000 or equal', () => {
      expect(randomNumberGenerator.bind(randomNumberGenerator,1000000)).to.throw("The limit should be less than 1000000");
    });
    it('It should return 0 if it\'s called with the input parameters value equal to 1', () => {
      expect(randomNumberGenerator(1)).to.be.equal(0);
    });    
  });

  describe('#Generation random numbers',()=>{
    it('It should return a value between 0 and 5 (less than 5) if it\'s called with the input parameter 5', () => {
      const result = randomNumberGenerator(5);
      expect(result).to.be.least(0);
      expect(result).to.be.at.most(4);
      expect(result).to.be.not.equal(5);
    });
    it('It should return a value between 0 and 500 (less than 500) if it\'s called with the input parameter 500', () => {
      const result = randomNumberGenerator(500)
      expect(result).to.be.least(0);
      expect(result).to.be.at.most(499);
      expect(result).to.be.not.equal(500);
    });
    it('It should return a value between 0 and 200000 (less than 200000) if it\'s called with the input parameter 200000', () => {
      const result = randomNumberGenerator(200000)
      expect(result).to.be.least(0);
      expect(result).to.be.at.most(199999);
      expect(result).to.be.not.equal(200000);
    });
  });

  describe('#Some executions',()=>{
    console.log(`Generating a random number less than 1 :D !! => ${randomNumberGenerator(1)}`);
    console.log(`Generating a random number less than 300 :D !! => ${randomNumberGenerator(300)}`);
    console.log(`Generating a random number less than 550000 :D !! => ${randomNumberGenerator(550000)}`);
    console.log(`Generating a random number less than 800000 :D !! => ${randomNumberGenerator(800000)}`);
    console.log(`Generating a random number less than 999999 :D !! => ${randomNumberGenerator(999999)}`);
  });
  /**
   * Write here your own tests
   */
  describe('#Write here your own tests !!!! :D !!',()=>{
    
  });
  
});