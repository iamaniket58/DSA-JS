/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
//Brite Force Approach- take each range from queries array and compute XOR from nums array
var xorQueries = function (nums, queries) {
    let ans = [];
    for (let [start, end] of queries) {
        let xor = 0
        for (let i = start; i <= end; i++) {
            xor ^= nums[i]
        }
        ans.push(xor)
    }
    return ans;
};

//Solve with Optimized
var xorQueries = function (nums, queries) {
    let arr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        arr[i] = nums[i] ^ arr[i - 1]
    }
    let ans = []
    for (let [start, end] of queries) {
        if (start == 0) {
            ans.push(arr[end])
        }
        else {
            ans.push(arr[end] ^ arr[start - 1])
        }
    }
    return ans;
};