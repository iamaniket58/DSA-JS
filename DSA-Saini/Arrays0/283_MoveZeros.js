/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            let temp = nums[x];
            nums[x] = nums[i];
            nums[i] = temp;
            x++;
        }
    }
};
//This is sir's Solution without Swapping
var moveZeroes = function (nums) {
    let i = j = 0;
    while (i < nums.length) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            j++;
        }
        i++;
    }
    // for(let k=j;k<nums.length;k++){ //Both for and while loop is doing the same thing.
    //     nums[k]=0;
    // }
    while (j < nums.length) {
        nums[j++] = 0
    }
};

//This is my solution- same as above
function MoveZeros(nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[x] = nums[i]
            x += 1
        }
    }

    if (x <= nums.length - 1) {
        for (let i = x; i < nums.length; i++) {
            nums[i] = 0;
        }
    }
    return nums
}
//Basic Solution
var moveZeroes = function (nums) {
    let i = 0;
    let j = 0;
    while (i < nums.length) {
        if (nums[i] != 0) {
            if (i == j) {
                i++;
                j++;
                continue;
            }
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
        else {
            i++;
        }
    }

};
// console.log(MoveZeros1([0,1,0,3,12]))