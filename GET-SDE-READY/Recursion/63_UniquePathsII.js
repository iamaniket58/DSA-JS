/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

//Recursive Solution- Sir's Explaination-- Time Limit Exceeded
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let recursion = (row, col) => {
        if (row >= m || col >= n || obstacleGrid[row][col] == 1) return 0;
        if (row == m - 1 && col == n - 1) return 1;

        let right = recursion(row, col + 1);
        let down = recursion(row + 1, col);

        return right + down;
    }
    return recursion(0, 0);
};

//DP Solution
var uniquePathsWithObstacles = function (obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = Array.from({ length: m }, () => Array(n).fill(-1));
    let recursion = (row, col) => {
        if (row >= m || col >= n || obstacleGrid[row][col] == 1) return 0;
        if (row == m - 1 && col == n - 1) return 1;
        if (dp[row][col] == -1) {
            let right = recursion(row, col + 1);
            let down = recursion(row + 1, col);
            dp[row][col] = right + down;
        }
        return dp[row][col];
    }
    return recursion(0, 0);
};