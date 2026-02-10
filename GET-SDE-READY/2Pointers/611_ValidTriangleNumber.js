/**
 * @param {number[]} nums
 * @return {number}
 */
// Bruite Force- tiem Limit Exceeded
var triangleNumber = function(nums) {
    let n=nums.length;
    let triplets=0;
    for(let i=0;i<n-2;i++){
        for(let j=i+1;j<n-1;j++){
            for(let k=j+1;k<n;k++){
                if((nums[i]+nums[j]>nums[k]) && (nums[j]+nums[k]>nums[i]) && (nums[k]+nums[i]>nums[j]))triplets++
            }
        }
    }
    return triplets;
};