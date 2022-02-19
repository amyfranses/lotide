const assertEqual = require("./assertEqual");
// input object and a callback, returns 1st key that meets criteria of callback
const findKey = function (object, callback) {
  for (const key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;

