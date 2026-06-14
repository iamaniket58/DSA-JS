/**
 * @param {number[]} arr
 * @return {number}
 */
//using Binary Search
var peakIndexInMountainArray = function (arr) {

    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);
        if (arr[mid + 1] > arr[mid]) {
            l = mid + 1
        }
        else {
            r = mid
        }
    }
    return l
}
//🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥- For Understanding level
//Lets do it Ulta- This was not required but lets see if i unsderstand the boundry condition
var peakIndexInMountainArray = function (arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let mid = l + Math.ceil((r - l) / 2);
        if (arr[mid] > arr[mid - 1]) {
            l = mid;
        }
        else {
            r = mid - 1
        }
    }
    return l;
};

//Linear Search
var peakIndexInMountainArray = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) return i
    }
};


var peakIndexInMountainArray = function (arr) {
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i
        }
    }
    return maxIndex;
};