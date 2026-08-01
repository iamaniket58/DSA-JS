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
 * @param {number} val
 * @return {TreeNode}
 */

var insertIntoBST = function (root, val) {
    let traverse = (curr) => {
        if (!curr) return new TreeNode(val);
        if (curr.val > val) {
            curr.left = traverse(curr.left);
        }
        else {
            curr.right = traverse(curr.right);
        }
        return curr;
    }
    return traverse(root);
};

var insertIntoBST = function (root, val) {
    if(!root)return new TreeNode(val);
    let traverse = (curr, parent,lr) => {
        if (!curr){
            if(lr==0)parent.left=new TreeNode(val);
            else parent.right=new TreeNode(val);
            return;
        }
        if (curr.val > val) {
            traverse(curr.left, curr,0);
        }
        else {
            traverse(curr.right, curr,1);
        }
    }
    traverse(root, null);
    return root;
};

var insertIntoBST = function (root, val) {
    if (!root) return new TreeNode(val)
    let traverse = (curr) => {
        if (!curr) return
        if (curr.val > val) {
            if (curr.left == null) {
                curr.left = new TreeNode(val);
                return;
            }
            traverse(curr.left)
        }
        if (curr.val < val) {
            if (curr.right == null) {
                curr.right = new TreeNode(val);
                return;
            }
            traverse(curr.right)
        }
    }
    traverse(root)
    return root
};