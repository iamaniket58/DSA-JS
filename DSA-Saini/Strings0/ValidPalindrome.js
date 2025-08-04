/**
 * @param {string} s
 * @return {boolean}
 */
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

//Sirs Method
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
console.log(isPalindrome2('A man, a plan, a canal: Panama'))