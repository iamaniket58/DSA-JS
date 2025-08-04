/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
    let l = 0;
    let r = height.length - 1;
    let maxArea = -Infinity;
    while (l < r) {
        let min = height[l] > height[r] ? height[r] : height[l];
        let area = min * (r - l)
        if (area > maxArea) maxArea = area

        if (height[l] < height[r]) l++
        else r--;
    }
    return maxArea;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]))
//Bruite Force- Time limit might gets exceeded
var maxArea1 = function (height) {
    let maxArea = -Infinity;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let min = height[i] > height[j] ? height[j] : height[i]
            let area = min * (j - i);
            if (area > maxArea) maxArea = area;
        }
    }
    return maxArea;
};