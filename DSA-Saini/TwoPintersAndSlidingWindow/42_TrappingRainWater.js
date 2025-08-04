/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    //Calculate maxL- Maximum so far in the array
    let maxL = [];
    maxL[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        if (height[i] > maxL[i - 1]) {
            maxL[i] = height[i]
        }
        else {
            maxL[i] = maxL[i - 1]
        }
    }
    //Calculate maxR- Maximum so far frpm the right of the array
    let maxR = [];
    maxR[height.length - 1] = height[height.length - 1]
    for (let i = height.length - 2; i >= 0; i--) {
        if (height[i] > maxR[i + 1]) {
            maxR[i] = height[i]
        }
        else {
            maxR[i] = maxR[i + 1]
        }
    }
    let count = 0
    for (let i = 0; i < height.length; i++) {
        let min = Math.min(maxL[i], maxR[i]);
        let val = min - height[i];
        if (val > 0) count += val
    }
    return count;
};

//calculate maxL and maxR using same loop
var trap = function (height) {
    //Calculate maxL- Maximum so far in the array
    let maxL = [];
    maxL[0] = height[0];
    let maxR = [];
    maxR[height.length - 1] = height[height.length - 1]
    for (let i = 1; i < height.length; i++) {
        if (height[i] > maxL[i - 1]) {
            maxL[i] = height[i]
        }
        else {
            maxL[i] = maxL[i - 1]
        }
        if (height[height.length - 1 - i] > maxR[height.length - i]) {
            maxR[height.length - 1 - i] = height[height.length - 1 - i]
        }
        else {
            maxR[height.length - 1 - i] = maxR[height.length - i]
        }
    }
    for (let i = height.length - 2; i >= 0; i--) {

    }
    let count = 0
    for (let i = 0; i < height.length; i++) {
        let min = Math.min(maxL[i], maxR[i]);
        let val = min - height[i];
        if (val > 0) count += val
    }
    return count;
};