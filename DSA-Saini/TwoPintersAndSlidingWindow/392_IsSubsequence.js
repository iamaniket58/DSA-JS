/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Revision
var isSubsequence = function (s, t) {
    let i = 0;
    for(let x=0;x<t.length;x++){
        if(t[x]==s[i]){
            i++;
        }
    }
    return i==s.length;

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