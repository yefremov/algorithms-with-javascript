var test = require('tape');
var selection = require('../selection');

test('selection(array)', function (t) {
  t.deepEqual(selection([]), [], 'should return empty array');
  t.deepEqual(selection([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5], 'should return sorted array');
  t.deepEqual(selection([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5], 'should be sorted 1 2 3 4 5');
  t.deepEqual(selection([2, 3, 1, 5, 4]), [1, 2, 3, 4, 5], 'should be sorted 1 2 3 4 5');
  t.deepEqual(selection(['b', 'c', 'a', 'e', 'd']), ['a', 'b', 'c', 'd', 'e'], 'should be sorted a b c d e');
  t.end();
});
