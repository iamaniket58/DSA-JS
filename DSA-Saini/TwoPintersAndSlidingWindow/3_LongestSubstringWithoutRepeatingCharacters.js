/**
 * @param {string} s
 * @return {number}
 */
//sliding Window
var lengthOfLongestSubstring2 = function (s) {
    //using sliding Window
    let i = 0;
    let j = 0;
    let map = {};
    let maxL = 0
    while (j < s.length) {
        if (map[s[j]] != undefined && map[s[j]] >= i) {
            i = map[s[j]] + 1;
            map[s[j]] = j;
            //maxL=(j-i-1)>maxL?(j-i-1):maxL;
        }
        else {
            map[s[j]] = j
            maxL = (j - i + 1) > maxL ? (j - i + 1) : maxL;
        }
        j++;
    }
    return maxL
}
console.log(lengthOfLongestSubstring2("abcabcbb"))

//Slight Modification
var lengthOfLongestSubstring2 = function (s) {
    //using sliding Window
    let i = 0;
    let j = 0;
    let map = {};
    let maxL = 0
    while (j < s.length) {
        if (map[s[j]] != undefined && map[s[j]] >= i) {
            i = map[s[j]] + 1;
        }
        map[s[j]] = j
        maxL = (j - i + 1) > maxL ? (j - i + 1) : maxL;
        j++;
    }
    return maxL
}
var lengthOfLongestSubstring1 = function (s) {
    if (s.length == 1) return 1;
    let str = ""
    let longestLength = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (str.length > longestLength) longestLength = str.length;
        let set = new Set();
        str = "";
        set.add(s[i]);
        str += s[i]
        for (let j = i + 1; j < s.length; j++) {
            if (!set.has(s[j])) {
                set.add(s[j]);
                str += s[j]
            }
            else {
                if (str.length > longestLength) longestLength = str.length;
                break;
            }
        }
    }
    return longestLength > str.length ? longestLength : str.length; //edge case "abc"
};

//Thi will not work for all test cases
var lengthOfLongestSubstring = function (s) {
    let str = "";
    let longestStr = "";
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            set.add(s[i]);
            str += s[i]
        }
        else {
            if (str.length > longestStr.length) longestStr = str;
            str = "";
            set.clear();
            i = i - 1
        }
    }
    return longestStr.length;
};
//console.log(lengthOfLongestSubstring("dvdf"))


// console.log(lengthOfLongestSubstring1("bwf"))