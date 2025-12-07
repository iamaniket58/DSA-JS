/**
 * @param {number[]} arr
 * @return {number[][]}
 */

//Optimized Approach- My Solution
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b);
    let minabsLength = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        let diff = Math.abs(arr[i] - arr[i+1]);
        if (diff < minabsLength) minabsLength = diff;
    }
    console.log(minabsLength)
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - arr[i+1]);
        if(diff==minabsLength)result.push([arr[i],arr[i+1]])
    }
    return result;

};
//Without using Math.abs
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b);
    let minabsLength = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        let diff = arr[i + 1] - arr[i];
        if (diff < minabsLength) minabsLength = diff;
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let diff = arr[i + 1] - arr[i];
        if (diff == minabsLength) result.push([arr[i], arr[i + 1]])
    }
    return result;

};

//Bruite Force
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b);
    let minabsLength = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        let diff = Math.abs(arr[i] - arr[i+1]);
        if (diff < minabsLength) minabsLength = diff;
    }
    console.log(minabsLength)
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j) continue;
            if (arr[i] < arr[j]) {
                let diff = Math.abs(arr[i] - arr[j]);
                if (diff == minabsLength) {
                    result.push([arr[i], arr[j]]);
                }
            }
        }
    }
    return result;

};

//Not Working
var minimumAbsDifference = function (arr) {
    let minabsLength = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let diff = Math.abs(arr[i] - arr[j]);
            //minabsLength = minabsLength < diff ? minabsLength : diff; This is also correct
            if (diff < minabsLength) minabsLength = diff;
        }
    }
    console.log(minabsLength)
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j) continue;
            if (arr[i] < arr[j]) {
                let diff = Math.abs(arr[i] - arr[j]);
                if (diff == minabsLength) {
                    result.push([arr[i], arr[j]]);
                }
            }
        }
    }
    return result;

};
console.log(minimumAbsDifference([4, 2, 1, 3]))