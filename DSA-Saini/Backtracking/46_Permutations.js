/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//Optimzed Version- Instead odf using inbuilt method(include) to check the array, another array with Fixed size has been checked in O(1)
var permute = function (nums) {
    let result = [];
    let used = new Array(nums.length).fill(false);
    let backtrack = (path) => {
        if (path.length == nums.length) {
            result.push([...path]);
        }
        for (let i = 0; i < nums.length; i++) {
            if(used[i])continue;
            path.push(nums[i]);
            used[i]=true;
            backtrack(path);
            path.pop();
            used[i]=false;
        }
    }
    backtrack([]);
    return result;
};

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

//This is my method which is inspired by Permutation II Solution, Here i m checking choices array
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