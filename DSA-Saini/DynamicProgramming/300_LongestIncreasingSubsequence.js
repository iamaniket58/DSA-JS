/**
 * @param {number[]} nums
 * @return {number}
 */
//DP
var lengthOfLIS1 = function (nums) {
    let n = nums.length;
    let dp = Array(n).fill(1);
    let maxSubseq = 1;
    for (let i = 1; i < n; i++) {
        //Find smaller elemnt on Left
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }

        }
        if (dp[i] > maxSubseq) maxSubseq = dp[i];
    }
    return maxSubseq;
};
console.log(lengthOfLIS1([10, 9, 2, 5, 3, 7, 101, 18]))

//Recursion/Backtracking Solution
var lengthOfLIS = function (nums) {
    let n = nums.length;
    let maxLength = -Infinity;
    let backtrack = (path, start) => {
        if (path.length > maxLength) maxLength = path.length
        for (let i = start; i < n; i++) {
            if (path.length == 0 || nums[i] > path[path.length - 1]) {
                path.push(nums[i]);
                backtrack(path, i + 1);
                path.pop();
            }

        }
    }
    backtrack([], 0)
    return maxLength;
};
//This is using Binary search
var lengthOfLIS = function(nums) {
    let sub = [];
    for (let num of nums) {
        let left = 0, right = sub.length;
        // binary search to find the correct position of num
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (sub[mid] < num) left = mid + 1;
            else right = mid;
        }
        // left is the correct index to replace or append
        sub[left] = num;
    }
    return sub.length;
};


















//This is wrong
var lengthOfLIS = function (nums) {
    let n = nums.length;
    let maxLength = -Infinity;
    for (let i = 0; i < n; i++) {
        let count = 1;
        let gr = nums[i];
        for (let j = i + 1; j < n; j++) {
            if (nums[j] > gr) {
                gr = nums[j];
                count++;
            }
        }
        if (count > maxLength) maxLength = count;
    }
    return maxLength;
};