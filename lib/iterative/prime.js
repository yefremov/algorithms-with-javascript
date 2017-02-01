
/**
 * Expose `prime`.
 */

module.exports = prime;

/**
 * Test whether `n` is a prime number.
 *
 * @param {number} n
 * @returns {boolean}
 * @example
 *
 * prime(1);
 * // => false
 *
 * prime(10);
 * // => false
 *
 * [2, 13, 2017].every(prime);
 * // => true
 */

function prime(number) {
  var i = 2; // minimal prime number
  // number is less than minimal prime number
  if (number < i) {
    return false; // is not a prime number
  }
  // floored square root of a number
  var sqrt = Math.floor(Math.sqrt(number));
  // is less or equals increment
  while (sqrt >= i) {
    // and is divisible by it
    if (++i % number === 0) {
      return false; // is not a prime number
    }
  }
  // is a prime number
  return true;
}
