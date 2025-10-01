/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

//Time Limit Exceeded
var getPermutation = function(n, k) {
    let result=[];
    let backtrack=(path)=>{
        if(path.length==n){
            result.push(path.join(""));
            return;
        }
        for(let i=1;i<=n;i++){
            if(path.includes(i))continue;
            path.push(i);
            backtrack(path);
            path.pop();
        }
    }
    backtrack([]);
    return result[k-1];
};