/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

//My Solution
var characterReplacement = function (s, k) {
    let i = j = 0;
    let map = {};
    let maxLength = 0;
    let isInsert = true;
    while (j < s.length) {
        if (isInsert) map[s[j]] = (map[s[j]] || 0) + 1;

        let totalCount = Object.values(map).reduce((a, b) => a + b, 0);
        let maxCount = Object.values(map).reduce((a, b) => a > b ? a : b);
        if (totalCount - maxCount <= k) {
            maxLength = (j - i + 1) > maxLength ? (j - i + 1) : maxLength;
            j++;
            isInsert = true

        }
        else {
            map[s[i]]--;
            i++;
            isInsert = false
        }
    }
    return maxLength;
};


//Sirs Solution
var characterReplacement1 = function (s, k) {
    let i = j = 0;
    let maxLength = 0;
    let map = {}
    map[s[i]] = 1
    while (j < s.length) {
        if (isWindowValid1(map, k)) {
            maxLength = maxLength > (j - i + 1) ? maxLength : (j - i + 1);
            j++;
            map[s[j]] = (map[s[j]] || 0) + 1;
        }
        else {
            map[s[i]]--;
            i++;
        }
    }
    return maxLength;
}
var isWindowValid1 = (map, k) => {
    let maxCount = 0;
    let totalCount = 0;
    for (let i = 0; i < 26; i++) {
        let char = String.fromCharCode(i + 65)
        if (map[char] != undefined) {
            totalCount += map[char];
            maxCount = maxCount > map[char] ? maxCount : map[char]
        }
    }
    return (totalCount - maxCount <= k)
}

var characterReplacement2 = function (s, k) {
    let i = j = 0;
    let maxLength = 0;
    let arr =  Array(26).fill(0)
    let p=s.charCodeAt(i)-65
    arr[p]=1
    while (j < s.length) {
        if (isWindowValid2(arr, k)) {
            maxLength = maxLength > (j - i + 1) ? maxLength : (j - i + 1);
            j++;
            let x = s.charCodeAt(j) - 65
            arr[x]++
        }
        else {
            let x = s.charCodeAt(i) - 65
            arr[x]--
            i++;
        }
    }
    return maxLength;
}
var isWindowValid2 = (arr, k) => {
    let maxCount = 0;
    let totalCount = 0;
    for (let i = 0; i < 26; i++) {
        totalCount+=arr[i];
        maxCount = maxCount > arr[i] ? maxCount : arr[i]

    }
    return (totalCount - maxCount <= k)
}
console.log(characterReplacement2("AABEAFAABEAFA", 2))