
/**
 * Expose `linear`.
 */

module.exports = linear;

/**
 * Linear search of an `array` for a `value`.
 *
 * @param {Array} array The array to search in.
 * @param {*} value The value to search for.
 * @returns {*} Returns value if found, else `undefined`.
 * @example
 *
 * linear([2, 8, 4, 3], 4);
 * // => 4
 *
 * linear(['foo', 'bar', 'baz'], 'bar');
 * // => 'bar'
 */

function linear(array, value) {
  var index = -1;
  var length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return value;
    }
  }
}
