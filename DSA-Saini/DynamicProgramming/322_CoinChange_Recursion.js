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
            dp[remainingAmount] = minCoins == Infinity ? -1 : minCoins;
        }

        return dp[remainingAmount]
    }
    return dfs(amount);
};

//Recursion- bottom Up approach
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

//Revision- Recursion- bottom Up approach
var coinChange = function (coins, amount) {
    let backtrack = (remainingSum, count) => {

        if (remainingSum == 0) return count;
        if (remainingSum < 0) return -1;

        let minLength = Infinity;
        for (let i = 0; i < coins.length; i++) {

            let result = backtrack(remainingSum - coins[i], count + 1);
            if (result != -1) {
                minLength = Math.min(minLength, result);
            }
        }

        return minLength == Infinity ? -1 : minLength
    }
    return backtrack(amount, 0);
};

//Using Simple Recursion(Top Down)- Bruite Force- Cannot use DP becz dont know what to store
var coinChange = function (coins, amount) {
    let minCoin = Infinity;
    let recursion = (target, coinUsed) => {
        if (target < 0) return;
        if (target == 0) {
            if (coinUsed < minCoin) {
                minCoin = coinUsed;
                return;
            }
        }
        for (let i = 0; i < coins.length; i++) {
            recursion(target - coins[i], coinUsed + 1)
        }
    }
    recursion(amount, 0);
    return minCoin == Infinity ? -1 : minCoin;
};

//Revision- Recursion-Backtrack (TopDown)- time Limit exceeded
var coinChange = function (coins, amount) {
    let result = Infinity;
    let backtrack = (path, sum) => {
        if (sum == amount) {
            result = Math.min(result, path.length);
            return;
        }
        if (sum > amount) return;
        for (let i = 0; i < coins.length; i++) {

            path.push(coins[i]);
            backtrack(path, sum + coins[i]);
            path.pop();
        }
    }
    backtrack([], 0);
    return result == Infinity ? -1 : result;
};
//Revision- Recursion-Backtrack(TopDown)- time Limit exceeded
var coinChange = function (coins, amount) {
    let result = Infinity;
    let backtrack = (remainingSum, count) => {
        if (remainingSum == 0) {
            result = Math.min(result, count);
            return;
        }
        if (remainingSum < 0) return;
        for (let i = 0; i < coins.length; i++) {
            backtrack(remainingSum - coins[i], count + 1);
        }
    }
    backtrack(amount, 0);
    return result == Infinity ? -1 : result;
};

//Using Greedy Approach-Not correct for all the scenarios
var coinChange = function (coins, amount) {
    coins.sort((a, b) => b - a);
    let totalCoins = 0;
    for (let i = 0; i < coins.length; i++) {
        if (amount == 0) return totalCoins
        if (amount >= coins[i]) {
            totalCoins = totalCoins + Math.floor(amount / coins[i]);
            amount = amount % coins[i];
        }
    }
    return amount != 0 ? -1 : totalCoins;
};
//Example Fail: coins = [1, 3, 4]  amount = 6

//Revision- Using Greedy Approach-Not correct for all the scenarios
var coinChange = function (coins, amount) {
    let count = 0;
    coins.sort((a, b) => b - a);
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            console.log(amount)
            count++;
        }
        if (amount == 0) return count;
    }
    return -1;
};