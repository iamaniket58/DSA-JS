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
 * @return {string[]}
 */
//This was not part of Namste DSA- My Solution
var binaryTreePaths = function (root) {
    let result = [];
    let backtrack = (path, curr) => {
        if (curr == null) return;
        if (curr.left == null && curr.right == null) {
            path.push(curr.val)
            result.push(path.join("->"));
            path.pop();
        }
        path.push(curr.val);
        backtrack(path, curr.left);
        backtrack(path, curr.right);
        path.pop();

    }
    backtrack([],root);
    return result;
};