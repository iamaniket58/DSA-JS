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
 * @param {number} k
 * @return {number}
 */
//Using InOrder Traversal
var kthSmallest1 = function (root, k) {
    let ans = [];
    let traversal = (curr) => {
        if (!curr) return;
        traversal(curr.left)
        ans.push(curr.val)
        traversal(curr.right)
    }
    traversal(root)
    return ans[k - 1]
};

//Optimized
var kthSmallest2 = function (root, k) {

    let ans = null;
    let traversal = (curr) => {
        if (!curr) return;
        traversal(curr.left)
        k = k - 1;
        if (k == 0) ans = curr.val
        traversal(curr.right)
    }
    traversal(root)
    return ans;
}

//Further Optimized- stop further loop- Early Exit
var kthSmallest = function (root, k) {
    let ans = null;
    let traversal = (curr) => {
        if (!curr) return
        ans == null && traversal(curr.left)
        k = k - 1;
        if (k == 0) ans = curr.val
        ans == null && traversal(curr.right)
    }
    traversal(root)
    return ans
}
//Same
var kthSmallest = function (root, k) {
    let ans = null;
    
    let traversal = (curr) => {
        if (!curr || ans!=null) return
        traversal(curr.left)
        k = k - 1;
        if (k == 0) ans = curr.val
        traversal(curr.right)
    }
    traversal(root)
    return ans
}

//Early Exit Solution
var kthSmallest = function (root, k) {
    let traverse = (curr) => {
        if (!curr) return null;
        let l = traverse(curr.left);
        if (l != null) return l
        k = k - 1
        if (k == 0) return curr.val;
        let r = traverse(curr.right);
        if (r != null) return r;
    }
    return traverse(root);

};

//Iterative Solution
var kthSmallest = function (root, k) {
    let curr = root;
    let stack = [];
    while (curr || stack.length > 0) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        let top = stack.pop();
        k--;
        if (k == 0) return top.val;
        curr = top.right;
    }
};


//Test Cases
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Build tree: [3,1,4,null,2]
let root = new TreeNode(3,
    new TreeNode(1, null, new TreeNode(2)),
    new TreeNode(4)
);
console.log(kthSmallest(root, 1)); // Expected Output: 1
