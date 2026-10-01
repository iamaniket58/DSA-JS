/**
 * @param {number} n
 * @return {string[]}
 */
//Use String instead of an array
var generateParenthesis = function (n) {
    let result = [];
    let backtrack = (path, open, close) => {
        if (open == n && close == n) {
            result.push(path);
            return;
        }
        if (open < n) {
            backtrack(path + '(', open + 1, close);
        }

        if (close < open) {
            backtrack(path + ')', open, close + 1);
        }
    }
    backtrack([], 0, 0);
    return result;
};

var generateParenthesis = function (n) {
    let result = [];
    let backtrack = (path, open, close) => {
        if (open == n && close == n) {
            result.push(path.join(""));
            return;
        }
        if (open < n) {
            path.push('(');
            backtrack(path, open + 1, close);
            path.pop();
        }

        if (close < open) {
            path.push(')');
            backtrack(path, open, close + 1);
            path.pop();
        }
    }
    backtrack([], 0, 0);
    return result;
};