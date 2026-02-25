//What if we had to Return the element from the array that gives maximum XOR with x
class TrieNode {
    constructor() {
        this.children = {};
        this.value = null
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
            current = current.children[bit]
        }
        current.value = val
    }

    getMaxXorElement(x) {
        let current = this.root;
        for (let i = 31; i >= 0; i--) {
            let bit = (x >> i) & 1;
            let opposite=1-bit;
            if(current.children[opposite]){
                current=current.children[opposite];
            }
            else{
                current=current.children[bit];
            }
        }
        return current.value; // return actual element
    }
}

function MaxXorElement(arr,x){
    let trie=new Trie();
    for(let num of arr){
        trie.insert(num);
    }
    return trie.getMaxXorElement(x);
}