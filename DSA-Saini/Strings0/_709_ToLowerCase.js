/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    let str = ''
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        // console.log(charCode);
        if (charCode >= 65 && charCode <= 90) {
            str += String.fromCharCode(charCode + 32)
        }
        else {
            str += s[i];
        }
    }
    return str;
};

var toLowerCase = function (s) {
    let str = ''
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);

        str += (charCode >= 65 && charCode <= 90) ? String.fromCharCode(charCode + 32) : s[i];

    }
    return str;
};