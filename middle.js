const assertArraysEqual = function(arr1, arr2){
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} === ${arr2}`);
    return 
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1} === ${arr2}`)
      return
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
}

const middle = function(array) {
  const result = []
  if (array.length < 3) {
    return result
  } 
  if (array.length % 2 === 1) {
    result.push(array[Math.floor(array.length / 2)])
  } else if (array.length % 2 === 0) {
    result.push(array[array.length / 2 - 1]);
    result.push(array[array.length / 2]);
  }
  return result;
}


assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2]), []);