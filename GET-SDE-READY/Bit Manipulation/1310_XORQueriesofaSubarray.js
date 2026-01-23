/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
// Optimized Approach using Prefix XOR
// Idea: Precompute prefix XOR so that XOR of any range [L, R]
// can be found in O(1) time using:
// prefix[R] ^ prefix[L - 1]   (if L > 0)
// prefix[R]                   (if L == 0)
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

//Brite Force Approach- take each range from queries array and compute XOR from nums array
//Time Limit Exceeded
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

var xorQueries = function (arr, queries) {
    let array = [];
    for (let i = 0; i < queries.length; i++) {
        let q1 = queries[i][0];
        let q2 = queries[i][1];
        let xor = 0;
        for (let j = q1; j <= q2; j++) {
            xor = xor ^ arr[j];
        }
        array.push(xor)
    }
    return array;
};
