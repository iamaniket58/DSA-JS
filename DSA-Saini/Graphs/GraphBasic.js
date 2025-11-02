/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var bfs = function (root) {
    if (!root) return [];
    let q = [root];
    let visited = new Set();
    let result = [root.val];
    visited.add(root);

    while (q.length > 0) {
        let curr = q.shift();
        for (let n of curr.neighbors) {
            if (!visited.has(n)) {
                visited.add(n);
                q.push(n);
                result.push(n.val)
            }
        }
    }
    console.log("Visited", visited);
    console.log("Result", result);
};
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
bfs(node0);
