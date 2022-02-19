# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @amyfranses/lotide`

**Require it:**

`const _ = require('@amyfranses/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertEqual(...)`: takes in 2 values and returns true if they are equal, false if they are not.
- `head(...)`: retrieves the first element from an array.
- `tail(...)`: retrieves every element except the first element of an array.
- `eqArrays(...)`: takes in 2 arrays and returns true if they are equal, false if they are not.
- `asserArraysEqual(...)`: takes in 2 arrays and returns true if they are equal, false if they are not.
- `without(...)`: returns source array having removed specified items.
- `flatten(...)`: intakes array with nested elements and returns one flattened array.
- `middle(...)`: retrieves the middle element(s) of an array.
- `countOnly(...)`: takes in a collection of items and returns a specific subset of those items.
- `countLetters(...)`: takes in sentence and returns a count of each letter in the sentence.
- `letterPostitions(...)`: takes in a string and returns letter positions.
- `findKeyByValue(...)`: takes in an object and returns first key that corresponds to that value.
- `eqObjects(...)`: takes 2 objects and returns true if they are equal, faslse if not.
- `assertObjectsEqual(...)`: takes 2 objects and returns true if they are equal, faslse if not.
- `map(...)`: takes in an array and callback then returns a new array based on the callback on each item.
- `takeUntil(...)`: takes in an array and callback and returns a slice of the array based on the callback.
- `findKey(...)`: takes and object and a callback and returns the first key that meets the criteria of callback.
