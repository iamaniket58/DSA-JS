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
var goodNodes = function (root) {
    let count = 0;
    let traverse = (curr, max) => {
        if (!curr) return;
        if (curr.val >= max) { //If will work at both the places
            count++
        }
        traverse(curr.left, max > curr.val ? max : curr.val)
        traverse(curr.right, max > curr.val ? max : curr.val)
        // if (curr.val >= max) {
        //     count++
        // }
    }
    traverse(root, -Infinity)
    return count
};

//Slightly Modified-
var goodNodes = function (root) {
    let count = 0;
    let traverse = (curr, max) => {
        if (!curr) return;
        if (curr.val >= max) { //If will work at both the places
            count++
        }
        let currMax=Math.max(max,curr.val)
        traverse(curr.left,currMax)
        traverse(curr.right, currMax)
        // if (curr.val >= max) {
        //     count++
        // }
    }
    traverse(root, -Infinity)
    return count
};