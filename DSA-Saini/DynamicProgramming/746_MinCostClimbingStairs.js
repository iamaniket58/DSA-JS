/**
 * @param {number[]} cost
 * @return {number}
 */

//Bottom-Up Approach
var minCostClimbingStairs = function (cost) {
    let n = cost.length;
    let dp = [0, 0];
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[n];
};

//Top-Down Approach
var minCostClimbingStairs = function (cost) {
    let dp = {};
    let n = cost.length;
    var recursion = (n) => {
        if (n <= 1) return 0;
        if (dp[n] == undefined) {
            dp[n] = Math.min(recursion(n - 1) + cost[n - 1], recursion(n - 2) + cost[n - 2])
        }
        return dp[n];
    }
    // console.log(dp);
    return recursion(n);
};