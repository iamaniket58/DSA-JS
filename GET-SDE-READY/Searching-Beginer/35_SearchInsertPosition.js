/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//Using Binary Search
var searchInsert = function(nums, target) {
    let l=0;
    let r=nums.length-1;
    while(l<=r){
        let mid=Math.floor(l+(r-l)/2);
        if(nums[mid]==target)return mid
        if(target>nums[mid]){
            l=mid+1
        }
        else{
            r=mid-1
        }
    }
    return l;
    //return r+1 //This is also correct
};

//Using Linear Search
var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target)return i;
        else if(nums[i]>target)return i;
    }
    return nums.length;
};