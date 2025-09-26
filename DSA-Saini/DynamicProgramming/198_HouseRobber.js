/**
 * @param {number[]} nums
 * @return {number}
 */
//Bottom-Up Iterative Approach
var rob = function (nums) {
    let n = nums.length;
    if (n == 1) return nums[0];
    let dp = [nums[0], Math.max(nums[0], nums[1])];
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[n - 1];
};

//Optimized Approach- Reduced Space Complexity
var rob = function (nums) {
    let n = nums.length;
    if (n == 1) return nums[0];
    let a = nums[0];
    let b = Math.max(nums[0], nums[1]);
    for (let i = 2; i < n; i++) {
        let c = Math.max(a + nums[i], b);
        a = b;
        b = c;
    }
    return b;
};
//Strating Index with 0 will also work
var rob = function (nums) {
    let n = nums.length;
    if (n == 1) return nums[0];
    let a = 0;
    let b = 0;
    for (let i = 0; i < n; i++) {
        let c = Math.max(a + nums[i], b);
        a = b;
        b = c;
    }
    return b;
};



var rob = function (nums) {
    let n = nums.length;
    let maxTotal = 0;
    let recursion = (index, total) => {
        if (index >= n) return;
        if (total > maxTotal) maxTotal = total;
        recursion(index + 2, total + nums[index])
        recursion(index + 3, total + nums[index + 1])
    }
    recursion(0, 0);
    return maxTotal;
};
console.log(rob([2, 7, 3, 1, 4, 2, 1, 8]))