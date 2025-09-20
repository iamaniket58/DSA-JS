/**
 * @param {number[]} ratings
 * @return {number}
 */
//This is my Solution
var candy = function (ratings) {
    let candy = new Array(ratings.length).fill(1);

    //from left
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candy[i] = candy[i - 1] + 1;
        }
    }
    console.log(candy);
    //from Right
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1] && candy[i] <= candy[i + 1]) {
            candy[i] = candy[i + 1] + 1;
        }
    }
    console.log(candy);

    //Calculate Sum
    let minCandies = 0;
    for (let i = 0; i < candy.length; i++) {
        minCandies += candy[i];
    }
    return minCandies;
};
//Sir's Solution- calculate leftToRight then RightToLeft and take max of these 2
var candy = function (ratings) {
    let n = ratings.length;
    let ltr = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            ltr[i] = ltr[i - 1] + 1;
        }
    }

    let rtl = new Array(n).fill(1);
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            rtl[i] = rtl[i + 1] + 1;
        }
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = ans + Math.max(ltr[i], rtl[i]);
    }

    return ans;
};









//Unsolved
//⚠️ Problem: At index i, arr[i+1] hasn’t been calculated yet, so you’re using a future value that’s still 1.
var candy1 = function (ratings) {
    let arr = new Array(ratings.length).fill(1);
    console.log(arr);
    for (let i = 0; i < ratings.length; i++) {
        if (i == 0) {
            if (ratings[i] > ratings[i + 1]) {
                arr[i] = arr[i + 1] + 1;
            }
            else if (i == ratings.length - 1) {
                if (ratings[i] > ratings[i - 1]) {
                    arr[i] = arr[i - 1] + 1;
                }
            }
            else if (ratings[i] > ratings[i - 1] || ratings[i] > ratings[i + 1]) {
                arr[i] = (Math.max(arr[i - 1], arr[i + 1])) + 1;
            }

        }
    }
    console.log(arr);
    let totalCandies = 0
    for (let i = 0; i < arr.length; i++) {
        totalCandies += arr[i]
    }
    return totalCandies;
};
console.log(candy([1, 0, 2]));