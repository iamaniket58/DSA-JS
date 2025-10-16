
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
            let index=s[j].charCodeAt()-97;//-'a'.charCodeAt();
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