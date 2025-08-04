/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    let high = -1;
    let shigh = -1;
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(Number(s[i]))) {
            if (+s[i] > high) {
                shigh = high;
                high = +s[i];
            }
            else {
                if (+s[i] > shigh && +s[i] < high) {
                    shigh = +s[i]
                }
            }

        }
    }
    return shigh
};

console.log(secondHighest("ck077"))