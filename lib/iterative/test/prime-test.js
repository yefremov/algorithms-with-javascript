var test = require('tape');
var prime = require('../prime');

test('prime(number)', function (t) {
  t.equal(prime(0), false, 'should be equal false');
  t.equal(prime(1), false, 'should be equal false');
  t.equal(prime(2), true, 'should be equal true');
  t.equal([2, 13, 2017].every(prime), true, 'should be equal true');
  t.end();
});
