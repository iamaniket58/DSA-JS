/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    let obj = {};
    for (let s of text) {
        obj[s] = (obj[s] || 0) + 1;
    }
    let min = Infinity;
    let count=0;
    for (let key in obj) {
        if (key == "b" || key == "a" || key == "n") {
            if (obj[key] < min) min = obj[key];
            count++
        }
        else if (key == "l" || key == "o") {
            let val = Math.floor(obj[key] / 2);
            if (val < min) min = val;
            count++
        }
    }
    return (min == Infinity || count!=5) ? 0 : min;
};


var maxNumberOfBalloons = function (text) {
    let obj = {};
    for (let s of text) {
        obj[s] = (obj[s] || 0) + 1;
    }
    return Math.min(
        obj["b"] || 0,
        obj["a"] || 0,
        Math.floor(obj["l"] / 2) || 0,
        Math.floor(obj["o"] / 2) || 0,
        obj["n"] || 0
    )
};