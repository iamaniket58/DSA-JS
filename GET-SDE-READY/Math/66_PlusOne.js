/**
 * @param {number[]} digits
 * @return {number[]}
 */


var plusOne = function(digits) {
    for(let i=digits.length-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]=digits[i]+1; //digits[i]++
            return digits;
        }
        else{
            digits[i]=0;
        }
    }
    //for all 9 in the array;
    digits.unshift(1);
    return digits;
};


//Non optimized- can break for higher values
var plusOne = function(digits) {
    let digit=0;
    for(let i=0;i<digits.length;i++){
        digit=digit*10+digits[i]
    }
    let ans=++digit
    str=digit.toString();
    let fn=[]
    for(let i=0;i<str.length;i++){
        fn[i]=+str[i]
    }
    return fn
};