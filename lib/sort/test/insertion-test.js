var test = require('tape');
var insertion = require('../insertion');

test('insertion(array)', function (t) {
  t.deepEqual(insertion([2, 3, 1, 5, 4]), [1, 2, 3, 4, 5], 'should be sorted 1 2 3 4 5');
  t.deepEqual(insertion(['b', 'c', 'a', 'e', 'd']), ['a', 'b', 'c', 'd', 'e'], 'should be sorted a b c d e');
  t.end();
});
