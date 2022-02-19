const letterPositions = require("../letterPositions");
const assertArraysEqual = require("../assertArraysEqual");

// test cases:
const result1 = letterPositions("hello");
assertArraysEqual(result1["l"], [2]);
assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["o"], [4]);
