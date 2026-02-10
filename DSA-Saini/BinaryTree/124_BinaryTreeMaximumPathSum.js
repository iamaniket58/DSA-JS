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
var maxPathSum = function (root) {
    let max = -Infinity
    let traverse = (curr) => {
        if (!curr) return 0;
        let left = Math.max(0, traverse(curr.left))
        let right = Math.max(0, traverse(curr.right))
        if (left + right + curr.val > max) {
            max = left + right + curr.val
        }
        return Math.max(left, right) + curr.val
    }
    traverse(root)
    return max
};
//Revision- This is my solution
var maxPathSum = function (root) {
    let max = -Infinity;
    let traverse = (curr) => {
        if (!curr) return 0;
        let left = traverse(curr.left);
        if (left < 0) left = 0;
        let right = traverse(curr.right);
        if (right < 0) right = 0;
        if ((left + right + curr.val) > max) {
            max = (left + right + curr.val)
        }
        return left > right ? left + curr.val : right + curr.val;
    }
    traverse(root);
    return max;
};

//My Solution while Revision
var maxPathSum = function (root) {
    let maxSum = -Infinity;
    let traverse = (curr) => {
        if (!curr) return 0;
        let left = traverse(curr.left);
        let right = traverse(curr.right);
        let currSum = left + right + curr.val;
        if (currSum > maxSum) {
            maxSum = currSum;
        }
        //return Math.max(left, right) + curr.val > 0 ? Math.max(left, right) + curr.val : 0
        return Math.max(0, Math.max(left, right) + curr.val)

    }
    traverse(root);
    return maxSum
}

//Test Cases
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Construct the tree for Example 2
let root = new TreeNode(-10);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// Run your maxPathSum function
console.log(maxPathSum(root));  // Expected output: 42
