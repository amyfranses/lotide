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

const map = function (array, callback) {
  const results = [];
  // loop over input array
  for (const item of array) {
    // perform whatever the callback function is on each item and push answer to results array
    results.push(callback(item));
  }
  return results;
};

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
