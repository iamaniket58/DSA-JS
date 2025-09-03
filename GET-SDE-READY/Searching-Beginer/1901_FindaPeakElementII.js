/**
 * @param {number[][]} mat
 * @return {number[]}
 */
//Bruite force approach- Check each element with its Neighbours
var findPeakGrid = function (mat) {
    let m = mat.length;
    let n = mat[0].length;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            let isPeak = true;
            if (row > 0 && mat[row][col] < mat[row - 1][col]) {
                isPeak = false;
            }
            if (row < m - 1 && mat[row][col] < mat[row + 1][col]) {
                isPeak = false;
            }
            if (col < n - 1 && mat[row][col] < mat[row][col + 1]) {
                isPeak = false;
            }
            if (col > 0 && mat[row][col] < mat[row][col - 1]) {
                isPeak = false;
            }
            if (isPeak) return [row, col]
        }
    }
};
//Bruite Force- Another way
var findPeakGrid = function (mat) {
    let m = mat.length;
    let n = mat[0].length;
    //Helper Function
    let isPeak = (row, col) => {
        let up = row > 0 ? mat[row - 1][col] : -1;
        let down = row < m - 1 ? mat[row + 1][col] : -1;
        let left = col > 0 ? mat[row][col - 1] : -1;
        let right = col < n - 1 ? mat[row][col + 1] : -1;

        return mat[row][col] > up && mat[row][col] > down &&
            mat[row][col] > left && mat[row][col] > right
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (isPeak(row, col)) {
                return [row, col]
            }
        }
    }

};

// Chat GPT- Brute force: check every cell
var findPeakGrid = function (mat) {
    let m = mat.length;
    let n = mat[0].length;

    // Helper function to check neighbors
    function isPeak(i, j) {
        let up = i > 0 ? mat[i - 1][j] : -1;
        let down = i < m - 1 ? mat[i + 1][j] : -1;
        let left = j > 0 ? mat[i][j - 1] : -1;
        let right = j < n - 1 ? mat[i][j + 1] : -1;

        return mat[i][j] > up && mat[i][j] > down &&
            mat[i][j] > left && mat[i][j] > right;
    }

    // Check all cells
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isPeak(i, j)) {
                return [i, j];
            }
        }
    }

    return [-1, -1]; // should never happen
};
