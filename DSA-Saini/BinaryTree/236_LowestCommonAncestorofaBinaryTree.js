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

//This is amazing
var lowestCommonAncestor = function (root, p, q) {
    let lca = null;
    let traverse = (curr) => {
        if (!curr) return 0
        let count = 0;
        let left = traverse(curr.left)
        let right = traverse(curr.right)
        if (curr.val == p.val || curr.val == q.val) {
            count++;
        }
        if ((count + left + right) == 2 && lca == null) { //lca==null- Update only once when lca doesn't exists
            lca = curr;
        }
        return count + left + right

    }
    traverse(root)
    return lca
};
//This Solution is developed by me during practise
var lowestCommonAncestor = function (root, p, q) {
    let ans = null
    let traverse = (curr) => {
        if (!curr) return false
        let left = traverse(curr.left)
        let right = traverse(curr.right)
        isCurrMatch = curr.val == p.val || curr.val == q.val
        if (left && right) {
            ans = curr
            return
        }
        if ((left || right) && isCurrMatch) {
            ans = curr
            return
        }

        return left || right || isCurrMatch
    }
    traverse(root)
    return ans;
}

//Practise
var lowestCommonAncestor = function (root, p, q) {
    let ans = null;
    let traverse = (curr) => {
        if (curr == null) return false;
        let left = traverse(curr.left);
        let right = traverse(curr.right);

        if (left && right && !ans) ans = curr;
        if ((left || right) && (curr == p || curr == q) && !ans) ans = curr;

        if ((curr == p || curr == q) || left || right) return true;
        else return false;
    }
    traverse(root);
    return ans;
};
// ❌ bReaking for scenario ii in ques- DIdint work 
var lowestCommonAncestor2 = function (root, p, q) {
    let lca = null;
    let traverse = (curr) => {
        if (!curr) return 0
        if (curr.val == p.val || curr == q.val) return 1
        let left = traverse(curr.left)
        let right = traverse(curr.right)
        if (left && right) lca = curr
        return left || right

    }
    traverse(root)
    return lca
};
//❌ IDK why it didn't work- will have to check it later
var lowestCommonAncestor1 = function (root, p, q) {
    let isPavailable = false;
    let isQavailable = false;
    let lca = null;
    let traverse = (root) => {
        if (!root) return

        if (root.val == p) isPavailable = true
        if (root.val == q) isQavailable = true

        traverse(root.left)
        traverse(root.right)

        if (isPavailable && isQavailable) lca = root
    }
    traverse(root)
    return lca
};

//Test cases
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);
function findNode(root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    return findNode(root.left, val) || findNode(root.right, val);
}
// Test 1: LCA of 5 and 1 is 3
let p1 = findNode(root, 5);
let q1 = findNode(root, 4);
console.log("Test 1:", lowestCommonAncestor(root, p1, q1).val); // 3