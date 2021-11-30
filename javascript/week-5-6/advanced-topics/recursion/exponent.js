/**
 * Based on the mathematical notation of a**b=n
 * @param {number} a the base number
 * @param {number} n result of a**b
 * @returns {number} b - exponent in the equation 
 */
function exponent(a, n) {
    if (n === 1) return 0;

    return 1 + exponent(a, n / a);
}

console.log(exponent(4, 16));