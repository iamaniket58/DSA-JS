/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let isDividendNegative = false;
    let isDivisorNegative = false;
    let INT_MIN=-(2**31);
    let INT_MAX=(2**31)-1
    if (dividend < 0) {
        dividend = Math.abs(dividend);
        isDividendNegative = true;
    }
    if (divisor < 0) {
        divisor = Math.abs(divisor);
        isDivisorNegative = true;
    }
    let num = 0;
    let count = 0;
    while (num + divisor <= dividend) {
        num += divisor;
        count++;
    }
    if (isDividendNegative ^ isDivisorNegative) {   // XOR in JS (works because true=1, false=0)
         count = -count;
    }

    if(count<INT_MIN)return INT_MIN;
    if(count>INT_MAX)return INT_MAX;
    return count;
};