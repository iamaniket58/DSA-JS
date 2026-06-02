/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
//Revision
var dailyTemperatures = function (temperatures) {
    let ans = [];
    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                ans[i] = j - i;
                break;
            }
        }
        if(!ans[i])ans[i]=0;
    }
    return ans;
};

//Without using Stack
var dailyTemperatures = function (temperatures) {
    let arr = [];
    for (let i = 0; i < temperatures.length; i++) {
        let count = 0;
        let found = false
        for (let j = i + 1; j < temperatures.length; j++) {
            count++;
            if (temperatures[j] > temperatures[i]) {
                arr[i] = count;
                found = true;
                break;
            }
        }
        if (!found) arr[i] = 0
    }
    return arr
};