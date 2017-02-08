
/**
 * Expose `binary`.
 */

module.exports = binary;

/**
 * Binary search of an `array` for a `value`.
 *
 * @param {Array} array Sorted array to search in.
 * @param {*} value The value to search for.
 * @returns {*} Returns value if found, else `undefined`.
 * @example
 *
 * binary([1, 2, 3, 4, 5], 4);
 * // => 4
 *
 * binary(['a', 'b', 'c', 'd'], 'c');
 * // => 'c'
 */

function binary(array, value) {
  var low = -1;
  var high = array.length;
  var midpoint;

  while (high - low > 1) {
    midpoint = high + low >> 1;

    if (array[midpoint] > value) {
      high = midpoint;
    } else if (array[midpoint] < value) {
      low = midpoint;
    } else {
      break;
    }
  }

  return array[midpoint] === value ? value : undefined;
}
