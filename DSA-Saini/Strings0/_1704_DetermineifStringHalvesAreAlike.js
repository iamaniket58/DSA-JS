/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let halflength = s.length / 2;
    let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let countVowel = 0;
    for (let i = 0; i < halflength; i++) {
        if (set.has(s[i])) countVowel++;
    }

    for (let i = halflength; i < s.length; i++) {
        if (set.has(s[i])) countVowel--;
    }
    return countVowel==0;
};

var halvesAreAlike = function (s) {
    let halflength = s.length / 2;
    let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let countVowel1 = 0;
    let countVowel2 = 0;
    for (let i = 0; i < halflength; i++) {
        if (set.has(s[i])) countVowel1++;
        if (set.has(s[i+halflength])) countVowel2++;
    }

    return countVowel1==countVowel2;
};
var halvesAreAlike = function (s) {
    let halflength = s.length / 2;
    let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let countVowel = 0;
    for (let i = 0; i < halflength; i++) {
        if (set.has(s[i])) countVowel++;
        if (set.has(s[i+halflength])) countVowel--;
    }

    return countVowel==0;
};