/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l=1;
        let r=n;
        while(l<=r){
            let mid=l+Math.floor((r-l)/2);
            let res=isBadVersion(mid);
            if(res){
                if(!isBadVersion(mid-1))return mid;
                r=mid-1
            }
            else{
                l=mid+1;
            }
        }
        return -1;
    };
};



//Lets Optimize it



/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution1 = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l=1;
        let r=n;
        while(l<=r){
            let mid=l+Math.floor((r-l)/2);
            let res=isBadVersion(mid);
            if(res){
               // if(!isBadVersion(mid-1))return mid;
                r=mid-1
            }
            else{
                l=mid+1;
            }
        }
        return -1;
    };
};



//Another way



var solution2 = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        //More Optimized
        let l=1;
        let r=n;
        while(l<=r){
            let mid=l+Math.floor((r-l)/2);
            let res=isBadVersion(mid);
            if(l==r)return mid;
            if(res){
               // if(!isBadVersion(mid-1))return mid;
                r=mid;
            }
            else{
                l=mid+1;
            }
        }
        return l;

    };
};