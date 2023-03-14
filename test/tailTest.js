const tail = require('../tail');
// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// const result1 = tail(["Hello"]);
// assertEqual(result1.length, 0); // ensure we get back zero elements
// assertEqual(result1[0], undefined); // ensure first element is undefined

// const result2 = tail([]);
// assertEqual(result2.length, 0); // ensure we get back zero elements


describe("#tail", () => {
  it('return ["Lighthouse", "Labs"] from ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('return [] from ["Hello"]', () => {
    assert.deepEqual(tail(["Hello"]), []);
  });
  it('return [] from []', () => {
    assert.deepEqual(tail([]), []);
  });
});