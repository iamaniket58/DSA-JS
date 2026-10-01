/**
 * @param {string} s
 * @return {number}
 */
//DP-1
var numDecodings = function (s) {
    let dp={};
    let fn = (remS) => {
        let n = remS.length;
        if (remS == '') return 1;
        if (remS == '0') return 0;
        if(remS in dp)return dp[remS];
        let lastDigit = remS.substring(n - 1);
        let last2Digit = remS.substring(n - 2);
        let ans=0
        if (lastDigit != '0') {
           ans+= fn(remS.substring(0, n - 1));
        }
        if(last2Digit>=10 && last2Digit<=26){
            ans+=fn(remS.substring(0,n-2));
        }
        dp[remS]=ans;
        return ans;

    }
    return fn(s);
};
//DP-Almost same as above
var numDecodings = function (s) {
    let dp={};
    let fn = (remS) => {
        let n = remS.length;
        if (remS == '') return 1;
        if (remS == '0') return 0;
        if(dp[remS]!=undefined)return dp[remS];
        let lastDigit = remS.substring(n - 1);
        let last2Digit = remS.substring(n - 2);
        let ans=0
        if (lastDigit != '0') {
           ans+= fn(remS.substring(0, n - 1));
        }
        if(last2Digit>=10 && last2Digit<=26){
            ans+=fn(remS.substring(0,n-2));
        }
        dp[remS]=ans;
        return ans;

    }
    return fn(s);
};  
//DP-Another way
var numDecodings = function (s) {
    let dp = {};
    let fn = (remS) => {
        let n = remS.length;
        if (remS == '') return 1;
        if (remS == '0') return 0;
        // if(dp[remS]!=undefined)return dp[remS];
        // if(remS in dp)return dp[remS];
        if (dp[remS] == undefined) {
            let lastDigit = remS.substring(n - 1);
            let last2Digit = remS.substring(n - 2);
            let ans = 0
            if (lastDigit != '0') {
                ans += fn(remS.substring(0, n - 1));
            }
            if (last2Digit >= 10 && last2Digit <= 26) {
                ans += fn(remS.substring(0, n - 2));
            }
            dp[remS] = ans;
        }

        return dp[remS];

    }
    return fn(s);
};

//DP-Revision
var numDecodings = function (s) {
    let map = {};
    let dfs = (rem) => {
        if (map[rem] == undefined) {
            let n = rem.length;
            if (n == 0 || rem == '') return 1;
            let str = Number(rem[n - 1]);
            let s = 0;
            if (str > 0) {
                s = dfs(rem.substring(0, n - 1));
            }

            let r = 0;
            if (n > 1) {
                let str2 = Number(rem[n - 2] + rem[n - 1]);
                if (str2 > 9 && str2 <= 26) {
                    r = dfs(rem.substring(0, n - 2));
                }

            }

            map[rem] = s + r;
        }
        return map[rem];
    }
    return dfs(s);
};
//Normal Recursion- time Limit Exceeded and might fail for future test cases
//Revision
var numDecodings = function (s) {
    let count = 0;
    let dfs = (rem) => {
        // console.log(rem)
        if (rem == '0') return;
        let n = rem.length;
        if (n == 1 || n == 0) {
            count++;
            return;
        }
        let str = Number(rem[n - 1]);
        str > 0 && dfs(rem.substring(0, n - 1));
        let str2 = Number(rem[n - 2] + rem[n - 1]);
        if (str2 > 9 && str2 <= 26) {
            dfs(rem.substring(0, n - 2));
        }

    }
    dfs(s);
    return count;
};

//Normal Recursion- time Limit Exceeded and might fail for future test cases
var numDecodings = function (s) {
    let count = 0;
    let n = s.length;
    let recursion = (rem) => {
        if (rem.length == 0) {
            count++;
            return;
        }
        if (rem == '0') return;
        if (rem.length == 1 && rem != "0") {
            count++;
            return;
        }
        // if (rem.length == 2 && (+rem < 10 || +rem > 26)) {
        //     return;
        // }
        rem[rem.length - 1] != 0 && recursion(rem.substring(0, rem.length - 1));
        if(+rem.substring(rem.length-2)>=10 && +rem.substring(rem.length-2)<=26)recursion(rem.substring(0, rem.length - 2));
    }
    recursion(s);
    return count;
};
console.log(numDecodings("27"))