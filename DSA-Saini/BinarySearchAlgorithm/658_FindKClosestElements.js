/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
//Binary Search- Working
//Search the starting point of the window
var findClosestElements = function (arr, k, x) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);
        if (x - arr[mid] > arr[mid + k] - x) {
            l = mid + 1;
        }
        else {
            r = mid;
        }
    }
    return arr.slice(l, l + k)
};

//Failed Test Case- [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4]
var findClosestElements = function (arr, k, x) {
    //Binary Search to find the starting point of the window
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);
        if (Math.abs(x - arr[mid]) > Math.abs(x - arr[mid + k])) {
            l = mid + 1;
        }
        else {
            r = mid;
        }
    }
    return arr.slice(l, l + k);

};
//using Binary Search-Most efficient- Math.abs is not working as expected
var findClosestElements = function (arr, k, x) {

    //Binary Search
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);

        let p = Math.abs(arr[mid] - x);
        let q = Math.abs(arr[mid + k] - x);
        if (Math.abs(arr[mid] - x) > Math.abs(arr[mid + k] - x)) {
            l = mid + 1;
        }
        else {
            r = mid
        }
    }
    return arr.slice(l, l + k)
};

console.log(findClosestElements([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4], 4, 3))

//using two poinetrs in Linear search- ChatGpt
var findClosestElements1 = function (arr, k, x) {
    let l = 0;
    let r = arr.length - 1;
    while (r - l >= k) {
        if (Math.abs(arr[l] - x) > Math.abs(arr[r] - x)) {
            l++;
        }
        else {
            r--
        }
    }
    return arr.slice(l, r + 1)
};
//Revision
//Bruite Force
// Compute absolute difference of each element from x, sort by closeness, pick the k nearest elements, then restore their original order and return the values.
var findClosestElements = function (arr, k, x) {
    let diff = [];
    for (let i = 0; i < arr.length; i++) {
        diff.push([Math.abs(arr[i] - x), arr[i], i])
    }
    // console.log(diff);
    diff.sort((a, b) => a[0] - b[0]);
    // console.log(diff);
    let ans = [];
    for (let i = 0; i < k; i++) {
        ans.push([diff[i][1], diff[i][2]]);
    }
    // console.log(ans);
    return ans.sort((a, b) => a[1] - b[1]).map(x => x[0]);
};

//unsloved- linear search-sliding window- Sir asks to do this Method
var findClosestElements2 = function (arr, k, x) {
    let l = 0;
    let r = k - 1;
    while (r + 1 < arr.length) {
        if (Math.abs(arr[l] - x) >= Math.abs(arr[r + 1] - x)) {
            l++;
            r++;
        }
        else {
            break;
        }
    }
    return arr.slice(l, r + 1)
};

//This also is unsolved
var findClosestElements3 = function (arr, k, x) {
    if (arr.length == 1) return arr
    for (let i = 0; i < arr.length; i++) {
        let p = Math.abs(x - arr[i])
        let q = Math.abs(x - arr[i + k])
        if (q >= p) {
            return arr.slice(i, k + i)
        }
    }
};



