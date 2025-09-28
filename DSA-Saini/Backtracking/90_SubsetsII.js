/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    let backtracking = (path, start) => {
        result.push([...path]);
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1]) continue;
            path.push(nums[i]);
            backtracking(path, i + 1);
            path.pop();
        }
    }
    backtracking([], 0);
    return result;
};
console.log(subsetsWithDup([1,2,2]))