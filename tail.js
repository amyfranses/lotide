const assertEqual = require("./assertEqual");
// return all but first element of array
const tail = function (array) {
  let arr = array.slice(1);
  return arr;
};

module.exports = tail;
