/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = val;
 *     this.left = left;
 *     this.right = right;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {

    let nodes = [];

    function dfs(node, row, col) {
        if (!node) return;

        nodes.push([row, col, node.val]);

        dfs(node.left, row + 1, col - 1);
        dfs(node.right, row + 1, col + 1);
    }

    dfs(root, 0, 0);

    nodes.sort((a, b) => {

        if (a[1] !== b[1])
            return a[1] - b[1];

        if (a[0] !== b[0])
            return a[0] - b[0];

        return a[2] - b[2];
    });

    let ans = [];

    let prevCol = null;

    for (let [row, col, val] of nodes) {

        if (col !== prevCol) {
            ans.push([]);
            prevCol = col;
        }

        ans[ans.length - 1].push(val);
    }

    return ans;
};
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(10);

root.right.left = new TreeNode(9);
root.right.right = new TreeNode(10);

root.left.left.right = new TreeNode(5);
root.left.left.right.right = new TreeNode(6);
console.log(verticalTraversal(root));
//Level Order traversal, Can be used in leetcode Test Case: [1,2,3,4,10,9,10,null,5,null,null,null,null,null,null,null,6]