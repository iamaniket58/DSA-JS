//Question is my Find
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
//This is also my code
var minDepth = function (root) {
    if(!root)return 0;
    let min = Infinity;
    let traverse = (curr, depth) => {
        if (curr == null) return 0;
        let left = traverse(curr.left, depth + 1);
        let right = traverse(curr.right, depth + 1);
        if (left == 0 && right == 0) min = Math.min(min, depth);
    }
    traverse(root,1);
    return min;
};

//My Logic
var minDepth = function (root) {
    if (!root) return 0;
    let min = Infinity;
    let traverse = (curr) => {
        if (curr == null) return 0;
        let left = traverse(curr.left);
        let right = traverse(curr.right);
        if(left==0)return right+1;
        if(right==0)return left+1;
        return Math.min(left ,right )+1;
    }
    return traverse(root);
};

var minDepth = function (root) {
    if (!root) return 0;
    let min = Infinity;
    let traverse = (curr) => {
        if (curr == null) return 0;
        let left = traverse(curr.left);
        let right = traverse(curr.right);
        if(left==0 || right==0) return Math.max(left,right)+1;
        return Math.min(left ,right )+1;
    }
    return traverse(root);
};