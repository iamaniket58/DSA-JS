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
 * @return {number[]}
 */
//Using Recursion
var inorderTraversal1 = function (root) {
    let ans = [];
    function traversal(curr) {
        if (curr == null) return;
        traversal(curr.left)
        ans.push(curr.val)
        traversal(curr.right)
    }
    traversal(root)
    return ans;
};

//using Iteration
var inorderTraversal = function (root) {
    let ans = [];
    let curr = root;
    let stack=[]
    while (curr != null || stack.length > 0) {
        while (curr != null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        ans.push(curr.val);
        curr = curr.right;
    }
    return ans
}

//Iteration- My Solution- Revision
var inorderTraversal = function (root) {
    if (!root) return [];
    let arr = [];
    let stack = [root];
    let curr = root.left;
    while (stack.length>0 || curr!=null) {
        while (curr != null) {
            stack.push(curr);
            curr = curr.left
        }
        let element = stack.pop();
        arr.push(element.val);
        curr = element.right;
    }
    return arr;
};

//Test cases
// Define the TreeNode class
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log("Inorder Traversal:", inorderTraversal(root));