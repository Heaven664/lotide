# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @heaven664/lotide`

**Require it:**

`const _ = require('@heaven664/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Gets the first element of array.
* `tail(array)`: Gets all but the first element of array.
* `middle(array)`: Gets middle element of array.  Gets 2 middle elements if array has even number of elements.
* `flatten(array)`: Flattens array a single level deep.
* `countOnly(allItems, itemsToCount)`: Returns object of occurrences from itemsToCount 
* `letterPositions(sentence)`: Returns object with number of occurrences of each letter in a sentence
* `findKeyByValue(object, value)`: Returns first key of an object with the same value
* `eqObjects(object1, object2)`: Recursively compares objects
* `eqArrays(array1, array2)`: Recursively compares arrays
