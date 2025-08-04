/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let number=x
    if(x<0)return false;
    let ans=0
    while(x!=0){
        let rem=x%10;
        ans=ans*10+rem;
        x=Math.floor(x/10)
    }
    return number==ans
};