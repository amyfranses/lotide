const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

// input array and callback, returns a slice of the array based on the callback
const takeUntil = function (array, callback) {
  return array.slice(0, array.findIndex(callback));
};
module.exports = takeUntil;
