/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Revision
var isSubsequence = function (s, t) {
    let i = 0;
    for (let x = 0; x < t.length; x++) {
        if (t[x] == s[i]) {
            i++;
        }
    }
    return i == s.length;

};


//2 pointers Solution
var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] == t[j]) {
            i++;
            j++;
        }
        else {
            j++
        }
    }
    return i == s.length
};
console.log(isSubsequence("abc", "ahbgdc"))

var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] == t[j]) {
            i++;
        }
        j++
    }
    return i == s.length
};

//TC-O(n^2) solution
var isSubsequence = function (s, t) {
    let i = j = 0;
    while (i < s.length) {
        let flag = false;
        while (j < t.length) {
            if (s[i] == t[j]) {
                flag = true;
                j++;
                break;
            }
            j++;
        }
        if (!flag) return false;
        i++;
    }
    return true;
};

var isSubsequence = function (s, t) {
    let j = 0;
    for (let i = 0; i < t.length; i++) {
        if (j == s.length) return true;
        if (s[j] == t[i]) j++;
    }
    return j == s.length ? true : false;
};