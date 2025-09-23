/**
 * @param {number} n
 * @return {number}
 */

//Top Down Approach- Recursion
let store = {};
var fib = function (n) {
    if (n <= 1) return n;
    if (!store[n]) {
        store[n] = fib(n - 1) + fib(n - 2);
    }
    return store[n];
};
console.log(fib(5))

//Bottom Up Approach- Iteration
var fib = function (n) {
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    console.log(dp);
    return dp[n];
};

//My Solution using Bottom Up Approach
var fib = function (n) {
    if (n <= 0) return n
    let a = 0;
    let b = 1;
    for (i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c
    }
    return b;
};
