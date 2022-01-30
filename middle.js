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

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  const middleElement = array.length / 2;
  if (array.length % 2 === 1) {
    return array[Math.floor(middleElement)];
  } else {
    return [
      array[middleElement - 1],
      array[middleElement]
    ];
  }
};


