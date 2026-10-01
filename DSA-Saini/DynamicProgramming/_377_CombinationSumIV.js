/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//Top-Down DP
var combinationSum4 = function (nums, target) {
    let map = {};
    let backtrack = (sum) => {
        if (map[sum] == undefined) {
            if (sum == target) return 1;
            if (sum > target) return 0;
            let total = 0
            for (let i = 0; i < nums.length; i++) {
                total += backtrack(sum + nums[i]);
            }
            map[sum] = total
        }
        return map[sum];

    }
    return backtrack(0);
};

//Chat-GPT Bottom-Up
var combinationSum4 = function (nums, target) {

    let dp = new Array(target + 1).fill(0);

    dp[0] = 1;

    for (let i = 1; i <= target; i++) {

        for (let num of nums) {

            if (i >= num) {
                dp[i] += dp[i - num];
            }
        }
    }

    return dp[target];
};

//Revision- Backtracking
var combinationSum4 = function (nums, target) {
    let result = 0;
    let backtrack = (path, sum) => {
        if (sum > target) return;
        if (sum == target) {
            result += 1;
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(path, sum + nums[i]);
            path.pop();
        }
    }
    backtrack([], 0);
    return result;
};
//Bruite Force- Time Limit Exceeded
var combinationSum4 = function (nums, target) {
    let count = 0;
    let backtrack = (path, remTarget) => {
        if (remTarget < 0) return;
        if (remTarget == 0) {
            count++;
        }
        for (let i = 0; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(path, remTarget - nums[i]);
            path.pop();
        }
    }
    backtrack([], target);
    return count;
};  