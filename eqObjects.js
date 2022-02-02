const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  // check length 
  if (key1.length !== key2.length) {
    return false;
  }
  // use for of loop to loop through key1 and find each key
    for (let key of key1) {  
      // check keys as an array and compare against each object
    if (Array.isArray(object1[key]) && (Array.isArray(object2[key]))) {
      // if eqArrays is not equal return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      // if object 1 key and object 2 key arent equal return false
      return false;
    }
  }
  // otherwise return true
  return true;
};

// test cases
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// const ab = { a: "1", b: ["2", 3] };

// assertEqual(eqObjects(cd, ab), false);