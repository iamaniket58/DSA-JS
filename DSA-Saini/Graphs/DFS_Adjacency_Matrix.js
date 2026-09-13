function dfsUsingMatrix(matrix) {
    let visited = new Set();
    let n = matrix[0].length;
    let ans=[];
    let dfs = (curr) => {
        visited.add(curr);
        ans.push(curr)
        for (let i = 0; i < n; i++) {
            if (!visited.has(i) && matrix[curr][i] == 1) {
                dfs(i);
            }
        }
    }
    dfs(0);
    return ans;
}
const graph = [

    [0, 1, 1, 1, 0, 0, 0], 
    [1, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 0, 1], 
    [1, 0, 0, 0, 0, 1, 0], 
    [0, 0, 0, 0, 0, 0, 1], 
    [0, 0, 0, 1, 0, 0, 0], 
    [0, 1, 1, 0, 1, 0, 0]  
];

console.log(dfsUsingMatrix(graph))