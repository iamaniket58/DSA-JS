/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
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


var longestCommonPrefix = function(strs) {
   for(let i=0;i<strs[0].length;i++){
        let char=strs[0][i];
        //Traversing over Array of strings and comparing each elements
        for(let j=1;j<strs.length;j++){
            if (i >= strs[j].length || strs[j][i] !== char) {
                return str[0].slice(0,i)
            }
        }
   }
   return str[0]
};
console.log(longestCommonPrefix(["flower","flow","flight"]))