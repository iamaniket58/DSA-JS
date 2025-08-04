/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x==0 || x==1)return x
    for(let i=1;i<=x;i++){
        let sqr=i*i
        if(sqr==x){
            return i
        }
        else if(sqr>x){
            return i-1
        }
    }
};

//Using Binary Search
var mySqrt = function(x) {
    if(x<=1)return x
    let left=1;
    let right=Math.floor(x/2);
    while(left<=right){
        let mid=left+Math.floor((right-left)/2)
        if(mid*mid==x)return mid
        if(mid*mid>x){
            right=mid-1
        }
        else{
            left=mid+1
        }
    }
    return right
};