var test = require('tape');
var gcd = require('../gcd');

test('gcd(a, b)', function (t) {
  t.equal(gcd(468, 24), 12, 'should be equal 12');
  t.equal(gcd(24, 12), 12, 'should be equal 12');
  t.equal(gcd(135, 19), 1, 'should be equal 1');
  t.equal(gcd(19, 2), 1, 'should be equal 1');
  t.equal(gcd(2, 1), 1, 'should be equal 1');
  t.end();
});
