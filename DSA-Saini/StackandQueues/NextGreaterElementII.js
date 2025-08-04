/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let arr = [...nums, ...nums];
    let stack = [];
    let ans = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length != 0 && arr[i] >= stack[stack.length - 1]) {
            stack.pop();
        }
        if (stack.length == 0) {
            ans[i] = -1
        }
        else {
            ans[i] = stack[stack.length - 1]
        }
        stack.push(arr[i])
    }
    return ans.slice(0, nums.length)
};

// Without using any function
var nextGreaterElements1 = function (nums) {
    let arr = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        arr[i] = nums[i];
        arr[n + i] = nums[i];
    }
    // for (let i = 0; i < n; i++) {
    //     arr[n + i] = nums[i];
    // }
    let ans = [];
    let stack = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length != 0 && arr[i] >= stack[stack.length - 1]) {
            stack.pop();
        }
        if (i < nums.length) {
            if (stack.length == 0) {
                ans[i] = -1
            }
            else {
                ans[i] = stack[stack.length - 1]
            }
        }
        stack.push(arr[i])
    }
    return ans.slice(0, nums.length);


}
console.log(nextGreaterElements1([1, 2, 1]))