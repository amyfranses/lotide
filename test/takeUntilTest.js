const takeUntil = require("../takeUntil");
const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

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
