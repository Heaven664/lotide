const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false