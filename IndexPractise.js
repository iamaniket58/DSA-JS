/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let dp = {};
    let dfs = (remS) => {
        if(remS=='')return 1;
        let n = remS.length;
        let ld = Number(remS[n - 1]);
        let sld = Number(remS[n - 2] + remS[n - 1]);
        let ans=0;
        if(ld>0){
            ans+=dfs(remS.substring(0,n-1));
        }
        if(sld>9 && sld<=26){
            ans+=dfs(remS.substring(0,n-2));
        }
        return ans;
    }
    return dfs(s);
};
console.log(numDecodings('2'));