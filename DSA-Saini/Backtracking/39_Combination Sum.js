/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result=[];
    let backtrack=(path,start,targetSum)=>{
        if(targetSum==0){
            result.push([...path]);
            return;
        }
        if(targetSum<0)return
        for(let i=start;i<candidates.length;i++){
            path.push(candidates[i]);
            backtrack(path,i,targetSum-candidates[i]);
            path.pop();
        }
    }
    backtrack([],0,target);
    return result;
};

var combinationSum = function(arr, target) {
    let result=[];
    let backtracking=(remainingSum,path,start)=>{
        if(remainingSum==0)result.push([...path]);
        if(remainingSum<=0)return;
        for(let i=start;i<arr.length;i++){
            path.push(arr[i]);
            backtracking(remainingSum-arr[i],path,i);
            path.pop();
        }
    }
    backtracking(target,[],0)
    return result;
};