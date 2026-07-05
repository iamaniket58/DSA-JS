/**
 * @param {number[][]} grid
 * @return {number}
 */

//Revision
var orangesRotting = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let q = [];
    //Push all the Rotten Oranges to Q
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] == 2) {
                q.push([row, col]);
            }
        }
    }
    //Push those oranges in the Q which which will be rotten after
    let minutes = 0;
    while (q.length) {
        minutes++;
        let qlength = q.length;
        console.log(q);
        for (let i = 0; i < qlength; i++) {
            let [row, col] = q.shift();
            if (col > 0 && grid[row][col - 1] == 1) {
                grid[row][col - 1] = 2;
                q.push([row, col - 1]);
            }
            if (col < n - 1 && grid[row][col + 1] == 1) {
                grid[row][col + 1] = 2;
                q.push([row, col + 1]);
            }
            if (row > 0 && grid[row - 1][col] == 1) {
                grid[row - 1][col] = 2;
                q.push([row - 1, col])
            }
            if (row < m - 1 && grid[row + 1][col] == 1) {
                grid[row + 1][col] = 2;
                q.push([row + 1, col])
            }

        }
    }
    //Checking if any oranges are left
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] == 1) return -1;
        }
    }
    return minutes == 0 ? minutes : minutes - 1;
};

var orangesRotting = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let queue = [];
    //First add all the wrotten oranges to queue
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                queue.push([i, j, 0])// 0 is minute/layer
            }
        }
    }

    let maxMinute = 0
    //Make Agjacanet nodes as rotten and push to queue
    while (queue.length) {
        let [x, y, min] = queue.shift();
        if (x > 0 && grid[x - 1][y] == 1) {
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, min + 1])
        }
        if (x < m - 1 && grid[x + 1][y] == 1) {
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, min + 1])
        }
        if (y < n - 1 && grid[x][y + 1] == 1) {
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, min + 1])
        }
        if (y > 0 && grid[x][y - 1] == 1) {
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, min + 1])
        }
        if (min > maxMinute) {
            maxMinute = min; //Finding Max Min
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                return -1;
            }
        }
    }
    return maxMinute;
};

console.log(orangesRotting(grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]))