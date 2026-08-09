/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

//Using recurion
var fib = function (n) {
    if (n <= 1) return n
    return fib(n - 1) + fib(n - 2);
};

//Using DP
let map = {};
var fib = function (n) {
    if (n <= 1) return n
    if (!map[n]) {
        map[n] = fib(n - 1) + fib(n - 2);
    }
    return map[n]
};

//Using only Variables
var fib = function (n) {
    if (n == 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};

//Claude
function fibIterative(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

//Using only 2 variables
var fib = function (n) {
    if (n == 0) return 0;
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        b = a + b;
        a = b - a;
    }
    return b;
};
