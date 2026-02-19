//Iteration
function dfs(root) {
    if (!root) return;
    let visited = new Set();
    let stack = [root];
    visited.add(root);
    let result = [root.val];
    while (stack.length) {
        let curr = stack.pop();
        for (let n of curr.neighbors) {
            if (!visited.has(n)) {
                stack.push(n);
                visited.add(n);
                result.push(n.val)
            }
        }
    }
}

//Recursion
function DepthFirstSearchInGraph(root) {
    if (!root) return [];
    let visited = new Set();
    visited.add(root);
    let result = [root.val];
    let dfs = (curr) => {
        for (let n of curr.neighbors) {
            if (!visited.has(n)) {
                visited.add(n);
                result.push(n.val)
                dfs(n)
            }
        }
    }
    dfs(root);
    return result;
}

// Recusrion

let dfs = (curr, visited, result) => {
    visited.add(curr);
    result.push(curr.val);
    for (let n of curr.neighbors) {
        if (!visited.has(n)) {
            dfs(n, visited, result)
        }
    }
}


function DepthFirstSearchInGraph1(graph,src) {
    let result = [];
    let visited = new Set();
    let dfs1 = (curr) => {
        visited.add(curr);
        result.push(curr)
        for (let n of graph[curr]) {
            if (!visited.has(n)) {
                dfs(n);
            }
        }
    }
    dfs1(src);
    return result;
}
const graph1 = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3, 4],
    3: [2],
    4:[2]

}
console.log(DepthFirstSearchInGraph1(graph1,0))
