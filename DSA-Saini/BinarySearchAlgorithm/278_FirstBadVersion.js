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
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 1;
        let r = n;
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            let res = isBadVersion(mid);
            if (res) {
                if (!isBadVersion(mid - 1)) return mid;
                r = mid - 1
            }
            else {
                l = mid + 1;
            }
        }
        return -1;
    };
};

//Lets Optimize it
var solution1 = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 1;
        let r = n;
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            let res = isBadVersion(mid);
            if (res) {
                // if(!isBadVersion(mid-1))return mid;
                r = mid - 1
            }
            else {
                l = mid + 1;
            }
        }
        return l;
    };
};

//Another way

var solution2 = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        //More Optimized
        let l = 1;
        let r = n;
        while (l <= r) {
            let mid = l + Math.floor((r - l) / 2);
            let res = isBadVersion(mid);
            if (l == r) return mid;
            if (res) {
                // if(!isBadVersion(mid-1))return mid;
                r = mid;
            }
            else {
                l = mid + 1;
            }
        }
        return l;

    };
};

//revision
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 1;
        let r = n;
        let ans = -1;
        while (l <= r) {
            let m = l + Math.floor((r - l) / 2);
            if (!isBadVersion(m)) {
                l = m + 1;
            }
            else {
                ans = m;
                r = m - 1;
            }
        }
        return ans;
    };
};

//Revision- Check the Condition of (l<r) and how to do these kind of problems
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 1;
        let r = n;
        while (l < r) {
            let m = l + Math.floor((r - l) / 2);
            if (isBadVersion(m)) {
                r = m;
            }
            else {
                l = m + 1;
            }
        }
        return l; //or return r //Both is true
    };
};