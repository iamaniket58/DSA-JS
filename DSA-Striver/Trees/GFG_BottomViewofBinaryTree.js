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

//Optimized Approach- Instead of sorting the keys, we can keep track of min and max horizontal distances
class Solution {
    bottomView(root) {
        // code here
        let q = [[root, 0]];
        let obj = {};
        let ans = [];
        let minHd=Infinity;
        let maxHd=-Infinity;
        while (q.length > 0) {
            let [curr, hd] = q.shift();
            obj[hd] = curr.data;
            minHd=Math.min(minHd,hd);
            maxHd=Math.max(maxHd,hd);

            curr.left && q.push([curr.left, hd - 1]);
            curr.right && q.push([curr.right, hd + 1]);
        }

        for (let i=minHd;i<=maxHd;i++) {
            ans.push(obj[i])
        }
        return ans;
    }
}

class Solution {
    bottomView(root) {
        // code here
        let q = [[root, 0]];
        let obj = {};
        let ans = [];
        while (q.length > 0) {
            let [curr, hd] = q.shift();
            obj[hd] = curr.data;

            curr.left && q.push([curr.left, hd - 1]);
            curr.right && q.push([curr.right, hd + 1]);
        }

        for (let key of Object.keys(obj).sort((a, b) => a - b)) {
            ans.push(obj[key])
        }
        return ans;
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
let sol = new Solution();
console.log(sol.bottomView(root));