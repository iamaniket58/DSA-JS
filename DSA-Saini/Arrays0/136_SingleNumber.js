/**
 * @param {number[]} nums
 * @return {number}
 */
// ✅Approach 1: Sorting
var singleNumber = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i += 2) {
        if (nums[i] != nums[i - 1]) {
            return nums[i - 1];
        }
    }
    return nums[nums.length - 1];
};
// 🏆Approach 2: XOR Method (Best & Expected)
var singleNumber = function (nums) {
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }
    return xor;
};
// ✅Approach 3: Using HashMap / Object
function SingleNumber(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1
    }

    for (let key in obj) {
        if (obj[key] == 1) {
            return Number(key)
        }
    }
}
//console.log(SingleNumber([2, 2, 1]));

//using XOR
function SingleNumberSir(nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i]
    }
    return xor
}
console.log(SingleNumberSir([2, 2, 1]))