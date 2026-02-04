/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return root

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left)
    invertTree(root.right)
    return root;
};

var invertTree = function (root) {
    let traverse = (curr) => {
        if (!curr) return;
        let temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;
        traverse(curr.left);
        traverse(curr.right);
    }
    traverse(root);
    return root;
};

//Solve with Iterative when revision
var invertTree1 = function (root) {
    if (!root) return root
    let q = [root];
    while (q.length > 0) {
        let curr = q.shift();
        let temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;
        curr.left && q.push(curr.left)
        curr.right && q.push(curr.right)
    }
    return root;
};

    if (!root) return root
    let q = [root];
    while (q.length > 0) {
        let curr = q.shift();
        let temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;
        curr.left && q.push(curr.left)
        curr.right && q.push(curr.right)
    }
    return root;


//Test cases

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
function printTree(root) {
    if (!root) return console.log("Empty Tree");

    let queue = [root];
    let result = [];

    while (queue.length > 0) {
        let curr = queue.shift();
        if (curr) {
            result.push(curr.val);
            queue.push(curr.left);
            queue.push(curr.right);
        } else {
            result.push(null);
        }
    }

    // Trim trailing nulls
    while (result[result.length - 1] === null) result.pop();
    console.log(result);
}
let root1 = new TreeNode(4);
root1.left = new TreeNode(2, new TreeNode(1), new TreeNode(3));
root1.right = new TreeNode(7, new TreeNode(6), new TreeNode(9));

console.log("Original Tree:");
printTree(root1);

invertTree1(root1);

console.log("Inverted Tree:");
printTree(root1);