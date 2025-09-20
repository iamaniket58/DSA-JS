/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let arr=[intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < arr[arr.length-1][1]) {
            count++;
        }
        else{
            arr.push(intervals[i])
        }
    }
    return count;
};

//Space-Optimized- Instead of making entire array, we can just store the previous
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let prev=intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prev[1]) {
            count++;
        }
        else{
            prev=intervals[i];
        }
    }
    return count;
};

//Sir's Method
//Further Space Optimized- Store only end in k
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let k=-Infinity;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] < k) {
            count++;
        }
        else{
            k=intervals[i][1];
        }
    }
    return count;
};