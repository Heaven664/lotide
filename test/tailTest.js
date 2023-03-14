const tail = require('../tail');
const assert = require('chai').assert;

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