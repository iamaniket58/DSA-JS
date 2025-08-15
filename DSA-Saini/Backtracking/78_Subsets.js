/**
* @param {number[]} nums
* @return {number[][]}
*/
var subsets = function (nums) {
    let result = [];
    var backtracking = (path, start) => {
        result.push([...path])
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtracking(path, i + 1);
            path.pop();
        }
    }
    backtracking([], 0);
    return result;
};

let nums=[1,2,3]
console.log(subsets(nums))