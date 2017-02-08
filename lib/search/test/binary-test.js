var test = require('tape');
var binary = require('../binary');

test('binary(array, value)', function (t) {
  t.equal(binary([]), undefined, 'should return undefined');
  t.equal(binary([1, 10], 0), undefined, 'should return undefined');
  t.equal(binary([1, 2, 3, 4, 5], 3), 3, 'should return 3');
  t.equal(binary(['a', 'b', 'c', 'd', 'e', 'f'], 'd'), 'd', 'should return d');
  t.end();
});
