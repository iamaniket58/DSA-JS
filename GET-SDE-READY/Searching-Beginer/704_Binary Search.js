/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//Binary Search
var search = function (nums, target) {

    if (x < 2) return x
    let l = 0;
    let r = Math.floor(x / 2);
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let square = mid * mid;
        if (square == x) return mid;
        else if (square < x) {
            l = mid + 1;
        }
        else {
            r = mid - 1
        }
    }
    return l - 1;
};

var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return -1;
};

