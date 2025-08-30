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
var mySqrt = function(x) {
    if(x<2)return x
    let l=0;
    let r=Math.floor(x/2);
    while(l<=r){
        let m=Math.floor((l+r)/2);
        let sqr=m*m;
        if(sqr==x)return m;
        else if(sqr<target){
            l=m+1;
        }
        else{
            r=m-1
        }
    }
    return l-1
};