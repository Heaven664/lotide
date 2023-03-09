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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(map([1,2,3,4], x => x + 1),[2,3,4,5]);
assertArraysEqual(map([1,2,3,4], x => x * 2),[2,4,6,8]);
assertArraysEqual(map(['i','k','t','c'], x => x + 'o'),['io', 'ko', 'to', 'co']);