

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
//DP Solution- Nikhil Lohia
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

// Way 1: Find the Nearest 0 to 1 O(m*n)^2
//TLE(Time Limit Exceeded)
var updateMatrix = function (mat) {
    let m = mat.length;
    let n = mat[0].length;

    let visited = new Set();
    let bfs = (i, j) => {
        let q = [[i, j, 0, 1]];

        while (q.length) {
            let [row, col, level, value] = q.shift();
            if (value == 0) {
                visited.clear()
                return level;
            }
            if (col > 0 && !visited.has(`${row}+${col - 1}`)) {
                q.push([row, col - 1, level + 1, mat[row][col - 1]]);
                visited.add(`${row}+${col - 1}`);

            }
            if (col < n - 1 && !visited.has(`${row}+${col + 1}`)) {
                q.push([row, col + 1, level + 1, mat[row][col + 1]]);
                visited.add(`${row}+${col + 1}`);

            }
            if (row > 0 && !visited.has(`${row - 1}+${col}`)) {
                q.push([row - 1, col, level + 1, mat[row - 1][col]]);
                visited.add(`${row - 1}+${col}`);
            }
            if (row < m - 1 && !visited.has(`${row + 1}+${col}`)) {
                q.push([row + 1, col, level + 1, mat[row + 1][col]]);
                visited.add(`${row + 1}+${col}`)
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] == 1) {
                visited.add(`${i}+${j}`)
                mat[i][j] = bfs(i, j);
            }

        }
    }
    return mat;
};
// Way 1: Find the Nearest 0 to 1 O(m*n)^2
//TLR- Chat GPT
//Enchanced Version
var updateMatrix = function (mat) {

    let m = mat.length;
    let n = mat[0].length;

    let bfs = (i, j) => {

        let visited = new Set();
        let q = [[i, j, 0]];

        visited.add(`${i}+${j}`);

        while (q.length) {

            let [row, col, level] = q.shift();

            if (mat[row][col] === 0) {
                return level;
            }

            if (
                col > 0 &&
                !visited.has(`${row}+${col - 1}`)
            ) {
                visited.add(`${row}+${col - 1}`);
                q.push([row, col - 1, level + 1]);
            }

            if (
                col < n - 1 &&
                !visited.has(`${row}+${col + 1}`)
            ) {
                visited.add(`${row}+${col + 1}`);
                q.push([row, col + 1, level + 1]);
            }

            if (
                row > 0 &&
                !visited.has(`${row - 1}+${col}`)
            ) {
                visited.add(`${row - 1}+${col}`);
                q.push([row - 1, col, level + 1]);
            }

            if (
                row < m - 1 &&
                !visited.has(`${row + 1}+${col}`)
            ) {
                visited.add(`${row + 1}+${col}`);
                q.push([row + 1, col, level + 1]);
            }
        }
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (mat[i][j] === 1) {
                mat[i][j] = bfs(i, j);
            }

        }
    }

    return mat;
};

//Way-2
//Take all the 0 out and push to q then calculate Distance from that 0 to 1(Opposite of way1)
var updateMatrix = function (mat) {
    let m = mat.length;
    let n = mat[0].length;
    let q = [];
    let ans = Array.from({ length: m }, () => Array(n).fill(Infinity));
    //Push all the zeros to the queue
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] == 0) {
                ans[i][j] = 0
                q.push([i, j]);
            }
        }
    }
    console.log(ans);
    let i = 0;
    while (i < q.length) {
        let [row, col] = q[i++];

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] == 1) {
                    ans[i][j] = Math.min(ans[i][j], Math.abs((i - row)) + Math.abs((j - col)));
                }
            }
        }
    }
    return ans;
};
//Way2
//Take all the 0 out and push to q then calculate Distance from that 0 to 1(Opposite of way1)
//Chat GPT
var updateMatrix = function (mat) {
    let m = mat.length;
    let n = mat[0].length;

    let q = [];

    // Put all 0s into the queue
    // Mark all 1s as unvisited
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                q.push([i, j]);
            } else {
                mat[i][j] = -1;
            }
        }
    }

    // Queue pointer
    let front = 0;

    let directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    while (front < q.length) {
        let [row, col] = q[front++];

        for (let [dr, dc] of directions) {
            let nr = row + dr;
            let nc = col + dc;

            // Check bounds and whether the cell is unvisited
            if (
                nr >= 0 &&
                nr < m &&
                nc >= 0 &&
                nc < n &&
                mat[nr][nc] === -1
            ) {
                mat[nr][nc] = mat[row][col] + 1;

                q.push([nr, nc]);
            }
        }
    }

    return mat;
};