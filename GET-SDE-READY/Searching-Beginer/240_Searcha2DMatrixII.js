/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 //Starting from Top-Right
var searchMatrix = function(matrix, target) {
    let m=matrix.length;
    let n=matrix[0].length;
    let row=0;
    let col=n-1;
    while(row>=0 && row<m && col>=0 && col<n){
        if(matrix[row][col]==target)return true;
        if(matrix[row][col]<target){ //If targer is greater- Move Down
            row++;
        }
        else{ //If targer is smaller- Move left
            col--;
        }
    }
    return false;
};

 //Starting from Bottom Left
var searchMatrix = function(matrix, target) {
    let m=matrix.length;
    let n=matrix[0].length;
    let row=m-1;
    let col=0;
    while(row>=0 && row<m && col>=0 && col<n){
        if(matrix[row][col]==target)return true;
        if(matrix[row][col]<target){ //If targer is greater- Move Right
            col++;
        }
        else{ //If targer is smaller- Move Up
            row--;
        }
    }
    return false;
};