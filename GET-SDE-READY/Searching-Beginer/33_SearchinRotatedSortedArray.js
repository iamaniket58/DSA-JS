/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0;
    let r=nums.length-1;
    while(l<=r){
        let m=l+Math.floor((r-l)/2);
        if(nums[m]==target)return m
        if(nums[l]<=nums[m]){// Left Sorted
            if(target<nums[m] && target>=nums[l]){
                r=m-1;
            }
            else{
                l=m+1
            }
        }
        else{ //Right Sorted
            if(target>nums[m] && target<=nums[r]){
                l=m+1;
            }
            else{
                r=m-1
            }
        }
    }
    return -1;
};