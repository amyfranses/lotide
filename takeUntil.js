function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed  ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed  ${arr1} !== ${arr2}`);
  }
}

const takeUntil = function (array, callback) {
  // array.slice() returns new array starting at 0 and ends at
  // findIndex() using callback
  return array.slice(0, array.findIndex(callback));
};

// test code

assertArraysEqual([1, 2, 5, 7, 2], [1, 2, 5, 7, 2]);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results = takeUntil(data1, (x) => x < 0);
console.log(results);

console.log("---");

assertArraysEqual(["I've", "been", "to", "Hollywood"], [1, 2, 5, 7, 2]);
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
