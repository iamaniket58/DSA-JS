/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//More Optimized- Do not have to create substr array gain and again
//Make S1 array and window of S2 array initially then just manipulate s2 array and proceed
var checkInclusion2 = function (s1, s2) {
    let hashS = Array(26).fill(0);
    let hashW = Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        let s1A = s1.charCodeAt(i) - 97;
        let s2A = s2.charCodeAt(i) - 97;
        hashS[s1A]++
        hashW[s2A]++
    }
    let i = 0;
    let j = s1.length - 1;
    while (j < s2.length) {
        if (isHashSame(hashS, hashW)) {
            return true
        }
        else {
            hashW[s2.charCodeAt(i)-97]--
            i++;
            j++;
            hashW[s2.charCodeAt(j) - 97]++
        }
    }

};
var isHashSame = (hashS, hashW) => {
    for (let i = 0; i < hashS.length; i++) {
        if (hashS[i] != hashW[i]) return false;
    }
    return true
};

console.log(checkInclusion2("ab", "eidbaooo"))

//String in Array and comparing
var checkInclusion1 = function (s1, s2) {
    let hashS1 = Array(26).fill(0)
    for (let i = 0; i < s1.length; i++) {
        let x = s1.charCodeAt(i) - 97
        hashS1[x]++
    }
    for (let i = 0; i < s2.length - s1.length + 1; i++) {
        let j = i + s1.length
        let substr = s2.substring(i, j);
        let hashS2 = Array(26).fill(0);
        for (let k = 0; k < substr.length; k++) {
            let p = substr.charCodeAt(k) - 97
            hashS2[p]++
        }
        if (JSON.stringify(hashS1) == JSON.stringify(hashS2)) return true

    }
    return false
};

//Directly Sorting and comparing
var checkInclusion = function (s1, s2) {

    for (let i = 0; i < s2.length - s1.length + 1; i++) {
        let j = i + s1.length
        let substr = s2.substring(i, j);
        if (substr.split('').sort().join('') == s1.split('').sort().join('')) {
            return true
        }
    }
    return false
};