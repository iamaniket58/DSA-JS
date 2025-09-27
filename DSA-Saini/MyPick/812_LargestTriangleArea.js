/**
 * @param {number[][]} points
 * @return {number}
 */
//Pick 3 cordinates and Area=1/2*(x1 * (y2 - y3) + x2 * (y3-y1) + x3 * (y1 - y2))
var largestTriangleArea = function (points) {
    let n = points.length;
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        let [x1, y1] = points[i];
        for (let j = i + 1; j < n; j++) {
            let [x2, y2] = points[j];
            for (let k = j + 1; k < n; k++) {
                let [x3, y3] = points[k];
                let area = Math.abs(x1 * (y2 - y3) + x2 * (y3-y1) + x3 * (y1 - y2)) / 2;
                if (area > maxArea) {
                    maxArea = area;
                }
            }
        }
    }
    return maxArea;
};
console.log(largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]))
