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
var verticalTraversal = function (root) {
    let q = [[root, 0, 0]];
    let ans = [];
    let obj = {};
    while (q.length > 0) {
        let [curr, hd, level] = q.shift();
        if (!obj[hd]) obj[hd] = [];

        obj[hd].push([curr.val, level]);

        curr.left && q.push([curr.left, hd - 1, level + 1]);
        curr.right && q.push([curr.right, hd + 1, level + 1]);
    }

    for (let key of Object.keys(obj).sort((a, b) => a - b)) {
        obj[key].sort((a,b)=>{
            if(a[1]==b[1])return a[0]-b[0];
            return a[1]-b[1]
        })
        ans.push(obj[key].map(x=>x[0]));
    }
    return ans;
};