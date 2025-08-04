
/**
 * @param {number[]} nums
 * @return {number}
 */
//Find the Count, if count>n/2 its answer
var majorityElement = function (nums) {
    //Store count in the Object and return if it is more than more than half of length
    obj={}
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1
        if(obj[nums[i]]>(nums.length)/2){
            return nums[i]
        }
    }
};
//Sort the array, the mid must be the answer
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};
