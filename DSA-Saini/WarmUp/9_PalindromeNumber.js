/**
 * @param {number} x
 * @return {boolean}
 */
//Convert to string
var isPalindrome = function (x) {
    let str = x + "";
    let n=str.length
    for (let i = 0; i < Math.floor(n / 2); i++){
        if(str[i] !=str[n-1-i]){
            return false;
        }
    }
    return true;

};
var isPalindrome = function (x) {
    let num=x;
    let reverse=0;
    while(x>0){
        reverse=reverse*10+(x%10);
        x=Math.floor(x/10)
    }
    return num==reverse;

};
var isPalindrome = function (x) {
    if(x<0)return false;
    let num=x;
    let reverse=0;
    while(x>0){
        reverse=reverse*10+(x%10);
        x=Math.floor(x/10)
    }
    return num==reverse;

};
function palindrome(n) {
    if (n < 0) return false
    let x = n;
    let reverse = 0;
    while (x > 0) {
        //let rem=x%10;
        reverse = reverse * 10 + (x % 10);
        x = Math.floor(x / 10)
    }
    console.log("n is" + n + " and x is=" + x)
    return n === reverse
}
console.log(palindrome(23))