const assertArraysEqual = require("./assertArraysEqual");

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

console.log(middle([1, 2, 4, 5, 7, 3]));

module.exports = middle;
