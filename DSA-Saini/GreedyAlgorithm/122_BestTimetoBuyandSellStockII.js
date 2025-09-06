/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit = profit + (prices[i] - prices[i - 1]);
        }
    }
    return profit;
};

//Sir's Solution- Same way
var maxProfit = function (prices) {
    let ans = 0;
    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - prices[i - 1];
        if (profit > 0) {
            ans = ans + profit;
        }
    }
    return ans;
};