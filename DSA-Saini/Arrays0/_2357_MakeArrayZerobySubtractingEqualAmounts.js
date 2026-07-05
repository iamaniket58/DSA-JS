/**
 * @param {number[]} nums
 * @return {number}
 */
//Key Obseravation
// In one operation, you choose a positive number x (the smallest non-zero element) and subtract it from all positive elements.
// Each operation effectively removes one distinct positive value from the array.
// Therefore, the answer is simply the count of distinct non-zero numbers.
var minimumOperations = function (nums) {
    let set = new Set();
    let count = 0;
    for (let num of nums) {
        if (num != 0) {
            if (!set.has(num)) {
                set.add(num);
                count++;
            }
        }

    }
    return count;
};

//Bruite Force Solution
var minimumOperations = function (nums) {
    let min;
    let count = 0;
    while (nums.reduce((a, b) => a + b) != 0) {
        min = Infinity;
        count++;
        for (let num of nums) {
            if (num != 0) {
                min = Math.min(num, min);
            }
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[i] = nums[i] - min;
            }

        }
    }
    return count;

};