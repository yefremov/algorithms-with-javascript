var test = require('tape');
var factorial = require('../factorial');

test('factorial(n)', function (t) {
  t.equal(factorial(-Infinity), 1, 'should be equal 1');
  t.equal(factorial(0), 1, 'should be equal 1');
  t.equal(factorial(3), 6, 'should be equal 6');
  t.equal(factorial(5), 120, 'should be equal 120');
  t.end();
});
