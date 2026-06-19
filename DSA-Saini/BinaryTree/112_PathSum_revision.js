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
 * @param {number} targetSum
 * @return {boolean}
 */
//Top Down
var hasPathSum = function (root, targetSum) {
    if (!root) return [];
    let isTarget = false;
    let traverse = (curr, target) => {
        // console.log(target)
        // if (target < curr.val) return; // This is wrong
        if (target == curr.val && !curr.left && !curr.right) {
            isTarget = true;
            return;
        }
        curr.left && traverse(curr.left, target - curr.val);
        curr.right && traverse(curr.right, target - curr.val);
    }
    traverse(root, targetSum);
    return isTarget;
};

//Bottom Up
var hasPathSum = function (root, targetSum) {
    if (!root) return [];
    let traverse = (curr, target) => {
        if (!curr) return false;
        if (target == curr.val && !curr.left && !curr.right) {
            return true;
        }
        return traverse(curr.left, target - curr.val) ||
               traverse(curr.right, target - curr.val);
    }
    return traverse(root, targetSum);
};

//Bottom- Up Approach- Revision
var hasPathSum = function (root, targetSum) {
    let traverse = (curr, sum) => {
        if (!curr) return false;
        let currSum = sum + curr.val;
        if (!curr.left && !curr.right && currSum == targetSum) return true;
        return traverse(curr.left, currSum) ||
            traverse(curr.right, currSum);
    }
    return traverse(root, 0);
};