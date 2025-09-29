/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];
    let backtrack = (path) => {
        if (path.length == nums.length) {
            result.push([...path]);
            // return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!path.includes(nums[i])) {
                path.push(nums[i]);
                backtrack(path);
                path.pop();
            }
        }
    }
    backtrack([])
    return result
};

//This is my method which i inspired by Permutation II Solution, Here i m checking choices array
var permute = function(nums) {
    let result=[];
    let backtrack=(path,choices)=>{
        if(path.length==nums.length){
            result.push([...path]);
            return;
        }
        for(let i=0;i<choices.length;i++){
            path.push(choices[i]);
            backtrack(path,[...choices.slice(0,i),...choices.slice(i+1)]);
            path.pop()
        }
    }
    backtrack([],nums);
    return result;
};