const assert = require('assert');

function add(a,b) {
  return a + b;
}

const expected = add(1,2);
// assert(expected === 4, "one plus two is three");

// assert.ok(expected == 2, 'one plus one is three in ok func')

// assert.strictEqual(expected, 2, 'test pass')

// assert.notStrictEqual(expected, 2, 'test pass')

