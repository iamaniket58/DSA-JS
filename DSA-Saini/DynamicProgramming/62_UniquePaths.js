/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//My Solution- Better
var uniquePaths = function (m, n) {
    let dp = Array.from({length:m},()=>Array(n).fill(-1));
    let recursion = (row, col) => {
        if (row == m - 1 && col == n - 1) return 1;

        if (dp[row][col]!=-1) return dp[row][col];
        let right = col < n - 1 && recursion(row, col + 1);
        let left = row < m - 1 && recursion(row + 1, col);
        
        return dp[row][col] = right + left;
    }
    return recursion(0, 0)
};

//Sir's Solution using DP
var uniquePaths = function (m, n) {
    let dp = Array.from({ length: m }, () => Array(n).fill(-1));
    let fn = (x, y) => {
        if (x == 0 && y == 0) return 1; //first index where robot is there
        if (x < 0 || y < 0) return 0;

        if (dp[x][y] != -1) return dp[x][y];

        return dp[x][y] = fn(x - 1, y) + fn(x, y - 1);
    }
    return fn(m - 1, n - 1);
};


//Sir's Solution- Recursion
var uniquePaths = function (m, n) {
    let fn = (x, y) => {
        if (x == 0 && y == 0) return 1; //first index where robot is there
        if (x < 0 || y < 0) return 0;
        return fn(x - 1, y) + fn(x, y - 1);
    }
    return fn(m - 1, n - 1);
};

//Sir' Solution- Tabulation Method
var uniquePaths = function (m, n) {
    let dp = Array.from({ length: m }, () => Array(n).fill(-1));
    //first fill row-1 and col-1 with value=1
    for (let row = 0; row < m; row++)dp[row][0] = 1;
    for (let col = 0; col < n; col++)dp[0][col] = 1;

    //Calculate
    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
        }
    }
    return dp[m - 1][n - 1];
};