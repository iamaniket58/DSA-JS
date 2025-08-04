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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return []
    let q = [root];
    let ans = [];
    zlevel = 0
    while (q.length) {
        let levelArr = [];
        let qlength = q.length;
        for (let i = 0; i < qlength; i++) {
            let curr = q.shift();
            if (zlevel % 2 == 0) { //while pushing add from back
                levelArr.push(curr.val)
            }
            else { //while pushing add from front
                levelArr.unshift(curr.val)

            }
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
        }
        zlevel++
        ans.push(levelArr)
    }
    return ans
};