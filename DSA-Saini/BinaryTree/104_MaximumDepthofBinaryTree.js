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
 * @return {number}
 */

//Top-Down Approach
var maxDepth = function (root) {
    if (!root) return 0
    let max = 0
    function Traverse(curr, level) {
        if (curr == null) return
        if (level > max) max = level
        Traverse(curr.left, level + 1)
        Traverse(curr.right, level + 1)
    }
    Traverse(root, 0)
    return max + 1;
};
//Revision- TopDown
var maxDepth1 = function (root) {
    if(!root)return 0;

    let maxDepth = -Infinity;
    let traverse = (curr, depth) => {
        if (depth > maxDepth) maxDepth = depth;
        curr.left && traverse(curr.left, depth + 1);
        curr.right && traverse(curr.right, depth + 1);
    }
    traverse(root, 1);
    return maxDepth;
};
function maxDepth(root) {
    let maxDepth = -Infinity;
    let traverse = (curr, depth) => {
        if (curr == null) {
            if (depth > maxDepth) maxDepth = depth;
            return;
        }
        traverse(curr.left, depth + 1);
        traverse(curr.right, depth + 1);
    }
    traverse(root, 0);
    return maxDepth;
};

//Bottom-up Approach
var maxDepth2 = function (root) {

    let maxDepth = (curr) => {
        if (curr == null) return 0;
        let left = maxDepth(curr.left);
        let right = maxDepth(curr.right);
        return Math.max(left, right) + 1
    }

    return maxDepth(root);
}




//test cases
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

let root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));
console.log("Test Case 1 - Expected: 3, Got:", maxDepth(root1));
