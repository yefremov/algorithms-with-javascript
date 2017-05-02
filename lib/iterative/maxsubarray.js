
/**
 * Expose `maxsubarray`.
 */

module.exports = maxsubarray;

function maxsubarray(array) {
  var maximum = 0;
  var current = 0;

  for (var i = 0; i < array.length; i++) {
    current = Math.max(0, current + array[i]);
		maximum = Math.max(maximum, current);
  }

  return maximum;
}
