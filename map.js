const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
// input array and callback, returns a new array based on the callback on each item
const map = function (array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
