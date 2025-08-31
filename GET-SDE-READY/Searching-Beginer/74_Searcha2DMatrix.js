/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
//check the row in which target is there, then apply Binary Search
var searchMatrix = function(matrix, target) {
    let m=matrix.length;
    let n=matrix[0].length;
    for(let i=0;i<m;i++){
        if (target>=matrix[i][0] && target<=matrix[i][n-1]){
            let l=0;
            let r=n-1;
            while(l<=r){
                let mid=Math.floor(l+(r-l)/2);
                if(matrix[i][mid]==target)return true;
                if(matrix[i][mid]>target){
                    r=mid-1
                }
                else{
                    l=mid+1;
                }
            }
        }
    }
    return false;
};

//Imagine it as a flatened array, then find the mid with mid, find row and column
var searchMatrix = function (matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let l = 0;
    let r = m * n - 1;
    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        let row = Math.floor(mid / n);
        let col = mid % n;
        if (matrix[row][col] == target) {
            return true;
        }
        else if (target > matrix[row][col]) {
            l = mid + 1;
        }
        else {
            r = mid - 1
        }
    }
    return false;
};