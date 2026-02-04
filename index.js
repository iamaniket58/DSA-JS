/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let backtrack = (remainingSum, count) => {

        if (remainingSum == 0) return count;
        if (remainingSum < 0) return -1;

        let minLength = Infinity;
        for (let i = 0; i < coins.length; i++) {

            let result = backtrack(remainingSum - coins[i], count + 1);
            if (result != -1) {
                minlength = Math.min(minLength, result);
            }
        }

        return minLength == Infinity ? -1 : minLength
    }
    return backtrack(amount, 0);
};
console.log(coinChange([1, 2, 5], 6))