var test = require('tape');
var fibonacci = require('../fibonacci');

test('fibonacci(n)', function (t) {
  t.equal(fibonacci(-Infinity), 1, 'should be equal 1');
  t.equal(fibonacci(1), 1, 'should be equal 1');
  t.equal(fibonacci(3), 3, 'should be equal 3');
  t.equal(fibonacci(7), 21, 'should be equal 21');
  t.end();
});
