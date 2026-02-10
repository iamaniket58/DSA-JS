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
//Using Queue
var cloneGraph = function(root) {
    if(!root)return null;
    let q=[root];
    let visited=new Map();
    let clonedGraph=new Node(root.val);
    visited.set(root,clonedGraph);

    while(q.length>0){
        let curr=q.shift();
        for(let n of curr.neighbors){
            if(!visited.has(n)){
                q.push(n);
                visited.set(n,new Node(n.val))
            }
            let cloneCurr=visited.get(curr);
            cloneCurr.neighbors.push(visited.get(n));
        }
    }
    return clonedGraph;
};

//Using Stack
var cloneGraph = function(root) {
    if(!root)return null;
    let stack=[root];
    let visited=new Map();
    let clonedGraph=new Node(root.val);
    visited.set(root,clonedGraph);

    while(stack.length>0){
        let curr=stack.pop();
        for(let n of curr.neighbors){
            if(!visited.has(n)){
                stack.push(n);
                visited.set(n,new Node(n.val))
            }
            let cloneCurr=visited.get(curr);
            cloneCurr.neighbors.push(visited.get(n));
        }
    }
    return clonedGraph;
};

//Revision
var cloneGraph = function (node) {
    if (!node) return null;
    let map = new Map();
    let clonedGraph = new _Node(node.val);
    map.set(node, clonedGraph);
    let q = [node];
    while (q.length) {
        let curr = q.shift();
        for (let n of curr.neighbors) {
            if (!map.has(n)) {
                q.push(n);
                map.set(n, new _Node(n.val));

            }
            map.get(curr).neighbors.push(map.get(n))
        }
    }
    return clonedGraph;
};

