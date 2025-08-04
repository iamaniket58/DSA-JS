/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    objs={};
    objt={};
    //I can use 1 for loop as well
    for(let i=0;i<s.length;i++){
        let str=s[i];
        objs[str]=(objs[str] || 0)+1
    }
    for(let i=0;i<t.length;i++){
        let str=t[i];
        objt[str]=(objt[str] || 0)+1
    }
    if(Object.keys(objs).length != Object.keys(objt).length)return false;
    for(key in objs){
        if(objs[key]!=objt[key])return false
    }
    return true;
};

//More Optimized
var isAnagram1 = function(s, t) {
    if(s.length!=t.length)return false;
    objs={};
    objt={};
    //I can use 1 for loop as well
    for(let i=0;i<s.length;i++){
        objs[s[i]]=(objs[s[i]] || 0)+1;
        objt[str]=(objt[str] || 0)+1
    }

    if(Object.keys(objs).length != Object.keys(objt).length)return false;
    for(key in objs){
        if(objs[key]!=objt[key])return false
    }
    return true;
};

//More Optimized
var isAnagram2 = function(s, t) {
    if(s.length!=t.length)return false;
    obj={};
    //I can use 1 for loop as well
    for(let i=0;i<s.length;i++){
        obj[s[i]]=(obj[s[i]] || 0)+1;
        obj[t[i]]=(obj[t[i]] || 0)-1
    }

    //if(Object.keys(objs).length != Object.keys(objt).length)return false;
    for(key in obj){
        if(obj[key]!=0)return false
    }
    return true;
};

//Same Solution by sir-not that optimzed
var isAnagram2 = function(s, t) {
    if(s.length!=t.length)return false;
    let map={};
    for(let i=0;i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=1
        }
        else{
            map[s[i]]++
        }
    }
    for(let i=0;i<t.length;i++){
        if(!map[t[i]] || map[i[i]]<0){
            return false
        }
        else{
            map[t[i]]--
        }
    }
};