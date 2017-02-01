
/**
 * Expose `gcd`.
 */

module.exports = gcd;

/**
 * Get greatest common divisor of `a` and `b`.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @example
 *
 * gcd(24, 12);
 * // => 12
 *
 * gcd(135, 19);
 * // => 1
 */

function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}
