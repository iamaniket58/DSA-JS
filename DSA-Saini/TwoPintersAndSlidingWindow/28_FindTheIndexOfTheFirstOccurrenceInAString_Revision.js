/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let m = haystack.length;
    let n = needle.length;
    for (let i = 0; i < m - n + 1; i++) {
        let substring = haystack.slice(i, i + n);
        if (substring == needle) return i;
    }
    return -1;
};

var strStr = function (haystack, needle) {
    let m = haystack.length;
    let n = needle.length;
    for (let i = 0; i < m - n + 1; i++) {
        for (var j = 0; j < n; j++) {
            if (needle[j] != haystack[i + j]) {
                break;
            }
        }
        if (j == needle.length) return i;
    }
    return -1;
};

var strStr = function (haystack, needle) {
    let m = haystack.length;
    let n = needle.length;
    for (let i = 0; i < m - n + 1; i++) {
        let j = 0
        while (j < n) {
            if (haystack[i + j] != needle[j]) break;
            j++;
        }
        if (j == n) return i;
    }
    return -1;
};