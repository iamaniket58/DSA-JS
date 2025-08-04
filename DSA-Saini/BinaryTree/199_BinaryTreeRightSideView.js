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

//Sirs Solution-This is Amazing
var rightSideView = function (root) {
    if (!root) return []
    //Better Solution with no extra space
    let q = [root];
    let ans = [];
    while (q.length > 0) {
        let qlength = q.length;
        for (let i = 0; i < qlength; i++) {
            let curr = q.shift();
            //push only 1st element
            if (i == 0) ans.push(curr.val)
            //Update Right first
            if (curr.right) q.push(curr.right)
            if (curr.left) q.push(curr.left)
        }
    }
    return ans;
}
//This is compelly my solution using Queue
var rightSideView = function (root) {
    if (!root) return []
    let q = [root];
    let ans = []
    while (q.length > 0) {
        let levelArr = [];
        let qlength = q.length;
        for (let i = 0; i < qlength; i++) {
            let curr = q.shift();
            levelArr.push(curr.val);
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }
        ans.push(levelArr)
    }
    let rightSideView = [];
    for (let x of ans) {
        rightSideView.push(x[x.length - 1])
    }
    return rightSideView
};