/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
//Binary Search- Wroking
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
}
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


//unsloved- linear search-sliding window
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



