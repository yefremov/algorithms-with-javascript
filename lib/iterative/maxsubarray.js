
/**
 * Expose `maxsubarray`.
 */

module.exports = maxsubarray;

/**
 * Find the contiguous subarray within a one-dimensional `array` of numbers
 * which has the largest sum.
 *
 * @param {Array} array One-dimensional array of numbers.
 * @returns {number}
 * @example
 *
 * maxsubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
 * // => 6
 */

function maxsubarray(array) {
  var maximum = 0;
  var current = 0;

  for (var i = 0; i < array.length; i++) {
    current = Math.max(0, current + array[i]);
    maximum = Math.max(maximum, current);
  }

  return maximum;
}
