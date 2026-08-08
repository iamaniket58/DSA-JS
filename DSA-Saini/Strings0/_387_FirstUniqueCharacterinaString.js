/**
 * @param {string} s
 * @return {number}
 */
//Using Obj- optimized
var firstUniqChar = function (s) {
    let n = s.length;
    let map = {};
    for (let i = 0; i < n; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    for (let i = 0; i < n; i++) {
        if (map[s[i]] == 1) return i;
    }
    return -1;
};

//Using Map
var firstUniqChar = function (s) {
    let n = s.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        map.set(s[i], (map.get(s[i]) ?? 0) + 1);
    }
    for (let i = 0; i < n; i++) {
        if (map.get(s[i]) == 1) return i;
    }
    return -1;
};

//Bruite-Force- Better Version
var firstUniqChar = function (s) {
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let unique = true;
        for (let j = 0; j < n; j++) {
            if (j == i) continue;
            if (s[i] == s[j]) unique = false;
        }
        if (unique) return i;
    }
    return -1;
};

//Bruite-Force- O(n^2)
var firstUniqChar = function (s) {
    let n = s.length;
    for (let i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (j == i) continue;
            if (s[i] == s[j]) break;
        }
        if (j == n) return i;
    }
    return -1;
};