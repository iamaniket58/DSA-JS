/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romanMap = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let digitMap = { 'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90, 'CD': 400, 'CM': 900 };

    let i = 0;
    let ans = 0;
    while (i < s.length) {
        if (i < s.length - 1) {
            let char = s[i] + s[i + 1];
            console.log(char)
            if (digitMap[char]) {
                ans += digitMap[char];
                i += 2;

            }
            else {
                ans += romanMap[s[i]];
                i += 1;
            }

        }
        else {
            ans += romanMap[s[i]];
            i++;
        }

    }
    return ans;
};

var romanToInt = function (s) {
    let map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let current = map[s[i]];
        let next = map[s[i + 1]];
        if (current < next) {
            total -= current;
        }
        else {
            total += current;
        }
    }
    return total;
};