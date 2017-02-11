
/**
 * Expose `coprime`.
 */

module.exports = coprime;

/**
 * Test whether `a` and `b` are coprime numbers.
 *
 * @param {number} a Positive number value.
 * @param {number} b Positive number value.
 * @returns {boolean}
 * @example
 *
 * coprime(13, 27);
 * // => false
 *
 * coprime(20536, 7826);
 * // => false
 */

function coprime(a, b) {
  // subtraction-based version of Euclid's algorithm
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  // two numbers are coprime if their greatest
  // common divisor equals 1
  return a === 1;
}
