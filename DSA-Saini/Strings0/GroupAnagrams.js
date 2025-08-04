var groupAnagrams = function (strs) {
    let arr = [];
    for (let x = 0; x < strs.length; x++) {
        let strArray = strs[x].split('');
        for (let i = 0; i < strArray.length; i++) {
            for (let j = 0; j < strArray.length - 1 - i; j++) {
                if (strArray[j] > strArray[j + 1]) {
                    let temp = strArray[j];
                    strArray[j] = strArray[j + 1];
                    strArray[j + 1] = temp;
                }
            }
        }
        arr[x] = strArray.join('')
    }
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = [strs[i]]
        }
        else {
            obj[arr[i]].push(strs[i])
        }
    }
    let ans = []
    for (key in obj) {
        ans.push(obj[key])
    }
    return ans;
};

//Optimized way
var groupAnagrams1 = function (strs) {
    let obj = {};
    for (let x = 0; x < strs.length; x++) {
        let strArray = strs[x].split('');
        for (let i = 0; i < strArray.length; i++) {
            for (let j = 0; j < strArray.length - 1 - i; j++) {
                if (strArray[j] > strArray[j + 1]) {
                    let temp = strArray[j];
                    strArray[j] = strArray[j + 1];
                    strArray[j + 1] = temp;
                }
            }
        }
        let sortedString = strArray.join('')
        if (!obj[sortedString]) {
            obj[sortedString] = [strs[x]];
        }
        else {
            obj[sortedString].push(strs[x])
        }
    }
    let x = Object.values(obj);
    return [Object.values(obj)]

};


//Solve using HashSet
var groupAnagrams2 = function (strs) {
    let obj = {};
    //Using Key Generation
    for (let i = 0; i < strs.length; i++) {
        s = strs[i];
        let freqArr = Array(26).fill(0);
        for (let j = 0; j < s.length; j++) {
            let index = s[j].charCodeAt() - 97;//'a'.charCodeAt();
            freqArr[index]++
        }
        if (!obj[freqArr]) {
            obj[freqArr] = [s]
        }
        else {
            obj[freqArr].push(s)
        }
    }
    return Object.values(obj)
}

//HAsset Optimized
var groupAnagrams3 = function(strs) {

    let obj={};
    //Using Key Generation
    for(let i=0;i<strs.length;i++){
        s=strs[i];
        let freqArr=new Array();
        for(let j=0;j<s.length;j++){
            let index=s[j].charCodeAt()-97;//'a'.charCodeAt();
            if(!freqArr[index])freqArr[index]=0
            freqArr[index]++
        }
        if(!obj[freqArr]){
            obj[freqArr]=[s]
        }
        else{
            obj[freqArr].push(s)
        }
    }
    return Object.values(obj)}

//Sirs Solution Hashset+Key- amybe Wrong
var groupAnagrams4 = function (strs) {
    let obj = {};
    //Using Key Generation
    for (let i = 0; i < strs.length; i++) {
        s = strs[i];
        let freqArr = Array(26).fill(0);
        for (let j = 0; j < s.length; j++) {
            let index = s[j].charCodeAt() - 97;//'a'.charCodeAt();
            freqArr[index]++
        }
        let key="";
        for(let k=0;k<26;k++){
            key=key+String.fromCharCode(k+97)+freqArr[k]

        }
        if (!obj[key]) {
            obj[key] = [s]
        }
        else {
            obj[key].push(s)
        }
    }
    return Object.values(obj)
}
console.log(groupAnagrams3(["eat", "tea", "tan", "ate", "nat", "bat"]))
