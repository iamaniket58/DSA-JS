/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let ans = 0;
    let traverse = (curr) => {
        if (curr == null) return false;

        let left = traverse(curr.left);
        let right = traverse(curr.right);

        if (left && right && ans==0) ans = curr.val;
        if ((left || right) && (curr.val == p || curr.val == q) && ans==0) ans = curr.val;

        if ((curr.val == p || curr.val == q) || left || right) return true;
        else return false;
    }
    traverse(root);
    return ans;
};

// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Create nodes
let root = new TreeNode(3);

root.left = new TreeNode(5);
root.right = new TreeNode(1);

root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);

root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

// p and q
let p = root.left;               // Node with value 5
let q = root.left.right.right;   // Node with value 4
console.log(lowestCommonAncestor(root,5,1));