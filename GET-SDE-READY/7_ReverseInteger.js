/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let ans=0
    let isNegative=false
    if(x<0){
        isNegative=true;
        x=Math.abs(x)
    }
    while(x!=0){
        let rem=x%10;
        ans=ans*10+rem;
        x=Math.floor(x/10)
    }
    if(ans<(-2)**31 || ans>(2**31)-1){
        return 0;
    }
    return !isNegative?ans:-1*ans;
};

//lets say ans value can not store 2*31-1 so the above will not work, since ans is not int its working, but in c++ it will not work

var reverse = function(x) {
    let min=(-2)**31;
    let max=(2**31)-1
    let ans=0
    let isNegative=false
    if(x<0){
        isNegative=true;
        x=Math.abs(x)
    }
    while(x!=0){
        let rem=x%10;
        if(ans<min/10-rem/10 || ans>max/10-rem/10)return 0
        ans=ans*10+rem;
        x=Math.floor(x/10)
    }
    return !isNegative?ans:-1*ans;
};