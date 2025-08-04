


//This is just finding the Maxm O(n)
var findPeakElement = function (nums) {
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[max] < nums[i]) {
            max = i
        }
    }
    return max
};

//Using Binary Search
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {

    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (nums[mid + 1] > nums[mid]) {
            l = mid + 1
        }
        else {
            r = mid;
        }
    }
    return r
}

//Solution to break the myth
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {

    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        if(l==r)return r
        if (nums[mid + 1] > nums[mid]) {
            l = mid + 1
        }
        else {
            r = mid;
        }
    }
    return r
}