function topologicalSortBFS(n, graph) {
    let q = [];
    let indegree = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let node of graph[i]) {
            indegree[node]++;
        }
    }
    for (let i = 0; i < n; i++) {
        if (indegree[i] == 0) q.push(i);
    }
    let ans = [];
    while (q.length) {
        let curr = q.shift();
        for (let node of graph[curr]) {
            indegree[node]--;
            if (indegree[node] == 0) q.push(node)
        }
        ans.push(curr);
    }
    return ans;
}
//Revision- Optimized
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
        console.log("Graph has cycle, Topological Sort is not possible");
        return [];
    }
    return ans;
}

//Sir's Method- Enhanced SS by ChatGPT
// n = number of vertices (0 to n-1)
// graph = adjacency list, e.g. graph[2] = [3,4] means 2 → 3 and 2 → 4
function topologicalSortBFS1(n, graph) {
    // 1. Compute indegree of every node
    const indegree = new Array(n).fill(0);

    for (let u = 0; u < n; u++) {
        for (const v of graph[u]) {
            indegree[v]++;
        }
    }

    // 2. Push all nodes with indegree 0 into a queue
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    // 3. Process the queue (BFS) and build topo order
    const topo = []; //This is Same as answer array

    while (queue.length > 0) {
        const curr = queue.shift();
        topo.push(curr);

        // For each neighbour, reduce indegree
        for (const nei of graph[curr]) {
            indegree[nei]--;
            if (indegree[nei] === 0) {
                queue.push(nei);
            }
        }
    }

    // 4. If topo sort doesn't contain all nodes ⇒ graph had a cycle
    if (topo.length !== n) {
        // return empty array or handle "cycle present" as you like
        console.log("Graph has a cycle and Topo Sort is not possible");
        return [];
    }

    return topo;
}

let adj = [
    [],
    [],
    [3],
    [1],
    [0, 1],
    [0, 2]
];
console.log(topologicalSortBFS2(6, adj))
