/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//Sir's Solution
var coinChange = function (coins, amount) {
    let n=coins.length;
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0]=0;
    for (let i = 1; i <= amount; i++) {
        for (let j=0;j<n;j++) {
            let remAmount=i-coins[j];
            if (remAmount>=0) {
                dp[i]=Math.min(1 + dp[remAmount], dp[i])
            }
        }
    }
    return dp[amount]==Infinity?-1:dp[amount];
};

//My Solution
var coinChange = function (coins, amount) {
    let arr = new Array(amount + 1).fill(Infinity);
    arr[0]=0;
    for (let i = 1; i <= amount; i++) {
        let minCoins = Infinity;
        for (let coin of coins) {
            if (i-coin>=0) {
                minCoins=Math.min(1 + arr[i-coin], minCoins)
            }
        }
        arr[i] = minCoins;

    }
    return arr[amount]==Infinity?-1:arr[amount];
};
console.log(coinChange([1,2,5], 11))