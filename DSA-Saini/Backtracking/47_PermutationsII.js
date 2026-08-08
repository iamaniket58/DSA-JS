/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    let backtracking = (path,choices) => {
        if (path.length == nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < choices.length; i++) {
            // if(path.includes(nums[i]))continue; will not work in this case
            if (i>0 && choices[i - 1] == choices[i]) continue; //This will handle duuplicates at the same level
            path.push(choices[i]);
            backtracking(path,[...choices.slice(0,i),...choices.slice(i+1)]);//send everything except self
            path.pop();
        }
    }
    backtracking([],nums);
    return result;
};
//My Solution 💪💪💪💪💪
var permuteUnique = function (nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let unique = new Array(n).fill(false);
    let result = [];

    let backtrack = (path) => {
        if (path.length == nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (i > 0 && nums[i] == nums[i - 1] && !unique[i - 1]) continue;

            if (!unique[i]) {
                path.push(nums[i]);
                unique[i] = true
                backtrack(path);
                path.pop();
                unique[i] = false;
            }

        }
    }
    backtrack([]);
    return result;
};

//GPT Solution
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    let used = new Array(nums.length).fill(false);

    let backtrack = (path) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue; // skip duplicates
            path.push(nums[i]);
            used[i] = true;
            backtrack(path);
            used[i] = false;
            path.pop();
        }
    };

    backtrack([]);
    return result;
};

//Revision- Best Solution

var permuteUnique = function (nums) {
    nums.sort((a, b) => a - b);
    let used = new Array(nums.length).fill(false);
    let result = [];
    let backtrack = (path) => {
        if (path.length == nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            // if ((i > 0 && nums[i] == nums[i - 1]) || used[i]) continue;
            if (used[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            path.push(nums[i]);
            used[i] = true;

            backtrack(path);

            path.pop();
            used[i] = false;
        }
    }
    backtrack([]);
    return result;
};
