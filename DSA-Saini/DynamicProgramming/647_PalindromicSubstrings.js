/**
 * @param {string} s
 * @return {number}
 */
//DP Tabulation
var countSubstrings = function (s) {
    let n = s.length;
    let dp = Array.from({ length: n }, () => Array(n).fill(false));
    let count = 0;

    //For length 1
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        count++;
    }

    //for length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] == s[i + 1]) {
            dp[i][i+1] = true;
            count++;
        }
    }

    //for length3 and above
    for (len = 3; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            let j = i + len - 1;
            if (s[i] == s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                count++;
            }
        }
    }

    return count;


};

//DP Solution-Tabulation
var countSubstrings = function (s) {
    let dp = Array.from({ length: s.length }, () => Array(s.length).fill(false));
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true;
        count++;
        if (i < s.length - 1) {
            if (s[i] == s[i + 1]) {
                dp[i][i + 1] = true;
                count++;
            }
            else {
                dp[i][i + 1] = false;
            }
        }

    }
    //For length 3 and above
    for (let len = 3; len <= s.length; len++) {
        for (let i = 0; i <= s.length - len; i++) {
            let j = i + len - 1;
            if(s[i]==s[j] && dp[i+1][j-1]){
                dp[i][j]=true;
                count++;
            }
        }
    }
    return count;
};




//Bruite Force Approach- Find all substring first and check if it is Palindrome
var countSubstrings = function (s) {
    let count=0;
    for (let i = 0; i < s.length; i++) {
        let temp = "";
        for (let j = i; j < s.length; j++) {
            temp += s[j];
            if(isPalindrome(temp))count++;
        }
    }
    return count;
};
let isPalindrome = (str) => {
    if (str.length == 1) return true;
    let halfLength = Math.floor(str.length / 2);
    for (let i = 0; i < halfLength; i++) {
        if(str[i]!=str[str.length-1-i]){
            return false;
        }
    }
    return true;
}

//Code to find all the substing in a string
function findAllSubstring(s) {
    let substring = [];
    for (let i = 0; i < s.length; i++) {
        let temp = "";
        for (let j = i; j < s.length; j++) {
            temp += s[j];
            substring.push(temp)
        }
    }
    console.log(substring);
}