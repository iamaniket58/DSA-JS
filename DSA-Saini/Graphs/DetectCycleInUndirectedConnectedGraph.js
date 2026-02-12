function HasCycle(edges) {
    let graph = {};
    for (let [x, y] of edges) {
        if (!graph[x]) graph[x] = [];
        if (!graph[y]) graph[y] = [];
        graph[x].push(y);
        graph[y].push(x);
    }

    let visited = new Set();
    let dfs = (curr, parent) => {
        visited.add(curr);
        for (let n of graph[curr]) {
            if (!visited.has(n)) {
                // return dfs(n, curr); //Sir's Solution is wrong
                if (dfs(n, curr)) return true;  // ✅ continue exploring
            }
            else if (n != parent) { //else if( visited.has(n) && n!=parent)
                return true;
            }
        }
        return false;
    }
    return dfs(0, -1);
}
console.log(HasCycle([[0, 1], [1, 2], [2, 0]]))
console.log(HasCycle([[0, 1], [1, 2], [2, 3]]))
console.log(HasCycle([[0, 1], [1, 2], [2, 3], [3, 4], [1, 4]]))

function hasCycleInUndirectedGraph(edges) {
    let graph = {};
    for (let [x, y] of edges) {
        if (!graph[x]) graph[x] = [];
        if (!graph[y]) graph[y] = [];
        graph[x].push(y);
        graph[y].push(x);
    }
    let visited = new Set();
    visited.add(0);
    let traverse = (curr, parent) => {
        for (let n of graph[curr]) {
            if (!visited.has(n)) {
                visited.add(n);
                if (traverse(n,curr)) return true;
            }
            else if (n != parent) return true;
        }
        return false;
    }
    return traverse(0, null);

}