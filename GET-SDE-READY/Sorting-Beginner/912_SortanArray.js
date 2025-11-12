/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray1 = function (nums) {
    if (nums.length == 1) return nums;

    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));
    return merge2SortedArray(left, right);
};

let merge2SortedArray1 = (arr1, arr2) => {
    let i=j=0;
    let m=arr1.length;
    let n=arr2.length;
    let array=[];
    while(i<m || j<n){
        if( j==n|| (i<m && arr1[i]<=arr2[j])){
            array.push(arr1[i]);
            i++;
        }
        else{
            array.push(arr2[j]);
            j++;
        }
    }
    return array;
}


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    let sort = (nums, start, end) => {
        if (start >= end) return;
        let mid = Math.floor((start + end) / 2);
        let left = sort(nums, start, mid);
        let right = sort(nums, mid + 1, end);
        merge2SortedArray(nums, start, mid, end);
        return
    }
    sort(nums, 0, nums.length - 1);
    return nums;

};
let merge2SortedArray = (arr, start, mid, end) => {
    let i = start;
    let j = mid + 1;
    let temp = [];
    while (i < mid + 1 || j < end + 1) {
        if (j == end + 1 || (i < mid + 1 && arr[i] <= arr[j])) {
            temp.push(arr[i]);
            i++;
        }
        else {
            temp.push(arr[j]);
            j++;
        }
    }
    for (let t of temp) {
        arr[start++] = t;
    }
}
console.log(sortArray([5,2,3,1]));