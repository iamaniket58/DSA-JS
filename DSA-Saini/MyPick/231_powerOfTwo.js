/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n == 1) return true
    while (n >= 1) {
        if (n == 1) return true
        n = n / 2
        if (n!=1 && n % 2 != 0) {
            return false
        }
    }
    return false;

};
console.log(isPowerOfTwo(16))