/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
    let edges = connections.length;
    if (edges < n - 1) return -1;

    let graph = {};
    for (let [x, y] of connections) {
        if (!graph[x]) graph[x] = [];
        if (!graph[y]) graph[y] = [];
        graph[x].push(y);
        graph[y].push(x);
    }
    for (let i = 0; i < n; i++) {
        if (!graph[i]) graph[i] = [];
    }
    let disconnectedComponent = 0;
    let visited = new Set();
    
    let bfs = (i) => {
        let q = [i]
        while (q.length) {
            let curr = q.shift();
            if (visited.has(curr)) continue;
            visited.add(curr)
            for (let n of graph[curr]) {
                if (!visited.has(n)) {
                    q.push(n);

                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            bfs(i);
            disconnectedComponent++
        }
    }

    return disconnectedComponent - 1;
};

// Sir's Method- Used Array for -Adjacency List and created BFS outside Method
var makeConnected = function (n, connections) {
    let edges = connections.length;
    if (edges < n - 1) return -1;

    let graph = Array.from({ length: n }, () => []);
    // console.log(graph);
    for (let [x, y] of connections) {
        graph[x].push(y);
        graph[y].push(x);
    }
    // console.log(graph);
    let disconnectedComponent = 0;
    let visited = new Set();

    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            bfs(i,visited,graph);
            disconnectedComponent++
        }
    }

    return disconnectedComponent - 1;
};
let bfs = (src, visited, graph) => {
    let q = [src];
    visited.add(src)
    while (q.length) {
        let curr = q.shift();
        for (let n of graph[curr]) {
            if (!visited.has(n)) {
                visited.add(n)
                q.push(n);

            }
        }
    }
}

var makeConnected = function(n, connections) {
    if (connections.length < n - 1) return -1;

    let parent = new Array(n).fill(0).map((_, i) => i);
    let rank = new Array(n).fill(0);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);  // Path compression
        }
        return parent[x];
    }

    function union(x, y) {
        let rootX = find(x);
        let rootY = find(y);

        if (rootX === rootY) return false;

        if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }

        return true;
    }

    let components = n;

    for (let [a, b] of connections) {
        if (union(a, b)) {
            components--;
        }
    }

    return components - 1;
};
