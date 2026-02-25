class TrieNode {
    constructor() {
        this.children = {};
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(num) {
        let current = this.root;
        for (let i = 31; i >= 0; i--) {
            let bit = ((num >> i) & 1);
            if (!current.children[bit]) {
                current.children[bit] = new TrieNode();
            }
            current = current.children[bit];
        }
    }
    getMaxXor(x) {
        let maxXor = 0;
        let current = this.root;
        for (let i = 31; i >= 0; i--) {
            let bit = (x >> i) & 1;
            let opposite = 1 - bit;
            if (current.children[opposite]) {
                maxXor = maxXor | (1 << i); //Here i am directly building the answer i.e Calculating XOR of x and arr[i]:- I am just setting the bit to 1 when diffrence of bit is there between x and trie. If code comes in this block then there is a difference
                // We are building the XOR result bit by bit. If the opposite bit exists in the trie, it means XOR at this position will be 1. So we set the ith bit in maxXor and move to that branch.
                current = current.children[opposite];
            }
            else {
                current = current.children[bit];
            }
        }
        return maxXor;
    }
}

// Step 1:
// Insert all numbers of arr1 into Trie.
// Step 2:
// For each number in arr2, compute maximum XOR using trie.
// Take the maximum among all queries.
function MaxXorWithArrays(arr1, arr2) {
    let trie = new Trie();
    // Insert arr1 into trie
    for (let num of arr1) {
        trie.insert(num);
    }
    let max = -Infinity;
    // Query for arr2
    for (let num of arr2) {
        max = Math.max(trie.getMaxXor(num), max);
    }
    return max;
}