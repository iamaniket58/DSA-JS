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
var isSymmetric = function (root) {
    function isMirror(left, right) {
        if (!left && !right) { //If both are null then its symmetry
            return true
        }
        if (!left || !right) { //If any one is null then its not Symmetry
            return false;
        }
        return left.val == right.val &&
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
    }
    return isMirror(root.left, root.right)

};


var isSymmetric = function (root) {
    //Using iteration

    let q = [root.left, root.right];
    while (q.length > 0) {
        let pair1 = q.shift();
        let pair2 = q.shift();
        //null condition checking
        if (!pair1 && !pair2) continue;
        if (!pair1 || !pair2) return false

        if (pair1.val != pair2.val) return false;

        q.push(pair1.left, pair2.right);
        q.push(pair1.right, pair2.left)
    }
    return true

};