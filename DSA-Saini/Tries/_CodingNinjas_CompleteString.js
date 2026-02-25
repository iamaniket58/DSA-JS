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
        current.isEnd=true;
    }

    isCompleteString(word){
        let current=this.root;
        for(let char of word){
            current=current.children[char];
            if(!current || !current.isEnd){
                return false;
            }
        }
        return true;
    }
}

function completeString(arr){
    let trie=new Trie();
    for(let word of arr){
        trie.insert(word);
    }

    let result="";
    for(let word of arr){
        if(trie.isCompleteString(word)){
            if(word.length>result.length ||(word.length==result.length && word<result)){
                result=word; 
            }
        }
    }
    return result==""?"None":result;
}





//Bruite-Force Implementation
function completeString1(arr) {
    let wordSet = new Set(arr);
    let ans = "";
    for (let word of arr) {
        let prefix = "";
        let i = 0;
        for (; i < word.length; i++) {
            prefix += word[i];
            if (!wordSet.has(prefix)) break;
        }
        if (i == word.length) {
            if (word.length > ans.length || (word.length == ans.length && word < ans)) {
                ans = word;
            }

        }
    }
    return ans == "" ? "None" : ans;
}

//Bruite-Force Implementation- ChatGPT
function completeString2(arr) {
    const wordSet = new Set(arr);
    let answer = "";

    for (let word of arr) {
        let isValid = true;
        let prefix = "";

        for (let i = 0; i < word.length; i++) {
            prefix += word[i];

            if (!wordSet.has(prefix)) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            if (
                word.length > answer.length ||
                (word.length === answer.length && word < answer)
            ) {
                answer = word;
            }
        }
    }

    return answer === "" ? "None" : answer;
}
