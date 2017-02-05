
/**
 * Expose `bubble`.
 */

module.exports = bubble;

/**
 * Bubble sort.
 *
 * @param {Array} array
 * @returns {Array}
 * @example
 *
 * bubble([2, 3, 1]);
 * // => [1, 2, 3]
 *
 * bubble(['b', 'c', 'a']);
 * // => ['a', 'b', 'c']
 */

function bubble(array) {
  while (true) {
    var index = -1;
    var length = array.length;
    var swapped = false;

    while (++index < length) {
      var current = array[index];
      var next = array[index + 1];

      if (current > next) {
        array[index + 1] = current;
        array[index] = next;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return array;
}
