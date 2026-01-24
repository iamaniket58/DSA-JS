/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates = candidates.sort((a, b) => a - b);
    let result = [];
    let backtrack = (path, start, targetSum) => {
        if (targetSum == 0) result.push([...path]);
        if (targetSum <= 0) return;
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] == candidates[i - 1]) continue;
            path.push(candidates[i]);
            backtrack(path, i + 1, targetSum - candidates[i]);
            path.pop();
        }


    }
    backtrack([], 0, target);
    return result;
};

//Slight Optimized- Not going till -ve , stopping it 1 step before
var combinationSum2 = function (arr, target) {
    arr = arr.sort((a, b) => a - b);
    let result = [];
    let backtrack = (path, start, targetSum) => {
        if (targetSum == 0) {
            result.push([...path]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            if ((i > start && arr[i] == arr[i - 1]) || arr[i] > targetSum) continue;
            path.push(arr[i]);
            backtrack(path, i + 1, targetSum - arr[i]);
            path.pop();
        }
    }
    backtrack([], 0, target)

    return result;
};

//Revision
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b);
    let result = [];
    let backtrack = (path, start, sum) => {
        if (sum == target) {
            result.push([...path]);
            return;
        }
        if (sum > target) return;
        for (let i = start; i < candidates.length; i++) {
            if(i>start && candidates[i]==candidates[i-1])continue;
            path.push(candidates[i]);
            backtrack(path, i + 1, sum + candidates[i]);
            path.pop();
        }
    }
    backtrack([], 0, 0);
    return result;
};

