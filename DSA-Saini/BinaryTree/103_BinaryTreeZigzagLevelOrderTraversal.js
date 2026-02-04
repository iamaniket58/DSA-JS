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
 * @return {number[][]}
 */
//Iterative
var zigzagLevelOrder = function (root) {
    if (!root) return []
    let q = [root];
    let ans = [];
    zlevel = 0
    while (q.length) {
        let levelArr = [];
        let qlength = q.length;
        for (let i = 0; i < qlength; i++) {
            let curr = q.shift();
            if (zlevel % 2 == 0) { //while pushing add from back
                levelArr.push(curr.val)
            }
            else { //while pushing add from front
                levelArr.unshift(curr.val)

            }
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
        }
        zlevel++
        ans.push(levelArr)
    }
    return ans
};

//Recursive
var zigzagLevelOrder = function (root) {
    let ans = [];
    let traverse = (curr, level) => {
        if (curr == null) return;
        if (!ans[level]) ans[level] = [];

        if (level % 2 == 0) ans[level].push(curr.val);
        else ans[level].unshift(curr.val);

        traverse(curr.left, level + 1);
        traverse(curr.right, level + 1);
    }
    traverse(root,0);
    return ans;
};

//Revision
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let q = [root];
    let zigzag = false;
    let ans = [];
    while (q.length) {
        let qlength = q.length;
        zigzag = !zigzag;
        let levelArray = [];
        for (let i = 0; i < qlength; i++) {
            let curr = q.shift();
            if (zigzag) levelArray.push(curr.val);
            else levelArray.unshift(curr.val);

            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);

        }
        ans.push(levelArray);
    }

    return ans;
};

//Chat-GaPT Revision
var zigzagLevelOrder = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];
    let leftToRight = true;

    while (queue.length > 0) {
        let size = queue.length;
        let level = [];

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            // Insert based on direction
            if (leftToRight) {
                level.push(node.val);
            } else {
                level.unshift(node.val);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
        leftToRight = !leftToRight; // flip direction
    }

    return result;
};
