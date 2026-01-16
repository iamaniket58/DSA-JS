/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    let str = ''
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '#') {
            let val = +(s[i - 2] + s[i - 1]);
            // console.log(val);
            let k = String.fromCharCode(val + 96);
            str = k + str;
            i -= 2
        }
        else {
            let k = String.fromCharCode(+s[i] + 96);
            // console.log(k)
            str = k + str;
        }
    }
    return str;
};