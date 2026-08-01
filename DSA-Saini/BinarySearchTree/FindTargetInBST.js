class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


//Recursion
function searchBST(root, target) {
    if (root === null) return null;

    if (root.val === target) return root;

    if (target < root.val) {
        return searchBST(root.left, target);
    }

    return searchBST(root.right, target);
}

//Iteration-Recomended
function searchBST(root, target) {
    let current = root; 

    while (current !== null) {
        if (current.val === target) {
            return current;
        }

        if (target < current.val) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

    return null;
}