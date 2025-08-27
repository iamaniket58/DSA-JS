/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let downfallCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] && nums[i] > nums[i + 1]) {
            downfallCount++
            if (downfallCount > 1) return false;
            continue;
        }

        if (downfallCount > 0) {
            if (nums[i] > nums[0]) return false
        }
    }
    return true;
};

//Sir' Method
var check = function (nums) {
    let flag = false;
    for (let i = 0; i < nums.length; i++) {
        if (!flag) {
            if (nums[i] > nums[i + 1]) {
                flag = true;
            }
        }
        else {
            if (nums[i] > nums[i + 1]) return false; //there should not be any 2'nd downfall
            if (nums[0] < nums[i]) return false;
        }
    }
    return true;
};

//GPT
var check = function (nums) {
    let count=0;
    let n=nums.length;
    for(let i=0;i<n;i++){
        if (nums[i] > nums[(i + 1) % n]) {
            count++;
        }
    }
    return count<=1
};
