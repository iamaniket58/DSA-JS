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