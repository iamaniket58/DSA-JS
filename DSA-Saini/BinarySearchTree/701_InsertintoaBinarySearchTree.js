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

//My method
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
//Another way- Solve Return statement Mystery 
var insertIntoBST2 = function (root, val) {
    if (!root) return new TreeNode(val)
    let traverse = (curr) => {
        if (!curr) return new TreeNode(val)
        if (curr.val > val) {
            curr.left = traverse(curr.left)
        }
        if (curr.val < val) {
            curr.right = traverse(curr.right)
        }
        return curr
    }
    traverse(root)
    return root
};

//Sirs Method
var insertIntoBST3 = function (root, val) {
    if (!root) return new TreeNode(val)
    if (root.val > val) {
        root.left = insertIntoBST(root.left, val)
    }
    else {
        root.right = insertIntoBST(root.right, val)
    }
    return root
}














//Test Cases
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function inorderTraversal(root) {
    if (!root) return [];
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
}

let root = new TreeNode(4,
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(7, new TreeNode(6))
);

insertIntoBST(root, 5);
console.log(inorderTraversal(root)); // [1, 2, 3, 4, 5, 7]
