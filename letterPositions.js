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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === " ") { /* if letter = space then move on */
      continue;
    }
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

// test cases:
const result1 = letterPositions('hello');
assertArraysEqual(result1["l"], [2]);
assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["o"], [4]);


