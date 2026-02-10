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
var balanceBST = function (root) {
    let inorder = [];
    let traversal = (curr) => {
        if (!curr) return;
        traversal(curr.left);
        inorder.push(curr.val);
        traversal(curr.right);
    }
    traversal(root);
    console.log(inorder)
    let balanced = (start, end) => {
        if (start > end) return null;
        // if (start == end) return new TreeNode(inorder[start]);
        
        let mid = Math.floor(start + (end - start) / 2);
        let node = new TreeNode(inorder[mid]);

        node.left = balanced(start, mid - 1);
        node.right = balanced(mid + 1, end);
        return node;

    }
    return balanced(0, inorder.length - 1);
};