/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
    let isNegative = false;
    let max = (2 ** 31) - 1;
    let min = (-2) ** 31;
    if (x < 0) {
        isNegative = true;
        x = -1 * x;
    }
    let ans = 0;
    while (x != 0) {
        let rem = x % 10;
        if (ans > max / 10 || ans == Math.floor(max / 10) && rem > 7) return 0;

        ans = (ans * 10) + rem;
        x = Math.floor(x / 10)
    }

    return isNegative ? ans * -1 : ans;
};
//GPT
var reverse = function (x) {
    let min = -(2 ** 31);
    let max = (2 ** 31) - 1;
    let rev = 0;

    while (x !== 0) {
        let rem = x % 10;
        x = Math.trunc(x / 10);

        // Check overflow BEFORE multiplying
        if (rev > Math.floor(max / 10) || 
           (rev === Math.floor(max / 10) && rem > 7)) return 0;

        if (rev < Math.ceil(min / 10) || 
           (rev === Math.ceil(min / 10) && rem < -8)) return 0;

        rev = rev * 10 + rem;
    }

    return rev;
};
var reverse = function (x) {
    let min = (-2) ** 31;
    let max = (2 ** 31) - 1;
    let rev = 0;
    let isNegative = false;
    if (x < 0) {
        x = x * -1;
        isNegative = true;
    }
    while (x > 0) {
        let rem = x % 10;
        rev = rev * 10 + rem;
        x = Math.floor(x / 10);
    }
    if (rev < min || rev > max) return 0;

    return isNegative ? rev * -1 : rev;

};
var reverse = function (x) {
    let min = -(2 ** 31);
    let max = (2 ** 31) - 1;
    let rev = 0;
    let isNegative = false;

    if (x < 0) {
        x = -x;
        isNegative = true;
    }

    while (x > 0) {
        let rem = x % 10;

        // Only need max check since rev is positive
        if (rev > (max - rem) / 10) return 0;

        rev = rev * 10 + rem;
        x = Math.floor(x / 10);
    }

    return isNegative ? -rev : rev;
};
function ReverseInteger(n) {
    reverse = 0
    let isNegative = false
    if (n < 0) {
        n = Math.abs(n) // n=n*-1
        isNegative = true
    }
    while (n > 0) {
        reverse = reverse * 10 + (n % 10)
        n = parseInt(n / 10)
    }
    return !isNegative ? reverse : reverse * -1
}
//console.log(ReverseInteger(-183))

function ReverseIntegerDup(n) {
    let original=n
    let reverse = 0
    n = Math.abs(n) // n=n*-1
    while (n > 0) {
        reverse = reverse * 10 + (n % 10)
        n = parseInt(n / 10)
    }
    let limit=2**31
    if (reverse>limit-1 || reverse< -limit) return 0 
    return original >= 0 ? reverse : -reverse
}
console.log(ReverseIntegerDup(1534236469))