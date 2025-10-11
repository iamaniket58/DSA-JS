/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//Recursive Solution- Sir's Explaination-- Time Limit Exceeded
var uniquePaths0 = function (m, n) {
    var recursion = (row, col) => {
        if (row >= m || col >= n) return 0;
        if (row == m - 1 && col == n - 1) return 1;
        let right = recursion(row, col + 1);
        let down = recursion(row + 1, col);
        return down + right;
    }
    return recursion(0, 0);
};

//DP Solution
var uniquePaths = function (m, n) {
    let dp = Array.from({ length: m }, () => Array(n).fill(-1));

    var recursion = (row, col) => {
        if (row >= m || col >= n) return 0;
        if (row == m - 1 && col == n - 1) return 1;
        if (dp[row][col] == -1) {
            let right = recursion(row, col + 1);
            let down = recursion(row + 1, col);
            dp[row][col]=right+down;
        }
        return dp[row][col];
    }
    return recursion(0, 0);
};
console.log(uniquePaths(3, 2))
//DP-Almost same as Above
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


//DP
var uniquePaths = function (m, n) {
    let dp = {};
    let recursion = (row, col) => {
        if (row == m - 1 && col == n - 1) return 1;
        let key = row + "," + col;
        if (dp[key]) return dp[key];
        let right = col < n - 1 && recursion(row, col + 1);
        let left = row < m - 1 && recursion(row + 1, col);
        
        return dp[key] = right + left;
    }
    return recursion(0, 0)
};
//GPT Solution
var uniquePaths1 = function (m, n) {
    if (m == 1 || n == 1) return 1;
    return uniquePaths(m - 1, n) + uniquePaths(m, n - 1)
};