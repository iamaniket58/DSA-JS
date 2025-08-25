/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2)return x
    let half=Math.floor(x/2);
    for(let i=0;i<=half;i++){
        if(i*i==x)return i;
        if(i*i>x)return i-1;
    }
    return half;
};