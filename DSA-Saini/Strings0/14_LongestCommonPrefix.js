/**
 * @param {string[]} strs
 * @return {string}
 */
//Revision- My Solution- ]
var longestCommonPrefix = function (strs) {
    let common = strs[0];
    for (let i = 1; i < strs.length; i++) {
        let str = strs[i];
        let match = "";
        for (let j = 0; j < str.length; j++) {
            if (str[j] == common[j]) {
                match += str[j];
            }
            else {

                break;
            }
        }
        common = match;
    }
    return common;
};


console.log(longestCommonPrefix2(["flower","flow","flight"]))
//Sir's Solution- Best
var longestCommonPrefix = function(strs) {
   for(let i=0;i<strs[0].length;i++){
        let char=strs[0][i];
        //Traversing over Array of strings and comparing each elements
        for(let j=1;j<strs.length;j++){
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].slice(0,i)
            }
        }
   }
   return strs[0]
};


//Not so good Approach
var longestCommonPrefix2 = function(strs) {
    let array=strs[0].split("");
    let maxT=0
    for(let i=1;i<strs.length;i++){
        if(strs[i]=="") return ""; // ["abab","aba",""]
        for(let j=0;j<strs[i].length;j++){
            maxT=j
            if(strs[i][j]!=array[j]){
                array.length=j;
            }
        }
        //This is written to pass the below test case
        if(maxT+1<array.length){ //["ab", "a"]
            array.length=maxT+1;
        }
    }
    return array.join('');
};
