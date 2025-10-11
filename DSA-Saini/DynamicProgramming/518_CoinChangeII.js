/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
//DP- Recursion 2 -Used Array as DP still TLE
var change = function(amount, coins) {
    let dp=Array.from({length:amount+1},()=>Array(coins.length).fill(-1));
    let backtrack=(target,start)=>{
        if(target<0)return 0;
        if(target==0)return 1;
        if(dp[target][start]!=-1)return dp[target][start];
        
        let combinations=0
        for(let i=start;i<coins.length;i++){
           combinations+= backtrack(target-coins[i],i)
        }
        dp[target][start]=combinations;
        return dp[target][start];
    }
    return backtrack(amount,0);

};
//DP- Recusrion 2 -- This is correct but getting Key from DP is expensive
var change = function(amount, coins) {
    let dp={}
    let backtrack=(target,start)=>{
        if(target<0)return 0;
        if(target==0)return 1;
        let key=target+""+start
        if(dp[key])return dp[key];
        
        let ans=0
        for(let i=start;i<coins.length;i++){
           ans+= backtrack(target-coins[i],i)
        }
        dp[key]=ans;
        return dp[key];
    }
    return backtrack(amount,0);

};
//Recursion 2
var change = function(amount, coins) {
    let backtrack=(target,start)=>{
        if(target<0)return 0;
        if(target==0)return 1;

        let ans=0
        for(let i=start;i<coins.length;i++){
           ans+= backtrack(target-coins[i],i)
        }
        return ans;
    }
    return backtrack(amount,0);

};




//DP of Recursion 1-- IDK whats wrong with this solution
var change = function(amount, coins) {
    let dp={}
    let length=[];
    let backtrack=(target,count)=>{
        if(target<0)return 0;
        if(target==0 && !length.includes(count)){
            length.push(count);
            return 1;
        }
        if(dp[target])return dp[target];
        let ans=0
        for(let i=0;i<coins.length;i++){
           ans+= backtrack(target-coins[i],count+1)
        }
        dp[target]=ans;
        return dp[target];
    }
    return backtrack(amount,0);

};
//Recursion1- Another way(No Store)
var change = function(amount, coins) {
    let length=[];
    let backtrack=(target,count)=>{
        if(target<0)return 0;
        if(target==0 && !length.includes(count)){
            length.push(count);
            return 1;
        }
        let ans=0
        for(let i=0;i<coins.length;i++){
           ans+= backtrack(target-coins[i],count+1)
        }
        return ans
    }
    return backtrack(amount,0);

};




//Simple Recursion
var change = function(amount, coins) {
    let length=[];
    let ansCount=0;
    let backtrack=(target,count)=>{
        if(target<0)return;
        if(target==0 && !length.includes(count)){
            length.push(count);
            ansCount++;
            return;
        }
        for(let i=0;i<coins.length;i++){
            backtrack(target-coins[i],count+1)
        }
    }
    backtrack(amount,0);
    return ansCount;
};
console.log(change(5,[1,2,5]));

//Chat-GPT- This is the most efficient solution, but need to understand it
var change = function (amount, coins) {
    const dp = new Uint32Array(amount + 1);
    dp[0] = 1;

    for (const coin of coins) {
        for (let i = coin; i <= amount; i += 1) {
            dp[i] += dp[i - coin];
        }
    }

    return dp[amount];
};