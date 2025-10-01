/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    nums.sort((a, b) => b - a);
    let maxPerimeter = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        // if (nums[i + 1] + nums[i + 2] > nums[i] && nums[i] + nums[i + 2] > nums[i + 1] && nums[i] + nums[i + 1] > nums[i + 2]) {
        if(nums[i + 1] + nums[i + 2] > nums[i]){
            let perimeter = nums[i] + nums[i + 1] + nums[i + 2];
            if (perimeter > maxPerimeter) {
                maxPerimeter = perimeter
            }
        }
    }
    return maxPerimeter;
};

//GPT Solution
var largestPerimeter = function(nums) {
    nums.sort((a, b) => b - a); // sort descending
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i+1] + nums[i+2] > nums[i]) {
            return nums[i] + nums[i+1] + nums[i+2];
        }
    }
    
    return 0;
};

console.log(largestPerimeter([2, 1, 2]))