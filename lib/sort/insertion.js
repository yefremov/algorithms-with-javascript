
/**
 * Expose `insertion`.
 */

module.exports = insertion;

/**
 * Insertion sort.
 *
 * @param {Array} array
 * @returns {Array}
 * @example
 *
 * insertion([2, 3, 1, 5, 4]);
 * // => [1, 2, 3, 4, 5]
 *
 * insertion(['b', 'c', 'a', 'e', 'd']);
 * // => ['a', 'b', 'c', 'd', 'e']
 */

function insertion(array) {
  for (var i = 1; i < array.length; i++) {
    var value = array[i]; // select value to insert
    var position = i;
    // locate the hole position for the value
    while (position > 0 && array[position - 1] > value) {
      array[position] = array[position - 1];
      position = position - 1;
    }
    // insert value at hole position
    if (position < i) {
      array[position] = value;
    }
  }

  return array;
}
