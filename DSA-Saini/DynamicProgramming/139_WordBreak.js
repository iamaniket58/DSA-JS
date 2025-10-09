/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
//DP
var wordBreak = function (s, wordDict) {
    let dp = {};
    let recursion = (rems) => {
        if (rems == "") return true;
        let result = false;
        if(rems in dp)return dp[rems];
        for (let i = 0; i < rems.length; i++) {
            let substr = rems.substring(0, i + 1);
            if (wordDict.includes(substr) && recursion(rems.substring(i + 1))) {
                result = true;
            }

        }
        dp[rems]=result
        return  dp[rems]
    }
    return recursion(s);

};
var wordBreak = function (s, wordDict) {
    let dp = {};
    let recursion = (rems) => {
        if (rems == "") return true;
        let result = false;
        for (let i = 0; i < rems.length; i++) {
            let substr = rems.substring(0, i + 1);
            if (wordDict.includes(substr) && recursion(rems.substring(i + 1))) {
                result = true;
            }
        }
        return result
    }
    return recursion(s);

};
//Recursion
var wordBreak = function (s, wordDict) {
    let recursion = (rems) => {
        if (rems == "") return true;
        let result = false;
        for (let i = 0; i < rems.length; i++) {
            let substr = rems.substring(0, i + 1);

            // if (!dp[substr]) {
            if (wordDict.includes(substr) && recursion(rems.substring(i + 1))) {
                result = true;
            }
            // }

        }
        return result
    }
    return recursion(s);

};
//Simple Recursion
var wordBreak1 = function (s, wordDict) {
    let result = false;
    let recursion = (rems) => {
        if (rems == "") {
            result = true;
            return;
        }
        let i = 0;
        for (let j = 0; j < rems.length; j++) {
            let substringa = rems.substring(i, j + 1);
            if (wordDict.includes(substringa)) {
                recursion(rems.substring(j + 1, rems.length))
            }
        }
    }
    recursion(s);
    return result;
};
console.log(wordBreak("abcd",["a","abc","b","cd"]))



























//This is wrong because last value of reult is updated 
var checkwordBreak = function (s, wordDict) {
    let dp = {};
    let recursion = (rems) => {
        if (rems == "") return true;
        let result = false;
        for (let i = 0; i < rems.length; i++) {
            let substr = rems.substring(0, i + 1);

            // if (!dp[substr]) {
            if (wordDict.includes(substr)) {
                result = recursion(rems.substring(i + 1));
            }
            // }

        }
        return result
    }
    return recursion(s);

};
console.log(checkwordBreak("abcd",["a","abc","b","cd"]))