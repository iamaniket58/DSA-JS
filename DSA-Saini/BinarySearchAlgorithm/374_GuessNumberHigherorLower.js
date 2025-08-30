/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l=1;
    let r=n
    while(r>=l){
        let mid=l+Math.floor((r-l)/2);
        const response=guess(mid);
        if(response==0)return mid;
        else if(response==1){
            l=mid+1
        }
        else{
            r=mid-1
        }
    }
};