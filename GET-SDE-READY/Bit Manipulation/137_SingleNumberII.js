/**
 * @param {number[]} nums
 * @return {number}
 */
//non-intutive solution
var singleNumber = function (nums) {
    let ones = 0, twos = 0;
    for (let num of nums) {
        ones = (ones ^ num) & (~twos);
        twos = (twos ^ num) & (~ones);
    }
    return ones
}
//Finds the element that appears only once in an array where every other element appears exactly three times
var singleNumber = function (nums) {
    let ans = 0
    for (let i = 0; i < 32; i++) {
        let count = 0
        for (let num of nums) {
            if (num & (1 << i)) count++  // count how many numbers have the i-th bit set
        }
        if (count % 3 == 1) {
            ans = ans | (1 << i)
        }
    }
    return ans
};
//Sort the array, jump 3 steps and check
var singleNumber = function (nums) {

    arr = nums.sort((a, b) => a - b);
    let i = 1;
    while (i < arr.length) {
        if (!(arr[i] == arr[i - 1] && arr[i] == arr[i + 1])) {
            return arr[i - 1]
        }
        i += 3
    }
    return arr[arr.length - 1]
};
//Using Map/Object
var singleNumber = function (nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1;
    }
    console.log(obj)
    for (let [key, value] of Object.entries(obj)) {
        if (value == 1) return +key
    }
};

