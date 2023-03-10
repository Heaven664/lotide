const assertArraysEqual = function(arr1, arr2) {
  if ((!arr1 || !arr2) || arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
};


const takeUntil = function(array, callback) {
  const results = [];
  for (let element of array) {
    if (callback(element)) {
      results.push(element);
    } else {
      return results;
    }
  }
};


assertArraysEqual(takeUntil([1,2,3,4], x => x < 3), [1,2]);
assertArraysEqual(takeUntil(['1','2','3','4'], x => x !== '4'), ['1', '2', '3']);