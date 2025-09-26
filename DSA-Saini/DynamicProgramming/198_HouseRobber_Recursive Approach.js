
//Top-Down Approach using recursion
var rob = function (nums) {
    let n = nums.length;
    let ans = 0
    let recursion = (i, maxRob, prevMaxRob) => {
        if (i == n) {
            ans = maxRob;
            return;
        }
        let maxHere = Math.max(prevMaxRob + nums[i], maxRob);
        recursion(i+1,maxHere,maxRob)
    }
    recursion(0,0,0);
    return ans;
};
//Top-Down Approach using recursion- Slight Modification
var rob = function (nums) {
    let n = nums.length;
    let recursion = (i, maxRob, prevMaxRob) => {
        if (i == n) return maxRob;
        let maxHere = Math.max(prevMaxRob + nums[i], maxRob);
        return recursion(i+1,maxHere,maxRob)
    }
    return recursion(0,0,0);

};


//Recursion- GPT will later use DP- Time Limit Exceeded
var rob = function (nums) {
    let n = nums.length;
    let dfs = (i) => {
        if (i >= n) return 0;

        let takeCurrent = nums[i] + dfs(i + 2);
        let skipCurrent = dfs(i + 1);
        return Math.max(takeCurrent, skipCurrent);
    }
    return dfs(0)

};

//Complete DP
var rob = function (nums) {
    let dp = {};
    let n=nums.length;
    let dfs = (i) => {
        if (i >= n) return 0;

        if (dp[i] == undefined) {
            let takeCurrent = nums[i] + dfs(i + 2);
            let skipCurrent = dfs(i + 1);
            dp[i] = Math.max(takeCurrent, skipCurrent);
        }

        return dp[i];
    }
    return dfs(0)

};