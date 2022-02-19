const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

// returns source array having removed specified items
function without(sourceArray, removeItem) {
  let newArray = [...sourceArray];
  for (let i = 0; i < sourceArray.length; i++) {
    for (let j = 0; j < removeItem.length; j++) {
      if (newArray[i] === removeItem[j]) {
        newArray.splice([i], 1);
      }
    }
  }
  return newArray;
}
module.exports = without;
