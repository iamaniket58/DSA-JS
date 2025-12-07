//You are given an array of positive no. and a target. Tell me the min size of the array whose sum is equals to target.
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            if (sum == target) minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return minLength == Infinity ? 0 : minLength;
};

//Or the above code can also be rewritten as
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum > target) {
            sum -= nums[left];
            left++;
        }
        if (sum == target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return minLength == Infinity ? 0 : minLength;
};

//followUp: print all the elements of subarray which matches the target
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            if (sum == target) {
                if((right-left+1)<minLength){
                    minLength=right-left+1;
                    start=left;
                    end=right;
                }
            }
            sum -= nums[left];
            left++;
        }
    }
    if(minLength==Infinity){
        console.log("No subarray found with the given target.");
    }
    else{
        console.log("Minimum length subarray: ",nums.slice(start,end+1));
    }
    return minLength == Infinity ? 0 : minLength;
};