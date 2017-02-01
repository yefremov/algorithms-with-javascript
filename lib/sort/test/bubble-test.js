var test = require('tape');
var bubble = require('../bubble');

test('bubble(array)', function (t) {
  t.deepEqual(bubble([2, 3, 1]), [1, 2, 3], 'should be sorted 1 2 3');
  t.deepEqual(bubble(['b', 'c', 'a']), ['a', 'b', 'c'], 'should be sorted a b c');
  t.end();
});
