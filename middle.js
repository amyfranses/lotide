const assertArraysEqual = require("./assertArraysEqual");

const middle = function (array) {
  if (array.length <= 2) {
    return [];
  }
  const middleElement = array.length / 2;
  // array of odd length return middle
  if (array.length % 2 === 1) {
    return array[Math.floor(middleElement)];
  } else {
    // array of even elements return 2 elements
    return [array[middleElement - 1], array[middleElement]];
  }
};

console.log(middle([1, 2, 4, 5, 7, 3]));

module.exports = middle;
