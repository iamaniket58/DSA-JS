var bfs = function (root) {
    if (!root) return [];

    let queue = [root];
    let visited = new Set([root]);
    let result = [];

    while (queue.length > 0) {
        let node = queue.shift();
        result.push(node.val);

        for (let neighbor of node.neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return result;
};

var dfsIterative = function (root) {
    if (!root) return [];

    let stack = [root];
    let visited = new Set();
    let result = [];

    while (stack.length > 0) {
        let node = stack.pop();

        if (!visited.has(node)) {
            visited.add(node);
            result.push(node.val);

            // Push neighbors in reverse if you want them in natural order
            for (let neighbor of node.neighbors.reverse()) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }

    return result;
};

var dfsRecursive = function (root, visited = new Set(), result = []) {
    if (!root || visited.has(root)) return result;

    visited.add(root);
    result.push(root.val);

    for (let neighbor of root.neighbors) {
        dfsRecursive(neighbor, visited, result);
    }

    return result;
};


//----------------------------------
class Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

// Create nodes
const node0 = new Node(0);
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

// Connect neighbors (undirected graph)
node0.neighbors = [node1, node2];
node1.neighbors = [node0, node3];
node2.neighbors = [node0, node4];
node3.neighbors = [node1];
node4.neighbors = [node2];
dfs(node0);