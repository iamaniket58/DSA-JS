class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // helper to convert char → index
    _getIndex(char) {
        return char.charCodeAt(0) - 97;
    }

    insert(word) {
        let current = this.root;

        for (let char of word) {
            const index = this._getIndex(char);

            if (!current.children[index]) {
                current.children[index] = new TrieNode();
            }

            current = current.children[index];
        }

        current.isEnd = true;
    }

    search(word) {
        let current = this.root;

        for (let char of word) {
            const index = this._getIndex(char);

            if (!current.children[index]) {
                return false;
            }

            current = current.children[index];
        }

        return current.isEnd;
    }

    startsWith(prefix) {
        let current = this.root;

        for (let char of prefix) {
            const index = this._getIndex(char);

            if (!current.children[index]) {
                return false;
            }

            current = current.children[index];
        }

        return true;
    }
}


//Using Older Function Prototype

class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false;
    }
}

var Trie = function () {
    this.root = new TrieNode();
};

Trie.prototype.insert = function (word) {
    let current = this.root;

    for (let char of word) {
        let index = char.charCodeAt(0) - 97;

        if (!current.children[index]) {
            current.children[index] = new TrieNode();
        }

        current = current.children[index];
    }

    current.isEnd = true;
};

Trie.prototype.search = function (word) {
    let current = this.root;

    for (let char of word) {
        let index = char.charCodeAt(0) - 97;

        if (!current.children[index]) {
            return false;
        }

        current = current.children[index];
    }

    return current.isEnd;
};

Trie.prototype.startsWith = function (prefix) {
    let current = this.root;

    for (let char of prefix) {
        let index = char.charCodeAt(0) - 97;

        if (!current.children[index]) {
            return false;
        }

        current = current.children[index];
    }

    return true;
};
