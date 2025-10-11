/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = [];
    let backtrack = (path, remainingString) => {
        if (!remainingString.length) {
            console.log(path)
            result.push(path);
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

var change = function (amount, coins) {
    const dp = new Uint32Array(amount + 1);
    dp[0] = 1;

    for (const coin of coins) {
        for (let i = coin; i <= amount; i += 1) {
            dp[i] += dp[i - coin];
        }
    }

    return dp[amount];
};
console.log(change(5, [1, 2, 5]));
//console.log(partition('aab'))