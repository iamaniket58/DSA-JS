/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let inc=false;
    let desc=false;
    for(let i=1;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            inc=true;
        }
        if(nums[i]<nums[i-1]){
            desc=true;
        }
    }
    if(inc && desc)return false;
    return true;
};

//Chat-GPT
var isMonotonic = function (nums) {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            increasing = false;
        }

        if (nums[i] > nums[i - 1]) {
            decreasing = false;
        }
    }

    return increasing || decreasing;
};