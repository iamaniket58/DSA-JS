var maxFreqSum1 = function (s) {
    let set = new Set(['a', 'e', 'i', 'o', 'u']);
    //let map=new Map();
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] = (obj[s[i]] || 0) + 1;
    }
    let maxFreqVowel = 0;
    let maxFreqCons = 0;
    for (let key in obj) {
        if (set.has(key)) {
            if (obj[key] > maxFreqVowel) maxFreqVowel = obj[key];
        }
        else {
            if (obj[key] > maxFreqCons) maxFreqCons = obj[key]
        }
    }
    return maxFreqCons + maxFreqVowel
};

var maxFreqSum = function (s) {
    let array = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) - 97;
        array[index]++;
    }
    
    let maxVowel = 0;
    let maxConst = 0;
    for (let i = 0; i < 26; i++) {
        if (i == 0 || i == 4 || i == 8 || i == 14 || i == 20) {
            if (array[i] > maxVowel) maxVowel = array[i]
        }
        else {
            if (array[i] > maxConst) maxConst = array[i]
        }
    }
    return maxVowel + maxConst;
};

//Revision- Bruite Force
var maxFreqSum = function (s) {
    let vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowelObj = {};
    let ConsonentObj = {};
    for (let i = 0; i < s.length; i++) {
        if (vowelSet.has(s[i])) {
            vowelObj[s[i]] = (vowelObj[s[i]] || 0) + 1
        }
        else {
            ConsonentObj[s[i]] = (ConsonentObj[s[i]] || 0) + 1
        }
    }
    console.log(vowelObj, ConsonentObj)
    let maxVowel = 0;
    for (let key in vowelObj) {
        if (vowelObj[key] > maxVowel) maxVowel = vowelObj[key]
    }
    let maxConsonent = 0;
    for (let key in ConsonentObj) {
        if (ConsonentObj[key] > maxConsonent) maxConsonent = ConsonentObj[key]
    }
    return maxVowel + maxConsonent;

};
//This is my Solution
var maxFreqSum = function (s) {
    let array = ["a", "e", "i", "o", "u"]; //let set=new Set(["a","e","i","o","u"]);
    let vow = {};
    let cons = {};
    for (let i = 0; i < s.length; i++) {
        if (array.includes(s[i])) { //set.has(s[i])
            if (vow[s[i]] != undefined) {
                vow[s[i]] = vow[s[i]] + 1
            }
            else {
                vow[s[i]] = 1
            }

        }
        else {
            if (cons[s[i]] != undefined) {
                cons[s[i]] = cons[s[i]] + 1
            }
            else {
                cons[s[i]] = 1
            }

        }
    }
    let maxVowFreq = 0;
    let maxConsFreq = 0;

    for (let x in vow) {
        if (vow[x] > maxVowFreq) maxVowFreq = vow[x]
    }
    for (let x in cons) {
        if (cons[x] > maxConsFreq) maxConsFreq = cons[x]
    }
    return maxVowFreq + maxConsFreq


};


console.log(maxFreqSum1("successes"))