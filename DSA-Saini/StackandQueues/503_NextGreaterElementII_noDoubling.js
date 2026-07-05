/**
 * @param {number[]} nums
 * @return {number[]}
 */
//This is kinda doubling approach, Just not doubling the array
//Revision
var nextGreaterElements = function (nums) {
    let ans = [];
    let stack = [];
    let n = nums.length;
    for (let i = 2 * n - 1; i >= 0; i--) {
        while (stack.length && nums[i % n] >= stack[stack.length - 1]) {
            stack.pop()
        }
        if (i < n) ans[i] = stack[stack.length - 1] ?? -1;
        stack.push(nums[i % n])
    }
    return ans;
};
//Revision
var nextGreaterElements = function (nums) {
    let ans = [];
    let stack = [];
    let n = nums.length;
    for (let i = 2 * n - 1; i >= 0; i--) {
        while (stack.length && nums[i % n] >= stack[stack.length - 1]) {
            stack.pop()
        }
        ans[i] = stack[stack.length - 1] ?? -1;
        stack.push(nums[i % n])
    }
    return ans.slice(0, n);
};

var nextGreaterElements = function (nums) {
    let stack = [];
    let n = nums.length;
    let ans = [];
    for (let i = nums.length * 2 - 1; i >= 0; i--) {
        while (stack.length != 0 && nums[i % n] >= stack[stack.length - 1]) {
            stack.pop();
        }
        if (stack.length == 0) {
            ans[i % n] = -1
        }
        else {
            ans[i % n] = stack[stack.length - 1]
        }
        // ans[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
        stack.push(nums[i % n])
    }
    return ans;
}
nextGreaterElements([1, 5, 0, 3, 4, 9, 2, 6, 8])

//SirsWay
var nextGreaterElements1 = function (nums) {
    let stack = [];
    let n = nums.length;
    let ans = new Array(n).fill(-1);
    stack.push(nums[n - 1])
    for (let i = n * 2 - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1]
            if (nums[i % n] < top) {
                ans[i % n] = top;
                break;
            }
            else {
                stack.pop();
            }
        }
        stack.push(nums[i % n]);
    }
    return ans;
}