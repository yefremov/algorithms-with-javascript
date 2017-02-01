
/**
 * Expose `factorial`.
 */

module.exports = factorial;

/**
 * Get factorial value of `n`.
 *
 * @param {number} n The number to get factorial value.
 * @returns {number} Return factorial value.
 * @example
 *
 * factorial(0);
 * // => 1
 *
 * factorial(5);
 * // => 120
 */

function factorial(n) {
  return n < 1 ? 1 : n * factorial(n - 1);
}
