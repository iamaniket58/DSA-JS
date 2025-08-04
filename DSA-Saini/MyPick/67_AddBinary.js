/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
//My Solution
var addBinary = function (a, b) {
    let carry = 0;
    let str = ""
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = (+a[i] || 0) + (+b[j] || 0) + carry;
        if (sum == 3) {
            carry = 1;
            str = "1" + str
        }
        else if (sum == 2) {
            carry = 1;
            str = "0" + str;
        }
        else if (sum == 1) {
            carry = 0;
            str = "1" + str
        }
        else if (sum == 0) {
            carry = 0;
            str = "0" + str
        }
        i--;
        j--;
    }
    return str;
};

//GPT
var addBinary = function (a, b) {
    let carry = 0;
    let str = ""
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0 || carry > 0) {
        sum = carry;
        if (i >= 0) {
            sum += (+a[i])
            i--
        }
        if (j >= 0) {
            sum += (+b[j])
            j--
        }

        res = sum % 2
        str = res + str
        carry = Math.floor(sum / 2);
    }
    return str
}
//slight change- Shorthand
var addBinary = function (a, b) {
    let carry = 0;
    let str = ""
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0 || carry > 0) {
        sum = carry;
        if (i >= 0)sum += +a[i--]
        if (j >= 0)sum += +b[j--]
        res = sum % 2
        str = res + str
        carry = Math.floor(sum / 2);
    }
    return str
}









var addBinary = function (a, b) {
    let s = BinaryToDecimal(a) + BinaryToDecimal(b);
    return DecimalToBinary(s)
};

var BinaryToDecimal = (bin) => {
    let sum = 0;
    let m = 1
    for (let i = bin.length - 1; i >= 0; i--) {
        if (+bin[i] == 1) {
            sum = sum + (m)
        }
        m = m * 2;
    }
    return sum
}
var DecimalToBinary = (dec) => {
    str = ""
    while (dec > 1) {
        let x = dec % 2;
        str = x + str + ""
        dec = Math.floor(dec / 2)
    }
    return '1' + str
}
console.log(addBinary("11", "1"))