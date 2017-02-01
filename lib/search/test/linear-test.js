var test = require('tape');
var linear = require('../linear');

test('linear(array, value)', function (t) {
  t.deepEqual(linear(['c', 'a', 'b'], 'a'), 'a', 'should be equal a');
  t.deepEqual(linear([0xa, null, 'foo', 'false'], 'foo'), 'foo', 'should be equal foo');
  t.end();
});
