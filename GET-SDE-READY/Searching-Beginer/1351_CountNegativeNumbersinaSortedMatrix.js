/**
 * @param {number[][]} grid
 * @return {number}
 */

//Optimized (O(m + n))
var countNegatives = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let row = m - 1;
    let col = 0;
    let count = 0;
    while (row >= 0 && col < n) {
        if (grid[row][col] < 0) {
            count += (n - col);
            row--;
        }
        else {
            col++;
        }
    }
    return count;
};
//Using Binary Search
var countNegatives = function (grid) {
     let count=0;
    for (let row of grid) {
        let l = 0;
        let r = row.length - 1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (row[mid] < 0) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
        count+=row.length-l
    }
    return count;
};

//Bruite Force
var countNegatives = function (grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] < 0) count++;
        }
    }
    return count;
};

var countNegatives = function (grid) {
    let count = 0;
    for (let row of grid) {
        for (let cell of row) {
            if (cell < 0) {
                count++;
            }
        }
    }
    return count
}