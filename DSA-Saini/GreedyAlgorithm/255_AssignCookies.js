/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    let count = 0;
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            i++;
            j++;
            count++;
        }
        else {
            j++;
        }
    }
    return count;
};

//Or Same Code can be written as
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let i = j = 0;
    while (j < s.length) {
        if (s[j] >= g[i]) {
            i++;
        }
        j++;
    }
    return i;
};
