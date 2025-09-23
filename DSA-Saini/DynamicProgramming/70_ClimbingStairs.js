/**
 * @param {number} n
 * @return {number}
 */
//my Solution
var climbStairs = function (n) {
    let a = 1;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};

//Bottom-up Approach
var climbStairs = function (n) {
    let dp = [null, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

//Using Top Down Recusion
let dp = {}
var climbStairs = function (n) {
    if (n <= 2) return n;
    if (!dp[n]){
        dp[n] = climbStairs(n - 1) + climbStairs(n - 2)
    }
    return dp[n];
};

//Simple Recursion- Time Limit Exceeded
var climbStairs = function (n) {
    if(n<=2)return n;
    return climbStairs(n-1)+climbStairs(n-2)
};