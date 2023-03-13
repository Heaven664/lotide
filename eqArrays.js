const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2){
  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i in arr1) {
    if (Array.isArray(arr1[i])) {
      if(!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true
}


console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)// => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false