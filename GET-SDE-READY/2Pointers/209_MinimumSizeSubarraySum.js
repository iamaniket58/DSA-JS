/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
//Chat GPT Solution- Best
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return minLength == Infinity ? 0 : minLength;
};

//Better way of writing Bruite-Force
var minSubArrayLen = function (target, nums) {
    let minLength = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let total = 0;
        for (let j = i; j < nums.length; j++) {
            total += nums[j];
            if (total >= target) {
                if ((j - i + 1) < minLength) minLength = (j - i + 1);
                break;
            }
        }
    }
    return minLength == Infinity ? 0 : minLength;
};

//Bruite-Force
var minSubArrayLen = function (target, nums) {
    let minLength = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let total = nums[i];
        if (total >= target) return 1;
        for (let j = i + 1; j < nums.length; j++) {
            total += nums[j];
            if (total >= target) {
                if ((j - i + 1) < minLength) minLength = (j - i + 1);
                break;
            }
        }
    }
    return minLength == Infinity ? 0 : minLength;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))


