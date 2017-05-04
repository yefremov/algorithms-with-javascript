var test = require('tape');
var maxsubarray = require('../maxsubarray');

test('prime(number)', function (t) {
  t.equal(maxsubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6, 'should be equal 6');
  t.end();
});
