class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;

        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }

        current.isEnd = true;
    }

    search(word) {
        let current = this.root;

        for (let char of word) {
            if (!current.children[char]) return false;
            current = current.children[char];
        }

        return current.isEnd;
    }

    startsWith(prefix) {
        let current = this.root;

        for (let char of prefix) {
            if (!current.children[char]) return false;
            current = current.children[char];
        }

        return true;
    }
}

const trie = new Trie();

trie.insert("cat");
trie.insert("car");
trie.insert("care");
trie.insert("dog");
