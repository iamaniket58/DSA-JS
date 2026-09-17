/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    let startColor = image[sr][sc];
    if (startColor == color) return image;
    let m = image.length;
    let n = image[0].length;
    let dfs = (row, col) => {
        image[row][col] = color;
        //No need to keep visited array/Set
        if (col > 0 && image[row][col - 1] == startColor) {
            dfs(row, col - 1);
        }
        if (col < n - 1 && image[row][col + 1] == startColor) {
            dfs(row, col + 1);
        }
        if (row > 0 && image[row - 1][col] == startColor) {
            dfs(row - 1, col);
        }
        if (row < m - 1 && image[row + 1][col] == startColor) {
            dfs(row + 1, col);
        }
    }
    dfs(sr, sc);
    return image;
};

var floodFill = function (image, sr, sc, color) {
    let startColor = image[sr][sc];
    if (startColor == color) return image;
    let m = image.length;
    let n = image[0].length;
    let dfs = (row, col) => {
        if (row < 0 || row >= m || col < 0 || col >= n || image[row][col] != startColor) return;
        image[row][col] = color;
        //No need to keep visited array/Set
        dfs(row, col - 1);
        dfs(row, col + 1);
        dfs(row - 1, col);
        dfs(row + 1, col);

    }
    dfs(sr, sc);
    return image;
};