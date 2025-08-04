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

//using Sirs Method- Using low and high limit
var isValidBST = function (root) {
    //Using Soln
    let traverse = (curr, low, high) => { //lowlimit,higherlimit
        if (!curr) return true;

        if (low != null && curr.val <= low) return false
        if (high != null && curr.val >= high) return false

        let isleft = traverse(curr.left, low, curr.val)
        let isRight = traverse(curr.right, curr.val, high)

        return isleft && isRight
    }
    return traverse(root)
}

//Uisng only 1 Function
var isValidBST = function (curr, low = null, high = null) {

    if (!curr) return true;

    if (low != null && curr.val <= low) return false
    if (high != null && curr.val >= high) return false

    let isleft = isValidBST(curr.left, low, curr.val)
    let isRight = isValidBST(curr.right, curr.val, high)

    return isleft && isRight

}

// My Solution- InOrder Traversal will alwys return the sorted array in case of BST
var isValidBST = function (root) {
    let ans = []
    let traverse = (curr) => {
        if (!curr) return
        traverse(curr.left)
        ans.push(curr.val)
        traverse(curr.right)
    }
    traverse(root)
    for (let i = 1; i < ans.length; i++) {
        if (ans[i] <= ans[i - 1]) {
            return false
        }
    }
    return true
};