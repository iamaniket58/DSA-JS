/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    let count = 0;
    let xor = start ^ goal;
    for (let i = 0; i <= 31; i++) {
        if (xor & (1 << i)) count++
    }
    return count;

};

//Another way- Check 1 in result by binary conversion logic
var minBitFlips = function (start, goal) {

    let count = 0;
    let xor = start ^ goal;
    while (xor > 0) {
        let rem = xor % 2;
        if (rem == 1) count++
        xor = Math.floor(xor / 2);
    }
    return count;
};