/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//Best Solution 🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡🫡
var groupAnagrams = function (strs) {
    let obj = {};
    for (s of strs) {
        let freqArr = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            let charCode = s.charCodeAt(i) - 97;
            freqArr[charCode]++
        }
        let key = freqArr.join("#");
        if (!obj[key]) obj[key] = [];
        obj[key].push(s)
    }
    return Object.values(obj);
};

var groupAnagrams = function(strs) {
    let map=new Map();
    for(let i=0;i<strs.length;i++){
        let key=strs[i].split("").sort().join("");
        if(!map.has(key)){
            map.set(key,[])
        }
        map.get(key).push(strs[i]);
    }
    // console.log(map);
    // console.log(map.values())
    return Array.from(map.values());
};
//Same- Just instaed of map Obj is used
var groupAnagrams = function(strs) {
    let obj={};
    for(let i=0;i<strs.length;i++){
        let key=strs[i].split("").sort().join("");
        if(!obj[key]){
            obj[key]=[strs[i]];
        }
        else{
            obj[key].push(strs[i])
        }
    }
    return Array.from(Object.values(obj));
};

//hashSet Solution
var groupAnagrams = function (strs) {
    let obj = {};
    for (let i = 0; i < strs.length; i++) {
        // let key=strs[i].split("").sort().join("");
        let frqArr = new Array(26).fill(0);
        for (let s of strs[i]) {
            let ch=s.charCodeAt(0)-97;
            frqArr[ch]++
        }
        let key="";
        for(let k=0;k<26;k++){
            key+=frqArr
        }
        if (!obj[key]) {
            obj[key] = [strs[i]];
        }
        else {
            obj[key].push(strs[i])
        }
    }
    return Array.from(Object.values(obj));
};
//Not using key- working with FreqArray Only 😂😂
var groupAnagrams = function (strs) {
    let obj = {};
    for (let i = 0; i < strs.length; i++) {
        // let key=strs[i].split("").sort().join("");
        let frqArr = new Array(26).fill(0);
        for (let s of strs[i]) {
            let ch=s.charCodeAt(0)-97;
            frqArr[ch]++
        }
        let     =frqArr;
        // for(let k=0;k<26;k++){
        //     key+=frqArr
        // }
        if (!obj[key]) {
            obj[key] = [strs[i]];
        }
        else {
            obj[key].push(strs[i])
        }
    }
    // console.log(obj)
    return Array.from(Object.values(obj));
};



//It can be ignored as its bruite force
//My Solution during Revision- Too Bruite-Force
var groupAnagrams = function (strs) {
    let ans = [];
    let indexSet = new Set();
    for (let i = 0; i < strs.length; i++) {
        if (indexSet.has(i)) continue;
        let word = strs[i];
        let arr = [word];
        for (let j = i + 1; j < strs.length; j++) {
            if (strs[j].length == word.length) {
                if (isAnagram(strs[j], word)) {
                    arr.push(strs[j]);
                    indexSet.add(j);
                }
            }
        }
        ans.push(arr);
    }
    return ans;
};

let isAnagram = (str1, str2) => {
    let obj = {};
    for (let i = 0; i < str1.length; i++) {
        obj[str1[i]] = (obj[str1[i]] || 0) + 1;
        obj[str2[i]] = (obj[str2[i]] || 0) - 1;
    }
    for (let key in obj) {
        if (obj[key] != 0) return false;
    }
    return true;
}

//------------------Revision2--------------------------------

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 //Using Sorted String as a Key
var groupAnagrams = function (strs) {
    let map = {};
    for (let str of strs) {
        let key = str.split("").sort().join("");
        if (map[key]) {
            map[key].push(str);
        }
        else {
            map[key] = [str];
        }
    }
    let ans = [];
    for (let key in map) {
        ans.push(map[key]);
    }
    return ans;  //  return Object.values(map)
};

//Using Freq Array as key
var groupAnagrams = function (strs) {
    let map = {};
    for (let str of strs) {
        let key = new Array(26).fill(0);
        for(let s of str){
            key[s.charCodeAt(0)-97]++
        }
        if (map[key]) {
            map[key].push(str);
        }
        else {
            map[key] = [str];
        }
    }
    let ans = [];
    for (let key in map) {
        ans.push(map[key]);
    }
    return ans;
};
//Join FreqArrayto form a Key
var groupAnagrams = function (strs) {
    let map = {};
    for (let str of strs) {
        let freqArr = new Array(26).fill(0);
        for(let s of str){
            freqArr[s.charCodeAt(0)-97]++
        }
        let key=freqArr.join("#");
        if (map[key]) {
            map[key].push(str);
        }
        else {
            map[key] = [str];
        }
    }
    let ans = [];
    for (let key in map) {
        ans.push(map[key]);
    }
    return ans;
};