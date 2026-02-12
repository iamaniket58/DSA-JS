
//Recursion
var cloneGraph = function (node) {
    if (!node) return null;
    let map = new Map();
    let clonedGraph = new _Node(node.val);
    map.set(node, clonedGraph)
    let traverse = (curr) => {
        for (let n of curr.neighbors) {
            if (!map.has(n)) {
                map.set(n, new _Node(n.val))
                traverse(n)
            }
            map.get(curr).neighbors.push(map.get(n))
        }
    }
    traverse(node)
    return clonedGraph;
};
//Recursion
var cloneGraph = function (node) {
    if (!node) return null;
    let map = new Map();

    let traverse = (curr) => {
        if (!map.has(curr)) {
            map.set(curr, new _Node(curr.val));
        }
        for (let n of curr.neighbors) {
            if (!map.has(n)) {
                map.set(n, new _Node(n.val))
                traverse(n)
            }
            map.get(curr).neighbors.push(map.get(n))
        }
        return map.get(curr);
    }
    return traverse(node)

};