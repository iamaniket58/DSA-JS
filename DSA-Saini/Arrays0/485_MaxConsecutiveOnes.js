/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let ones = 0;
    let maxOnes = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            ones++;
            if (ones > maxOnes) maxOnes = ones;
        }
        else {
            ones = 0;
        }
    }
    return maxOnes==-Infinity?0:maxOnes;
};
var findMaxConsecutiveOnes = function (nums) {
    let currCount = 0;
    let maxCount = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            currCount++;
        }
        else {
            if (currCount > maxCount) maxCount = currCount; //Math.max(maxCount,currCount)
            currCount = 0;
        }
    }
    return maxCount > currCount ? maxCount : currCount; //Math.max(maxCount,currCount)
};
var findMaxConsecutiveOnes = function(nums) {
    let max1=0,counter=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            counter+=1
        }
        else{
            if(counter>max1){ //Math.Max(counter,max1)
                max1=counter;
            }
            counter=0
        }
    }
    return max1>counter?max1:counter  //Math.Max(counter,max1)
};
findMaxConsecutiveOnes([1,1,0,1,1,1])
