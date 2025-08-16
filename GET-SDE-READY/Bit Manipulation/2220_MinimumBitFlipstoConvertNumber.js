var minBitFlips = function (start, goal) {
    let count = 0;
    let xor = start ^ goal;
    for (let i = 0; i <= 31; i++) {
        if (xor & (1 << i)) count++
    }
    return count;
};


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