const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;
