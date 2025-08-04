/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum=0;
    let mul=1;
    while(n>0){
        let rem=n%10;
        sum+=rem;
        mul*=rem;
        n=Math.floor(n/10)
    }
    return mul-sum
};