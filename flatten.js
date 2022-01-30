const flatten = function(inputArray) {
  let newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i])) {
      newArray = newArray.concat(flatten(inputArray[i]));
    } else {
      newArray.push(inputArray[i]);
    }
  }
  return newArray;
};

