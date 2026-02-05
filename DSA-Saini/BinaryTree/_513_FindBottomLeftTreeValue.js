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
//Optimized
var findBottomLeftValue = function (root) {
    let q = [root];
    let ans = root.val
    while (q.length>0) {
        let qLength = q.length;
        ans=q[0].val;
        for (let i = 0; i < qLength; i++) {
            let curr=q.shift();
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }
    }
    return ans;
};

var findBottomLeftValue = function (root) {
    let q = [root];
    let ans = [];
    while (q.length>0) {
        let levelArray = [];
        let qLength = q.length;
        for (let i = 0; i < qLength; i++) {
            let curr=q.shift();
            levelArray.push(curr.val);
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }
        // console.table([levelArray])
        ans.push(levelArray);
    }
    // console.log(ans);
    return ans[ans.length-1][0];
};