var test = require('tape');
var isprime = require('../isprime');

test('isprime(number)', function (t) {
  t.equal(isprime(0), false, 'should be equal false');
  t.equal(isprime(1), false, 'should be equal false');
  t.equal(isprime(2), true, 'should be equal true');
  t.equal(isprime(4), false, 'should be equal false');
  t.equal([2, 13, 2017].every(isprime), true, 'should be equal true');
  t.end();
});
