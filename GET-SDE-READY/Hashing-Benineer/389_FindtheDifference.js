/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = (obj[s[i]] || 0) + 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (obj[t[i]]) {
            obj[t[i]]--;
            if (obj[t[i]] < 0) return t[i];
        }
        else {
            return t[i];
        }
    }
};