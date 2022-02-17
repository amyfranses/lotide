// take an array of nested arrays and return one array
const flatten = function (inputArray) {
  let newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    // if array is array when iterating through main array(true)
    // inner array flatten and concat add to new Array
    if (Array.isArray(inputArray[i])) {
      newArray = newArray.concat(flatten(inputArray[i]));
    } else {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));
