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
 * @param {number} targetSum
 * @return {boolean}
 */

//Sirs Solution- Bottom Up Approach
var hasPathSum = function (root, targetSum) {
    //BottomUpApproach
    if (!root) return false;
    let traverse = (curr, targetSum) => {
        if (!curr) return false
        if (!curr.left && !curr.right) {
            return curr.val == targetSum
        }
        let x = traverse(curr.left, targetSum - curr.val);
        let y = traverse(curr.right, targetSum - curr.val);
        return x || y
    }
    return traverse(root, targetSum)
}

//Bottom Up Approach-More Cleaner
var hasPathSum = function (root, targetSum) {
    if (!root) return false
    if (!root.left && !root.right) {
        return root.val == targetSum
    }
    return hasPathSum(root.left, targetSum - root.val) ||
        hasPathSum(root.right, targetSum - root.val)
}


//This is sirs solution to Top-Down Approach-Similar to mine but writing style is bit different
var hasPathSum = function (root, targetSum) {
    if (!root) return false
    //Top Down-Sirs Solution
    let ans = false;
    let trverse = (curr, sum) => {
        let newSum = sum + curr.val
        if (!curr.left && !curr.right) {
            if (curr.val + sum == targetSum) {
                ans = ans || true
            }
        }
        curr.left && trverse(curr.left, newSum)
        curr.right && trverse(curr.right, newSum)
    }
    trverse(root, 0);
    return ans
}


//This is my Solution using Top Down Approach
var hasPathSum = function (root, targetSum) {
    let isSumPresent = false;
    let traversal = (curr, sum) => {
        if (curr == null) return;
        if (curr.left == null && curr.right == null) {
            if (sum + curr.val == targetSum) {
                isSumPresent = true;
            }
        }
        traversal(curr.left, sum + curr.val)
        traversal(curr.right, sum + curr.val)
    }
    traversal(root, 0)
    return isSumPresent
}



//This is compeltely my Solution
var hasPathSum = function (root, targetSum) {
    let sum = 0;
    let fn = 0
    let Traverse = (curr) => {
        if (curr == null) return 0;
        sum += curr.val;
        if (curr.left == null && curr.right == null && sum == targetSum) {//Check Only for leaf Node
            fn = 1
        }
        Traverse(curr.left)
        Traverse(curr.right)
        sum = sum - curr.val
    }
    Traverse(root)
    return fn == 1 ? true : false
};