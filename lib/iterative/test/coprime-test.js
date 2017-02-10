var test = require('tape');
var coprime = require('../coprime');

test('coprime(a, b)', function (t) {
  t.equal(coprime(1, 1), true, 'should return `true`');
  t.equal(coprime(1, 2), true, 'should return `true`');
  t.equal(coprime(2, 2), false, 'should return `false`');
  t.equal(coprime(13, 27), true, 'should return `true`');
  t.equal(coprime(20536, 7826), false, 'should return `false`');
  t.end();
});
