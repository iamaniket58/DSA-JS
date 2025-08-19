/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let letters = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    let result = [];
    let backtracking = (path, index) => {
        if (path.length == digits.length) {
            result.push(path.join(""));
            return;
        }
        let choices = letters[digits[index]];
        for (let i = 0; i < choices.length; i++) {
            path.push(choices[i]);
            backtracking(path, index + 1);
            path.pop();
        }
    }
    backtracking([], 0)
    return result;
};
var letterCombinations = function (digits) {
    if (!digits) return []
    let result = [];
    let mapping = [[], ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];
    let backtrack = (path, curr) => {
        if (path.length == digits.length) {
            result.push(path);
            return;
        }
        let digit = digits[curr]
        if (!digit) return;
        let letter = mapping[Number(digit) - 1]
        for (let i = 0; i < letter.length; i++) {
            path += letter[i];
            backtrack(path, curr + 1);
            path = path.slice(0, -1);

        }
    }
    backtrack("", 0);
    return result;
};


//This is using Path as an array not as string
var letterCombinations = function (digits) {
    if (!digits) return []
    let result = [];
    let arr = [[], ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']];
    let backtrack = (path, curr) => {
        if (path.length == digits.length) {
            result.push([...path]);
            return;
        }
        let val = digits[curr]
        if (!val) return;
        let arr1 = arr[Number(val) - 1]
        for (let i = 0; i < arr1.length; i++) {
            path.push(arr1[i]);
            backtrack(path, curr + 1);
            path.pop();

        }
    }
    backtrack([], 0);
    return result;
};
console.log(letterCombinations("23"))