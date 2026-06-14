/**
 * @param {number[]} nums
 * @return {number}
 */

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
    return r //l- Both Correct
}

//Solution to break the myth
var findPeakElement = function (nums) {

    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (l == r) return r
        if (nums[mid + 1] > nums[mid]) {
            l = mid + 1
        }
        else {
            r = mid;
        }
    }
    return r
}

//Bruite Force
var findPeakElement = function (nums) {
    if (nums.length == 1) return 0;
    for (let i = 0; i < nums.length; i++) {
        if (i == 0 && nums[i] > nums[i + 1]) return i;
        else if (i == nums.length - 1 && nums[i] > nums[i - 1]) return i;
        else if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i;
    }
};