
//Iteration
var levelOrder = function (root) {
    let ans = [];
    let q = [root];
    while (q.length > 0) {
        let levelArr = [];
        let levelSize = q.length;
        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift();
            levelArr.push(curr.val);
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        ans.push(levelArr)

    }
    return ans
};

//Recursion
var levelOrder = function (root) {

    //Recursion
    let ans = [];
    function Traversal(curr, level) {
        if (curr == null) return;

        if (!ans[level]) ans[level] = [];
        ans[level].push(curr.val);

        Traversal(curr.left, level + 1)
        Traversal(curr.right, level + 1);
    }
    Traversal(root, 0)
    return ans
}

















//Test Cases
// Definition of TreeNode
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
let root = new TreeNode(3);
root.left = new TreeNode(9, new TreeNode(5), new TreeNode(8));
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

// Run the test
console.log("Level Order Traversal:", levelOrder(root));