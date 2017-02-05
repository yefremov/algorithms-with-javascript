
/**
 * Expose `selection`.
 */

module.exports = selection;

/**
 * Selection sort.
 *
 * @param {Array} array
 * @returns {Array}
 * @example
 *
 * selection([2, 3, 1, 5, 4]);
 * // => [1, 2, 3, 4, 5]
 *
 * selection(['b', 'c', 'a', 'e', 'd']);
 * // => ['a', 'b', 'c', 'd', 'e']
 */

function selection(array) {
  var index = -1;
  var length = array.length;

  while (++index < length) {
    var element = array[index]; // store element
    var min = index; // set minimal index
    // check the element to be minimum
    for (var i = index + 1; i < length; i++) {
      if (element > array[i]) {
        min = i; // update minimum index
      }
    }
    // swap the minimum element with the current element
    if (min > index) {
      array[index] = array[min];
      array[min] = element;
    }
  }

  return array;
}
