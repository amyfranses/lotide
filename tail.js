const assertEqual = require("./assertEqual");
// return all but first element of array
const tail = function (array) {
  let arr = array.slice(1);
  return arr;
};

console.log(tail([1, 2, 3, 4]));

module.exports = tail;
