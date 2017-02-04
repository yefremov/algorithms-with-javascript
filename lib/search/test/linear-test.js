var test = require('tape');
var linear = require('../linear');

test('linear(array, value)', function (t) {
  t.equal(linear([1, 2, 3, 4, 5], 3), 3, 'should return 3');
  t.equal(linear(['c', 'a', 'b'], 'a'), 'a', 'should return a');
  t.equal(linear(['foo', 'bar', 'baz'], 'foo'), 'foo', 'should return foo');
  t.end();
});
