/**
* @param {number} x
* @return {number}
*/
var mySqrt = function (x) {
    let i = 1
    while (true) {
        let n = i * i
        if (n > x) return i - 1;
        i += 1
    }
};

var mySqrt1 = function (x) {
    if (x < 2) return x
    let left = 1;
    let right = Math.floor(x / 2);
    let ans = 1;
    while (right >= left) {
        // let mid = Math.floor((left + right) / 2);
        let mid = Math.floor(left + (right-left) / 2); //No Overflow
        if (mid * mid == x) return mid;
        else if (mid * mid > x) {
            right = mid - 1
        }
        else {
            ans = mid;
            left = mid + 1
        }
    }
    //return ans
    return r
};
console.log(mySqrt1(20))