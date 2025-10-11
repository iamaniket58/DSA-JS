/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length;
    let ans = [0, 0];
    let dp = Array.from({ length: n }, () => Array(n).fill(false));
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        // ans = dp[i][i]; 
        // No need to check for 1 length palindrome intialization will take care
        //if you forcefully try to put fpr 1 length then 1 length palindrome will be updated after 2 length in some cases so s="cbbd" case will fail
        if (i < n - 1) {
            if (s[i] == s[i + 1]) {
                dp[i][i + 1] = true;
                ans = [i, i + 1];
            }
            else {
                dp[i][i + 1] = false;
            }
        }
    }

    //for length=3 and above
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;
            if (s[i] == s[j] && dp[i + 1][j - 1] == true) {
                dp[i][j] = true;
                ans = [i, j];
            }
        }
    }
    console.log(ans)
    return s.substring(ans[0], ans[1] + 1);
};
console.log(longestPalindrome("cbbd"))