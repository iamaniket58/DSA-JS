/**
 * @param {number} n
 * @return {number}
 */
//DP-Bottom up
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

//Using DP- Top Down
let map = {};
var fib = function (n) {
    if (n <= 1) return n
    if (!map[n]) {
        map[n] = fib(n - 1) + fib(n - 2);
    }
    return map[n]
};
//Top Down using Array
var fib = function (n, store = new Array(n + 1).fill(-1)) {
    if (n <= 1) return n;
    if (store[n] == -1) {
        store[n] = fib(n - 1, store) + fib(n - 2, store);
    }
    return store[n];

};

//GPT- Top Down using an array
var fib = function(n) {
    let memo = new Array(n + 1).fill(-1);

    const solve = (n) => {
        // Base cases
        if (n <= 1) {
            return n;
        }

        // Already calculated
        if (memo[n] !== -1) {
            return memo[n];
        }

        // Calculate and store
        memo[n] = solve(n - 1) + solve(n - 2);

        return memo[n];
    };

    return solve(n);
};
var fib = function (n) {
    let dp = new Array(n + 1).fill(-1);
    let fibo = (i) => {
        if (i <= 1) return i;
        if (dp[i] == -1) {
            dp[i] = fibo(i - 1) + fibo(i - 2);
        }
        return dp[i];
    }
    return fibo(n);
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
