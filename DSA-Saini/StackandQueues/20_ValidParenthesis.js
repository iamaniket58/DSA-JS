/**
 * @param {string} s
 * @return {boolean}
 */
//Revision
var isValid = function (s) {
    let map = { '(': ')', '{': '}', '[': ']' };
    let stack = [];
    for (let st of s) {
        if (map[st]) {
            stack.push(st)
        }
        else {
            if (map[stack.pop()] != st) {
                return false;
            }
        }
    }
    return stack.length==0; //This will handle a case where there is no close bracket for the open one Ex: s="["
};

var isValid = function(s) {
    let obj={'(':')','{':'}','[':']'}
    let stack=[];
    for(let i=0;i<s.length;i++){
        //if(Object.keys(obj).includes(s[i])){  --These 2 are also correct and way to check open braces
        //if(s[i]=='(' || s[i]=='{' || s[i]=='['){
        if(obj[s[i]]){
            stack.push(s[i])
        }
        else{
            let poped=stack.pop();
            if(s[i] !=obj[poped]){
                return false;
            }
        }
    }
    return stack.length==0;
};

//Optimize it
var isValid = function(s) {
    let obj={'(':')','{':'}','[':']'}
    let stack=[];
    for(let i=0;i<s.length;i++){
        //if(Object.keys(obj).includes(s[i])){  --These 2 are also correct and way to check open braces
        //if(s[i]=='(' || s[i]=='{' || s[i]=='['){
        if(obj[s[i]]){
            stack.push(s[i])
        }
        else{
            let poped=stack.pop();
            if(!poped||s[i] !=obj[poped]){
                return false;
            }
        }
    }
    return stack.length==0;
};


//There is 1 lengthy solution without using Obj/Map
var isValid = function(s) {
    let stack=[];
    for(let i=0;i<s.length;i++){
        if(s[i]=='(' || s[i]=='{' || s[i]=='['){  //--These 2 are also correct and way to check open braces
            stack.push(s[i])
        }
        else{
            let poped=stack.pop();
            if(!poped || (poped=='{' && s[i]!='}') || (poped=='(' && s[i]!=')') || (poped=='[' && s[i]!=']')){
                return false;
            }
        }
    }
    return stack.length==0;
};

//Revision
var isValid = function (s) {
    let obj = { '(': ')', '{': '}', '[': ']' };
    let stack = [];
    for (let st of s) {
        if (st in obj) {
            stack.push(st);
        }
        else {
            let elem = stack.pop();
            if (!elem || obj[elem] != st) return false;
        }
    }
    return stack.length == 0;
};
