/**
 * @param {number[]} nums
 * @return {number}
 */
//Bruite-Force
var findPeakElement1 = function (nums) {
    if (nums.length == 1) return 0
    for (let i = 0; i < nums.length; i++) {
        if (i == 0 && nums[i] > nums[i + 1]) { //Edge case for checking 1st element
            return i
        }
        if (i == nums.length - 1 && nums[i] > nums[i - 1]) { //Edge case for checking last element
            return i
        }
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) { //Code Logic
            return i
        }
    }
};
var findPeakElement = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let m = Math.floor((l + r) / 2)
        if (nums[m + 1] > nums[m]) {
            l = m + 1;
        }
        else {
            r = m
        }
    }
    return l;
};


console.log(findPeakElement([1, 2, 3, 5, 6, 4]))