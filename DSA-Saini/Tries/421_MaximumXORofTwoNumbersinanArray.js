/**
 * @param {number[]} nums
 * @return {number}
 */
//Instead of trie Node- using [null, null]
//If u want to undertand the solution- Refer to the below Trie Solution with Constructir-Node
var findMaximumXOR = function (nums) {
    // TrieNode as array [left(0), right(1)]
    const root = [null, null];

    const insert = (num) => {
        let current = root;
        for (let i = 31; i >= 0; i--) {
            let bit = (num >> i) & 1;
            if (!current[bit]) {
                current[bit] = [null, null];
            }
            current = current[bit];
        }
    }

    const maxXor = (num) => {
        let xor = 0;
        let current = root;
        for (let i = 31; i >= 0; i--) {
            const bit = (num >> i) & 1;
            const opposite = 1 - bit;
            if (current[opposite]) {
                xor = xor | (1 << i);
                current = current[opposite];
            }
            else {
                current = current[bit];
            }
        }
        return xor
    }

    //Insert array into Trie
    for (let num of nums) {
        insert(num);
    }
    let max = 0;
    for (let num of nums) {
        max = Math.max(maxXor(num), max);
    }
    return max;
};

//Using Trie- IDK Why but TLE Came- Even AI solution is same as this
class TrieNode {
    constructor() {
        this.children = {}; //this.children=[null,null] //This is also Okay
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
            current = current.children[bit];
        }
    }

    getmaxXor(x) {
        let maxXor = 0;
        let current = this.root;
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
var findMaximumXOR = function (nums) {
    let trie = new Trie();
    for (let num of nums) {
        trie.insert(num);
    }
    let max = -Infinity;
    for (let num of nums) {
        max = Math.max(trie.getmaxXor(num), max);
    }
    return max == -Infinity ? 0 : max;

};
//Got this solution as someone else's Understand this
var findMaximumXOR = function(nums) {
    let max = 0;
    let mask = 0;

    for (let i = 31; i >= 0; i--) {
        mask = mask | (1 << i);
        let set = new Set();

        for (let num of nums) {
            set.add(num & mask);
        }

        let temp = max | (1 << i);

        for (let prefix of set) {
            if (set.has(prefix ^ temp)) {
                max = temp;
                break;
            }
        }
    }

    return max;
};

//Bruite Force
var findMaximumXOR = function (nums) {
    let maxXor = -Infinity;
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let xor = nums[i] ^ nums[j];
            if (xor > maxXor) maxXor = xor;
        }
    }
    return maxXor == -Infinity ? 0 : maxXor;
};