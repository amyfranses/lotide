const assertEqual = require("./assertEqual");

// return the first key which contains the given value
// If no key with that given value is found, then it should return undefined.
const findKeyByValue = function (object, value) {
  if (value === undefined) {
    return undefined;
  } else {
    return Object.keys(object).find((key) => object[key] === value);
  }
};

module.exports = findKeyByValue;


