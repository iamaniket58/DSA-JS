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
 * @param {number} val
 * @return {TreeNode}
 */
//My SOlution
//Top Down- Simple Solution
var searchBST = function (root, val) {
    let node = null
    let traverse = (curr) => {
        if (!curr) return;
        if (curr.val == val) {
            node = curr
        }
        if (curr.val > val) traverse(curr.left)
        if (curr.val < val) traverse(curr.right)
    }
    traverse(root)
    return node
};
//If you do not want not call further after found answer
var searchBST = function (root, val) {
    let node = null
    let traverse = (curr) => {
        if (!curr) return;
        if (curr.val == val) {
            node = curr
        }
        else {
            if (curr.val > val) traverse(curr.left)
            if (curr.val < val) traverse(curr.right)
        }

    }
    traverse(root)
    return node
};


//Think of a Botton-Up Approach
var searchBST = function (root, val) {
    //Bottom-Up Approach
    let node = null;
    let traversal = (curr) => {
        if (!curr) return null;
        if (curr.val == val) node = curr

        let left = traversal(curr.left)
        let right = traversal(curr.right)

        return left || right
    }
    traversal(root)
    return node
}

//Smallest Solution
var sreachBST=function(root,val){
    if(!root || root.val==val)return root
    return root.val>val?sreachBST(root.left,val):searchBST(root.right,val)
}