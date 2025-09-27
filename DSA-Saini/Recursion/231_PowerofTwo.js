/**
 * @param {number} n
 * @return {boolean}
 */
//Recursion
var isPowerOfTwo = function(n) {
    if(n<=0)return false;
    if(n==1)return true;
    if(n%2==1)return false;
    return isPowerOfTwo(n/2)
};

//Iteration
var isPowerOfTwo = function(n) {
    while(n>1){
        if(n%2==1)return false;
        n=n/2
    }
    return n==1;
};

var isPowerOfTwo = function (n) {
    if (n == 1) return true
    while (n >= 1) {
        if (n == 1) return true
        n = n / 2
        if (n!=1 && n%2!=0)return false
    }
    return false;

};