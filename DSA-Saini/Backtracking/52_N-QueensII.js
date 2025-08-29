/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let board = Array.from({ length: n }, () => Array(n).fill("."));
    let count = 0;
    console.log(board);
    let backtrack = (row, colSet, diagSet, antiDiagSet) => {
        if (row == n) {
            count++;
        }
        for (let col = 0; col < n; col++) {
            if (colSet.has(col) || diagSet.has(row - col) || antiDiagSet.has(row + col)) continue;
            board[row][col] = "Q";
            colSet.add(col);
            diagSet.add(row - col);
            antiDiagSet.add(row + col);

            backtrack(row + 1, colSet, diagSet, antiDiagSet)
            board[row][col] = ".";
            colSet.delete(col);
            diagSet.delete(row - col);
            antiDiagSet.delete(row + col);

        }
    }
    backtrack(0, new Set(), new Set(), new Set());
    return count;
};