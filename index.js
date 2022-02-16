// Equality comparison
const assertEqual = require("./assertEqual");
// Array comparison and methods
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");
const flatten = require("./flatten");
// Object comparison and methods
const eqObjects = require("./eqObjects");
const assertObjectsEqual = require("./assertObjectsEqual");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
// String methods
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const letterPositions = require("./letterPositions");

module.exports = {
  assertEqual,
  eqArrays,
  assertArraysEqual,
  head,
  tail,
  middle,
  map,
  takeUntil,
  without,
  flatten,
  eqObjects,
  assertObjectsEqual,
  findKey,
  findKeyByValue,
  countLetters,
  countOnly,
  letterPositions,
};
