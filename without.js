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
function without(sourceArray, removeItem) {
  // spread opperator
  let newArray = [...sourceArray];
  // loop over input array
  for (let i = 0; i < sourceArray.length; i++) {
    // loop over remove array
    for (let j = 0; j < removeItem.length; j++) {
      // compare newArray to remove array
      if (newArray[i] === removeItem[j]) {
        newArray.splice([i], 1);
      }
    }
  }
  return newArray;
}
