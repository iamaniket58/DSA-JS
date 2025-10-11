/**
 * @param {number[]} nums
 * @return {boolean}
 */
//DP-Using Array
var canPartition = function (nums) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    if (sum % 2 == 1) return false;
    sum = sum / 2;
    let dp = Array.from({ length: sum + 1 }, () => Array(nums.length).fill(undefined));

    let backtrack = (target, start) => {
        if (target < 0) return false;
        if (target == 0) return true;
        if (dp[target][start] != undefined) return dp[target][start]; //If we put this line above then it will not be able to handle for -ve index


        for (let i = start; i < nums.length; i++) {
            if (backtrack(target - nums[i], i + 1)) {
                dp[target][start] = true;
                return dp[target][start];
            }
        }
        return dp[target][start] = false;
    }
    return backtrack(sum, 0);

};
//DP using Object but here also TLE Error
var canPartition = function (nums) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    if (sum % 2 == 1) return false;
    sum = sum / 2;
    let dp={};

    let backtrack = (target, start) => {
        let key=target+""+start;
        if(key in dp)return dp[key];
        if (target < 0) return false;
        if (target == 0) return true;

        for (let i = start; i < nums.length; i++) {
            if(backtrack(target - nums[i], i + 1)){
                dp[key]=true
                return dp[key]
            }
        }
        return dp[key]=false;
    }
    return backtrack(sum, 0);

};
//Reursion- Another way(return - No Store)
var canPartition1 = function (nums) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    if (sum % 2 == 1) return false;
    sum = sum / 2;

    let backtrack = (target, start) => {
        if (target < 0) return false;
        if (target == 0) return true;

        for (let i = start; i < nums.length; i++) {
            if(backtrack(target - nums[i], i + 1)){
                return true
            }
        }
        return false;
    }
    return backtrack(sum, 0);

};
console.log(canPartition1([1,5,11,5]))

//This is using Simple Recursion/ Backtracking
var canPartition = function(nums) {
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    if(sum%2==1)return false;
    let result=false;
    let backtrack=(path,start)=>{
        let pathsum=0;
        for(let i=0;i<path.length;i++){
            pathsum+=path[i];
        }
        if(pathsum==(sum/2))result=true;
        for(let i=start;i<nums.length;i++){
            path.push(nums[i]);
            backtrack(path,i+1);
            path.pop();
        }
    }
    backtrack([],0);
    return result;
};


