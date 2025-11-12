/**
 * @param {number[]} nums
 * @return {number}
 */
//Watch Striver Video Solution for Understanding(https://www.youtube.com/watch?v=0e4bZaP3MDI)
var reversePairs = function (nums) {
    const{count}= sort(nums);
    return count;
};
let sort = (nums) => {
    if (nums.length <= 1) return { arr: nums, count: 0 };
    let mid = Math.floor(nums.length / 2);
    let left = sort(nums.slice(0, mid));
    let right = sort(nums.slice(mid));
    let crossPairs = countPairs(left.arr, right.arr);
    let merged = merge(left.arr, right.arr);
    return { arr: merged, count: crossPairs + left.count + right.count };
};
let merge = (arr1, arr2) => {
    let m = arr1.length;
    let n = arr2.length;
    let i = 0, j = 0;
    let array = [];
    for (let x = 0; x < m + n; x++) {
        if (j == n || (i < m && arr1[i] <= arr2[j])) {
            array[x] = arr1[i++];
        }
        else {
            array[x] = arr2[j++];
        }
    }
    return array;
};
let countPairs = (arr1, arr2) => {
    let count = 0;
    let j = 0;
    for (let i = 0; i < arr1.length; i++) {
        while (j < arr2.length && arr1[i] > arr2[j] * 2) j++
        count += j
    }
    return count;
};
var reversePairs = function(nums) {
    let count=0;
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]>2*nums[j])count++
        }
    }
    return count;
};