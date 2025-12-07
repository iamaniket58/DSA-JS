/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//Bruite-Force
var subarraySum = function (nums, k) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum == k) count++;
        }
    }
    return count;
};

//Optimized- This is so cruicial, Please understand this algorithm
var subarraySum = function (nums, k) {
    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);
    for (let num of nums) {
        sum += num;
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
};




//Tried hard with This Approach(Array Expand and Shrink) but sadly it works only for +ve numbers.😟
//Failed Test case nums = [1, -1, 1], k = 1
var subarraySum = function (nums, k) {
    let count = 0;
    let left = 0;
    let right = 0;
    let sum = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (left <= right && sum > k) {
            if (nums[left] < 0) nums[left] * -1
            sum -= nums[left];
            left++;
        }
        if (sum == k && left <= right) {
            count++;
        }
    }
    return count;
};