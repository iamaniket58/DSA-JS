/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
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