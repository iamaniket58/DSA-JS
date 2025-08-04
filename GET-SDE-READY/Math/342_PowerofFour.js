/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n<=0)return false
    while(n>0){
        if(n==1)return true
        if(n%4!=0)return false;
        n=n/4
    }
    return true
};

//Recursion
var isPowerOfFour = function(n) {
    if(n<=0)return false
    if(n==1)return true

    if(n%4!=0)return false
    
    return isPowerOfFour(n/4)
};