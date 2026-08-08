/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let result = [];
    let backtrack = (path, start, targetSum) => {
        if (targetSum == 0 && path.length == k) result.push([...path]);
        if (targetSum <= 0) return;

        for (let i = start; i < 10; i++) {
            path.push(i);
            backtrack(path, i + 1, targetSum - i);
            path.pop();
        }
    }
    backtrack([], 1, n)
    return result;
};

//Revision
var combinationSum3 = function (k, n) {
    let result = [];
    let backtrack = (path, start, sum) => {
        if (path.length == k && sum == n) {
            result.push([...path]);
            return;
        }
        if (sum > n || path.length > k) return;

        for (let i = start; i <= 9; i++) {
            path.push(i);
            backtrack(path, i + 1, sum + i);
            path.pop();
        }
    }
    backtrack([], 1, 0);
    return result;
};