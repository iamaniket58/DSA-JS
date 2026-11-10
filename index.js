var wordBreak = function (s, wordDict) {
    let map = {}
    let recursion = (word) => {
        // if (map[word]) return map[word];
        if (word == '') {
            return;
        }
        let result = false;
        for (let i = 0; i < word.length; i++) {
            let substrs = word.substring(0, i + 1);
            if (wordDict.includes(substrs)) {
                if (recursion(word.substring(i + 1, word.length))) {
                    result = true
                }
            }
        }
        return result
    }
    return recursion(s);

};
console.log(wordBreak("leetcode",["leet","code"]))