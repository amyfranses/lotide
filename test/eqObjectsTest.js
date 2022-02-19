const eqObjects = require("../eqObjects");
const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

// test cases
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

const ab = { a: "1", b: ["2", 3] };

assertEqual(eqObjects(cd, ab), false);
