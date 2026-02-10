/**
 * @param {string[]} words
 * @return {string[]}
 */
//My Solution- Bruite force- Using Split and Join
var commonChars = function (words) {
    let str = words[0];
    let ans = [];
    for (let s of str) {
        let i = 0
        for (; i < words.length; i++) {
            let comp = words[i].split("");
            let j = 0;
            while (j < comp.length) {
                if (comp[j] == s) {
                    comp[j] = "#";
                    break;
                }
                j++;
            }
            words[i] = comp.join("");
            if (j == comp.length) break;
        }
        if (i == words.length) ans.push(s);
    }
    return ans;
};

var commonChars = function (words) {
    let minFreq = new Array(26).fill(Infinity);
    for (let word of words) {
        let freq = new Array(26).fill(0);
        for (let ch of word) {
            freq[ch.charCodeAt(0) - 97]++;
        }
        for (let i = 0; i < 26; i++) {
            minFreq[i] = Math.min(minFreq[i], freq[i]);
        }
    }
    let result = [];
    for (let i = 0; i < 26; i++) {
        while (minFreq[i] > 0) {
            result.push(String.fromCharCode(i + 97));
            minFreq[i]--;
        }
    }
    return result;
};
console.log(commonChars1(["bella", "label", "roller"]));

//Uisng Map Instead of an array
var commonChars = function (words) {
    let minFreq = {};
    for (let i = 0; i < words[0].length; i++) {
        minFreq[words[0][i]] = (minFreq[words[0][i]] || 0) + 1;
    }
    // console.log(minFreq)
    for (let i = 1; i < words.length; i++) {
        let map = {};
        for (let j = 0; j < words[i].length; j++) {
            map[words[i][j]] = (map[words[i][j]] || 0) + 1;
        }
        // console.log("map",map)
        for (let key in minFreq) {
            if (map[key]) {
                minFreq[key] = Math.min(minFreq[key], map[key]);
            }
            else{
                minFreq[key]=0;
            }

        }
    }
    // console.log(minFreq)
    let result = [];
    for (let key in minFreq) {
        while (minFreq[key] > 0) {
            result.push(key);
            minFreq[key]--;
        }
    }
    return result;
};
