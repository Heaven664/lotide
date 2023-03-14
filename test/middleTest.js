const assert = require('chai').assert;
const middle = require('../middle');

describe ("#middle", () => {
  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it("return [3] for [1,2,3,4,5])", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });

  it("return [] for [1,2])", () => {
    assert.deepEqual(middle([1,2]), []);
  });
});
