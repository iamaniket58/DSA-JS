/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//My Solution- if both pand q is greater than curr value then ans in right, if both less ands in left, if 1 bigger one smaller then this is the ans
var lowestCommonAncestor = function (root, p, q) {
    let ans = null;
    let traverse = (curr) => {
        if (!curr) return;
        if (curr.val == p.val || curr.val == q.val) {
            ans = curr;
            return
        }//COde will work without writing the above 2 if block
        else if (curr.val > p.val && curr.val > q.val) {
            traverse(curr.left)
        }
        else if (curr.val < p.val && curr.val < q.val) {
            traverse(curr.right)
        }
        else {
            ans = curr;
            return;
        }
    }
    traverse(root)
    return ans;

};

//Sirs Solution
var lowestCommonAncestor = function (root, p, q) {
    let traverse = (curr) => {
        if (curr.val > p.val && curr.val > q.val) {
            return traverse(curr.left)
        }
        else if (curr.val < p.val && curr.val < q.val) {
            return traverse(curr.right)
        }
        else {
            return curr
        }
    }
    return traverse(root)
}

//Beter way of writing the same solution
var lowestCommonAncestor = function (root, p, q) {
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    }
    else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    }
    else {
        return root
    }
}


//Test Cases
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Build BST
let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
console.log("Test 1:", lowestCommonAncestor(root, new TreeNode(3), new TreeNode(5)).val); // 6
