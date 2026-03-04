/**
 * @param {number[]} nums
 * @return {number}
 */
//✅ Approach 1: Store it in a Set and then find
var missingNumber = function (nums) {
    let n = nums.length;
    let set = new Set(nums);
    for (let i = 0; i <= n; i++) {
        if (!set.has(i)) return i
    }
};

//✅ Approach 2: Using Mathematical Formula (Best & Cleanest)
var missingNumber = function (nums) {
    let n = nums.length;
    let totalSum = (n * (n + 1)) / 2;
    let arraySum = 0;
    for (let i = 0; i < n; i++) {
        arraySum += nums[i];
    }
    return totalSum - arraySum;
};

//Chat-GPT
var missingNumber = function (nums) {
    let n = nums.length;
    let expectedSum = n * (n + 1) / 2;

    let actualSum = 0;
    for (let num of nums) {
        actualSum += num;
    }

    return expectedSum - actualSum;
};
// ✅ Approach 3: XOR Method (Very Interview Favorite)
var missingNumber = function (nums) {
    let n = nums.length;
    let xor = 0;
    for (let i = 0; i <= n; i++) {
        xor = xor ^ i;
    }
    for (let num of nums) {
        xor = xor ^ num;
    }
    return xor;
};
// ✅ Approach 4: Sorting (Not Optimal)
nums.sort((a,b) => a-b);

for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
        return i;
    }
}

return nums.length;

//console.log(missingNumber([3,0,1]))
//Best Solution
var missingNumberSir = function (nums) {
    //Sum=(n*(n+1)/2)
    let arrayLength = nums.length
    let totalSum = arrayLength * (arrayLength + 1) / 2
    let arraySum = 0;
    for (let i = 0; i < arrayLength; i++) {
        arraySum += nums[i];
    }
    return totalSum - arraySum;
};
console.log(missingNumberSir([3, 0, 1]))



//Least Optimal Solution
var missingNumberLeastOptimal = function (nums) {
    for (let i = 0; i <= nums.length; i++) {
        if (!nums.includes(i)) return i
    }
}


var missingNumber = function (nums) {
    let array = [];
    for (let i = 0; i <= nums.length; i++) {
        array[i] = i
    }
    for (let i = 0; i < array.length; i++) {
        if (!nums.includes(array[i])) {
            return array[i];
        }
    }
};