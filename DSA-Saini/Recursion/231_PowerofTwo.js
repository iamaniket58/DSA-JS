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

//using Bitwise AND
var isPowerOfTwo = function (n) {
    if (n <= 0) return false
    return (n & (n - 1)) == 0;
};

//Bitwise
var isPowerOfTwo = function(n) {
    if(n<=0)return false;
    let count=0;
    for(let i=0;i<31;i++){
        if(n & (1<<i))count++
    }
    return count==1;
};

var isPowerOfTwo = function (n) {
    if (n <= 0) return false;
    while (n > 1) {
        if (n & 1) return false;;
        n = n >> 1;
    }
    return n==1;
};

var isPowerOfTwo = function (n) {
    if (n <= 0) return false;
    let count = 0;
    while (n > 0) {
        if (n & 1) count++;
        n = n >> 1;
    }
    return count==1;
};