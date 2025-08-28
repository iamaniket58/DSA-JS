/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let result=[];
    let board = Array.from({ length: n }, () => Array(n).fill("."));
    let backtrack = (row, colSet, diagSet, antiDiagSet) => {
        if(row==n){
            //result.push(board.map(x=>x.join(""))); //This is also correct
            result.push(transform(board))
            return;
        }
        for (let col = 0; col < n; col++) {
            if(colSet.has(col) || diagSet.has(row-col) || antiDiagSet.has(row+col))continue;
            board[row][col] = "Q";
            colSet.add(col);
            diagSet.add(row - col);
            antiDiagSet.add(row + col);

            backtrack(row + 1, colSet, diagSet, antiDiagSet);

            board[row][col] = ".";
            colSet.delete(col);
            diagSet.delete(row - col);
            antiDiagSet.delete(row + col);


        }
    }
    backtrack(0, new Set(),new Set(),new Set())
    return result;
};
let transform=(matrix)=>{
    let newArr=[];
    for(let i=0;i<matrix.length;i++){
        newArr.push(matrix[i].join(""))
    }
}