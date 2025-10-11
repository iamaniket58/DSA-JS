/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//Using DP
var coinChange = function (coins, amount) {
    let dp = {};
    let dfs = (remainingAmount) => {
        if (remainingAmount == 0) return 0;
        if (remainingAmount < 0) return - 1;
        if (dp[remainingAmount] == undefined) {
            let minCoins = Infinity;
            for (let i = 0; i < coins.length; i++) {
                let result = dfs(remainingAmount - coins[i]);
                if (result != -1) {
                    minCoins = Math.min(minCoins, result + 1)
                }

            }
            dp[remainingAmount]=minCoins == Infinity ? -1 : minCoins;
        }

        return dp[remainingAmount]
    }
    return dfs(amount);
};
//Recursion
var coinChange = function (coins, amount) {
    let dfs = (remainingAmount) => {
        if (remainingAmount == 0) return 0;
        if (remainingAmount < 0) return - 1;

        let minCoins = Infinity;
        for (let i = 0; i < coins.length; i++) {
            let result = dfs(remainingAmount - coins[i]);
            if (result != -1) {
                minCoins = Math.min(minCoins, result + 1)
            }

        }
        return minCoins == Infinity ? -1 : minCoins;
    }
    return dfs(amount);
};

//Using Simple Recursion- Bruite Force- Cannot use DP becz dont know what to store
var coinChange = function (coins, amount) {
    let minCoin=Infinity;
    let recursion=(target,coinUsed)=>{
        if(target<0)return;
        if(target==0){
            if(coinUsed<minCoin){
                minCoin=coinUsed;
                return;
            }
        }
        for(let i=0;i<coins.length;i++){
            recursion(target-coins[i],coinUsed+1)
        }
    }
    recursion(amount,0);
    return minCoin==Infinity?-1:minCoin;
};


//Using Greedy Approach-Not correct for all the scenarios
var coinChange = function (coins, amount) {
    coins.sort((a, b) => b - a);
    let totalCoins = 0;
    for (let i = 0; i < coins.length; i++) {
        if(amount==0)return totalCoins
        if (amount >= coins[i]) {
            totalCoins = totalCoins + Math.floor(amount / coins[i]);
            amount = amount % coins[i];
        }
    }
    return amount != 0 ? -1 : totalCoins;
};
//Example Fail: coins = [1, 3, 4]  amount = 6