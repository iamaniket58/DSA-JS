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
//Revision
var myPow = function (x, n) {
    if(n==0)return 1;
    let isNegative = false;
    if (n < 0) {
        n = n * -1;
        isNegative = true;
    }
    let recursion = (pow) => {
        if(pow==1)return x;
        if(pow%2==0){
            let fact=recursion(pow/2);
            return fact*fact;
        }
        else{
            let fact=recursion(Math.floor(pow/2));
            return fact*fact*x;
        }
    }
    let result = recursion(n)
    return isNegative?(1/result):result;
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

var myPow1 = function (x, n) {
    if(n==0) return 1;
    return x*myPow1(x,n-1)
};
console.log(myPow1(2,3))
//Correct but Time Limit Exceeded
var myPow = function (x, n) {
    let isNegative = false;
    if (n < 0) {
        n = n * -1;
        isNegative = true;
    }
    let recursion = (pow) => {
        if(pow==1)return x
        return x * recursion(pow - 1)
    }
    let result = recursion(n)
    return isNegative?(1/result):result;
};