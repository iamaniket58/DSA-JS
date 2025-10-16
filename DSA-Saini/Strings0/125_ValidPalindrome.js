/**
 * @param {string} s
 * @return {boolean}
 */
//Revision- My Solution
var isPalindrome = function (s) {
    let str = "";
    for (let i = 0; i < s.length; i++) {
        if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= '0' && s[i] <= '9')) {
            str += s[i].toLowerCase()
        }
    }
    console.log(str);
    let n = str.length;
    let halfLength = Math.floor(n / 2);
    for (let i = 0; i < halfLength; i++) {
        if (str[i] != str[n - 1 - i]) return false;
    }
    return true;
};
//Creating reverse string in a single pass
var isPalindrome = function (s) {
    let str = "";
    let rev="";
    for (let i = 0; i < s.length; i++) {
        // if ((s[i] >= 'a' && s[i] <= 'z') || (s[i] >= 'A' && s[i] <= 'Z') || (s[i] >= '0' && s[i] <= '9')) {
        if(s[i].match(/[a-zA-Z0-9]/)){
            let val=s[i].toLowerCase();
            str+=val;
            rev=val+rev
        }
    }
    return str==rev;
};

var isPalindrome = function(s) {
    //Make String LowerCase, Remove non alphaNumeric character, and check palindrome
    s=s.toLowerCase();
    let filteredstring='';
    //let reverse='';
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/)){   //if((s[i].charCodeAt()>='a' && s[i].charCodeAt()<='a')||(s[i].charCodeAt()>=0 && s[i].charCodeAt()<=))
            filteredstring+=s[i];
          //  reverse=s[i]+reverse
        }
    }
    //return  filteredstring==reverse
    let left=0;
    let right=filteredstring.length-1;
    while(left<right){
        if(filteredstring[left]!=filteredstring[right]){
            return false
        }
        left++;
        right--;
    }
    return true;   //T-O(n) , S=O(n)
};
//console.log(isPalindrome('race a car'))



//Sirs Method- Using Less Space
var isPalindrome2 = function(s) {
    s=s.toLowerCase();
    let left=0;
    let right=s.length-1;
    while(left<right){
        if(!s[left].match(/[a-z0-9]/)){
            left++;
        }
        else if(!s[right].match(/[a-z0-9]/)){
            right--;
        }
        else if(s[left]==s[right]){
            left++;
            right--;
        }
        else{               //s[left]!=s[right]
            return false;
        }
    }
    return true;
};
//Using less space
var isPalindrome1 = function(s) {
    s=s.toLowerCase();
    let left=0;
    let right=s.length-1;
    while(left<right){
        if(!s[left].match(/[a-z0-9]/)){
            left++;
            continue;
        }
        if(!s[right].match(/[a-z0-9]/)){
            right--;
            continue;
        }
        if(s[left]!=s[right]){
            return false;
        }
        left++;
        right--
    }
    return true;
};
console.log(isPalindrome2('A man, a plan, a canal: Panama'))