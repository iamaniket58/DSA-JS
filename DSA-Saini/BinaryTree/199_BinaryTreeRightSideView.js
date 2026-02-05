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
//Revision- Using recursion
var rightSideView = function (root) {
    let ans = [];
    let traverse = (curr, depth) => {
        if (!curr) return;
        if(ans[depth]==undefined)ans.push(curr.val)
        traverse(curr.right, depth + 1);
        traverse(curr.left, depth + 1);
    }
    traverse(root, 0)
    return ans;
};

//Sirs Solution-This is Amazing
var rightSideView = function (root) {
    if (!root) return []
    //Better Solution with no extra space
    let q = [root];
    let ans = [];
    while (q.length > 0) {
        let qlength = q.length;
        for (let i = 0; i < qlength; i++) {
            let curr = q.shift();
            //push only 1st element
            if (i == 0) ans.push(curr.val)
            //Update Right first
            if (curr.right) q.push(curr.right)
            if (curr.left) q.push(curr.left)
        }
    }
    return ans;
}

//Recursion
var rightSideView = function (root) {
    let ans = [];
    let traverse = (curr, level) => {
        if (curr == null) return;
        if (ans[level] == undefined) ans.push(curr.val);
        traverse(curr.right, level + 1);
        traverse(curr.left, level + 1);
    }
    traverse(root, 0);
    return ans;
};

//Revision
var rightSideView = function (root) {
    if (!root) return [];
    let q = [root];
    let ans = [];
    while (q.length) {
        let qlength = q.length
        let isleveltraversed = false;
        for (let i = 0; i < qlength; i++) {
            let curr = q.shift();
            if (!isleveltraversed) {
                ans.push(curr.val);
                isleveltraversed = true;
            }
            curr.right && q.push(curr.right);
            curr.left && q.push(curr.left);
        }
    }
    return ans;
};

//This is compelly my solution using Queue
var rightSideView = function (root) {
    if (!root) return []
    let q = [root];
    let ans = []
    while (q.length > 0) {
        let levelArr = [];
        let qlength = q.length;
        for (let i = 0; i < qlength; i++) {
            let curr = q.shift();
            levelArr.push(curr.val);
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }
        ans.push(levelArr)
    }
    let rightSideView = [];
    for (let x of ans) {
        rightSideView.push(x[x.length - 1])
    }
    return rightSideView
};