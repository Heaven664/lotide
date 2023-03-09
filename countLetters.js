const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(str) {
  str = str.split(" ").join('');
  const result = {};
  for (let letter of str) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

assertEqual(countLetters("lighthouse in the house")['h'], 4);
assertEqual(countLetters("lighthouse in the house")['t'], 2);