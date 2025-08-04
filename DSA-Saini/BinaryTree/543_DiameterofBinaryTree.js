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
var diameterOfBinaryTree = function (root) {
    let maxDiamater = 0
    let Traverse = (curr) => {
        if (curr == null) return 0;
        let left = Traverse(curr.left)
        let right = Traverse(curr.right)
        let diamater = left + right;
        if (diamater > maxDiamater) {
            maxDiamater = diamater
        }
        return 1 + Math.max(left, right)

    }
    Traverse(root);
    return maxDiamater;
};