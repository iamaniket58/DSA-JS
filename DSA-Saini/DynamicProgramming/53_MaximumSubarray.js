/**
 * @param {number[]} nums
 * @return {number}
 */
//Kadane's Algorithm
var maxSubArray = function(nums) {
    let currSum=nums[0];
    let maxSum=nums[0];
    for(let i=1;i<nums.length;i++){
        currSum=Math.max(currSum+nums[i],nums[i]);
        if(currSum>maxSum){
            maxSum=currSum;
        }
    }
    return maxSum;
};

//Bruite Force Approach- Find sum of all the Subarray
var maxSubArray = function(nums) {
    let maxSum=-Infinity;
    let n=nums.length;
    for(let i=0;i<n;i++){
        let sum=0
        for(j=i;j<n;j++){
            sum+=nums[j];
            if(sum>maxSum)maxSum=sum
        }
    }
    return maxSum;
};