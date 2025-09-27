/**
 * @param {number} n
 * @return {boolean}
 */
//recursive Approach
var isPowerOfFour = function(n) {
    if(n==1)return true;
    if(n%2==1 || n<=0)return false;
    return isPowerOfFour(n/4)
};


//Iterative Approach
var isPowerOfFour = function(n) {
    while(n>1){
        if(n%2==1)return false;
        n=n/4
    }
    return n==1;
};
