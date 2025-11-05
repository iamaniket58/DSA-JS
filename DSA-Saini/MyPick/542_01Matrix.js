/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
//DP Solution
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let m = mat.length;
    let n = mat[0].length;
    let ans = Array.from({ length: m }, () => Array(n).fill(Infinity));

    // 1️⃣ First pass: Top-left → Bottom-right
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] != 0) {
                let top = i > 0 ? ans[i - 1][j] : Infinity;
                let left = j > 0 ? ans[i][j - 1] : Infinity;
                ans[i][j] = Math.min(top, left) + 1
            }
            else {
                ans[i][j] = 0
            }
        }
    }

    // 2️⃣ Second pass: Bottom-right → Top-left
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (mat[i][j] != 0) {
                let right = j < n - 1 ? ans[i][j + 1] : Infinity;
                let bottom = i < m - 1 ? ans[i + 1][j] : Infinity;
                ans[i][j] = Math.min(Math.min(right, bottom) + 1, ans[i][j])
            }
        }
    }
    return ans;

}
var updateMatrix = function (mat) {
    let m = mat.length;
    let n = mat[0].length;
    let ans = Array.from({ length: m }, () => Array(n).fill(0));
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (mat[row][col] == 1) {
                mat[row][col] = helper(row, col, m, n, mat)
            }
        }
    }
};
let helper = function (row, col, m, n, mat) {
    let bt = (row, col, count) => {
        if (mat[row][col] == 0) return count;

        let left = col > 0 && bt(row, col - 1, count + 1)
        let right = col < n - 1 && bt(row, col + 1, count + 1)
        let up = row > 0 && bt(row - 1, col, count + 1)
        let down = row < m - 1 && bt(row + 1, col, count + 1)
        // if (left == 0 || right == 0 || up == 0 || down == 0) {
        return Math.min(left, right, up, down);
        // }
    }
    return bt(row, col, 0);
}