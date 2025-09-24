/**
 * @param {number[][]} grid
 * @return {number}
 */
//Same as below just slight modification
var uniquePathsIII = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let walkOverPath = 0;
    let start = [];
    //Find the WalkOver path and Starting Index
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) start = [i, j];
            if (grid[i][j] != -1) walkOverPath++;
        }
    }

    let path = 0
    let recursion = (row, col, count) => {
        if (row<0 || row>=m || col<0 || col>=n || grid[row][col] == -1) return 
        if (grid[row][col] == 2 && count == walkOverPath) {
            path++ //return 1;
            return;
        }

        //Marking it as Visited
        let temp = grid[row][col];
        grid[row][col] = -1;

        recursion(row, col - 1, count + 1);
        recursion(row, col + 1, count + 1);
        recursion(row - 1, col, count + 1);
        recursion(row + 1, col, count + 1)
        grid[row][col] = temp;

    }
    recursion(start[0], start[1], 1);
    return path;
};

var uniquePathsIII = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let walkOverPath = 0;
    let start = [];
    //Find the WalkOver path and Starting Index
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) start = [i, j];
            if (grid[i][j] != -1) walkOverPath++;
        }
    }
    let path = 0
    let recursion = (row, col, count) => {
        if (grid[row][col] == -1) return 
        if (grid[row][col] == 2 && count == walkOverPath) {
            path++ //return 1;
            return;
        }

        //Marking it as Visited
        let temp = grid[row][col];
        grid[row][col] = -1;

        let left = col > 0 && recursion(row, col - 1, count + 1);
        let right = col < n - 1 && recursion(row, col + 1, count + 1);
        let up = row > 0 && recursion(row - 1, col, count + 1);
        let down = row < m - 1 && recursion(row + 1, col, count + 1)
        grid[row][col] = temp;

    }
    recursion(start[0], start[1], 1);
    return path;
};