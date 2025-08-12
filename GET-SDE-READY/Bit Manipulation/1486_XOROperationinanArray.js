/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    let ans = [];
    for (let i = 0; i < n; i++) {
        ans[i] = start + 2 * i;
    }
    let xorResult = ans[0];
    for (let i = 1; i < n; i++) {
        xorResult = xorResult ^ ans[i]
    }
    return xorResult

};
//Optimized
var xorOperation = function (n, start) {
    let xorResult = start;
    for (let i = 1; i < n; i++) {
        xorResult = xorResult ^ (2 * i + start)
    }
    return xorResult;
};