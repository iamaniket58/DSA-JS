/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Here i am storing the mapping of s and t. Then Replacing s with t and storing in str, then matching with t and returning
//1 case handling- even values in object should not be duplicated, for that i used Set to compare
var isIsomorphic = function(s, t) {
    let obj={};
    let set=new Set();
    if(s.length!=t.length)return false;
    for(let i=0;i<s.length;i++){
        if(!obj[s[i]]){
            obj[s[i]]=t[i];
            if(set.has(t[i]))return false;
            set.add(t[i]);
        }
        else{
            if(obj[s[i]] !=t[i])return false;
        }
    }
    // let str=''
    // for(let i=0;i<s.length;i++){
    //     str+=obj[s[i]]
    // }
    // return str==t

    //Instead of matching we can return true, becz if its not isomorphic it will be handled in that for loop
    return true;
};

//Solution 2 using 2 map
var isIsomorphic1 = function(s, t) {
    let mapStoT={};
    let mapTtoS={};
    for(let i=0;i<s.length;i++){
        if(!mapStoT[s[i]] && !mapTtoS[t[i]]){
            mapStoT[s[i]]=t[i];
            mapTtoS[t[i]]=s[i];
        }
        else if(s[i]!=mapTtoS[t[i]])return false;
        else if(t[i]!=mapStoT[s[i]])return false
    }
}
console.log(isIsomorphic1("paper","title"))