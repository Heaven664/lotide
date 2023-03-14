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


module.exports = letterPositions;