/**
* @param {number} x
* @return {number}
*/
//Revision
var mySqrt = function (x) {
    if (x <= 1) return x;
    let l = 1;
    let r = Math.floor(x / 2);
    while (l < r) {
        let mid = l + Math.ceil((r - l) / 2);
        let srq = mid * mid;
        if (srq > x) {
            r = mid - 1;
        }
        else {
            l = mid;
        }

    }
    return l;
};

//Check all 3 Methods of doing
//revision
var mySqrt = function (x) {
    if (x <= 1) return x;
    let left = 1;   //l=2 // It is also correct
    let right = Math.floor(x / 2);
    let ans = 0;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let sqr = mid * mid;
        if (x > sqr) {
            ans = mid;               //Store the answer of do r or l-1 at last
            left = mid + 1;
        }
        else if (sqr > x) {
            right = mid - 1;
        }
        else return mid;
    }
    return ans;
};
var mySqrt = function (x) {
    if (x <= 1) return x;
    let l = 1;
    let r = Math.floor(x / 2);
    let ans = r; //It can be any value at astarting
    while (l <= r) {
        let mid = l + Math.ceil((r - l) / 2);
        let srq = mid * mid;
        if (srq == x) return mid;
        if (srq > x) {
            r = mid - 1;
        }
        else {
            ans = mid
            l = mid + 1;
        }

    }
    return ans;;
};
var mySqrt1 = function (x) {
    if (x < 2) return x
    let left = 1;
    let right = Math.floor(x / 2);
    let ans = 1;
    while (right >= left) {
        // let mid = Math.floor((left + right) / 2);
        let mid = Math.floor(left + (right - left) / 2); //No Overflow
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
var mySqrt = function (x) {
    if (x < 2) return x
    let l = 0;
    let r = Math.floor(x / 2);
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        let sqr = m * m;
        if (sqr == x) return m;
        else if (sqr < target) {
            l = m + 1;
        }
        else {
            r = m - 1
        }
    }
    return l - 1
};

//Bruite Force
var mySqrt = function (x) {
    let i = 1
    while (true) {
        let n = i * i
        if (n > x) return i - 1;
        i += 1
    }
};

console.log(mySqrt1(20))