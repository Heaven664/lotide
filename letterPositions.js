const assertArraysEqual = function(arr1, arr2) {
  if ((!arr1 || !arr2) || arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} === ${arr2}`);
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1} === ${arr2}`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
};

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split(' ').join('');
  for (let letter of sentence) {
    results[letter] = [];
  }
  for (let index in sentence) {
    results[sentence[index]].push(Number(index));
  }
  return results;
};


assertArraysEqual(letterPositions('hello')['h'], [0]);