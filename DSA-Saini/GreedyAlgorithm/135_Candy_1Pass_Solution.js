/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    //One Pass Solution
    let n = ratings.length;
    let ans = n;
    let i = 1;
    while (i < n) {
        if (ratings[i] == ratings[i - 1]) {
            i++;
            continue;
        }

        let up = 0;
        while (i < n && ratings[i] > ratings[i - 1]) {
            up++;
            ans += up;
            i++;
        }

        let down = 0;
        while (i < n && ratings[i] < ratings[i - 1]) {
            down++;
            ans += down;
            i++;
        }

        ans = ans - Math.min(up, down)
    }
    return ans;

};
console.log(candy([1, 2, 3, 4, 5, 3, 2, 1, 2, 6, 5, 4, 3, 3, 2, 1, 1, 3, 3, 3, 4, 2]))