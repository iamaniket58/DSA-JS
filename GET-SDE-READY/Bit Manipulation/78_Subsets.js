/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let ans = [];
    let n = nums.length;
    let totalSubset = 1 << n //n=3 then totalSubset=8
    for (let i = 0; i < totalSubset; i++) {
        let res = [];
        for (let j = 0; j < 32; j++) {
            if (i & (1 << j)) {
                res.push(nums[j])
            }
        }
        ans.push([...res]);
    }
    return ans;
};

function subsets(nums) {
    let n = nums.length;
    let total = 1 << n;   // 2^n
    let ans = [];

    for (let num = 0; num < total; num++) {
        let list = [];
        for (let i = 0; i < n; i++) {
            if (num & (1 << i)) {
                list.push(nums[i]);
            }
        }
        ans.push(list);
    }

    return ans;
}
var subsets = function (nums) {
    let n = nums.length;
    let totalSubset = 1 << n;
    let ans = [];
    for (let i = 0; i < totalSubset; i++) {
        let list = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                list.push(nums[j])
            }
        }
        ans.push(list);

    }
    return ans;
};
// Example
console.log(subsets([1, 2, 3]));
