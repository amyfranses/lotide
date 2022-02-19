const assertArraysEqual = require("./assertArraysEqual");
// retrieves the middle element(s) of input array
const middle = function (array) {
  if (array.length <= 2) {
    return [];
  }
  const middleElement = array.length / 2;
  if (array.length % 2 === 1) {
    return array[Math.floor(middleElement)];
  } else {
    return [array[middleElement - 1], array[middleElement]];
  }
};

module.exports = middle;
