var generateParenthesis = function(n) {
    let result = [];

    function backtrack(path, open, close) {
        // We have used all brackets
        if (path.length === 2 * n) {
            result.push(path);
            return;
        }

        // Add opening bracket
        if (open < n) {
            backtrack(path + "(", open + 1, close);
        }

        // Add closing bracket
        if (close < open) {
            backtrack(path + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);

    return result;
};
generateParenthesis(3)