/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
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
console.log(updateMatrix([[0,0,0],[0,1,0],[0,0,0]]))