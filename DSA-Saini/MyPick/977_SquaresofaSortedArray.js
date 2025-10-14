/**
 * @param {number[]} nums
 * @return {number[]}
 */
//2 Pointers
var sortedSquares = function (nums) {
    let array = [];
    let left = 0;
    let right = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            array[i] = nums[left++] ** 2;
        }
        else {
            array[i] = nums[right--] ** 2;
        }
    }
    return array;
};
//Using While Loop
var sortedSquares = function (nums) {
    let array = [];
    let left = 0;
    let right = nums.length - 1;
    let i=nums.length-1;
    while(left<=right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            array[i] = nums[left++] ** 2;
        }
        else {
            array[i] = nums[right--] ** 2;
        }
        i--;
    }
    return array;
};