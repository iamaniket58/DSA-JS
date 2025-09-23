/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if(n==0)return 1;
    if (n == 1) return x;
    if (n < 0) return 1 / myPow(x, -n);
    if (n % 2 == 0) {
        n = n / 2;
        let c = myPow(x, n);
        return c * c;
    }
    else {
        n = Math.floor(n / 2);
        let c = myPow(x, n);
        return c * c *x;
    }
};

//Correct but Time Limit Exceeded
var myPow = function (x, n) {
    // return Math.pow(x,n);
    let isNegative = false;
    if (n < 0) {
        n *= -1;
        isNegative = true;
    }

    let mul = 1;
    for (let i = 0; i < n; i++) {
        mul = mul * x
    }
    return !isNegative ? mul : 1 / mul;
};
var myPow = function (x, n) {
    return Math.pow(x, n);

};

var myPow1 = function (x, n) {
    if(n==0) return 1;
    return x*myPow1(x,n-1)
};
console.log(myPow1(2,3))