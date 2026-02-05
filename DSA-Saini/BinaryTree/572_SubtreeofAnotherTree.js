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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
//Using Hashing
var isSubtree = function (root, subRoot) {
    let hashRoot = serialize(root)
    let hashSubRoot = serialize(subRoot)
    // console.log(hashRoot)
    // console.log(hashSubRoot)
    return (hashRoot.includes(hashSubRoot))
}

let serialize = (curr) => {
    let hash = "";
    let Traverse = (curr) => {

        if (curr == null) {
            hash += "-#"
            return;
        }
        hash = hash + "-" + curr.val
        Traverse(curr.left)
        Traverse(curr.right)
    }
    Traverse(curr)
    return hash
}


//using Bruite Force
var isSubtree = function (root, subRoot) {
    let q = [root];
    while (q.length) {
        let curr = q.shift();
        // if(curr==subRoot)return true
        let isSame = (curr1, subRoot) => {
            if (!curr1 && !subRoot) return true;
            if (!curr1 || !subRoot) return false;
            return curr1.val == subRoot.val &&
                isSame(curr1.left, subRoot.left) &&
                isSame(curr1.right, subRoot.right)
        }
        let res = isSame(curr, subRoot)
        if (res) return true
        if (curr.left) q.push(curr.left)
        if (curr.right) q.push(curr.right)
    }
    return false
};
//Chat GPT
var isSubtree = function(root, subRoot) {
    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) ||
           isSubtree(root.right, subRoot);
};

function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) &&
           isSameTree(p.right, q.right);
}

var isSubtree = function (root, subRoot) {
    let ans=false;
    let traverse = (curr) => {
        if (curr == null) return;
        if (curr.val == subRoot.val) {
            let treecheck = (tree1, tree2) => {
                if(!tree1 && !tree2)return true;
                if(!tree1 || !tree2)return false;
                return tree1.val == tree2.val &&
                    treecheck(tree1.left, tree2.left) &&
                    treecheck(tree1.right, tree2.right)
            }
            if(treecheck(curr, subRoot))ans=true
        }
        traverse(curr.left);
        traverse(curr.right);
    }
    traverse(root);
    return ans;
};


//Test cases
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Test 1: subRoot is a valid subtree
let root1 = new TreeNode(3,
    new TreeNode(4, new TreeNode(1), new TreeNode(2)),
    new TreeNode(5)
);
let subRoot1 = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log("Test 1:", isSubtree(root1, subRoot1)); // true

// Test 2: subRoot is not a subtree
let root2 = new TreeNode(3,
    new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))),
    new TreeNode(5)
);
let subRoot2 = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log("Test 2:", isSubtree(root2, subRoot2)); // false

// Test 3: subRoot is exactly the same as root
let root3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let subRoot3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log("Test 3:", isSubtree(root3, subRoot3)); // true

// Test 4: subRoot is null
let root4 = new TreeNode(1);
console.log("Test 4:", isSubtree(root4, null)); // false

// Test 5: root is null
console.log("Test 5:", isSubtree(null, new TreeNode(1))); // false

// Test 6: both null
console.log("Test 6:", isSubtree(null, null)); // false (by problem definition)
