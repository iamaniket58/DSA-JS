function topologicalSortBFS(n, graph) {
    let indegree = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            indegree[graph[i][j]]++;
        }
    }

    let q = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] == 0) {
            q.push(i);
        }
    }
    let ans = [];
    let font = 0;
    while (font < q.length) {
        let curr = q[font++];
        ans.push(curr);
        for (let n of graph[curr]) {
            indegree[n]--;
            if (indegree[n] == 0) q.push(n);
        }

    }
    if(ans.length!=n){
        console.log("Graph has cycle, Topological Sort is not possible")
    }
    return ans;
}
let adj = [
    [],
    [],
    [3],
    [1],
    [0, 1],
    [0, 2]
];
console.log(topologicalSortBFS(6, adj))