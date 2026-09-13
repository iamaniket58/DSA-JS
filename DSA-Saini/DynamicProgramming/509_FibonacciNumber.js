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
//Top Down using Array
var fib = function (n, store = new Array(n + 1).fill(-1)) {
    if (n <= 1) return n;
    if (store[n] == -1) {
        store[n] = fib(n - 1, store) + fib(n - 2, store);
    }
    return store[n];

};

//GPT
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

//using Variable a and b
var fib2=function(n){
    if(n==0 || n==1)return n
    let a=0;
    let b=1;
    for(let i=0;i<n-1;i++){
        let c=a+b;
        a=b;
        b=c;
    }
    return b
}

//using only 2 variable- no 3rd variable
var fib3=function(n){
    if(n==0 || n==1)return n
    let a=0;
    let b=1;
    for(let i=0;i<n-1;i++){
       b=a+b;
       a=b-a
    }
    return b
}
