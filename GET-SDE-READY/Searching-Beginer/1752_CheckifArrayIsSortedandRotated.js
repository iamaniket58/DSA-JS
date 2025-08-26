/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let downfallCount=0;
    for(let i=0;i<nums.length;i++){
        if( nums[i+1] && nums[i]>nums[i+1]){
            downfallCount++
            if(downfallCount>1)return false;
            continue;
        }
        
        if(downfallCount>0){
            if(nums[i]>nums[0])return false
        }
    }
    return true;
};