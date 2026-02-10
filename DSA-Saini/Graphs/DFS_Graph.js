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
            dfs(n,visited,result)
        }
    }
}