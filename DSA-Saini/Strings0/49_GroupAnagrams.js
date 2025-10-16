/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//Sir's Solution- Better than Others
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
    return [...Object.values(obj)];
    // return Array.from(Object.values(obj));
};


//My SOlution- Not Optimized
var groupAnagrams = function (strs) {
    let arr = [];
    for (let x = 0; x < strs.length; x++) {
        let strArray = strs[x].split('');

        //Bubble Sort
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

//My SOlution- Optimized way
var groupAnagrams1 = function (strs) {
    let obj = {};
    for (let x = 0; x < strs.length; x++) {
        let strArray = strs[x].split('');

        //Bubble Sort
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


console.log(groupAnagrams3(["eat", "tea", "tan", "ate", "nat", "bat"]))
