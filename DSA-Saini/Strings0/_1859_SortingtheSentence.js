/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let arr = s.split(' ');
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        ans[val[val.length - 1] - 1] = val.slice(0, val.length - 1)
    }
    return ans.join(' ').trim();

};

var sortSentence = function (s) {
    let words = s.split(' ');
    let result = [];
    for (let word of words) {
        let index = word[word.length - 1] - 1;
        result[index] = word.slice(0, -1);
    }
    console.log(result)
    return result.join(' ');
};