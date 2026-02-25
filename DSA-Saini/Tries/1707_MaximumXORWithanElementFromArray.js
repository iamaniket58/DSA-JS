/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */

class TrieNode {
    constructor() {
         this.children = [null,null]; //this.children = {};
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(val) {
        let current = this.root;
        for (let i = 31; i >= 0; i--) {
            let bit = (val >> i) & 1;
            if (!current.children[bit]) {
                current.children[bit] = new TrieNode();
            }
            current=current.children[bit];
        }
    }

    getMaxXor(x) {
        let current = this.root;;
        let maxXor = 0;
        for (let i = 31; i >= 0; i--) {
            let bit = (x >> i) & 1;
            let opposite = 1 - bit;
            if (current.children[opposite]) {
                maxXor = maxXor | (1 << i);
                current = current.children[opposite];
            }
            else {
                current = current.children[bit];
            }
        }
        return maxXor;
    }
}
var maximizeXor = function (nums, queries) {
    let trie = new Trie();
    nums.sort((a, b) => a - b);
    let newQueries = queries.map((q, i) => [q[0], q[1], i]);
    newQueries.sort((a, b) => a[1] - b[1]);
    let result = new Array(queries.length).fill(-1);

    let i = 0;
    for (let [xi, mi, index] of newQueries) {

        while (i < nums.length && nums[i] <= mi) {
            trie.insert(nums[i]);
            i++;
        }
        if(i==0)continue;
        result[index]=trie.getMaxXor(xi);
    }
    return result;
};
//Bruite Force
var maximizeXor = function (nums, queries) {
    let ans = [];
    for (let [x, m] of queries) {
        let maxXor = -1;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= m) {
                maxXor = Math.max(nums[i] ^ x, maxXor);
            }
        }
        ans.push(maxXor);
    }
    return ans;
};