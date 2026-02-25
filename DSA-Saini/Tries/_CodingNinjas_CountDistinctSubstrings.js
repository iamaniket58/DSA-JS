// Question Link: https://www.naukri.com/code360/problems/count-distinct-substrings_985292
//using Trie
class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false; //This is not required 
    }
}
class TrieNodeArray {
    constructor() {
        this.children = new Array(26).fill(null);
        this.isEnd = false; //This is not required 
    }
}
function countDistinctSubstringsUsingTrie(s) {
    let root = new TrieNode();
    let distinctSubsting = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let current = root;
        for (let j = i; j < n; j++) {
            if (!current.children[s[j]]) {
                current.children[s[j]] = new TrieNode();
                distinctSubsting++; // New substring discovered
            }
            current = current.children[s[j]];
            current.isEnd = true;
        }
    }
    return distinctSubsting + 1;  // +1 for empty substring
}
function countDistinctSubstringsUsingTrieArrayofChildren(s) {
    let root = new TrieNodeArray(); //new TrieNode(); This also will work 😂😂
    let distinctSubsting = 0;
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let current = root;
        for (let j = i; j < n; j++) {
            let index = s[j].charCodeAt(0) - 97;
            if (!current.children[index]) {
                current.children[index] = new TrieNode();
                distinctSubsting++; // New substring discovered
            }
            current = current.children[index];
            current.isEnd = true;
        }
    }
    return distinctSubsting + 1;  // +1 for empty substring
}




//Bruite Force
function countDistinctSubstrings(s) {
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        let prefix = "";
        for (let j = i; j < s.length; j++) {
            prefix += s[j];
            set.add(prefix);
        }
    }
    return set.size + 1; //1 for empty string
}
console.log(countDistinctSubstrings("abc"));
console.log(countDistinctSubstrings("sds"));
console.log(countDistinctSubstrings("aa"));
console.log(countDistinctSubstrings("abab"));
console.log(countDistinctSubstringsUsingTrie("abc"));
console.log(countDistinctSubstringsUsingTrie("sds"));
console.log(countDistinctSubstringsUsingTrie("aa"));
console.log(countDistinctSubstringsUsingTrie("abab"));
console.log(countDistinctSubstringsUsingTrieArrayofChildren("abc"));
console.log(countDistinctSubstringsUsingTrieArrayofChildren("sds"));
console.log(countDistinctSubstringsUsingTrieArrayofChildren("aa"));
console.log(countDistinctSubstringsUsingTrieArrayofChildren("abab"));