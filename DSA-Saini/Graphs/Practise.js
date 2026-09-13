function bfs(node) {
    let visited = new Set();
    let q = [node];
    let ans = [];
    while (q.length) {
        let curr = q.shift();
        visited.add(curr);
        ans.push(curr);
        for (let n of graph[curr]) {
            if (!visited.has(n)) {
                q.push(n);
            }
        }
    }
    return ans
}
function DepthFirstSearch(node) {
    let visited = new Set();
    let ans = [];
    let dfs = (curr) => {
        visited.add(curr);
        ans.push(curr);
        for (let n of graph[curr]) {
            if (!visited.has(n)) {
                dfs(n);
            }
        }
    }
    dfs(node);
    return ans;

}

const graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0],
    3: [1],
    4: [1]
};
console.log(bfs(0, graph));
