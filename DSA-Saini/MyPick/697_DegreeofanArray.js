/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let count = new Map();
    let first = new Map();
    let last = new Map();

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (!first.has(num)) {
            first.set(num, i)
        }
        count.set(num, (count.get(num) || 0) + 1);
        last.set(num, i);
    }
    let degree = Math.max(...count.values());
    let minLength = nums.length;
    for (let [num, freq] of count.entries()) {
        if (freq == degree) {
            let len = last.get(num) - first.get(num) + 1;
            minLength = Math.min(minLength, len);
        }
    }
    return minLength;

};