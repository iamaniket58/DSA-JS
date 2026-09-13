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

//Using Bit Manipulation
var subsets1 = function (nums) {
    let ans = [];
    let n = nums.length;
    let totalSubset = 1 << n //n=3 then totalSubset=8 -> 2^n
    for (let i = 0; i < totalSubset; i++) {
        let res = [];
        for (let j = 0; j < 32; j++) {
            if (i & (1 << j)) {
                res.push(nums[j])
            }
        }
        ans.push([...res]);
    }
    return ans;
};
//Striver's Solution, Either take the element or don't take
var subsets = function (nums) {
    let result = [];
    let backtrack = (path, start) => {
        if (start == nums.length) {
            result.push([...path]);
            return;
        }
        path.push(nums[start]);
        backtrack(path, start + 1);
        path.pop();
        backtrack(path, start + 1);
    }
    backtrack([], 0);
    return result;
};

let nums = [1, 2, 3]
console.log(subsets(nums))