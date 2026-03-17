/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let arr = [];
    for (let i = 0; i < words.length; i++) {
        let str = words[i];
        for (let j = 0; j < str.length; j++) {
            if (str[j] == x) {
                arr.push(i);
                break;
            }
        }
    }
    return arr;
};
//Revision
var findWordsContaining = function (words, x) {
    let ans = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] == x) {
                ans.push(i);
                break;
            }
        }
    }
    return ans;
};
//Using Set- Not agood way
var findWordsContaining = function (words, x) {
    let ans = [];
    for (let i = 0; i < words.length; i++) {
        let set = new Set(words[i])
        if (set.has(x))ans.push(i);
    }
    return ans;
};
//Way2
var findWordsContaining = function (words, x) {
    let arr = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            arr.push(i)
        }
    }
    return arr;
};