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
insert([[1,3],[6,9]],[2,5])

