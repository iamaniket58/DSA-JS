/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
//This is my solution- first store all in a queue then traverse and connect all
var connect = function (root) {
    if (!root) return root
    let q = [root];
    let ans = []
    while (q.length) {
        let levelArr = [];
        let qlength = q.length;
        for (i = 0; i < qlength; i++) {
            let curr = q.shift();
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
            levelArr.push(curr)
        }
        ans.push(levelArr)
    }
    // console.log(ans)
    for (x of ans) {
        for (let i = 0; i < x.length - 1; i++) {
            x[i].next = x[i + 1]
        }
    }
    // console.log('Root is here............')
    // console.log(root)
    return root
};

//Sirs Solution- Optimized
var connect = function (root) {

    //Sirs Solution
    if (!root) return root
    let traverse = (curr) => {
        if (curr.left) {
            curr.left.next = curr.right
        }
        if (curr.right && curr.next) {
            curr.right.next = curr.next.left
        }

        curr.left && traverse(curr.left)
        curr.right && traverse(curr.right)
    }
    traverse(root)
    return root
}