/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let result = false;
    let m = board.length;
    let n = board[0].length;
    let backtrack = (x, y, nextIndex) => {
        if (nextIndex == word.length) {
            result=true;
        }
        let original = board[x][y];
        board[x][y] = "#";  // mark visited
        if (y < n - 1 && board[x][y + 1] == word[nextIndex]) {
            backtrack(x, y + 1, nextIndex + 1)
        }
        if (y > 0 && board[x][y - 1] == word[nextIndex]) {
            backtrack(x, y - 1, nextIndex + 1)
        }
        if (x < m - 1 && board[x + 1][y] == word[nextIndex]) {
            backtrack(x + 1, y, nextIndex + 1)
        }
        if (x > 0 && board[x - 1][y] == word[nextIndex]) {
            backtrack(x - 1, y, nextIndex + 1)
        }
        board[x][y] = original;
    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == word[0]) {
                backtrack(i, j, 1)
            }
        }
    }
    return result;
};

//Returing from recursion, instead of storing the value

var exist = function (board, word) {
    let result = false;
    let m = board.length;
    let n = board[0].length;
    let backtrack = (i, j, nextIndex) => {
        if (nextIndex == word.length) return true;
        let original = board[i][j];
        board[i][j] = "#";
        if (j > 0 && board[i][j - 1] == word[nextIndex]) {
            if (backtrack(i, j - 1, nextIndex + 1)) return true;
        }
        if (j < n - 1 && board[i][j + 1] == word[nextIndex]) {
            if (backtrack(i, j + 1, nextIndex + 1)) return true;
        }
        if (i > 0 && board[i - 1][j] == word[nextIndex]) {
            if (backtrack(i - 1, j, nextIndex + 1)) return true;
        }
        if (i < m - 1 && board[i + 1][j] == word[nextIndex]) {
            if (backtrack(i + 1, j, nextIndex + 1)) return true;
        }
        board[i][j] = original;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == word[0]) {
                if(backtrack(i, j, 1))return true;
            }
        }
    }
    return false;
};