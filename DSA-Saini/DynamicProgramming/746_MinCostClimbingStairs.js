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

//My Solution- All the below solution is my intuitive approach
//Bottom-Up Approach- Cleaner
var minCostClimbingStairs = function (cost) {
    let dp = [cost[0], cost[1]];
    let n = cost.length;
    for (let i = 2; i <= n; i++) {
        dp[i] = (Math.min(dp[i - 1], dp[i - 2])) +( cost[i] ?? 0);
    }
    return dp[n];
};
//nORMAL rECURSION
var minCostClimbingStairs = function (cost) {
    let traverse = (n) => {
        if(n<=1)return cost[n];
        let prev = traverse(n - 1);
        let prev1 = traverse(n - 2);
        return (Math.min(prev, prev1)) + (cost[n] ?? 0)
    }
    return traverse(cost.length);
};

//Top-Down Approach- Cleaner
var minCostClimbingStairs = function (cost) {
    let map = {};
    let traverse = (n) => {
        if (n <= 1) return cost[n];
        if (map[n]==undefined) {
            let prev = traverse(n - 1);
            let prev1 = traverse(n - 2);
            map[n] = Math.min(prev, prev1) + (cost[n] ?? 0)
        }
        return map[n];

    }
    return traverse(cost.length);
};
//Top Down Approach-Another way
var minCostClimbingStairs = function (cost) {
    let map = {};
    let traverse = (n) => {
        if (n <= 1) return cost[n];
        if (map[n]==undefined) {
            map[n] = Math.min(traverse(n - 1), traverse(n - 2)) + (cost[n] ?? 0)
        }
        return map[n];

    }
    return traverse(cost.length);
};