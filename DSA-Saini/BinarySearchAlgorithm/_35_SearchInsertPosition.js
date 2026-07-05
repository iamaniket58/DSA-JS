/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//Using Binary Search
var searchInsert = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (nums[mid] == target) return mid
        if (target > nums[mid]) {
            l = mid + 1
        }
        else {
            r = mid - 1
        }
    }
    return l;
    //return r+1 //This is also correct
};

//Revision
var searchInsert = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);
        if (target == nums[mid]) return mid;
        if (target > nums[mid]) {
            l = mid + 1;
        }
        else {
            r = mid
        }
    }
    if (target > nums[l]) return l + 1; //edge case
    return l

};
//Revision- Striver- Here storing the ans only catch is if right does not move so instead of ans as undefined  we are storing length of array which is correct ans
var searchInsert = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let ans = nums.length
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (target == nums[mid]) return mid;
        if (target > nums[mid]) {
            l = mid + 1;
        }
        else {
            ans = mid
            r = mid - 1;
        }
    }

    return ans;

};

//Using Linear Search
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) return i;
        else if (nums[i] > target) return i;
    }
    return nums.length;
};