var test = require('tape');
var bubble = require('../bubble');

test('bubble(array)', function (t) {
  t.deepEqual(bubble([]), [], 'should return empty array');
  t.deepEqual(bubble([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5], 'should return sorted array');
  t.deepEqual(bubble([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5], 'should be sorted 1 2 3 4 5');
  t.deepEqual(bubble([2, 3, 1, 5, 4]), [1, 2, 3, 4, 5], 'should be sorted 1 2 3 4 5');
  t.deepEqual(bubble(['b', 'c', 'a', 'e', 'd']), ['a', 'b', 'c', 'd', 'e'], 'should be sorted a b c d e');
  t.end();
});
