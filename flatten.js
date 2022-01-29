const flatten = function (inputArray){
  let output = inputArray.flat(2);
  return output;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]) );
