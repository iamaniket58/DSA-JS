/**
 * @param {Node} root
 * @returns {number[]}
 */


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Optimized Approach- Instead of sorting the keys, we can keep track of min and max horizontal distances
class Solution {
    topView(root) {
        // code here
        let ans = [];
        let q = [[root, 0]];
        let obj = {};
        let minHd = Infinity;
        let maxHd = -Infinity;

        while (q.length > 0) {
            let [curr, hd] = q.shift();

            if (obj[hd] == undefined) {
                obj[hd] = curr.data;
                minHd = Math.min(minHd, hd);
                maxHd = Math.max(maxHd, hd);
            }

            curr.left && q.push([curr.left, hd - 1]);
            curr.right && q.push([curr.right, hd + 1]);
        }
        for (let i = minHd; i <= maxHd; i++) {
            ans.push(obj[i]);
        }
        return ans;
    }
}

class Solution {
    topView(root) {
        // code here
        let ans = [];
        let q = [[root, 0]];
        let obj = {};

        while (q.length > 0) {
            let [curr, dist] = q.shift();

            if (obj[dist] == undefined) obj[dist] = curr.data;

            curr.left && q.push([curr.left, dist - 1]);
            curr.right && q.push([curr.right, dist + 1]);
        }
        for (let key of Object.keys(obj).sort((a, b) => a - b)) {
            ans.push(obj[key]);
        }
        return ans;
    }
}

let s = new Solution();
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
s.topView(root);