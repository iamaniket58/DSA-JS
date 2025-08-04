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

//Bottom-up Approach
var maxDepth = function (root) {

    let maxDepth = (curr) => {
        if (curr == null) return 0;
        let x = maxDepth(curr.left);
        let y = maxDepth(curr.right);
        return Math.max(x, y) + 1
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
