/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//Optimized
var nextPermutation = function (nums) {
    let n = nums.length;
    let pivot = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            pivot = i;
            break;
        }
    }
    if (pivot >= 0) {
        let j=n-1;
        while(nums[j]<=nums[pivot]){
            j--;
        }
        let temp = nums[pivot];
        nums[pivot] = nums[j];
        nums[j] = temp
    }
    reverse(nums, pivot + 1)
};

let reverse = (arr, index) => {
    let start = index;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}


//My Solution- First swap logic went incorrect for few usecases
var nextPermutation = function (nums) {
    let n = nums.length;
    let pivot = -1;
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            pivot = i;
            break;
        }
    }
    if(pivot==-1){
        
        reverse_(nums,0);
        console.log("ddddddddddd")
        return;
    }
    // console.log(pivot)
    // [nums[pivot], nums[n - 1]] = [nums[n - 1], nums[pivot]];
    let temp = nums[pivot];
    nums[pivot] = nums[n - 1];
    nums[n - 1] = temp
    console.log(nums)
    // return [...nums.slice(0, pivot + 1), ...reverse(nums.slice(pivot + 1))]
    reverse_(nums, pivot + 1)
};
let reverse_ = (arr, index) => {
    let start = index;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
    }
}
//revisit the boundries
let reverse0 = (arr, index,) => {
    let n = arr.length;
    for (let i = index; i <index+ Math.floor((n - index) / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[n - i + i - 1];
        arr[n - i + i - 1] = temp;
    }
    return arr;
}



//Bruite Force
var nextPermutation1 = function (nums) {
    let input = [...nums];
    nums.sort((a, b) => a - b);
    let result = [];
    let used = new Array(nums.length).fill(false);
    let backtrack = (path) => {
        if (path.length == nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;
            path.push(nums[i]);
            used[i] = true;
            backtrack(path);
            path.pop();
            used[i] = false;
        }
    }
    backtrack([]);
    // console.log(result);
    let matchedIndex = 0;
    for (let i = 0; i < result.length; i++) {
        let j = 0
        for (; j < input.length; j++) {
            if (input[j] != result[i][j]) {
                break;
            }
        }
        if (j == input.length) matchedIndex = i
    }
    // console.log(matchedIndex);
    return result[matchedIndex + 1] ?? result[0];
};




// console.log(nextPermutation([1, 2, 3]));
console.log(nextPermutation([3, 2, 1]));
// console.log(nextPermutation([1, 1, 5]));
// console.log(nextPermutation([1, 3, 5, 4, 2]));
// console.log(nextPermutation([1, 2, 3, 6, 5, 4]));