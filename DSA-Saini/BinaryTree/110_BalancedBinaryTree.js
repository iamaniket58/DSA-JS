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


//Optimized Version- Chat GPT
var isBalanced = function(root) {
    function height(node) {
        if (!node) return 0;

        let left = height(node.left);
        if (left === -1) return -1;

        let right = height(node.right);
        if (right === -1) return -1;

        if (Math.abs(left - right) > 1) return -1;

        return 1 + Math.max(left, right);
    }

    return height(root) !== -1;
};
