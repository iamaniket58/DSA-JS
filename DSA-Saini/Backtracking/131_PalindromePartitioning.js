/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = [];
    let backtracking = (path, remainingString) => {
        if (!remainingString.length) {
            result.push([...path]);
            return;
        }
        for (let i = 1; i <= remainingString.length; i++) {
            let choices = remainingString.substring(0, i);
            if (!isPalindrome(choices)) continue;
            path.push(choices);
            backtracking(path, remainingString.substring(i));
            path.pop();
        }
    }
    backtracking([], s)
    return result;
};

var isPalindrome = (str) => {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i++] != str[j--]) {
            return false;
        }
    }
    return true;
}