/**
 * @param {number[]} nums
 * @return {number}
 */
//Without Using Set
var thirdMax = function(nums) {
    // nums=[...new Set(nums)]
    let max1=-Infinity;
    let max2=-Infinity;
    let max3=-Infinity;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==max1 || nums[i]==max2 || nums[i]==max3)continue;
        if(nums[i]>max1){
            max3=max2;
            max2=max1;
            max1=nums[i];
        }
        else if(nums[i]>max2){
            max3=max2;
            max2=nums[i];
        }
        else if(nums[i]>max3){
            max3=nums[i];
        }
    }
    return max3==-Infinity?max1:max3;

};


var thirdMax = function(nums) {
    nums=[...new Set(nums)]
    let max1=-Infinity;
    let max2=-Infinity;
    let max3=-Infinity;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max1){
            max3=max2;
            max2=max1;
            max1=nums[i];
        }
        else if(nums[i]>max2){
            max3=max2;
            max2=nums[i];
        }
        else if(nums[i]>max3){
            max3=nums[i];
        }
    }
    return max3==-Infinity?max1:max3;

};