/**
 * @param {number} n
 * @return {boolean}
 */
//Using Loop
var isPowerOfTwo = function (n) {
    if (n <= 0) return false;
    while (n > 0) {
        if (n == 1) return true;
        if (n % 2 == 1) return false;
        n = n / 2;
    }
};

//Using Recursion
var isPowerOfTwo = function (n) {
    if (n <= 0) return false;
    if (n == 1) return true;
    if (n % 2 == 1) return false;
    return isPowerOfTwo(n / 2);
};

//Bit Manipulation- If a number is power of 2, there is only 1 set bit in that Ex: 16=10000, 8=1000
var isPowerOfTwo = function (n) {
    if (n <= 0) return false;
    let setbit = 0;
    for (let i = 0; i < 32; i++) {
        if (n & (1 << i)) setbit++;
    }
    return setbit == 1
};

//Bit Manipulation- & with previous numbervar isPowerOfTwo = function (n) {
var isPowerOfTwo = function (n) {
    if (n <= 0) return false;
    return (n & (n - 1)) == 0;
};