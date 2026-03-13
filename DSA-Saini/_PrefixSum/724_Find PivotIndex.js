/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let n = nums.length;
    let prefixSum = [0];
    let suffixSum = [];
    suffixSum[n - 1] = 0;
    for (let i = 1; i < n; i++) {
        prefixSum[i] = nums[i - 1] + prefixSum[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        suffixSum[i] = nums[i + 1] + suffixSum[i + 1];
    }

    for (let i = 0; i < n; i++) {
        if (prefixSum[i] == suffixSum[i]) return i;
    }
    return -1;
};


var pivotIndex = function (nums) {
    let n = nums.length;
    let prefixSum = [0];
    let suffixSum = [];
    suffixSum[n - 1] = 0;

    for (let i = n - 2; i >= 0; i--) {
        suffixSum[i] = nums[i + 1] + suffixSum[i + 1];
    }
    if (suffixSum[0] == 0) return 0; //Edge Case for this test case [2,1,-1]
    for (let i = 1; i < n; i++) {
        prefixSum[i] = nums[i - 1] + prefixSum[i - 1];
        if (prefixSum[i] == suffixSum[i]) return i;
    }
    console.log(suffixSum)
    return -1;
};