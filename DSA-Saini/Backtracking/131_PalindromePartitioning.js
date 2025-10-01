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


//Almost same as above did it when doing revison
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = [];
    let backtrack = (path, remainingString) => {
        if(!remainingString.length){
            console.log(path)
            result.push([...path]);
            return;
        }
        for (let i = 0; i < remainingString.length; i++) {
            let choices = remainingString.substring(0, i + 1);
            if (!isPalindrome(choices)) continue;
            path.push(choices);
            backtrack(path, remainingString.substring(i + 1));
            path.pop();
        }
    }
    backtrack([], s);
    return result;
};

let isPalindrome = (str) => {
    let halfLength = Math.floor(str.length / 2);
    for (let i = 0; i < halfLength; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}