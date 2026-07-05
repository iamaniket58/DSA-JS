/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let max = -Infinity;
    let max2 = -Infinity;
    for (let num of nums) {
        if (num > max) {
            max2 = max;
            max = num;
        }
        else if (num > max2) max2 = num;
    }
    return (max - 1) * (max2 - 1);
};