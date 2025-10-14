/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//Dutch national Flag Algorithm-Nikhil Lohia
var sortColors2 = function (nums) {
    let start = 0;
    let mid = 0;
    let end = nums.length-1;
    while (mid <= end) {
        if (nums[mid] == 0) {
            [nums[start],nums[mid]]=[nums[mid],nums[start]];
            start++;
            mid++;
        }
        else if(nums[mid]==2){
           [nums[mid],nums[end]]=[nums[end],nums[mid]];
            end--;
        }
        else if(nums[mid]==1){
            mid++
        }

    }
};
console.log(sortColors2([2,0,2,1,1,0]))
//Traverse though nums, if 0 is there fill from start, if 2 fill from end, skip1(Dont fill 1). For empty slot in arr, fill with 1. 
var sortColors1 = function (nums) {
    let arr = [];
    let x = 0;
    let y = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) arr[x++] = 0;
        else if (nums[i] == 2) arr[y--] = 2
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == undefined || arr[i] == null) arr[i] = 1
    }
    return arr;
};


//Method1- Using Bubble Sort
var sortColors = function (nums) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
};