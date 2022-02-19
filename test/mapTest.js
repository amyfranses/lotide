const map = require("../map");
const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

// test code
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
console.log(results1);
assertArraysEqual(["g", "c", "t", "m", "t"], [1, 2, 3, 4, 5, 6]);
assertArraysEqual(["g", "c", "t", "m", "t"], ["g", "c", "t", "m", "t"]);

const animals = ["dog", "pig", "cat", "cow"];
const results2 = map(animals, (animal) => animal + "s");
console.log(results2);
assertArraysEqual(["g", "c", "t", "m", "t"], ["dog", "pig", "cat", "cow"]);
assertArraysEqual(
  ["dogs", "pigs", "cats", "cows"],
  ["dogs", "pigs", "cats", "cows"]
);

const names = ["matt", "jen", "charlie", "kate"];
const results3 = map(names, (name) => name.toUpperCase());
console.log(results3);
assertArraysEqual(
  ["MATT", "JEN", "CHARLIE", "KATE"],
  ["matt", "jen", "charlie", "kate"]
);
assertArraysEqual(
  ["MATT", "JEN", "CHARLIE", "KATE"],
  ["MATT", "JEN", "CHARLIE", "KATE"]
);
