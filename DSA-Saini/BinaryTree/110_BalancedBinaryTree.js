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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return root
    let ans = true
    let Traverse = (curr) => {
        if (curr == null) return 0
        let left = Traverse(curr.left);
        let right = Traverse(curr.right);
        if (Math.abs(left - right) > 1) {
            ans = ans && false //false- will also work
        }
        return 1 + Math.max(left, right)
    }
    Traverse(root)
    return ans
};