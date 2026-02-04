/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

//Recursion
var isSameTree = function (p, q) {
    if (!p && !q) return true
    if (!p || !q) return false
    return p.val == q.val &&
        isSameTree(p.left, q.left) &&
        isSameTree(p.right, q.right)
}

//Iteration
var isSameTree = function (p, q) {

    let q1 = [p];
    let q2 = [q];
    while (q1.length && q2.length) {
        let c1 = q1.shift();
        let c2 = q2.shift();
        if (!c1 && !c2) continue
        if (!c1 || !c2) return false
        if (c1.val != c2.val) return false
        q1.push(c1.left)
        q1.push(c1.right)
        q2.push(c2.left)
        q2.push(c2.right)
    }
    if (q1.length == 0 && q2.length == 0) {
        return true
    }
    return false
    // return q1.length == 0 && q2.length == 0;

};
//Revision
var isSameTree = function (p, q) {
    let queue = [p, q];
    while(queue.length){
        let c1=queue.shift();
        let c2=queue.shift();
        if(c1==null && c2==null)continue;
        if(c1==null || c2==null)return false;

        if(c1.val !=c2.val)return false;

        queue.push(c1.left,c2.left,c1.right,c2.right);
    }
    return true;
};

//using 1 queue
var isSameTree = function (p, q) {
    let queue = [p, q];
    while(queue.length){
        let c1=queue.shift();
        let c2=queue.shift();
        if(c1==null && c2==null)continue;
        if(c1==null || c2==null)return false;

        if(c1.val !=c2.val)return false;

        queue.push(c1.left);
        queue.push(c2.left);
        queue.push(c1.right);
        queue.push(c2.right);
    }
    return true;
};


// TreeNode constructor
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
let t1a = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let t1b = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log("Test Case 1:", isSameTree(t1a, t1b));