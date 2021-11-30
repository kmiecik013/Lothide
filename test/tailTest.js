//const tail = require('../tail');

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2,3 for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]),[2, 3]);
  });
})
it("returns '5' for ['5']", () => {
  assert.deepEqual(tail(['5']), []); 
});
it("returns 2,5,6 for [1,2,4,6]", () => {
  assert.deepEqual(tail([1,2,4,6]), [2,4,6]);
});


