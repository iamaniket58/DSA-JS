class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
        this.countEndWith = 0;     // number of words ending here
        this.countPrefix = 0;      // number of words passing through
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // insert(word) {
    //     let current = this.root;
    //     for (let char of word) {
    //         current.countPrefix++;
    //         if (!current.children[char]) {
    //             current.char[char] = new TreeNode();
    //         }
    //         current = current.children[char];
    //     }
    //     current.isEnd = true;
    //     current.countPrefix++;
    //     current.countEndWith++;
    // }
    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
            current.countPrefix++;
        }
        current.isEnd = true;
        current.countEndWith++;
    }
    countWordsEqualTo(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                return 0;
            }
            current = current.children[char];
        }
        return current.countEndWith;
    }

    countWordsStartingWith(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]){
                return 0;
            }
            current=current.children[char];
        }
        return current.countPrefix;
    }
    erase(word){
        let current=this.root;
        for(let char of word){
            if(!current.children[char])return;
            current=current.children[char];
            current.countPrefix--;
        }
        current.countEndWith--;
    }
}