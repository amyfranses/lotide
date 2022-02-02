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

  if (key1.length !== key2.length) {
    return false;
  }
  for (let key of key1) {
    if (Array.isArray(object1[key]) && (Array.isArray(object2[key]))) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  let results = eqObjects(object1, object2);
    if (results === true){
    console.log(`✅✅✅Assertion Passed  ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed  ${inspect(object1)} !== ${inspect(object2)}`);
  }
    };

  // test code
    // const cd ={c:"1", d:["2", 3]};
    // const cd2 = {c:"1", d: ["2", 3, 4]};
    // assertObjectsEqual(cd, cd2);

    // const person1 = {name: "Amy", age: 30, place: "Vancouver"};
    // const person1a = {name: "Amy", age: 30, place: "Vancouver"};
    // assertObjectsEqual(person1, person1a);

    // const person2 = {name: "Jen", age: 30, place: "Vancouver"};
    // const person2a = {name: "Amy", age: 30, place: "Vancouver"};
    // assertObjectsEqual(person2, person2a);

