/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//without Inbuild-Other logic remains same
var strStr1 = function (haystack, needle) {

    let n = haystack.length;
    let m = needle.length;
    for (let i = 0; i < n - m + 1; i++) {
        let j = 0
        for (j = 0; j < m; j++) {
            if (haystack[j + i] != needle[j]) {
                break;
            }
        }
        if (j == m) return i
    }
    return -1;
}
//Revision
var strStr = function (haystack, needle) {
    let n = haystack.length;
    let m = needle.length;
    for (let i = 0; i < n - m + 1; i++) {
        let isSubstring = true;
        for (let j = 0; j < m; j++) {
            if (haystack[j + i] != needle[j]) {
                isSubstring = false;
                break;
            }
        }
        if (isSubstring) return i;
    }
    return -1;
};
//find a window of length of needle and check with needle
var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let subst = haystack.substring(i, needle.length + i)
        if (subst == needle) {
            return i
        }
    }
    return -1;
};

//Revision
var strStr = function (haystack, needle) {
    let index = -1;
    let n = needle.length;
    for (let i = 0; i < haystack.length - n + 1; i++) {
        let str = "";
        for (let j = i; j < i + n; j++) {
            str += haystack[j]
        }
        if(str==needle){
            index=i;
            break;
        }
    }
    return index;
};
console.log(strStr1("sadbutsad", "sad"))