/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
/*
Sliding Window approach.
Since all numbers are positive, expanding the window increases the sum
and shrinking it decreases the sum.

We move `end` to expand the window until sum >= target.
Once valid, we shrink from `start` to find the minimum length subarray
while maintaining sum >= target.

Time Complexity: O(n) — each element is added and removed at most once.
Space Complexity: O(1) — constant extra space.
*/
//Best test Case to practise: ar==[1,2,3,1,1,1,4,7,8,3] target=10
var minSubArrayLen = function(target, nums) {
    let start=end=0;
    let sum=0;
    let minLength=Infinity;
    while(end<nums.length){
        sum+=nums[end];
        if(sum<target)end++;
        else{
            while(sum>=target){
                minLength=Math.min(minLength,(end-start+1));
                sum-=nums[start];
                start++
            }
            end++;
        }
    }
    return minLength==Infinity?0:minLength;
};
//Same as above
var minSubArrayLen = function (target, nums) {
    let start = end = 0;
    let sum = 0;
    let minLength = Infinity;
    while (end < nums.length || sum>=target) {

        if (sum < target) {
            sum += nums[end];
            end++;
        }
        else {
            minLength = Math.min(minLength, (end - start ));
            sum -= nums[start];
            start++
        }
    }
    return minLength == Infinity ? 0 : minLength;
};

//Chat GPT Solution- Best
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return minLength == Infinity ? 0 : minLength;
};

//Better way of writing Bruite-Force
var minSubArrayLen = function (target, nums) {
    let minLength = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let total = 0;
        for (let j = i; j < nums.length; j++) {
            total += nums[j];
            if (total >= target) {
                if ((j - i + 1) < minLength) minLength = (j - i + 1);
                break;
            }
        }
    }
    return minLength == Infinity ? 0 : minLength;
};

//Bruite-Force
var minSubArrayLen = function (target, nums) {
    let minLength = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let total = nums[i];
        if (total >= target) return 1;
        for (let j = i + 1; j < nums.length; j++) {
            total += nums[j];
            if (total >= target) {
                if ((j - i + 1) < minLength) minLength = (j - i + 1);
                break;
            }
        }
    }
    return minLength == Infinity ? 0 : minLength;
};

//Bruite Foce
var minSubArrayLen = function(target, nums) {
    let minLength=Infinity;
    for(let i=0;i<nums.length;i++){
        let subArraySum=0;
        for(let j=i;j<nums.length;j++){
            subArraySum+=nums[j]
            if(subArraySum>=target){
                minLength=Math.min(minLength,(j-i+1));
                break;
            }
        }
    }
    return minLength==Infinity?0:minLength;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))


