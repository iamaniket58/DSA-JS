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
//using Recursion
var preorderTraversal = function (root) {
    let arr = [];
    function traversal(curr) {
        if (curr == null) return;
        arr.push(curr.val)
        traversal(curr.left)
        traversal(curr.right)
    }
    traversal(root)
    return arr;
};

var preorderTraversal = function (root) {
    if(!root)return [];
    
    let array = [];
    let traversal = (curr) => {
        array.push(curr.val);
        curr.left && traversal(curr.left);
        curr.right && traversal(curr.right);
    }
    traversal(root);
    return array;
};

//Using Iteration
var preorderTraversal1 = function (root) {
    console.log(root)
    //if(root==null)return []
    if (!root) return []
    let ans = [];
    let stack = [root];
    while (stack.length > 0) {
        let curr = stack.pop();
        ans.push(curr.val);
        if (curr.right) stack.push(curr.right);
        if (curr.left) stack.push(curr.left);
    }
    return ans
}

//Test Cases
// function TreeNode(val, left = null, right = null) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
// }
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


// Build the tree
let root = new TreeNode(10,
    new TreeNode(5,
        new TreeNode(3,
            new TreeNode(1)
        ),
        new TreeNode(7)
    ),
    new TreeNode(15,
        new TreeNode(13, null, new TreeNode(14)),
        new TreeNode(17)
    )
);
let tr = new TreeNode(1, 
    new TreeNode(2, new TreeNode(4), new TreeNode(5, new TreeNode(6), new TreeNode(7))), 
    new TreeNode(3,null,new TreeNode(8,new TreeNode(9))))

console.log(preorderTraversal(root)); 
