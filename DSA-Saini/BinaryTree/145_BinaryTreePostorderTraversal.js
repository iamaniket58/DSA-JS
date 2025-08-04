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
var postorderTraversal = function (root) {
    let ans = [];
    function traversal(curr) {
        if (curr == null) return;
        traversal(curr.left)
        traversal(curr.right)
        ans.push(curr.val)
    }
    traversal(root)
    return ans
};

//Using Iteration- 2 Stack
var postorderTraversal = function (root) {
    if (root == null) return []
    let ans = [];
    let s1 = [root];
    let s2 = [];
    while (s1.length > 0) {
        let curr = s1.pop();
        s2.push(curr.val)
        if (curr.left) s1.push(curr.left);
        if (curr.right) s1.push(curr.right);
    }
    //Stored Answer in reverse Order in S2
    while (s2.length > 0) {
        ans.push(s2.pop())
    }
    return ans;
}

//Using 1 stack
var postorderTraversal = function (root) {

    let ans = [];
    let stack = [];
    let curr = root;
    let lastVisited = [];
    while (curr != null || stack.length > 0) {
        while (curr != null) {
            stack.push(curr);
            curr = curr.left;
        }
        let peek = stack[stack.length - 1];
        if (peek.right && peek.right != lastVisited) {
            curr = peek.right;
        }
        else {
            ans.push(peek.val);
            lastVisited = stack.pop();
        }
    }
    return ans;
}