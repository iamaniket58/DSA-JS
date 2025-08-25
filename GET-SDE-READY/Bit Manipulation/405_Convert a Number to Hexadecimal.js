/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    if (num == 0) return "0"
    // let hex=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    let hex = "0123456789abcdef";
    let str = "";
    // num >>>= 0; -- One way of converting -ve to hexadecimal
    if (num < 0) {
        num = Math.pow(2, 32) + num;
    }
    while (num > 0) {
        let rem = num % 16;
        str = hex[rem] + str;
        num = Math.floor(num / 16)
    }
    return str;
};

var toHex = function (num) {
    if (num == 0) return "0";
    let str = "";
    if (num < 0) {
        num = Math.pow(2, 32) + num;
    }
    while (num > 0) {
        let rem = num % 16;
        if (rem >= 10) {
            str=String.fromCharCode(rem+87)+str;
        }
        else {
            str = hrem + str;

        }
        num = Math.floor(num / 16)
    }
    return str;
};

