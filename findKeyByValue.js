const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Implement the function findKeyByValue taking object and a value.
// scan the object (Object.keys()???) and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.
const findKeyByValue = function(object, value) {
  if (value === undefined) {
    return undefined;
  } else {
    return Object.keys(object).find(key => object[key] === value);
  }
};
// test code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);