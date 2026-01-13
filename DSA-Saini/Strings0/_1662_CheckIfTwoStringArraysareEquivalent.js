/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    let s1 = '';
    let s2 = '';
    for (let i = 0; i < word1.length; i++) {
        s1 += word1[i];
    }
    for (let i = 0; i < word2.length; i++) {
        s2 += word2[i];
    }
    return s1 == s2;
};

var arrayStringsAreEqual = function (word1, word2) {
    let i = j = p1 = p2 = 0;
    while (p1 < word1.length && p2 < word2.length) {
        if (word1[p1][i] != word2[p2][j]) return false;
        i++;
        j++;

        if (i == word1[p1].length) {
            p1++;
            i = 0;
        }
        if (j == word2[p2].length) {
            p2++;
            j = 0;
        }

    }
    return p1==word1.length && p2==word2.length;
};