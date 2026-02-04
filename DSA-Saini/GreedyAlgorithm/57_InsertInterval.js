/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let n = intervals.length;
    let ans = [];

    let i = 0;
    //Left Non-Overlapping Interval
    while (i < n && intervals[i][1] < newInterval[0]) {
        ans.push(intervals[i]);
        i++;
    }

    //Overlapping Intervals
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    ans.push(newInterval)

    //Right Non-Overlapping Intervals
    while (i < n) {
        ans.push(intervals[i]);
        i++;
    }
    return ans;
};
// Not-Working
var insert1 = function (intervals, newInterval) {
    if (intervals.length == 0) return [newInterval]
    let ans = [];
    let isIntervalUsed = false;
    for (let i = 0; i < intervals.length; i++) {
        let n = ans.length - 1
        if (i > 0 && intervals[i][0] >= ans[n][0] && intervals[i][1] <= ans[n][1]) {
            continue;
        }
        if (i > 0 && intervals[i][0] >= ans[n][0] && intervals[i][0] <= ans[n][1]) {
            if (intervals[i][1] > ans[n][1]) {
                ans[n][1] = intervals[i][1];
                continue;
            }
        }

        if (newInterval[0] >= intervals[i][0] && newInterval[0] <= intervals[i][1]) {
            isIntervalUsed = true;
            if (newInterval[1] > intervals[i][1]) {
                ans.push([intervals[i][0], newInterval[1]]);

            }
            else {
                ans.push(intervals[i]);
            }
        }
        else {
            ans.push(intervals[i]);
        }
    }
    if (!isIntervalUsed) ans.push(newInterval)
    return ans;
};
// important test cases
console.log([[1, 3], [6, 9]], [2, 5]);
console.log([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]);
console.log([], [5,7]);
console.log([[1,5]], [6,8]);
console.log([[1,5]], [0,3]);
console.log([[2,3],[5,7]], [0,6]);

//Revision- ALl test cases will not pass
var insert = function (intervals, newInterval) {
    if (intervals.length == 0) return [newInterval];
    let array = [];
    let merged = false;
    for (let i = 0; i < intervals.length; i++) {
        if (!merged && ((newInterval[0] >= intervals[i][0] && newInterval[0] <= intervals[i][1]) || (newInterval[1] >= intervals[i][0] && newInterval[1] <= intervals[i][1]))) {
            array.push([Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]);
            merged = true;
        }

        else if (merged && (intervals[i][0] >= array[array.length - 1][0] && intervals[i][0] <= array[array.length - 1][1] || intervals[i][1] >= array[array.length - 1][0] && intervals[i][1] <= array[array.length - 1])) {
            let [start, end] = array.pop();
            array.push([Math.min(intervals[i][0], start), Math.max(intervals[i][1], end)]);
        }
        else {
            array.push(intervals[i])
        }
    }
    if (!merged) array.push(newInterval)
    console.log(array);
    return array;
};
insert([[1, 3], [6, 9]], [2, 5])

