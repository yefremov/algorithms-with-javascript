
/**
 * Expose `fibonacci`.
 */

module.exports = fibonacci;

/**
 * Get fibonacci value of `n`.
 *
 * @param {number} n The number to get fibonacci value.
 * @returns {number} Return fibonacci value.
 * @example
 *
 * fibonacci(0);
 * // => 1
 *
 * fibonacci(5);
 * // => 120
 */

function fibonacci(n) {
  return n < 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}
