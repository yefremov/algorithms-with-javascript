
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
      var element = array[index];
      // compare the adjacent elements
      if (element > array[index + 1]) {
        // swap elements
        array[index] = array[index + 1];
        array[index + 1] = element;
        swapped = true;
      }
    }
    // if no number was swapped that means
    // array is sorted now, break the loop.
    if (!swapped) {
      break;
    }
  }

  return array;
}
