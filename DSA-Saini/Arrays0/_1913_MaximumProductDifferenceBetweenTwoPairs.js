/**
 * @param {number[]} nums
 * @return {number}
 */
//One pass Solution
var maxProductDifference = function (nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let min1 = Infinity;
    let min2 = Infinity;
    for (let num of nums) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        }
        else if (num > max2) {
            max2 = num;
        }
        if (num < min1) {
            min2 = min1;
            min1 = num;
        }
        else if (num < min2) {
            min2 = num;
        }
    }
    // console.log(max1, max2, min1, min2);
    return max1 * max2 - min1 * min2;
};
var maxProductDifference = function (nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    return ((nums[n - 1] * nums[n - 2]) - (nums[0] * nums[1]));
};