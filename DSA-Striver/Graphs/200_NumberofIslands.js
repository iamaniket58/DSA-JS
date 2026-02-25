/**
 * @param {character[][]} grid
 * @return {number}
 */

//Without using Extra Space
var numIslands = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let traverse = (row, col) => {
        //Mark visited Node as water
        grid[row][col] = "0";
        if (row > 0 && grid[row - 1][col] == "1") {
            traverse(row - 1, col);
        }
        if (row < m - 1 && grid[row + 1][col] == "1") {
            traverse(row + 1, col);
        }
        if (col > 0 && grid[row][col - 1] == "1") {
            traverse(row, col - 1);
        }
        if (col < n - 1 && grid[row][col + 1] == "1") {
            traverse(row, col + 1);
        }
    }
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == "1") {
                traverse(i, j);
                count++;
            }

        }
    }
    return count;
};

var numIslands = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let visited = new Set();
    let traverse = (row, col) => {
        visited.add(row + "," + col);
        if (row > 0 && grid[row - 1][col] == "1" && !visited.has((row - 1) + "," + col)) {
            traverse(row - 1, col);
        }
        if (row < m - 1 && grid[row + 1][col] == "1" && !visited.has((row + 1) + "," + col)) {
            traverse(row + 1, col);
        }
        if (col > 0 && grid[row][col - 1] == "1" && !visited.has(row + "," + (col - 1))) {
            traverse(row, col - 1);
        }
        if (col < n - 1 && grid[row][col + 1] == "1" && !visited.has(row + "," + (col + 1))) {
            traverse(row, col + 1);
        }
    }
    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited.has(i + "," + j) && grid[i][j] == "1") {
                traverse(i, j);
                count++;
            }

        }
    }
    return count;
};

//Just a random leetcode solution, Visit if you want
var numIslands = function (mat) {
    let m = mat.length;
    let n = mat[0].length;

    const fun = (i, j, mat) => {
        if (i >= m || i < 0 || j < 0 || j >= n || mat[i][j] == 0) {
            return;
        }
        if (mat[i][j] == 1) {
            mat[i][j] = 0;
        }
        fun(i, j + 1, mat);
        fun(i, j - 1, mat);
        fun(i + 1, j, mat);
        fun(i - 1, j, mat);
    }

    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] == 1) {
                count++;
                fun(i, j, mat);
            }
        }
    }

    return count;
};