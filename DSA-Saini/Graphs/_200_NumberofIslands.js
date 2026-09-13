/**
 * @param {character[][]} grid
 * @return {number}
 */

//Revision
var numIslands = function (grid) {
    let visited = new Set();
    let m = grid.length;
    let n = grid[0].length;
    let count = 0;
    let dfs = (row, col) => {
        visited.add(`${row}+${col}`)
        if (col > 0 && !visited.has(`${row}+${col - 1}`) && grid[row][col - 1] == 1) {
            dfs(row, col - 1)
        }
        if (col < n - 1 && !visited.has(`${row}+${col + 1}`) && grid[row][col + 1] == 1) {
            dfs(row, col + 1)
        }
        if (row > 0 && !visited.has(`${row - 1}+${col}`) && grid[row - 1][col] == 1) {
            dfs(row - 1, col)
        }
        if (row < m - 1 && !visited.has(`${row + 1}+${col}`) && grid[row + 1][col] == 1) {
            dfs(row + 1, col)
        }
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (!visited.has(`${i}+${j}`) && grid[i][j] == 1) {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
};


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

//ChatGPT
var numIslands = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let count = 0;

    function dfs(row, col) {
        // Out of bounds
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols
        ) {
            return;
        }

        // Already water or visited
        if (grid[row][col] === "0") {
            return;
        }

        // Mark as visited
        grid[row][col] = "0";

        // Visit 4 directions
        dfs(row - 1, col); // up
        dfs(row + 1, col); // down
        dfs(row, col - 1); // left
        dfs(row, col + 1); // right
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            if (grid[row][col] === "1") {
                count++;

                dfs(row, col);
            }
        }
    }

    return count;
}; 
//Iterative
var numIslands = function (grid) {
    let visited = new Set();
    let m = grid.length;
    let n = grid[0].length;
    let count = 0;
    let q = [];

    let bfs = () => {
        while (q.length) {
            let [row, col] = q.shift();
            if (row > 0 && grid[row - 1][col] == 1 && !visited.has(`${row - 1}+${col}`)) {
                q.push([row - 1, col]);
                visited.add(`${row - 1}+${col}`);
            }
            if (row < m - 1 && grid[row + 1][col] == 1 && !visited.has(`${row + 1}+${col}`)) {
                q.push([row + 1, col]);
                visited.add(`${row + 1}+${col}`);
            }
            if (col > 0 && grid[row][col - 1] == 1 && !visited.has(`${row}+${col - 1}`)) {
                q.push([row, col - 1]);
                visited.add(`${row}+${col - 1}`);
            }
            if (col < n - 1 && grid[row][col + 1] == 1 && !visited.has(`${row}+${col + 1}`)) {
                q.push([row, col + 1]);
                visited.add(`${row}+${col + 1}`);
            }
        }

    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (!visited.has(`${i}+${j}`) && grid[i][j] == 1) {
                count++;
                q.push([i, j])
                bfs();
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